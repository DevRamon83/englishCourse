import {
  generateMultipleAnswer,
  generateOpenAnswer,
  generateBooleanAnswer,
  generateFlashCardAnswer,
} from "../practice/answerPanel";

export default function switchExerciseType(obj, index) {
  let type;
  switch (obj.type) {
    case "multiple":
      type = "multiple";
      generateMultipleAnswer(obj, type, index);
      break;
    case "input":
      type = "openAnswer";
      generateOpenAnswer(obj, type, index);
      break;
    case "boolean":
      type = "boolean";
      generateBooleanAnswer(obj, type, index);
      break;
    case "flashCard":
      type = "flashCard";
      generateFlashCardAnswer(obj, type, index);
      break;
    default:
      break;
  }
}
