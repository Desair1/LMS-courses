import { configureStore } from "@reduxjs/toolkit";
import { coursesAPI } from "../api/coursesAPI";
import { lessonAPI } from "../api/lessonAPI";
import { reviewsAPI } from "../api/reviewsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [coursesAPI.reducerPath]: coursesAPI.reducer,
    [lessonAPI.reducerPath]: lessonAPI.reducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coursesAPI.middleware,
      lessonAPI.middleware,
      reviewsAPI.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
