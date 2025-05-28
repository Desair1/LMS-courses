import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type ICourseSummary from "../../../types/courseSummary";

interface ICoursesState {
  courses: ICourseSummary[];
}

const initialState: ICoursesState = {
  courses: [],
};

const corsesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses(state, action: PayloadAction<ICourseSummary[]>) {
      state.courses = action.payload;
    },
  },
});

export const { getCourses } = corsesSlice.actions;

export default corsesSlice.reducer;
