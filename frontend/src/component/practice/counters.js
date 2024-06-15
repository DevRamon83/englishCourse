import switchPractice from "../switchers/switchPractice";
import howManyElement from "../helpers/howManyElement";
import defineId from "../definers/defineId";
import defineClass from "../definers/defineClass";
import { consoleLabelClass } from "@/variables/className";
import defineText from "../definers/defineText";
import appendElement from "../helpers/appendElement";
import {
  correctLabelText,
  generalLabelText,
  pointLabelText,
  wrongLabelText,
} from "@/variables/texts";
import {
  consoleContainerId,
  consoleCorrectId,
  consoleGeneralId,
  consolePointId,
  consoleWrongId,
  correctCountId,
  generalCountId,
  numberLessonId,
  pointCountId,
  wrongCountId,
} from "@/variables/idName";

export default function counters(container, progress, correct, wrong, point) {
  const element = document.getElementById(numberLessonId);
  const lesson = parseInt(element.value);
  const file = switchPractice(lesson);
  const length = howManyElement(file);

  let progData = progress;
  let okData = correct;
  let wrongData = wrong;
  let pointData = point;

  createElement(length, container, progData, okData, wrongData, pointData);
}

// ***

function createElement(
  length,
  container,
  progData,
  okData,
  wrongData,
  pointData
) {
  const parent = document.createElement("div");
  const general = document.createElement("div");
  const generalLabel = document.createElement("p");
  const generalCount = document.createElement("p");
  const correct = document.createElement("div");
  const correctLabel = document.createElement("p");
  const correctCount = document.createElement("p");
  const wrong = document.createElement("div");
  const wrongLabel = document.createElement("p");
  const wrongCount = document.createElement("p");
  const point = document.createElement("div");
  const pointLabel = document.createElement("p");
  const pointCount = document.createElement("p");

  handleParentId(parent);
  handleGeneralId(general, generalCount);
  handleCorrectId(correct, correctCount);
  handleWrongId(wrong, wrongCount);
  handlePointId(point, pointCount);

  handleClasses(generalLabel, correctLabel, wrongLabel, pointLabel);

  handleLabelsTexts(generalLabel, correctLabel, wrongLabel, pointLabel);

  handleGeneralCount(generalCount, progData, length);
  handleCorrectCount(correctCount, okData);
  handleWrongCount(wrongCount, wrongData);
  handlePointCount(pointCount, pointData);

  appendToContainer(container, parent);
  appendToParent(parent, general, correct, wrong, point);
  appendToGeneral(general, generalLabel, generalCount);
  appendToCorrect(correct, correctLabel, correctCount);
  appendToWrong(wrong, wrongLabel, wrongCount);
  appendToPoint(point, pointLabel, pointCount);
}

// ***

function handleParentId(parent) {
  defineId(parent, consoleContainerId);
}

// ***

function handleGeneralId(general, generalCount) {
  defineId(general, consoleGeneralId);
  defineId(generalCount, generalCountId);
}

// ***

function handleCorrectId(correct, correctCount) {
  defineId(correct, consoleCorrectId);
  defineId(correctCount, correctCountId);
}

// ***

function handleWrongId(wrong, wrongCount) {
  defineId(wrong, consoleWrongId);
  defineId(wrongCount, wrongCountId);
}

// ***

function handlePointId(point, pointCount) {
  defineId(point, consolePointId);
  defineId(pointCount, pointCountId);
}

// ***

function handleClasses(generalLabel, correctLabel, wrongLabel, pointLabel) {
  defineClass(generalLabel, consoleLabelClass);
  defineClass(correctLabel, consoleLabelClass);
  defineClass(wrongLabel, consoleLabelClass);
  defineClass(pointLabel, consoleLabelClass);
}

// ***

function handleLabelsTexts(generalLabel, correctLabel, wrongLabel, pointLabel) {
  defineText(generalLabel, generalLabelText);
  defineText(correctLabel, correctLabelText);
  defineText(wrongLabel, wrongLabelText);
  defineText(pointLabel, pointLabelText);
}

// ***

function handleGeneralCount(generalCount, progData, length) {
  let text = progData + " / " + length;
  defineText(generalCount, text);
}

// ***

function handleCorrectCount(correctCount, okData) {
  defineText(correctCount, okData);
}

// ***

function handleWrongCount(wrongCount, wrongData) {
  defineText(wrongCount, wrongData);
}

// ***

function handlePointCount(pointCount, pointData) {
  defineText(pointCount, pointData);
}

// ***

function appendToContainer(container, parent) {
  appendElement(container, parent);
}

// ***

function appendToParent(parent, general, correct, wrong, point) {
  appendElement(parent, general);
  appendElement(parent, correct);
  appendElement(parent, wrong);
  appendElement(parent, point);
}

// ***

function appendToGeneral(general, generalLabel, generalCount) {
  appendElement(general, generalLabel);
  appendElement(general, generalCount);
}

// ***

function appendToCorrect(correct, correctLabel, correctCount) {
  appendElement(correct, correctLabel);
  appendElement(correct, correctCount);
}

// ***

function appendToWrong(wrong, wrongLabel, wrongCount) {
  appendElement(wrong, wrongLabel);
  appendElement(wrong, wrongCount);
}

// ***

function appendToPoint(point, pointLabel, pointCount) {
  appendElement(point, pointLabel);
  appendElement(point, pointCount);
}
