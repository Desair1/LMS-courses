import type ICourseSummary from "../../types/courseSummary";
import type ICourseDetails from "../../types/courseDetails";
import { splitAPI } from "./splitAPI/splitAPI";

export const coursesAPI = splitAPI.injectEndpoints({
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
