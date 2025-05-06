import React from "react";
import Image from "@node_modules/next/image";
import BlogCard from "./BlogCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left overflow-clip">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 blog_layout">
        {data.length > 0 ? (
          data.map((post) => (
            <BlogCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-32">
            <Image
              src="/assets/images/nodata.png"
              alt="no-data-found"
              width={125}
              height={125}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
