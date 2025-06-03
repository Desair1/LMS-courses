import { SERVER_URL } from "../../shared/constants/api";
import type IReview from "../../types/review";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsAPI = createApi({
  reducerPath: "reviewsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => ({
    getReviewsForCourse: builder.query<IReview[], string>({
      query: (courseId) => `/courses/${courseId}/reviews`,
    }),
  }),
});

export const { useGetReviewsForCourseQuery } = reviewsAPI;
