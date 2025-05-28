import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ICourse {
  id: string;
  title: string;
  author: string;
  fullDescription?: string;
  duration?: string;
  rating?: number;
  imageURL?: string;
}
interface ICoursesState {
  courses: ICourse[];
}

const initialState: ICoursesState = {
  courses: [],
};

const corsesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses(state, action: PayloadAction<ICourse[]>) {
      state.courses = action.payload;
    },
  },
});

export const { getCourses } = corsesSlice.actions;

export default corsesSlice.reducer;
