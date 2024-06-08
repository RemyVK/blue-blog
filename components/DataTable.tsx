"use client";

import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import PageErrorState from "./PageErrorState";
import PageLoadingState from "./PageLoadingState";
import NoDataPlaceHolder from "./NoDataPlaceholder";
import BlogItem from "./BlogItem";

export default function DataTable() {
  const { blogs, loading, error } = useContext(PostContext);

  if (loading) {
    return <PageLoadingState />;
  }

  if (error) {
    return <PageErrorState />;
  }

  return (
    <>
      {Object.keys(blogs).length === 0 ? (
        <NoDataPlaceHolder />
      ) : (
        <ul className="divide-y divide-gray-200 max-w-xl mx-auto">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </ul>
      )}
    </>
  );
}
