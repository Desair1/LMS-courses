import { useGetCoursesQuery } from "../../features/api/coursesAPI";
import CourseCard from "../../entities/card/CourseCard";

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
          courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
      </ul>
    </div>
  );
};

export default Courses;
