import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "../pages/courses/Courses";
import PageNotFound from "../pages/NotFoundPage/NotFoundPage";
import LessonsList from "../entities/lessonsList/LessonList";
import CourseDetails from "../pages/courseDetails/courseDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/courses/:courseId/lessons" element={<LessonsList />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
