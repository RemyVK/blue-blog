"use client";
import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../lib/axiosConfig";

type PostContextProviderProps = {
  children: React.ReactNode;
};

export interface Blog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostContextProps = {
  blogs: Blog[];
  loading: boolean;
  error: any;
};

const postContextDefaultValues: PostContextProps = {
  blogs: [],
  loading: false,
  error: null,
};

export const PostContext = createContext<PostContextProps>(
  postContextDefaultValues,
);

export default function PostContextProvider({
  children,
}: PostContextProviderProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/");
        setBlogs(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ blogs, loading, error }}>
      {children}
    </PostContext.Provider>
  );
}
