import appendElement from "../helpers/appendElement";
import defineClass from "../definers/defineClass";
import format from "../helpers/format";
import howManyElement from "../helpers/howManyElement";
import defineText from "../definers/defineText";
import { leftContainerId } from "@/variables/idName";
import { paragraphContainerClass } from "@/variables/className";

export default function generateListLesson(element) {
  const array = element.li;
  const panel = document.getElementById(leftContainerId);
  const container = document.createElement("div");

  appendElement(panel, container);
  defineClass(container, paragraphContainerClass);
  createParagraph(container, array);
}

// ***

function createParagraph(container, array) {
  const list = document.createElement("ol");
  const length = howManyElement(array);

  appendElement(container, list);
  iterate(list, length, array);
}

// ***

function iterate(list, length, array) {
  for (let i = 0; i < length; i++) {
    const li = document.createElement("li");
    const index = i;

    appendElement(list, li);
    defineText(li, array[index]);
    defineFormat(array, index, li);
  }
}

// ***

function defineFormat(array, index, li) {
  const text = array[index];
  const textFormat = format(text);

  li.innerHTML = textFormat;
}
