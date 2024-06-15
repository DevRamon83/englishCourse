import {
  isABooleanAnswer,
  isAFlashCard,
  isAMultipleAnswer,
  isAnOpenAnswer,
} from "../creators/generateCorrection";

export default function switchExerciseTypeReview(type, text, answerPanel, obj) {
  switch (type) {
    case "multiple":
      isAMultipleAnswer(text, answerPanel, obj);
      break;
    case "input":
      isAnOpenAnswer(text, answerPanel, obj);
      break;
    case "boolean":
      isABooleanAnswer(text, answerPanel, obj);
      break;
    case "flashCard":
      isAFlashCard(text, answerPanel, obj);
      break;
    default:
      break;
  }
}
