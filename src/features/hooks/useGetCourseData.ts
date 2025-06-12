import { useGetCourseByIdQuery } from "../api/coursesAPI";

export const useGetCourseData = (id: string | undefined) => {
  if (typeof id === "undefined") {
    throw new Error("Не удаётся перейти по данному адресу");
  }

  const { data: course, isLoading, error } = useGetCourseByIdQuery(id);

  if (error) {
    throw new Error("Не удалось найти курс");
  }

  return {
    course,
    isLoading,
  };
};
