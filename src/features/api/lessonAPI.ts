import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../constants/api";
import type ILesson from "../../types/lesson";

export const lessonAPI = createApi({
  reducerPath: "lessonsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => ({
    getLessons: builder.query<ILesson[], void>({
      query: () => "/lessons",
    }),
    getLessonById: builder.query<ILesson, string>({
      query: (lessonId) => `/lessons/${lessonId}`,
    }),
  }),
});

export const { useGetLessonsQuery, useGetLessonByIdQuery } = lessonAPI;
