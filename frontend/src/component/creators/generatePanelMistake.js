import { questionContainerId, questionPanelId } from "@/variables/idName";
import defineId from "../definers/defineId";
import defineText from "../definers/defineText";
import appendElement from "../helpers/appendElement";
import defineSrc from "../definers/defineSrc";
import defineClass from "../definers/defineClass";

export default function generatePanelMistake(obj, progress) {
  const errorNum = progress + 1;
  const type = obj.type;

  isAFlashCard(type, obj, errorNum);
}

// ***

function isAFlashCard(type, obj, errorNum) {
  if (type === "flashCard") {
    handleFlashCard(obj, errorNum);
  } else {
    const panel = document.getElementById(questionPanelId);
    const question = document.createElement("div");
    const text = `Errore ${errorNum}: ${obj.question}`;

    appendElement(panel, question);
    defineId(question, questionContainerId);
    defineText(question, text);
  }
}

// ***

function handleFlashCard(obj, errorNum) {
  const panel = document.getElementById(questionPanelId);
  const question = document.createElement("div");
  const paragraph = document.createElement("p");
  const img = document.createElement("img");

  const text =
    "Errore " +
    errorNum +
    ": " +
    obj.flashCard +
    " di " +
    obj.ita.toUpperCase();
  defineText(paragraph, text);
  defineSrc(img, obj.src);
  defineId(question, questionContainerId);
  defineClass(question, "review__leftPanel");
  appendElement(panel, question);
  appendElement(question, paragraph);
  appendElement(paragraph, img);
}
