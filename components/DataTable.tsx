"use client";

import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import { useRouter } from "next/navigation";

export default function DataTable() {
  const router = useRouter();
  const { blogs, loading, error } = useContext(PostContext);

  const handleClick = (id: number) => {
    router.push(`posts/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className="divide-y divide-gray-200 max-w-xl mx-auto">
      {blogs.map((blog) => (
        <li
          key={blog.id}
          className="py-4"
          onClick={() => handleClick(blog.id)}
          style={{ cursor: "pointer" }}
        >
          <div className="flex space-x-4 bg-white p-4 rounded-lg shadow max-w-xl mx-auto">
            <div className="flex-1">
              <p className="text-xl font-semibold text-black">{blog.title}</p>
              <p className="text-gray-500">{blog.body}</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="block mx-auto h-8 w-8 rounded-full bg-cyan-400 flex items-center justify-center">
                <p className="text-xs font-semibold text-white">
                  {blog.userId}
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
