"use client";
import { useForm } from "react-hook-form";
import { PostType } from "../Posts";
import { useEffect } from "react";

type PostFormProps = {
  post?: PostType | any;
  submitBtn: string;
  onSubmit: (data: any) => void;
  updatePost?: (data: PostType) => void;
};
export const PostForm = (props: PostFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ defaultValues: { title: "", content: "" } });

  useEffect(() => {
    setValue("title", props.post?.title);
    setValue("content", props.post?.content);
  }, [props.post]);

  return (
    <div className="flex items-center justify-center mt-[8%] ">
      <form
        className="w-2/5 mx-auto h-3/4 p-8 bg-white shadow-lg rounded-md "
        onSubmit={handleSubmit(props.onSubmit)}
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-cyan-700 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            className="w-full px-3 py-2 text-cyan-700 border border-cyan-700 rounded-md focus:outline-none"
            {...register("title", { required: true })}
            onChange={(e) =>
              props.updatePost &&
              props.updatePost({ ...props.post, title: e.target.value })
            }
          />
          {errors.title && !props.post?.title && (
            <span className="text-xs text-rose-600">{"Title is required"}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="contsent"
            className="block text-cyan-700 text-sm font-bold mb-2"
          >
            Content:
          </label>
          <textarea
            className="w-full px-3 py-2 text-cyan-700 border border-cyan-700 rounded-md focus:outline-none resize-none"
            {...register("content", {
              maxLength: { value: 950, message: "Max is 950 " },
            })}
            rows={3}
            onChange={(e) =>
              props.updatePost &&
              props.updatePost({ ...props.post, content: e.target.value })
            }
          />
          {errors.content && props.post?.content.length > 5 && (
            <span className="text-xs text-rose-600">
              {errors.content.message} - {props.post.content.length} characters
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-700 text-white py-2 px-4 mt-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          {props.submitBtn}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
