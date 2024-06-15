import { containerTitleId, leftConsoleId } from "@/variables/idName";
import defineId from "../definers/defineId";
import defineText from "../definers/defineText";
import appendElement from "../helpers/appendElement";

export default function generateTitleLesson(obj) {
  const console = document.getElementById(leftConsoleId);
  const container = document.createElement("div");

  defineId(container, containerTitleId);
  appendElement(console, container);
  createTitle(container, obj);
}

// ***

function createTitle(container, obj) {
  const title = document.createElement("p");

  appendElement(container, title);
  defineText(title, obj.text);
}
