import { Blog } from "../context/PostsContext";

export default function SingleBlogItem({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-80 h-full sm:h-90 flex flex-col justify-between">
      <h1 className="text-xl sm:text-2xl font-bold mb-2 overflow-hidden whitespace-wrap">
        {blog.title}
      </h1>
      <p className="text-sm sm:text-base text-gray-700 flex-grow">
        {blog.body}
      </p>
    </div>
  );
}
