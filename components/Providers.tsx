"use client";

import React from "react";
import PostContextProvider from "../context/PostsContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <PostContextProvider>{children}</PostContextProvider>;
}
