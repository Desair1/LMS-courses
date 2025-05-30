import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "../pages/courses/Courses";
import CourseCard from "../entities/card/CourseCard";
import PageNotFound from "../pages/NotFoundPage/NotFoundPage";
import LessonsList from "../pages/lessonsList/LessonList";
import LessonCard from "../entities/lesson/Lesson";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseCard />} />
        <Route path="/courses/:courseId/lessons" element={<LessonsList />} />
        <Route
          path="/courses/:courseId/lessons/:lessonId"
          element={<LessonCard />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
