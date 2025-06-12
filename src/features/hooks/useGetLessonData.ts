import { useGetLessonsForCourseQuery } from "../api/lessonAPI";

export const useGetLessonData = (id: string | undefined) => {
  if (typeof id === "undefined") {
    throw new Error("Не удаётся перейти по данному адресу");
  }

  const { data: lessons, isLoading, error } = useGetLessonsForCourseQuery(id);

  if (error) {
    throw new Error("Не удалось найти уроки");
  }

  return {
    lessons,
    isLoading,
  };
};
