import styles from "./card.module.scss";
import type ICourseSummary from "../../types/courseSummary";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  title,
  author,
  fullDescription,
  duration,
  rating,
  imageURL,
}: ICourseSummary) => {
  return (
    <article className={styles.courseCard}>
      <div className={styles.courseContent}>
        <div className={styles.courseHeader}>
          <h2 className={styles.courseAuthor}>{author}</h2>
          <h3 className={styles.courseTitle}>{title}</h3>
        </div>

        {fullDescription && (
          <p className={styles.courseDescription}>{fullDescription}</p>
        )}
        <div className={styles.courseMeta}>
          {rating && rating > 0 && <span>Рейтинг: {rating}</span>}
          {duration && <span>Длительность: {duration}</span>}
        </div>

        <div className={styles.courseActions}>
          <Link to={`/courses/${id}`} className={styles.courseActionBtn}>
            Подробнее
          </Link>
        </div>
      </div>

      {imageURL && (
        <img
          src={imageURL}
          alt={`Превью курса: ${title}`}
          className={styles.courseImage}
        />
      )}
    </article>
  );
};

export default CourseCard;
