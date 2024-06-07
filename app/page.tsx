import PostsLayout from "../components/Postslayout";
import type { AppProps } from "next/app";
import PostContextProvider from "../context/PostsContext";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <PostContextProvider>
      <Component {...pageProps}></Component>
    </PostContextProvider>
  );
}
