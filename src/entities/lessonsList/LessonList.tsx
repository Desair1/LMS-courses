import type ILesson from "../../types/lesson";
import LessonCard from "../lesson/Lesson";

interface ILessonsListProps {
  lessons?: ILesson[];
}

const LessonsList = ({ lessons }: ILessonsListProps) => {
  return (
    <>
      {lessons &&
        lessons.map((lesson) => <LessonCard key={lesson.id} {...lesson} />)}
    </>
  );
};

export default LessonsList;
