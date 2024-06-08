import { Blog } from "../context/PostsContext";
import { useRouter } from "next/navigation";
import SingleBlogItem from "./SingleBlogItem";

export default function AllBlogItem({ blog }: { blog: Blog }) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`posts/${id}`);
  };

  return (
    <li
      key={blog.id}
      onClick={() => handleClick(blog.id)}
      style={{ cursor: "pointer" }}
    >
      <SingleBlogItem blog={blog} />
    </li>
  );
}
