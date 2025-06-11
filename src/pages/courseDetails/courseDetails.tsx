import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import styles from "./courseDetails.module.scss";

import { useGetCourseByIdQuery } from "../../features/api/coursesAPI";
import { useGetLessonsForCourseQuery } from "../../features/api/lessonAPI";

import LessonsList from "../../entities/lessonsList/LessonList";
import OnMainPageBtn from "../../entities/backwardButton/onMainPageBtn";

const ReviewsList = lazy(() => import("../../entities/reviewsList/Reviews"));

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

  if (courseIsLoading || lessonsIsLoading) {
    return <div>Загрузка...</div>;
  }

  if (courseError || lessonsError) {
    throw new Error();
  }

  return (
    <>
      {course && (
        <div>
          <div className={styles.courseHeader}>
            <h2>{course.title}</h2>
            <OnMainPageBtn />
          </div>
          <div>{course.fullDescription}</div>
          <div className={styles.wrapper}>
            {lessons && <LessonsList lessons={lessons} />}
          </div>
          <Suspense fallback={<div>Загрузка отзывов...</div>}>
            <ReviewsList courseId={courseId} />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
