import styles from "./card.module.scss";
import type ICourseSummary from "../../types/courseSummary";

const CourseCard = ({
  id,
  title,
  author,
  fullDescription,
  duration,
  rating,
  imageURL,
}: ICourseSummary) => {
  const handleMoreDetails = () => {
    alert(`Переход к курсу: ${title}`);
  };

  return (
    <article className={styles.courseCard}>
      {imageURL && (
        <div className={styles.courseImage}>
          <img
            src={imageURL}
            alt={`Превью курса: ${title}`}
            className={styles.courseImageImg}
            loading="lazy"
          />
        </div>
      )}

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
          <button
            className={styles.courseActionBtn}
            onClick={handleMoreDetails}
          >
            Подробнее
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
