import { useState } from "react";
import CourseCard from "../../entities/card/CourseCard";
import { useGetCoursesQuery } from "../../features/api/coursesAPI";
import type ICourseSummary from "../../types/courseSummary";
import styles from "./courses.module.scss";
import SearchComponent from "../../entities/SearchComponent/SearchComponent";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (term: string) => {
    setSearchTerm(term);
  };

  const { data: courses, isLoading, error } = useGetCoursesQuery(searchTerm);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    throw new Error("Не удалось загрузить список курсов");
  }

  return (
    <div>
      <div className={styles.header}>
        <h1>Список курсов</h1>
        <SearchComponent onSearch={onSearch} />
      </div>
      <div className={styles.coursesList}>
        {courses && courses.length === 0 ? (
          <div>Ничего не удалось найти</div>
        ) : (
          courses &&
          courses.map((course: ICourseSummary) => (
            <CourseCard key={course.id} {...course} />
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
