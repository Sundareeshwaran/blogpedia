"use client";

import React, { useState, useEffect } from "react";
import Image from "@node_modules/next/image";
import BlogCard from "./BlogCard";

const BlogCardList = ({ data, handleTagClick }) => {
  return (
    <div className="my-16 blog_layout">
      {data.length > 0 ? (
        data.map((post) => (
          <BlogCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
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
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) => regex.test(item.title) || regex.test(item.tag)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // Debounce search input to reduce unnecessary calls
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Set loading state to true while fetching data
      const response = await fetch("/api/blog");
      const data = await response.json();
      setAllPosts(data);
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchBlogs();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a title"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* Show loading state when data is being fetched */}
      {loading ? (
        <Image
          src="/assets/icons/loading.gif"
          alt="loading"
          width={150}
          height={150}
          loading="lazy"
          unoptimized
        />
      ) : (
        <BlogCardList
          data={searchText ? searchedResults : allPosts}
          handleTagClick={handleTagClick}
        />
      )}
    </section>
  );
};

export default Feed;
