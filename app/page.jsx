import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Unlock the Future of Development. <br className="max-md:hidden" />
        <span className="blue_gradient underline md:decoration-[8px] decoration-sb-500 text-center">
          AI | Full Stack | MERN
        </span>
      </h1>
      <p className="desc text-center">
        Blogpedia is a community-driven platform for developers passionate about
        AI, Full Stack, and MERN technologies. Join us to learn, share, and
        grow.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
