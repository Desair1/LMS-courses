import type IReview from "../../types/review";
import { splitAPI } from "./splitAPI/splitAPI";

export const reviewsAPI = splitAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReviewsForCourse: builder.query<IReview[], string>({
      query: (courseId) => `/courses/${courseId}/reviews`,
    }),
  }),
});

export const { useGetReviewsForCourseQuery } = reviewsAPI;
