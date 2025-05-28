import { SERVER_URL } from "../../constants/api";

export const fetchCourses = async () => {
  const response = await fetch(`${SERVER_URL}/courses`);
  return response.json();
};

export const fetchCoursesDetails = async (courseId: string) => {
  const response = await fetch(`${SERVER_URL}/courses/${courseId}`);
  return response.json();
};

export const fetchCourseLessons = async (courseId: string) => {
  const response = await fetch(`${SERVER_URL}/courses/${courseId}/lessons`);
  return response.json();
};
