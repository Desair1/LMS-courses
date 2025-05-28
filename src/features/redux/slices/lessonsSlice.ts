import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type ILesson from "../../../types/lesson";

interface ILessonsState {
  lessons: ILesson[];
}

const initialState: ILessonsState = {
  lessons: [],
};

const lessonsSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    getLessons(state, action: PayloadAction<ILesson[]>) {
      state.lessons = action.payload;
    },
  },
});

export const { getLessons } = lessonsSlice.actions;

export default lessonsSlice.reducer;
