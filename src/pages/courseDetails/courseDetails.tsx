import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../../features/api/coursesAPI";
import { useGetLessonsForCourseQuery } from "../../features/api/lessonAPI";
import LessonsList from "../../entities/lessonsList/LessonList";
import styles from "./courseDetails.module.scss";

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const {
    data: course,
    isLoading: courseIsLoading,
    error: courseError,
  } = useGetCourseByIdQuery(courseId!);

  const {
    data: lessons,
    isLoading: lessonsIsLoading,
    error: lessonsError,
  } = useGetLessonsForCourseQuery(courseId!);

  if (courseIsLoading && lessonsIsLoading) {
    return <div>Загрузка...</div>;
  }

  if (courseError) {
    console.log("Course error", courseError);
  }

  if (lessonsError) {
    console.log("Lessons error", lessonsError);
  }

  return (
    <>
      {course && (
        <div>
          <h2>{course.title}</h2>
          <div>{course.fullDescription}</div>
          <div className={styles.wrapper}>
            {lessons && <LessonsList lessons={lessons} />}
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
