import React, { Suspense } from "react";
import EditBlog from "./EditBlog";

const page = () => {
  return (
    <Suspense>
      <EditBlog />
    </Suspense>
  );
};

export default page;
