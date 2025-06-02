import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type ILesson from "../../../types/lesson";

interface ILessonsState {
  lessons: ILesson[];
  expandedLessons: { [lessonId: string]: boolean };
}

const initialState: ILessonsState = {
  lessons: [],
  expandedLessons: {},
};

const lessonsSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    toggleLessonDetails(state, action: PayloadAction<string>) {
      const lessonId = action.payload;
      state.expandedLessons[lessonId] = !state.expandedLessons[lessonId];
    },
  },
});

export const { toggleLessonDetails } = lessonsSlice.actions;

export default lessonsSlice.reducer;
