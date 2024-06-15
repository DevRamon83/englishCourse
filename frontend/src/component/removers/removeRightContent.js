import {
  rightContainerId,
  rightPanelId,
  topRightConsoleId,
} from "@/variables/idName";
import defineId from "../definers/defineId";
import removeChild from "./removeChild";

export default function removeRightContent() {
  const child = document.getElementById(rightContainerId);
  const parent = document.getElementById(rightPanelId);
  const reborn = document.createElement("div");

  removeChild(parent, child);
  defineId(reborn, rightContainerId);

  parent.insertBefore(reborn, parent.firstChild);

  removeMenuElements();
}

// ***

function removeMenuElements() {
  const parent = document.getElementById(rightPanelId);
  const child = document.getElementById(topRightConsoleId);

  removeChild(parent, child);
}
