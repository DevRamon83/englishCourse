import { leftContainerId } from "@/variables/idName";
import defineClass from "../definers/defineClass";
import appendElement from "../helpers/appendElement";
import { imgContainerClass } from "@/variables/className";

export default function generateImgLesson(element) {
  const panel = document.getElementById(leftContainerId);
  const container = document.createElement("div");

  defineClass(container, imgContainerClass);
  appendElement(panel, container);
  createImg(container, element.src);
}

function createImg(container, src) {
  const img = document.createElement("img");

  appendElement(container, img);
  img.src = src;
}
