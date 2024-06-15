import { congratulationSrc } from "@/variables/src";
import defineSrc from "../definers/defineSrc";
import appendElement from "../helpers/appendElement";
import defineId from "../definers/defineId";
import {
  congratulationVideoId,
  practiceContainerId,
  questionContainerId,
  questionPanelId,
} from "@/variables/idName";
import defineText from "../definers/defineText";
import { congratulationText } from "@/variables/texts";

export default function generateCongratulation() {
  const container = document.getElementById(practiceContainerId);
  const video = document.createElement("video");

  video.muted = true;
  video.autoplay = true;
  video.loop = true;

  defineId(video, congratulationVideoId);
  appendElement(container, video);
  defineSrc(video, congratulationSrc);
  congratulationMessage();
}

// ***

function congratulationMessage() {
  const leftContainer = document.getElementById(questionPanelId);

  const infoPanel = document.createElement("div");
  const mistakePanel = document.createElement("p");

  defineText(mistakePanel, congratulationText);
  appendElement(leftContainer, infoPanel);
  appendElement(infoPanel, mistakePanel);
  defineId(infoPanel, questionContainerId);
}
