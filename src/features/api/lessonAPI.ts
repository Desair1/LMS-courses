import { SERVER_URL } from "../../constants/api";

export const fetchCourseLessons = async (
  courseId: string,
  lessonId: string
) => {
  const response = await fetch(
    `${SERVER_URL}/courses/${courseId}/lessons/${lessonId}`
  );
  return response.json();
};
