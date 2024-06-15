import appendElement from "../helpers/appendElement";
import defineId from "../definers/defineId";
import defineText from "../definers/defineText";
import { noteContainerId, rightContainerId } from "@/variables/idName";

export default function generateNoteContent(array) {
  const noteObj = array.find((item) => item.type === "note");

  generateContainer(noteObj);
}

// ***

function generateContainer(obj) {
  const parent = document.getElementById(rightContainerId);
  const container = document.createElement("p");

  defineId(container, noteContainerId);
  appendElement(parent, container);
  defineText(container, obj.text);
}
