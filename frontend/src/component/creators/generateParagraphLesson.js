import appendElement from "../helpers/appendElement";
import defineClass from "../definers/defineClass";
import format from "../helpers/format";
import { leftContainerId } from "@/variables/idName";
import { paragraphContainerClass } from "@/variables/className";

export default function generateParagraphLesson(element) {
  const panel = document.getElementById(leftContainerId);
  const container = document.createElement("div");

  defineClass(container, paragraphContainerClass);
  appendElement(panel, container);
  createParagraph(container, element);
}

// ***

function createParagraph(container, element) {
  const paragraph = document.createElement("p");

  appendElement(container, paragraph);
  injectText(element, paragraph);
}

// ***

function injectText(element, paragraph) {
  const text = element.text;
  const textFormat = format(text);

  paragraph.innerHTML = textFormat;
}
