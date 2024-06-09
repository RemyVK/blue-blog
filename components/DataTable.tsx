"use client";

import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import PageErrorState from "./PageErrorState";
import PageLoadingState from "./PageLoadingState";
import NoDataPlaceHolder from "./NoDataPlaceholder";
import AllBlogItem from "./AllBlogItem";

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
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <AllBlogItem key={blog.id} blog={blog} />
          ))}
        </ul>
      )}
    </>
  );
}
