import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../shared/constants/api";
import type ILesson from "../../types/lesson";

const shouldSimulateError = () => {
  const randomNumber = Math.random();
  return randomNumber < 0.2;
};

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URL,
  fetchFn: async (...args) => {
    if (shouldSimulateError()) {
      return Promise.reject(new Error("Simulated network error"));
    }
    return fetch(...args);
  },
});

export const lessonAPI = createApi({
  reducerPath: "lessonsAPI",
  baseQuery: baseQuery,
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
