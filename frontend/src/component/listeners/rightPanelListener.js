import generateNoteContent from "../creators/generateNoteContent";
import generatePractice from "../creators/generatePractice";
import generateRecommendedContent from "../creators/generateRecommendedContent";
import generateVocabulary from "../creators/generateVocabulary";
import whichRightContentIsActive from "../helpers/whichRightContentIsActive";
import exercise from "../practice/exercise";
import removeClass from "../removers/removeClass";
import removeLessonConsole from "../removers/removeLessonConsole";
import removeThisContent from "../removers/removeThisContent";
import defineClass from "../definers/defineClass";
import {
  noteId,
  practiceId,
  recommendedId,
  vocabularyId,
} from "@/variables/idName";
import { activeClass } from "@/variables/className";
import { buttonSelect } from "@/variables/selector";

let array = [];
let isFirstRender;
let recommendedVar;
let vocabularyVar;
let noteVar;
let practiceVar;
let mySelf;
let func;
let removedFunc;
let removedMySelf = null;

export default function rightPanelListener(
  firstRender,
  recommended,
  vocabulary,
  note,
  practice,
  file
) {
  recommendedVar = recommended;
  vocabularyVar = vocabulary;
  noteVar = note;
  practiceVar = practice;
  array = file;
  isFirstRender = firstRender;

  listenAll();
}

function listenAll() {
  recommendedVar.addEventListener("click", recommendedListener);
  vocabularyVar.addEventListener("click", vocabularyListener);
  noteVar.addEventListener("click", noteListener);
  practiceVar.addEventListener("click", practiceListener);

  activeByDefault(recommendedVar);
}

// ***

function activeByDefault(recommended) {
  recommended.click();
}

// ***

function recommendedListener() {
  reborn();
  offOnListeners();

  const recommended = document.getElementById(recommendedId);
  const activeIndex = whichRightContentIsActive();
  mySelf = recommendedVar;
  func = recommendedListener;

  onOffButtons(recommended);

  if (isFirstRender) {
    isFirstRender = false;
  } else {
    removeThisContent(activeIndex);
  }

  generateRecommendedContent(array);

  setTimeout(() => {
    removeMySelf();
  }, 1200);
}

// ***

function vocabularyListener() {
  reborn();
  offOnListeners();

  const vocabulary = document.getElementById(vocabularyId);
  const activeIndex = whichRightContentIsActive();
  mySelf = vocabularyVar;
  func = vocabularyListener;

  removeThisContent(activeIndex);
  onOffButtons(vocabulary);
  generateVocabulary(array);

  setTimeout(() => {
    removeMySelf();
  }, 1300);
}

// ***

function noteListener() {
  reborn();
  offOnListeners();

  const note = document.getElementById(noteId);
  const activeIndex = whichRightContentIsActive();
  mySelf = noteVar;
  func = noteListener;

  removeThisContent(activeIndex);
  onOffButtons(note);
  generateNoteContent(array);

  setTimeout(() => {
    removeMySelf();
  }, 1300);
}

// ***

function practiceListener() {
  reborn();
  offOnListeners();

  const practice = document.getElementById(practiceId);
  const activeIndex = whichRightContentIsActive();
  mySelf = practiceVar;
  func = practiceListener;

  removeThisContent(activeIndex);
  removeLessonConsole();
  onOffButtons(practice);
  generatePractice();
  exercise();

  setTimeout(() => {
    removeMySelf();
  }, 1300);
}

// if users click other tabs before 1s, an error may occur

function offOnListeners() {
  recommendedVar.removeEventListener("click", recommendedListener);
  vocabularyVar.removeEventListener("click", vocabularyListener);
  noteVar.removeEventListener("click", noteListener);
  practiceVar.removeEventListener("click", practiceListener);

  setTimeout(() => {
    recommendedVar.addEventListener("click", recommendedListener);
    vocabularyVar.addEventListener("click", vocabularyListener);
    noteVar.addEventListener("click", noteListener);
    practiceVar.addEventListener("click", practiceListener);
  }, 1200);
}

// if users click 2 times the same tab, an error may occur

function removeMySelf() {
  mySelf.removeEventListener("click", func);
  removedMySelf = mySelf;
  removedFunc = func;
}

// old tab must be listening

function reborn() {
  if (removedMySelf !== null) {
    removedMySelf.addEventListener("click", removedFunc);
  }
}

// ***

function onOffButtons(activeElement) {
  const buttons = document.querySelectorAll(buttonSelect);

  buttons.forEach((element) => {
    removeClass(element, activeClass);
  });

  defineClass(activeElement, activeClass);
}
