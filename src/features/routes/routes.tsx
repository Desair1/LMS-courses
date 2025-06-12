import LessonsList from "../../entities/lessonsList/LessonList";
import CourseDetails from "../../pages/courseDetails/courseDetails";
import Courses from "../../pages/courses/Courses";
import PageNotFound from "../../pages/NotFoundPage/NotFoundPage";

import {
  COURSES,
  COURSES_DETAILS,
  LESSONS,
  PAGE_NOT_FOUND,
} from "../../shared/constants/routesPaths";

export const routes = [
  {
    path: COURSES,
    element: <Courses />,
  },
  {
    path: COURSES_DETAILS,
    element: <CourseDetails />,
  },
  {
    path: LESSONS,
    element: <LessonsList />,
  },
  {
    path: PAGE_NOT_FOUND,
    element: <PageNotFound />,
  },
];
