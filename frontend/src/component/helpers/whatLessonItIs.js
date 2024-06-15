import { nextLessonId, numberLessonId, prevLessonId } from "@/variables/idName";

export default function whatLessonItIs(lesson) {
  let lessonNumber = lesson;
  let prev;
  let next;
  let number;

  prev = document.getElementById(prevLessonId);
  next = document.getElementById(nextLessonId);
  number = document.getElementById(numberLessonId);

  prev.addEventListener("click", () => {
    lessonNumber -= 1;
    if (lessonNumber === 0) {
      lessonNumber = 1;
    }
    number.value = lessonNumber;
  });

  next.addEventListener("click", () => {
    lessonNumber += 1;
    number.value = lessonNumber;
  });

  return lessonNumber;
}
