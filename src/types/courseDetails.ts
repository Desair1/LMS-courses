import type ILesson from "./lesson";

export default interface ICourseDetails {
  id: string;
  title: string;
  author: string;
  fullDescription: string;
  imageURL?: string;
  lessons: ILesson[];
}
