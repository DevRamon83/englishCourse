import appendElement from "../helpers/appendElement";
import defineId from "../definers/defineId";
import { questionContainerId, questionPanelId } from "@/variables/idName";
import defineSrc from "../definers/defineSrc";

export default function generateFlashCard(file, index) {
  const panel = document.getElementById(questionPanelId);
  const flashCard = document.createElement("img");

  appendElement(panel, flashCard);
  defineSrc(flashCard, file[index].src);
  defineId(flashCard, questionContainerId);
  defineStyle(flashCard);
}

// ***

function defineStyle(flashCard) {
  flashCard.style.width = "auto";
  flashCard.style.height = "auto";
  flashCard.style.padding = "0";
}
