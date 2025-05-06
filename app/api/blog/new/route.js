import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

export const POST = async (req) => {
  const { userId, title, blog, tag } = await req.json();

  try {
    await connectToDB();
    const newBlog = new Blog({
      creator: userId,
      title,
      blog,
      tag,
    });

    await newBlog.save();

    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new blog", { status: 500 });
  }
};
