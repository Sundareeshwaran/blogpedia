"use client";

import { use, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const unwrappedParams = use(params); // ✅ unwrap the async params
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${unwrappedParams.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };

    if (unwrappedParams?.id) fetchPosts();
  }, [unwrappedParams?.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional blogs and be inspired by the power of their imagination.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
