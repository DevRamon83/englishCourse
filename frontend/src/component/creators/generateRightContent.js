import {
  noteId,
  practiceId,
  recommendedId,
  rightPanelId,
  topRightConsoleId,
  vocabularyId,
} from "@/variables/idName";
import defineClass from "../definers/defineClass";
import defineId from "../definers/defineId";
import defineText from "../definers/defineText";
import appendElement from "../helpers/appendElement";
import rightPanelListener from "../listeners/rightPanelListener";
import switchLesson from "../switchers/switchLesson";
import {
  noteText,
  practiceText,
  recommendedText,
  vocabularyText,
} from "@/variables/texts";
import { rightMenuClass } from "@/variables/className";

const firstRender = true;

export default function generateRightContent(lesson) {
  const file = switchLesson(lesson);

  createMenu(file);
}

// ***

function createMenu(file) {
  const panel = document.getElementById(rightPanelId);

  const container = document.createElement("div");
  const recommended = document.createElement("div");
  const vocabulary = document.createElement("div");
  const note = document.createElement("div");
  const practice = document.createElement("div");

  defineId(container, topRightConsoleId);
  defineId(recommended, recommendedId);
  defineId(vocabulary, vocabularyId);
  defineId(note, noteId);
  defineId(practice, practiceId);

  defineClass(recommended, rightMenuClass);
  defineClass(vocabulary, rightMenuClass);
  defineClass(note, rightMenuClass);
  defineClass(practice, rightMenuClass);

  defineText(recommended, recommendedText);
  defineText(vocabulary, vocabularyText);
  defineText(note, noteText);
  defineText(practice, practiceText);

  appendElement(panel, container);
  appendElement(container, recommended);
  appendElement(container, vocabulary);
  appendElement(container, note);
  appendElement(container, practice);

  rightPanelListener(
    firstRender,
    recommended,
    vocabulary,
    note,
    practice,
    file
  );
}
