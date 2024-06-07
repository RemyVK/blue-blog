// import { useContext } from "react";
// import { useRouter } from "next/router";
// import { PostContext } from "../../context/PostsContext";
// import { Blog } from "../../context/PostsContext";

// export default function Post({ id }: { id: number }) {
//   const { blogs } = useContext(PostContext);
//   console.log(blogs);
//   const router = useRouter();
//   console.log(id);

//   const post = blogs?.find((blog: Blog) => blog.id === Number(id));

//   return (
//     <>
//       {blogs}
//       {post && (
//         <div>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//           <p>User ID: {post.userId}</p>
//         </div>
//       )}
//     </>
//   );
// }
