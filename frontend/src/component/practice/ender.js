import {
  answerId,
  nextId,
  practiceContainerId,
  questionContainerId,
  questionPanelId,
  reviewClosetId,
  reviewImgId,
  reviewRestartId,
  reviewTextId,
} from "@/variables/idName";
import switchPractice from "../switchers/switchPractice";
import { arrowSrc, checkSrc, closeNakedSrc } from "@/variables/src";
import defineSrc from "../definers/defineSrc";
import defineId from "../definers/defineId";
import appendElement from "../helpers/appendElement";
import howManyElement from "../helpers/howManyElement";
import removeChild from "../removers/removeChild";
import { generateCorrection } from "../creators/generateCorrection";
import generatePanelMistake from "../creators/generatePanelMistake";
import removeClass from "../removers/removeClass";
import { noExercise, thereIsExercise } from "@/variables/global";
import defineClass from "../definers/defineClass";
import { buttonSelect } from "@/variables/selector";
import defineText from "../definers/defineText";
import { reviewRestartText } from "@/variables/texts";
import generateReviewQuestion from "../creators/generateReviewQuestion";
import listenCloseReview from "../listeners/listenCloseReview";

let progress = 0;

export default function ender(wrongAnswer, errorIndex, lesson) {
  const file = switchPractice(lesson);

  listenForReset();
  obtainData(file, wrongAnswer, errorIndex, lesson);
}

// ***

function obtainData(file, wrongAnswer, errorIndex, lesson) {
  const obj = file[errorIndex[progress]];
  const length = howManyElement(errorIndex);

  if (progress < length) {
    generatePanelMistake(obj, progress);
    correction(obj, wrongAnswer, errorIndex, lesson);
  } else {
    stopReview(wrongAnswer, errorIndex, lesson);
  }

  progress += 1;
}

// ***

function stopReview(wrongAnswer, errorIndex, lesson) {
  generateReviewQuestion();
  newReview(wrongAnswer, errorIndex, lesson);
}

// ***

function newReview(wrongAnswer, errorIndex, lesson) {
  const parent = document.getElementById(practiceContainerId);
  const child = document.createElement("div");
  const imgContainer = document.createElement("span");
  const restart = document.createElement("img");
  const close = document.createElement("img");
  const text = document.createElement("p");

  handleId(restart, close, text, child, imgContainer);
  handleSrc(restart, close);
  defineText(text, reviewRestartText);
  handleAppend(restart, close, text, child, imgContainer, parent);
  listenCloseReview(close);
  listenRestart(restart, parent, child, wrongAnswer, errorIndex, lesson);
}

// ***

function handleId(restart, close, text, child, imgContainer) {
  defineId(restart, reviewRestartId);
  defineId(close, reviewClosetId);
  defineId(text, reviewTextId);
  defineId(child, answerId);
  defineId(imgContainer, reviewImgId);
}

// ***

function handleSrc(restart, close) {
  defineSrc(restart, checkSrc);
  defineSrc(close, closeNakedSrc);
}

// ***

function handleAppend(restart, close, text, child, imgContainer, parent) {
  appendElement(parent, child);
  appendElement(child, text);
  appendElement(text, imgContainer);
  appendElement(imgContainer, restart);
  appendElement(imgContainer, close);
}

// ***

function listenRestart(restart, parent, child, answer, errorIndex, lesson) {
  const questionContainer = document.getElementById(questionContainerId);
  const questionPanel = document.getElementById(questionPanelId);

  restart.addEventListener("click", () => {
    removeChild(parent, child);
    removeChild(questionPanel, questionContainer);
    progress = 0;
    ender(answer, errorIndex, lesson);
  });
}

// ***

function correction(obj, wrongAnswer, errorIndex, lesson) {
  const rightContainer = document.getElementById(practiceContainerId);
  const answers = [wrongAnswer[progress]];
  const rightPanel = document.createElement("div");

  defineId(rightPanel, answerId);
  removeClass(rightContainer, noExercise);
  defineClass(rightContainer, thereIsExercise);
  appendElement(rightContainer, rightPanel);
  yourAnswer(answers, rightPanel, obj);
  generateNext(rightContainer, wrongAnswer, errorIndex, lesson);
}

// ***

function yourAnswer(answers, rightPanel, obj) {
  let length = howManyElement(answers);

  iterate(length, rightPanel, answers, obj);
}

// ***

function iterate(length, rightPanel, userAnswer, obj) {
  const answerPanel = document.createElement("div");

  appendElement(rightPanel, answerPanel);
  let answer = [];

  for (let i = 0; i < length; i++) {
    if (isNaN(userAnswer[i]) || typeof userAnswer[i] === "boolean") {
      answer.push(userAnswer[i]);
    } else {
      answer = obj.options[userAnswer[i]];
    }
  }

  generateCorrection(answer, answerPanel, obj);
}

// ***

function generateNext(parent, wrongAnswer, errorIndex, lesson) {
  const next = document.createElement("img");

  defineSrc(next, arrowSrc);
  defineId(next, nextId);
  appendElement(parent, next);
  nextListener(next, wrongAnswer, errorIndex, lesson);
}

// ***

function nextListener(next, wrongAnswer, errorIndex, lesson) {
  next.addEventListener("click", () => {
    removeAll(wrongAnswer, errorIndex, lesson);
  });
}

// ***

function removeAll(wrongAnswer, errorIndex, lesson) {
  const parentLeft = document.getElementById(questionPanelId);
  const childLeft = document.getElementById(questionContainerId);
  const parentRight = document.getElementById(practiceContainerId);
  const childRight = document.getElementById(answerId);
  const arrow = document.getElementById(nextId);

  removeChild(parentLeft, childLeft);
  removeChild(parentRight, arrow);
  removeChild(parentRight, childRight);
  ender(wrongAnswer, errorIndex, lesson);
}

// ***

function listenForReset() {
  const tabs = document.querySelectorAll(buttonSelect);

  tabs.forEach((element) => {
    element.addEventListener("click", resetMistake);
  });
}

// ***

function resetMistake() {
  progress = 0;
  const tabs = document.querySelectorAll(buttonSelect);

  tabs.forEach((element) => {
    element.removeEventListener("click", resetMistake);
  });
}
