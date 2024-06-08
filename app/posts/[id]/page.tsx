"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { PostContext } from "../../../context/PostsContext";
import { Blog } from "../../../context/PostsContext";
import NoDataPlaceHolder from "../../../components/NoDataPlaceholder";

export default function Post() {
  const { blogs } = useContext(PostContext);
  const { id } = useParams();
  const selectedBlog: Blog | undefined = blogs.find(
    (blog: Blog) => blog.id === Number(id),
  );

  return (
    <>
      {selectedBlog ? (
        <div>
          <h1>{selectedBlog.title}</h1>
          <p>{selectedBlog.body}</p>
        </div>
      ) : (
        <NoDataPlaceHolder />
      )}
    </>
  );
}
