import appendElement from "../helpers/appendElement";
import defineClass from "../definers/defineClass";
import defineId from "../definers/defineId";
import howManyElement from "../helpers/howManyElement";
import defineText from "../definers/defineText";
import { recommendedContainerId, rightContainerId } from "@/variables/idName";
import {
  recommendedGoClass,
  recommendedRowClass,
  textContainerClass,
} from "@/variables/className";
import defineSrc from "../definers/defineSrc";
import { arrowSrc } from "@/variables/src";
import { noRecommendedText } from "@/variables/texts";

export default function generateRecommendedContent(array) {
  const recommendedObj = array.find((item) => item.type === "recommended");

  generateContainer(recommendedObj);
}

// ***

function generateContainer(obj) {
  const parent = document.getElementById(rightContainerId);
  const container = document.createElement("div");

  defineId(container, recommendedContainerId);
  appendElement(parent, container);
  generateRow(obj, container);
}

// ***

function generateRow(obj, container) {
  const length = howManyElement(obj.title);

  iterate(obj, container, length);
}

// ***

function iterate(obj, container, length) {
  let delay = 0;
  for (let i = 0; i < length; i++) {
    const row = document.createElement("div");
    let index = i;
    delay += 0.2;
    row.style.animationDelay = delay + "s";

    appendElement(container, row);
    cycle(obj, row, index);
  }
}

// ***

function cycle(obj, row, index) {
  const title = document.createElement("span");
  const textContainer = document.createElement("div");
  const go = document.createElement("img");
  const author = document.createElement("span");

  defineSrc(go, arrowSrc);
  defineClasses(textContainer, row, go);
  isALink(obj, row, title, go, index);
  setTheAuthor(author, obj, index);
  appendElement(row, textContainer);
  appendElement(textContainer, title);
  appendElement(textContainer, author);
  appendElement(row, go);
}

// ***

function defineClasses(textContainer, row, go) {
  defineClass(textContainer, textContainerClass);
  defineClass(row, recommendedRowClass);
  defineClass(go, recommendedGoClass);
}

// ***

function isALink(obj, row, title, go, index) {
  if (obj.link !== false) {
    rowListener(obj, row, index);
    linkText(title, obj, index);
  } else {
    noContent(title, obj, index);
    removeImg(go);
  }
}

// ***

function removeImg(go) {
  go.style.display = "none";
}

// ***

function linkText(title, obj, index) {
  const list = index + 1;
  const text = list + ". " + obj.title[index];

  defineText(title, text);
}

// ***

function noContent(title, obj, index) {
  defineText(title, obj.title[index]);
}

// ***

function rowListener(obj, row, index) {
  row.addEventListener("click", () => {
    window.open(obj.link[index], "_blank");
  });
}

// ***

function setTheAuthor(author, obj, index) {
  if (obj.author === false) {
    defineText(author, noRecommendedText);
  } else {
    const text = "By " + obj.author[index];

    defineText(author, text);
  }
}
