import {
  numberLessonId,
  questionContainerId,
  questionPanelId,
} from "@/variables/idName";
import generateFlashCard from "../creators/generateFlashCard";
import switchExerciseType from "../switchers/switchExerciseType";
import switchPractice from "../switchers/switchPractice";
import appendElement from "../helpers/appendElement";
import defineId from "../definers/defineId";
import defineText from "../definers/defineText";
import howManyElement from "../helpers/howManyElement";
import thereIsAnotherExercise from "../conditions/thereIsAnotherExercise";
import { isFinish } from "./answerPanel";
import { buttonSelect } from "@/variables/selector";

let index = 0;

export default function exercise() {
  const input = document.getElementById(numberLessonId);
  const lesson = parseInt(input.value);
  const file = switchPractice(lesson);
  const length = howManyElement(file);
  const condition = thereIsAnotherExercise(index, length);

  listenForReset();

  if (condition) {
    generateQuestion(file, index);
    generateAnswer(file, index);
    nextIndex();
  } else {
    finish(lesson);
  }
}

// ***

function generateQuestion(file, index) {
  if (file[index].type !== "flashCard") {
    const panel = document.getElementById(questionPanelId);
    const question = document.createElement("div");
    const text = file[index].question;

    appendElement(panel, question);
    defineId(question, questionContainerId);
    defineText(question, text);
  } else {
    generateFlashCard(file, index);
  }
}

// ***

function generateAnswer(file, index) {
  switchExerciseType(file[index], index);
}

// ***

function nextIndex() {
  index += 1;
}

// ***

function finish(lesson) {
  isFinish(lesson);
}

// ***

function listenForReset() {
  const tabs = document.querySelectorAll(buttonSelect);

  tabs.forEach((element) => {
    element.addEventListener("click", reset);
  });
}

// ***

function reset() {
  index = 0;
  const tabs = document.querySelectorAll(buttonSelect);

  tabs.forEach((element) => {
    element.removeEventListener("click", reset);
  });
}
