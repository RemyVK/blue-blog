"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { PostContext } from "../../../context/PostsContext";
import { Blog } from "../../../context/PostsContext";

export default function Post() {
  const { blogs } = useContext(PostContext);
  const { id } = useParams();
  const post = blogs.find((blog: Blog) => blog.id === Number(id));
  return (
    <>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}
