import {
  leftContainerId,
  lessonPanelId,
  noteContainerId,
  practiceContainerId,
  questionContainerId,
  questionPanelId,
  recommendedContainerId,
  rightContainerId,
  tabContainerId,
  vocabularyContainerId,
} from "@/variables/idName";
import removeConsole from "./removeConsole";
import { activeQuestionClass, offQuestionClass } from "@/variables/className";
import removeChild from "./removeChild";

export default function removeThisContent(index) {
  let child;

  const parent = document.getElementById(rightContainerId);

  switch (index) {
    case 0:
      child = document.getElementById(recommendedContainerId);
      break;
    case 1:
      child = document.getElementById(vocabularyContainerId);
      noTab();
      break;
    case 2:
      child = document.getElementById(noteContainerId);
      break;
    case 3:
      child = document.getElementById(practiceContainerId);
      noPanel();
      removeConsole();
      showConsole();
      noQuestion();
      showLesson();
      break;
    default:
      break;
  }

  removeChild(parent, child);
}

// ***

function noTab() {
  const parent = document.getElementById(vocabularyContainerId);
  const child = document.getElementById(tabContainerId);

  removeChild(parent, child);
}

// ***

function showConsole() {
  const lesson = document.getElementById(lessonPanelId);
  lesson.style.display = "";
}

// ***

function noPanel() {
  const panel = document.getElementById(questionPanelId);
  panel.classList.remove(activeQuestionClass);
  panel.classList.add(offQuestionClass);
  const parent = document.getElementById(leftContainerId);
  parent.style.overflowY = "scroll";

  setTimeout(() => {
    parent.removeChild(panel);
  }, 1000);
}

// ***

function noQuestion() {
  const parent = document.getElementById(questionPanelId);
  const child = document.getElementById(questionContainerId);

  removeChild(parent, child);
}

// ***

function showLesson() {
  const paragraph = document.querySelectorAll(".paragraphContainer");
  paragraph.forEach((element) => {
    element.style.display = "";
  });
}
