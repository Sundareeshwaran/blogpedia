import { NextResponse } from "@node_modules/next/server";
import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();
    const { id } = await params;
    const { userId } = await req.json();
    const blog = await Blog.findById(id);

    if (!blog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    // Prevent duplicate likes
    if (blog.likedBy.includes(userId)) {
      return new NextResponse("Already liked", { status: 400 });
    }

    blog.likes += 1;
    blog.likedBy.push(userId);

    await blog.save();

    return NextResponse.json({ likes: blog.likes });
  } catch (error) {
    console.error("Like error:", error);
    return new NextResponse("Failed to like the blog", { status: 500 });
  }
};
