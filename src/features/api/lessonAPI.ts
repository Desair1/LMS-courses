import { createApi } from "@reduxjs/toolkit/query/react";
import type ILesson from "../../types/lesson";
import { useFakeBaseQuery } from "../hooks/useFakeBaseQuery";

export const lessonAPI = createApi({
  reducerPath: "lessonsAPI",
  baseQuery: useFakeBaseQuery,
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
