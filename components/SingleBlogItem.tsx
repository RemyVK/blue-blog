import { Blog } from "../context/PostsContext";

export default function SingleBlogItem({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 h-90 flex flex-col justify-between">
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-700 flex-grow">{blog.body}</p>
    </div>
  );
}
