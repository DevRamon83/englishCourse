import switchElementType from "../switchers/switchElementType";
import switchLesson from "../switchers/switchLesson";

export default function generateLesson(lesson) {
  const file = switchLesson(lesson);
  const elements = file.length;

  for (let i = 0; i < elements; i++) {
    switchElementType(file[i]);
  }
}
