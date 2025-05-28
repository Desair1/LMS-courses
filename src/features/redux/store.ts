import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/coursesSlice";
import lessonsReducer from "./slices/lessonsSlice";
import { coursesAPI } from "../api/coursesAPI";
import { lessonAPI } from "../api/lessonAPI";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    [coursesAPI.reducerPath]: coursesAPI.reducer,
    lessons: lessonsReducer,
    [lessonAPI.reducerPath]: lessonAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesAPI.middleware, lessonAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
