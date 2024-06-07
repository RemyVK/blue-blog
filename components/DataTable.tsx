"use client";
import { useContext } from "react";
import { PostContext, Blog } from "../context/PostsContext";

export default function DataTable() {
  const { blogs, loading, error } = useContext(PostContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {blogs.map((blog: Blog) => (
        <li key={blog.id}>
          {blog.id} {""}
          {blog.userId}
          {blog.title}
          {blog.body}
        </li>
      ))}
    </ul>
  );
}
