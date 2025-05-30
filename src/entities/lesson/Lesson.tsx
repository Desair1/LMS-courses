import type ILesson from "../../types/lesson";
import styles from "./lesson.module.scss";

const LessonCard = ({ id, title, duration, isCompleted }: ILesson) => {
  return (
    <div
      className={`${styles.lessonCard} ${isCompleted ? styles.completed : ""}`}
    >
      <h3 className={styles.lessonTitle}>{title}</h3>
      <div className={styles.lessonDuration}>
        Длительность урока: {duration}
      </div>
    </div>
  );
};

export default LessonCard;
