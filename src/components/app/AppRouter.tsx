import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "../courses/Courses";
import CourseCard from "../common/card/CourseCard";
import PageNotFound from "../NotFoundPage";
import LessonsList from "../lessonsList/LessonList";
import LessonDetails from "../lesson/lesson";

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
