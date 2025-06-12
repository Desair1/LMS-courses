import type ILesson from "../../types/lesson";
import { splitAPI } from "./splitAPI/splitAPI";

export const lessonAPI = splitAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLessonsForCourse: builder.query<ILesson[], string>({
      query: (courseId) => `/courses/${courseId}/lessons`,
    }),
    getLessonById: builder.query<
      ILesson,
      { courseId: string; lessonId: string }
    >({
      query: ({ courseId, lessonId }) =>
        `/courses/${courseId}/lessons/${lessonId}`,
    }),
  }),
});

export const { useGetLessonsForCourseQuery, useGetLessonByIdQuery } = lessonAPI;
