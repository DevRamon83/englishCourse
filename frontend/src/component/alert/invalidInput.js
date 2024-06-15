import {
  alertCloseId,
  alertPanelId,
  practiceContainerId,
} from "@/variables/idName";
import defineClass from "../definers/defineClass";
import defineId from "../definers/defineId";
import appendElement from "../helpers/appendElement";
import removeChild from "../removers/removeChild";
import removeClass from "../removers/removeClass";
import defineText from "../definers/defineText";
import { mandatoryAnswerText } from "@/variables/texts";
import defineSrc from "../definers/defineSrc";
import { closeSrc } from "@/variables/src";
import { alertCloseClass, alertOpenClass } from "@/variables/className";

export default function invalidInput() {
  const container = document.getElementById(practiceContainerId);

  const alertPanel = document.createElement("div");
  const alertText = document.createElement("p");
  const closeImg = document.createElement("img");

  defineText(alertText, mandatoryAnswerText);
  appendElement(container, alertPanel);
  appendElement(alertPanel, alertText);
  appendElement(alertPanel, closeImg);
  defineId(alertPanel, alertPanelId);
  defineId(closeImg, alertCloseId);
  defineClass(alertPanel, alertOpenClass);
  defineSrc(closeImg, closeSrc);
  listenForClose(closeImg);
}

// ***

function listenForClose(closeImg) {
  closeImg.addEventListener("click", close);
}

// ***

function close() {
  const parent = document.getElementById(practiceContainerId);
  const child = document.getElementById(alertPanelId);

  removeClass(child, alertOpenClass);
  defineClass(child, alertCloseClass);

  setTimeout(() => {
    removeChild(parent, child);
  }, 800);
}
