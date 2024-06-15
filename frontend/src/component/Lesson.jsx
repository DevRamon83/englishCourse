import { numberLessonId } from "@/variables/idName";

export default function Lesson({ lesson }) {
  let lessonNumber = lesson;

  if (typeof document !== "undefined") {
    const input = document.getElementById(numberLessonId);
    input.value = lessonNumber;
  }

  return (
    <>
      <div id="lesson__panel">
        <div id="lesson__prev" className="lesson__button">
          -
        </div>

        <p>
          Lezione <input id="lesson__input" type="number"></input>
        </p>
        <div id="lesson__next">+</div>
      </div>
    </>
  );
}
