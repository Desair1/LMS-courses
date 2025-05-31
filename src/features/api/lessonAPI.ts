import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../shared/constants/api";
import type ILesson from "../../types/lesson";

export const lessonAPI = createApi({
  reducerPath: "lessonsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
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
