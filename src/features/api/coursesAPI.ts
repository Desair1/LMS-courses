import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../shared/constants/api";
import type ICourseSummary from "../../types/courseSummary";
import type ICourseDetails from "../../types/courseDetails";

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

export const coursesAPI = createApi({
  reducerPath: "coursesAPI",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCourses: builder.query<ICourseSummary[], void>({
      query: () => "/courses",
    }),
    getCourseById: builder.query<ICourseDetails, string>({
      query: (courseId) => `/courses/${courseId}`,
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesAPI;
