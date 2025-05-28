import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../constants/api";
import type ICourseSummary from "../../types/courseSummary";
import type ICourseDetails from "../../types/courseDetails";

export const coursesAPI = createApi({
  reducerPath: "coursesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
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
