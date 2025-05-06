import React from "react";
import Link from "@node_modules/next/link";
import { useSession } from "@node_modules/next-auth/react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const { data: session } = useSession();
  return (
    <section className="w-full max-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Blog's</span>
      </h1>
      <p className="desc text-left max-w-2xl">
        {type} and share amazing blogs with the world, and let your imagination
        run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <h3 className="font-semibold text-base text-sb-950">
            Title{" "}
            <span className="text-sb-950/50 text-sm">
              - (give a best and suitable title)
            </span>
          </h3>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Give a suitable title"
            required
            className="form_input"
          ></input>
        </label>
        <label>
          <h3 className="font-semibold text-base text-sb-950">
            Blog{" "}
            <span className="text-sb-950/50 text-sm">
              - (make your own blog for future developers)
            </span>
          </h3>
          <textarea
            value={post.blog}
            onChange={(e) => setPost({ ...post, blog: e.target.value })}
            placeholder="Create your own Blog..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <h3 className="font-semibold text-base text-sb-950">
            Tag Line{" "}
            <span className="text-sb-950/50 text-sm">
              - (give a best and suitable tagline)
            </span>
          </h3>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Give a suitable tagline with '# separate'"
            required
            className="form_input"
          ></input>
        </label>
        <div className="flex-end   mx-3 mb-5 gap-4 font-semibold">
          <Link href="/" className="text-gray-500 text-sm" prefetch={true}>
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-sb-500 rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
