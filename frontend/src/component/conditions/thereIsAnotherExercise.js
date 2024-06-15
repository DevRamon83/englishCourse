import { lastExercise, noExercise, thereIsExercise } from "@/variables/global";
import { practiceContainerId } from "@/variables/idName";
import defineClass from "../definers/defineClass";
import removeClass from "../removers/removeClass";

export default function thereIsAnotherExercise(index, length) {
  const variableContainer = document.getElementById(practiceContainerId);

  let thereIs;
  let limit = index + 1;

  if (index < length && length !== limit) {
    thereIs = true;
    defineClass(variableContainer, thereIsExercise);
  } else if (length === limit) {
    thereIs = true;
    removeClass(variableContainer, thereIsExercise);
    defineClass(variableContainer, lastExercise);
  } else {
    removeClass(variableContainer, lastExercise);
    removeClass(variableContainer, noExercise);
    thereIs = false;
  }

  return thereIs;
}
