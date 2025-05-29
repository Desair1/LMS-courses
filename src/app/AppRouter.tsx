import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "../components/courses/Courses";
import CourseCard from "../components/common/card/CourseCard";
import PageNotFound from "../components/NotFoundPage";
import LessonsList from "../components/lessonsList/LessonList";
import LessonDetails from "../components/lesson/Lesson";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseCard />} />
        <Route path="/courses/:courseId/lessons" element={<LessonsList />} />
        <Route
          path="/courses/:courseId/lessons/:lessonId"
          element={<LessonDetails />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
