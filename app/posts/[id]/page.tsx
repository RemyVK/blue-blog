"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { PostContext } from "../../../context/PostsContext";
import { Blog } from "../../../context/PostsContext";
import NoDataPlaceHolder from "../../../components/NoDataPlaceholder";
import SingleBlogItem from "../../../components/SingleBlogItem";

export default function Post() {
  const { blogs } = useContext(PostContext);
  const { id } = useParams();
  const selectedBlog: Blog | undefined = blogs.find(
    (blog: Blog) => blog.id === Number(id),
  );

  return (
    <>
      {selectedBlog ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <SingleBlogItem blog={selectedBlog} />
        </div>
      ) : (
        <NoDataPlaceHolder />
      )}
    </>
  );
}
