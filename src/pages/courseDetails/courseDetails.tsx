import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import styles from "./courseDetails.module.scss";

import LessonsList from "../../entities/lessonsList/LessonList";
import OnMainPageBtn from "../../entities/backwardButton/onMainPageBtn";
import { useGetCourseData } from "../../features/hooks/useGetCourseData";
import { useGetLessonData } from "../../features/hooks/useGetLessonData";

const ReviewsList = lazy(() => import("../../entities/reviewsList/Reviews"));

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const { course, isLoading: courseIsLoading } = useGetCourseData(courseId);

  const { lessons, isLoading: lessonsIsLoading } = useGetLessonData(courseId);

  if (courseIsLoading || lessonsIsLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {course && (
        <div>
          <div className={styles.headerWrapper}>
            <div className={styles.courseHeader}>
              <h2>{course.title}</h2>
              <OnMainPageBtn />
            </div>
            <div>{course.fullDescription}</div>
          </div>
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
