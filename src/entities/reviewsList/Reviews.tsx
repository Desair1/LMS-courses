import { useGetReviewsForCourseQuery } from "../../features/api/reviewsAPI";
import Review from "../review/Review";
import styles from "./reviews.module.scss";

interface ReviewsListProps {
  courseId: string | undefined;
}

const ReviewsList = ({ courseId }: ReviewsListProps) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useGetReviewsForCourseQuery(courseId!);

  if (isLoading) {
    return <div>Отзывы загружаются...</div>;
  }

  if (error) {
    console.log("Отзывы", error);
  }

  return (
    <div>
      <h2>Отзывы</h2>
      {reviews &&
        reviews.map((review) => (
          <div className={styles.wrapper}>
            <Review key={review.id} {...review} />
          </div>
        ))}
    </div>
  );
};

export default ReviewsList;
