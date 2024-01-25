"use client";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/store";
import { updatePost } from "@/app/redux/postSlice";
import { useEffect, useState } from "react";
import { PostType } from "@/app/Posts";
import PostForm from "@/app/components/PostForm";

export const EditPost = () => {
  const { id } = useParams();

  const [editablePost, setEditablePost] = useState<PostType>();

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const post = useSelector((state: RootState) =>
    state.postList.postList.find((p) => p.id === id)
  );
  useEffect(() => {
    if (post) setEditablePost(post);
    else router.push("/");
  }, []);

  const onSubmit = () => {
    dispatch(updatePost(editablePost));
    router.push("/");
  };

  return (
    <PostForm
      post={editablePost}
      submitBtn="Save"
      onSubmit={onSubmit}
      updatePost={setEditablePost}
    />
  );
};

export default EditPost;
