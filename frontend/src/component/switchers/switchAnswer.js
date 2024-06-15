import { radioSelect, textSelect } from "@/variables/selector";
import {
  booleanAnswer,
  flashCardAnswer,
  multipleAnswer,
} from "../helpers/giveMeAnswer";
import { openAnswerId } from "@/variables/idName";

export default function switchAnswer(type) {
  let answer = [];

  if (type === "multiple") {
    const radio = document.querySelectorAll(radioSelect);
    answer = multipleAnswer(radio);
  } else if (type === "openAnswer") {
    const input = document.getElementById(openAnswerId);
    answer = input.value;
  } else if (type === "boolean") {
    const radio = document.querySelectorAll(radioSelect);
    answer = booleanAnswer(radio);
  } else if (type === "flashCard") {
    const inputs = document.querySelectorAll(textSelect);
    answer = flashCardAnswer(inputs);
  }

  return answer;
}
