import LessonCard from "../../entities/lesson/Lesson";
import { useGetLessonsQuery } from "../../features/api/lessonAPI";

const LessonsList = () => {
  const { data: lessons, isLoading, error } = useGetLessonsQuery();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      {lessons &&
        lessons.map((lesson) => <LessonCard key={lesson.id} {...lesson} />)}
    </>
  );
};

export default LessonsList;
