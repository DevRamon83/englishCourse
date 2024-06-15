import appendElement from "../helpers/appendElement";
import defineClass from "../definers/defineClass";
import defineId from "../definers/defineId";
import generateReportConsole from "./generateReportConsole";
import {
  leftContainerId,
  practiceContainerId,
  questionPanelId,
  rightContainerId,
} from "@/variables/idName";
import { activeQuestionClass } from "@/variables/className";

export default function generatePractice() {
  const parent = document.getElementById(rightContainerId);
  const container = document.createElement("div");

  defineId(container, practiceContainerId);
  appendElement(parent, container);
  generateQuestionPanel();

  // Is first rendering, so we need pass value for:
  // 1) progress - 2) correct answers - 3) wrong answers - 4) points
  // to the console.
  // Progress defines which exercise is, so it must be initiated equal to one

  generateReportConsole(1, 0, 0, 0);
}

// ***

function generateQuestionPanel() {
  const parent = document.getElementById(leftContainerId);
  const questionPanel = document.createElement("div");

  returnOnTop(parent);
  appendElement(parent, questionPanel);
  defineId(questionPanel, questionPanelId);
  defineClass(questionPanel, activeQuestionClass);
  hideLesson();

  setTimeout(() => {
    parent.style.overflowY = "hidden";
  }, 1000);
}

// ***

function returnOnTop(parent) {
  parent.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function hideLesson() {
  const paragraph = document.querySelectorAll(".paragraphContainer");

  setTimeout(() => {
    paragraph.forEach((element) => {
      element.style.display = "none";
    });
  }, 1100);
}
