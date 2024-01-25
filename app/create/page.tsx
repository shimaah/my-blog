"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/store";
import { createPost } from "@/app/redux/postSlice";
import PostForm from "../components/PostForm";

export const CreatePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const onSubmit = (data: any) => {
    dispatch(createPost(data));
    router.push("/");
  };

  return <PostForm submitBtn="Create" onSubmit={onSubmit} />;
};

export default CreatePost;
