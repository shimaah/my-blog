import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./app/redux/postSlice";

export const store = configureStore({
  reducer: {
    postList: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
