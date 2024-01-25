"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Edit } from "@mui/icons-material";

const PostList = () => {
  const posts = useSelector((state: RootState) => state.postList.postList);

  return (
    <div>
      <ul className="w-1/4 mx-auto">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center justify-between"
          >
            <Link href={`/post/${post.id}`}>
              <h1 className="text-xl font-bold mb-2 text-cyan-700">
                {post.title}
              </h1>
            </Link>
            <Link href={`/post/${post.id}/edit`}>
              <Edit className="text-cyan-700" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
