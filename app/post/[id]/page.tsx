"use client";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/store";
import { deletePost, selectPost } from "@/app/redux/postSlice";
import { Delete } from "@mui/icons-material";
import Link from "next/link";
import { useEffect } from "react";
export const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const post = useSelector((state: RootState) => state.postList.selectedPost);
  useEffect(() => {
    dispatch(selectPost(id.toString()));
  }, []);

  const deletePostById = () => {
    router.push("/");
    if (post) dispatch(deletePost(id.toString()));
  };

  return (
    <div className="text-cyan-800">
      {post ? (
        <div className="w-1/4 mx-auto mt-8 p-6 bg-white text-cyan-800 shadow-md rounded-md text-wrap">
          <div className="flex justify-end pb-2">
            <button onClick={deletePostById}>
              <Delete className="text-rose-600" />
            </button>
          </div>

          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-wrap max-h-96 whitespace-break-spaces truncate mb-4">
            {post.content}
          </p>
        </div>
      ) : (
        <div className="pt-8 text-center">
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </div>
      )}
    </div>
  );
};

export default Post;
