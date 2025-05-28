import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/coursesSlice";
import lessonsReducer from "./slices/lessonsSlice";

export const store = configureStore({
  reducer: {
    coursesReducer,
    lessonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
