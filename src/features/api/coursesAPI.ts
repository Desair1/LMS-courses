import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type ICourseSummary from "../../types/courseSummary";
import type ICourseDetails from "../../types/courseDetails";
import { useFakeBaseQuery } from "../hooks/useFakeBaseQuery";

export const coursesAPI = createApi({
  reducerPath: "coursesAPI",
  baseQuery: useFakeBaseQuery,
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
