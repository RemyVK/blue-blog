import BlogPageLayout from "../components/BlogPageLayout";
import PostContextProvider from "../context/PostsContext";

export default function Home() {
  return (
    <PostContextProvider>
      <BlogPageLayout />
    </PostContextProvider>
  );
}
