import {
  answerId,
  nextId,
  pointCountId,
  practiceContainerId,
  practicePreReviewId,
  questionContainerId,
  questionPanelId,
  wrongCountId,
} from "@/variables/idName";
import defineClass from "../definers/defineClass";
import defineId from "../definers/defineId";
import appendElement from "../helpers/appendElement";
import ender from "../practice/ender";
import removeChild from "../removers/removeChild";
import generateCongratulation from "../creators/generateCongratulation";
import {
  practiceLeftReviewClass,
  practiceLeftReviewRowClass,
} from "@/variables/className";
import defineText from "../definers/defineText";
import { suggestReviewText } from "@/variables/texts";
import defineSrc from "../definers/defineSrc";
import { arrowSrc } from "@/variables/src";

export default function practiceOver(wrongAnswer, errorIndex, lesson) {
  if (errorIndex.length < 1) {
    generateCongratulation();
  } else {
    handleMistake(wrongAnswer, errorIndex, lesson);
  }
}

// ***

function handleMistake(wrongAnswer, errorIndex, lesson) {
  const leftContainer = document.getElementById(questionPanelId);
  const rightContainer = document.getElementById(practiceContainerId);

  const infoPanel = document.createElement("div");
  const resume = document.createElement("div");
  const mistakePanel = document.createElement("p");
  const pointPanel = document.createElement("p");
  const infoText = document.createElement("p");
  const img = document.createElement("img");

  defineSrc(img, arrowSrc);

  defineClass(infoPanel, practiceLeftReviewClass);
  defineClass(mistakePanel, practiceLeftReviewRowClass);
  defineClass(pointPanel, practiceLeftReviewRowClass);

  appendElement(leftContainer, infoPanel);
  appendElement(infoPanel, mistakePanel);
  appendElement(infoPanel, pointPanel);
  appendElement(rightContainer, resume);

  defineId(resume, answerId);
  defineId(infoPanel, questionContainerId);
  defineId(img, nextId);
  defineId(infoText, practicePreReviewId);
  appendElement(resume, infoText);
  appendElement(resume, img);

  defineText(infoText, suggestReviewText);

  renderMistake(mistakePanel);
  renderPoints(pointPanel);

  img.addEventListener("click", () => {
    removeChild(leftContainer, infoPanel);
    removeChild(rightContainer, resume);
    ender(wrongAnswer, errorIndex, lesson);
  });
}

// ***

function renderMistake(mistakePanel) {
  setTimeout(() => {
    const howManyMistakes = document.getElementById(wrongCountId).innerText;
    const mistakes = parseInt(howManyMistakes);
    const textResume = "Hai commesso " + mistakes + " errori ";
    mistakePanel.textContent = textResume;
  }, 1100);
}

// ***

function renderPoints(pointPanel) {
  setTimeout(() => {
    const howManyPoints = document.getElementById(pointCountId).innerText;
    const points = parseInt(howManyPoints);
    const pointResume = "totalizzando " + points + " punti ";
    pointPanel.textContent = pointResume;
  }, 1100);
}
