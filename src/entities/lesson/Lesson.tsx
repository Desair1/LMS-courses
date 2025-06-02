import { useDispatch, useSelector } from "react-redux";
import type ILesson from "../../types/lesson";
import styles from "./lesson.module.scss";
import type { AppDispatch, RootState } from "../../features/redux/store";
import { toggleLessonDetails } from "../../features/redux/slices/lessonsSlice";

const LessonCard = ({ id, title, duration, isCompleted }: ILesson) => {
  const dispatch = useDispatch<AppDispatch>();
  const isExpended = useSelector(
    (state: RootState) => state.lessons.expandedLessons[id] || false
  );

  const toggleLessonExpended = () => {
    dispatch(toggleLessonDetails(id));
  };

  return (
    <div
      className={`${styles.lessonCard} ${isCompleted ? styles.completed : ""}`}
    >
      <h3 className={styles.lessonTitle}>{title}</h3>
      <span
        className={styles.showLessonCardDetails}
        onClick={toggleLessonExpended}
      >
        {isExpended ? "Свернуть" : "Подробнее"}
      </span>
      <div className={styles.lessonCardDetails}>
        {isExpended && (
          <div className={styles.lessonDuration}>
            Длительность урока: {duration}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonCard;
