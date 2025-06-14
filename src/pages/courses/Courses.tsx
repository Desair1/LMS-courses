import { useState } from "react";
import CourseCard from "../../entities/card/CourseCard";
import { coursesAPI, useGetCoursesQuery } from "../../features/api/coursesAPI";
import type ICourseSummary from "../../types/courseSummary";
import styles from "./courses.module.scss";
import SearchComponent from "../../entities/searchComponent/searchComponent";
import { useDispatch } from "react-redux";

const Courses = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (term: string) => {
    setSearchTerm(term);
  };

  const { data: courses, isLoading, error } = useGetCoursesQuery(searchTerm);
  try {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }

    if (error) {
      dispatch(coursesAPI.util.invalidateTags(["Course"]));
      throw new Error("Не удалось загрузить список курсов");
    }
  } catch (error) {
    dispatch(coursesAPI.util.invalidateTags(["Course"]));
  }

  return (
    <div>
      <h1>Список курсов</h1>
      <SearchComponent onSearch={onSearch} />
      <div className={styles.coursesList}>
        {courses &&
          courses.map((course: ICourseSummary) => (
            <CourseCard key={course.id} {...course} />
          ))}
      </div>
    </div>
  );
};

export default Courses;
