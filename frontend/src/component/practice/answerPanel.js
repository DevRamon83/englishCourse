import {
  answerId,
  generalCountId,
  nextId,
  openAnswerId,
  practiceContainerId,
  questionContainerId,
  questionPanelId,
} from "@/variables/idName";
import generateReportConsole from "../creators/generateReportConsole";
import defineId from "../definers/defineId";
import howManyElement from "../helpers/howManyElement";
import removeConsole from "../removers/removeConsole";
import exercise from "./exercise";
import defineInputType from "../definers/defineInputType";
import defineInputName from "../definers/defineInputName";
import defineInputValue from "../definers/defineInputValue";
import appendElement from "../helpers/appendElement";
import defineText from "../definers/defineText";
import defineInputHtml from "../definers/defineInputHtml";
import definePlaceholder from "../definers/definePlaceholder";
import defineSrc from "../definers/defineSrc";
import { arrowSrc } from "@/variables/src";
import removeChild from "../removers/removeChild";
import { lastExercise, thereIsExercise } from "@/variables/global";
import switchAnswer from "../switchers/switchAnswer";
import containsCondition from "../conditions/containsCondition";
import { buttonSelect } from "@/variables/selector";
import invalidInput from "../alert/invalidInput";
import practiceOver from "../info/practiceOver";
import defineClass from "../definers/defineClass";
import {
  practiceInputRadioClass,
  practiceInputTextClass,
} from "@/variables/className";

let progress = 1;
let correct = 0;
let wrong = 0;
let point = 0;
let errorIndex = [];
let wrongAnswer = [];

function generateMultipleAnswer(obj, type, indexOfQuestion) {
  const length = howManyElement(obj.options);
  const form = document.createElement("form");
  const parent = document.getElementById(practiceContainerId);
  const array = obj.options;
  let delay = 0;

  defineId(form, answerId);

  for (let i = 0; i < length; i++) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    delay += 0.1;
    label.style.animationDelay = delay + "s";

    defineInputHtml(label, array[i]);
    defineText(label, array[i]);
    defineInputType(input, "radio");
    defineId(input, array[i]);
    defineInputName(input, "multipleAnswer");
    defineInputValue(input, array[i]);
    appendElement(form, label);
    appendElement(label, input);
    defineClass(input, practiceInputRadioClass);
  }

  appendElement(parent, form);
  generateNext(parent, type, obj, indexOfQuestion);
}

// ***

function generateOpenAnswer(obj, type, indexOfQuestion) {
  const parent = document.getElementById(practiceContainerId);
  const container = document.createElement("div");
  const input = document.createElement("input");

  defineInputType(input, "text");
  defineId(input, openAnswerId);
  definePlaceholder(input, obj.placeholder);
  defineId(container, answerId);
  appendElement(parent, container);
  appendElement(container, input);
  generateNext(parent, type, obj, indexOfQuestion);
  defineClass(input, practiceInputTextClass);
}

// ***

function generateBooleanAnswer(obj, type, indexOfQuestion) {
  const length = 2;
  const form = document.createElement("form");
  const parent = document.getElementById(practiceContainerId);
  const array = ["vero", "falso"];
  let delay = 0;

  defineId(form, answerId);

  for (let i = 0; i < length; i++) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    delay += 0.1;
    label.style.animationDelay = delay + "s";

    defineInputHtml(label, array[i]);
    defineText(label, array[i]);
    defineInputType(input, "radio");
    defineId(input, array[i]);
    defineInputName(input, "multipleAnswer");
    defineInputValue(input, array[i]);
    appendElement(form, label);
    appendElement(label, input);
    defineClass(input, practiceInputRadioClass);
  }

  appendElement(parent, form);
  generateNext(parent, type, obj, indexOfQuestion);
}

// ***

function generateFlashCardAnswer(obj, type, indexOfQuestion) {
  const parent = document.getElementById(practiceContainerId);
  const container = document.createElement("div");
  const length = howManyElement(obj.answer);
  let delay = 0;

  defineId(container, answerId);
  appendElement(parent, container);

  for (let i = 0; i < length; i++) {
    const input = document.createElement("input");
    defineClass(input, practiceInputTextClass);
    delay += 0.1;
    input.style.animationDelay = delay + "s";

    defineInputType(input, "text");
    defineId(input, obj.answer[i]);
    definePlaceholder(input, obj.placeholder[i]);
    appendElement(container, input);
  }

  generateNext(parent, type, obj, indexOfQuestion);
}

// ***

function generateNext(parent, type, obj, indexOfQuestion) {
  const next = document.createElement("img");

  defineSrc(next, arrowSrc);
  defineId(next, nextId);
  appendElement(parent, next);
  listenForReset();

  // if users clicks the next button before the animation ends
  // this may generate an error

  setTimeout(() => {
    nextListener(next, type, obj, indexOfQuestion);
  }, 1000);
}

// ***

function nextListener(next, type, obj, indexOfQuestion) {
  next.addEventListener("click", () => {
    if (type === "flashCard") {
      const length = howManyElement(obj.answer);
      const answer = switchAnswer(type);
      const isValid = checkArray(answer, length);

      luncher(isValid, length, answer, obj, indexOfQuestion);
    } else {
      const correctAnswer = obj.answer;
      const answer = switchAnswer(type);

      condition(correctAnswer, answer, indexOfQuestion);
    }
  });
}

// ***

function checkArray(answers, length) {
  let isValid = 1;
  for (let i = 0; i < length; i++) {
    if (answers[i].trim() === "") {
      isValid -= 1;
    } else {
      isValid -= 0;
    }
  }

  return isValid;
}

// ***

function luncher(isValid, length, answer, obj, indexOfQuestion) {
  if (isValid > 0) {
    progress += 1;
    iterate(length, answer, obj, indexOfQuestion);
  } else {
    invalidInput();
  }
}
// ***

function iterate(length, answer, obj, indexOfQuestion) {
  const iterateArray = [];
  let thereIsAMistake = false;

  for (let i = 0; i < length; i++) {
    const correctAnswer = obj.answer[i].toUpperCase().trim();
    const userAnswer = answer[i].toUpperCase().trim();

    if (correctAnswer === userAnswer) {
      updateDataConsole("correct");
      iterateArray.push("correctAnswer");
    } else {
      updateDataConsole("wrong");
      iterateArray.push(userAnswer);
      thereIsAMistake = true;
    }
  }

  if (thereIsAMistake) {
    errorIndex.push(indexOfQuestion);
    wrongAnswer.push(iterateArray);
  }

  haveAnotherQuestion();
}

// ***

function condition(correctAnswer, answer, indexOfQuestion) {
  if (correctAnswer === answer) {
    progress += 1;
    updateDataConsole("correct");
    haveAnotherQuestion();
  } else if (answer === undefined) {
    invalidInput();
  } else {
    progress += 1;
    updateDataConsole("wrong");
    errorIndex.push(indexOfQuestion);
    wrongAnswer.push(answer);
    haveAnotherQuestion();
  }
}

// ***

function haveAnotherQuestion() {
  const answerParent = document.getElementById(practiceContainerId);
  const newExercise = containsCondition(answerParent, thereIsExercise);
  const isTheLastExercise = containsCondition(answerParent, lastExercise);

  if (newExercise) {
    handleNewConsole();
    nextQuestion();
  } else if (isTheLastExercise) {
    handleNewConsole();
    nextQuestion();
  } else {
    return;
  }
}

// ***

function isFinish(lesson) {
  practiceOver(wrongAnswer, errorIndex, lesson);
}

// ***

function updateDataConsole(answer) {
  if (answer === "correct") {
    correct += 1;
    wrong += 0;
    point += 1;
  } else {
    correct += 0;
    wrong += 1;
    point += -1;
  }
}

// ***

function nextQuestion() {
  const questionParent = document.getElementById(questionPanelId);
  const questionChild = document.getElementById(questionContainerId);
  const answerParent = document.getElementById(practiceContainerId);
  const answerChild = document.getElementById(answerId);
  const arrow = document.getElementById(nextId);
  const isTheLastQuestion = containsCondition(answerParent, lastExercise);
  const haveQuestion = containsCondition(answerParent, thereIsExercise);

  if (haveQuestion || isTheLastQuestion) {
    removeChild(questionParent, questionChild);
    removeChild(answerParent, answerChild);
    removeChild(answerParent, arrow);
    exercise();
  }
}

// ***

function handleNewConsole() {
  const answerParent = document.getElementById(practiceContainerId);
  const isLastQuestion = containsCondition(answerParent, lastExercise);

  if (isLastQuestion) {
    giveMeExactLength();
  }
  removeConsole();
  generateReportConsole(progress, correct, wrong, point);
}

// There are no other exercises, so this function fixes the progress to the last value

function giveMeExactLength() {
  const element = document.getElementById(generalCountId);
  const string = element.textContent;
  progress = string.split("/")[1].trim();
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
  progress = 1;
  correct = 0;
  wrong = 0;
  point = 0;
  errorIndex = [];
  wrongAnswer = [];
  const tabs = document.querySelectorAll(buttonSelect);
  tabs.forEach((element) => {
    element.removeEventListener("click", reset);
  });
}

export {
  generateMultipleAnswer,
  generateOpenAnswer,
  generateBooleanAnswer,
  generateFlashCardAnswer,
  isFinish,
};
