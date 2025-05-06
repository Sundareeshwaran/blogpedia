import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

// GET (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const { id } = await params;
    const blog = await Blog.findById(id).populate("creator");

    if (!blog) return new Response("Blog not found.", { status: 404 });

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all blogs.", { status: 500 });
  }
};

// PATCH (update)
export const PATCH = async (request, { params }) => {
  const { title, blog, tag } = await request.json();

  try {
    await connectToDB();
    const { id } = await params;

    const existingBlog = await Blog.findById(id);

    if (!existingBlog) return new Response("Blog not found.", { status: 404 });

    existingBlog.title = title;
    existingBlog.blog = blog;
    existingBlog.tag = tag;

    await existingBlog.save();

    return new Response(JSON.stringify(existingBlog), { status: 201 });
  } catch (error) {
    return new Response("Failed to update the blog.", { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    const { id } = await params;
    await Blog.findByIdAndDelete(id);
    return new Response("Blog deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete blogs.", { status: 500 });
  }
};
