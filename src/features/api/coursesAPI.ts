import type ICourseSummary from "../../types/courseSummary";
import type ICourseDetails from "../../types/courseDetails";
import { splitAPI } from "./splitAPI/splitAPI";

export const coursesAPI = splitAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<ICourseSummary[], string | void>({
      query: (searchTerm) => {
        const url = "/courses";
        if (searchTerm) {
          return `${url}/q=${searchTerm}`;
        }
        return url;
      },
      providesTags: ["Course"],
    }),
    getCourseById: builder.query<ICourseDetails, string>({
      query: (courseId) => `/courses/${courseId}`,
      providesTags: ["Course"], // Добавляем тег
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesAPI;
