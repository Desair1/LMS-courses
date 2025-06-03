import type IReview from "../../types/review";
import styles from "./Review.module.scss";

const Review = ({ username, rating, text }: IReview) => {
  return (
    <div className={styles.review}>
      <div className={styles.reviewHeader}>
        <h4 className={styles.reviewAuthor}>{username}</h4>
        <div className={styles.reviewRating}>Рейтинг: {rating}</div>
      </div>
      <p className={styles.reviewText}>{text}</p>
    </div>
  );
};

export default Review;
