import type IReview from "../../types/review";
import { createApi } from "@reduxjs/toolkit/query/react";
import { useFakeBaseQuery } from "../hooks/useFakeBaseQuery";

export const reviewsAPI = createApi({
  reducerPath: "reviewsAPI",
  baseQuery: useFakeBaseQuery,
  endpoints: (builder) => ({
    getReviewsForCourse: builder.query<IReview[], string>({
      query: (courseId) => `/courses/${courseId}/reviews`,
    }),
  }),
});

export const { useGetReviewsForCourseQuery } = reviewsAPI;
