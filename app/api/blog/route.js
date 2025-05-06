import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

export const GET = async () => {
  try {
    await connectToDB();

    const blogs = await Blog.find({}).populate("creator");

    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response("Failed to fetch blogs", { status: 500 });
  }
};
