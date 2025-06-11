import styles from "./lesson.module.scss";

import type ILesson from "../../types/lesson";

import { useState } from "react";

const LessonCard = ({ id, title, duration, isCompleted }: ILesson) => {
  const [isExpended, setIsExpended] = useState<boolean>(false);

  const toggleLessonExpended = () => {
    setIsExpended(!isExpended);
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
