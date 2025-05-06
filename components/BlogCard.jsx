"use client";

import React, { useState } from "react";
import Image from "@node_modules/next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const BlogCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");
  const [likes, setLikes] = useState(post.likes || 0);
  const [liked, setLiked] = useState(
    Array.isArray(post.likedBy) && session?.user?.id
      ? post.likedBy.includes(session.user.id)
      : false
  );

  const handleCopy = () => {
    setCopied(post.blog);
    navigator.clipboard.writeText(post.blog);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleProfileClick = () => {
    if (post.creator._id === session?.user?.id) return router.push("/profile");
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleLike = async (postId) => {
    if (!session?.user?.id) {
      alert("Please sign in to like this post.");
      return;
    }

    try {
      const response = await fetch(`/api/blog/${postId}/like`, {
        method: "PATCH",
        body: JSON.stringify({ userId: session.user.id }),
      });

      if (!response.ok) {
        const message = await response.text();
        console.warn("Like error:", message);
        return;
      }

      const data = await response.json();
      setLiked(true);
      setLikes(data.likes);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <div className="blog_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex overflow-x-hidden justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt="user profile"
            width={40}
            height={40}
            className="rounded-full object-contain"
            loading="lazy"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-sb-950">
              {post.creator.username}
            </h1>
            <h3 className="font-inter text-sm text-sb-950/60">
              {post.creator.email}
            </h3>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.blog
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.blog ? "Copied" : "Copy to clipboard"}
            width={12}
            height={12}
            loading="lazy"
          />
        </div>
      </div>

      <h3 className="mt-2 text-lg font-semibold text-sb-950">{post.title}</h3>
      <p className="my-2 text-sm text-sb-950/70">{post.blog}</p>
      <p
        className="text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      {session?.user?.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-between">
          <div className="flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm black_btn cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
            <div className="cursor-pointer bg-sb-500 rounded-2xl py-1 px-4">
              <Image
                src="/assets/icons/edit.svg"
                alt="Edit"
                width={25}
                height={25}
                onClick={handleEdit}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-center mt-2.5 gap-2">
            <Image
              src={
                liked
                  ? "/assets/icons/like-red.svg"
                  : "/assets/icons/like-blue.svg"
              }
              alt={liked ? "Liked" : "Like"}
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={() => handleLike(post._id)}
              loading="lazy"
            />
            <span className="text-sm text-sb-950/70">{likes}</span>
          </div>
        </div>
      )}

      {(pathName === "/" ||
        (pathName.startsWith("/profile") &&
          session?.user?.id !== post.creator._id)) && (
        <div className="mt-4 flex-between">
          <button
            type="button"
            className="black_btn cursor-pointer"
            onClick={() => router.push(`/blog/${post._id}`)}
          >
            Read More
          </button>

          <div className="flex items-center gap-2">
            <Image
              src={
                liked
                  ? "/assets/icons/like-red.svg"
                  : "/assets/icons/like-blue.svg"
              }
              alt={liked ? "Liked" : "Like"}
              width={25}
              height={25}
              className="cursor-pointer"
              loading="lazy"
              onClick={() => handleLike(post._id)}
            />
            <span className="text-sm text-sb-950/70">{likes}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
