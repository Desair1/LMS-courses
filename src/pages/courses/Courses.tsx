import { useGetCoursesQuery } from "../../features/api/coursesAPI";
import CourseCard from "../../entities/card/CourseCard";
import type ICourseSummary from "../../types/courseSummary";

const Courses = () => {
  const { data: courses, isLoading, error } = useGetCoursesQuery();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Список курсов</h1>
      <ul>
        {courses &&
          courses.map((course: ICourseSummary) => (
            <CourseCard key={course.id} {...course} />
          ))}
      </ul>
    </div>
  );
};

export default Courses;
