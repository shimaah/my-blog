import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostType, PostsList } from "../Posts";

interface PostState {
  postList: PostType[];
  selectedPost?: PostType;
}
const initialState: PostState = {
  postList: PostsList,
  selectedPost: undefined,
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    selectPost: (state, action: PayloadAction<string>) => {
      const post = state.postList.find((p) => p.id === action.payload);
      state.selectedPost = post;
    },
    updatePost: (state, action: PayloadAction<PostType | any>) => {
      const updatedList = state.postList.map((p) => {
        return p.id === action.payload.id ? (action.payload as PostType) : p;
      });
      state.postList = updatedList;
    },
    createPost: (
      state,
      action: PayloadAction<{ title: string; content?: string }>
    ) => {
      const newPost: PostType = {
        id: (state.postList.length + 1).toString(),
        title: action.payload.title,
        content: action.payload.content,
      };
      state.postList.unshift(newPost);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const newList = state.postList.filter((p) => p.id !== action.payload);
      state.postList = newList;
    },
  },
});
export const { selectPost, updatePost, createPost, deletePost } =
  postSlice.actions;

export default postSlice.reducer;
