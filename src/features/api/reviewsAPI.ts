import { SERVER_URL } from "../../shared/constants/api";
import type IReview from "../../types/review";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const reviewsAPI = createApi({
  reducerPath: "reviewsAPI",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getReviewsForCourse: builder.query<IReview[], string>({
      query: (courseId) => `/courses/${courseId}/reviews`,
    }),
  }),
});

export const { useGetReviewsForCourseQuery } = reviewsAPI;
