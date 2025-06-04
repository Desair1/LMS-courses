import { useGetCoursesQuery } from "../../features/api/coursesAPI";
import CourseCard from "../../entities/card/CourseCard";
import type ICourseSummary from "../../types/courseSummary";
import styles from "./courses.module.scss";

const Courses = () => {
  const { data: courses, isLoading, error } = useGetCoursesQuery();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    throw new Error();
  }

  return (
    <div>
      <h1>Список курсов</h1>
      <ul className={styles.coursesList}>
        {courses &&
          courses.map((course: ICourseSummary) => (
            <CourseCard key={course.id} {...course} />
          ))}
      </ul>
    </div>
  );
};

export default Courses;
