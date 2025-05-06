import Link from "@node_modules/next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${id}`);
  const post = await res.json();

  return {
    title: post?.title,
    desc: post?.tags,
  };
}

const BlogDetailPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${id}`,
    {
      cache: "no-store",
    }
  );
  const blog = await res.json();

  if (!res.ok) {
    return <div className="text-red-500 p-4">Failed to load blog.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Back Button */}
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sb-950 hover:text-sb-700 mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </Link>

      {/* Blog Content */}
      <h1 className="text-3xl font-bold mb-2 text-sb-950">{blog.title}</h1>
      <p className="text-sb-500 text-sm mb-4">#{blog.tag}</p>
      <div className="text-md text-sb-950/90 whitespace-pre-line">
        {blog.blog}
      </div>
    </div>
  );
};

export default BlogDetailPage;
