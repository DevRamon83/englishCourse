import {
  contentContainerId,
  rightContainerId,
  rightPanelId,
  tabContainerId,
  vocabularyContainerId,
} from "@/variables/idName";
import defineClass from "../definers/defineClass";
import defineId from "../definers/defineId";
import defineText from "../definers/defineText";
import appendElement from "../helpers/appendElement";
import howManyElement from "../helpers/howManyElement";
import removeClass from "../removers/removeClass";
import {
  titleClass,
  titleOffClass,
  titleOnClass,
  wordClassEng,
  wordClassIta,
  wordsContainerClass,
  wordsOffClass,
  wordsOnClass,
} from "@/variables/className";
import {
  vocabularyTitleSelect,
  wordsContainerSelect,
} from "@/variables/selector";

export default function generateVocabulary(array) {
  const vocabularyObj = array.find((item) => item.type === "vocabulary");
  const setOfWords = vocabularyObj.set;

  generateContainer(setOfWords);
}

// ***

function generateContainer(obj) {
  const parent = document.getElementById(rightContainerId);
  const vocabularyContainer = document.createElement("div");
  const tabContainer = document.createElement("div");
  const contentContainer = document.createElement("div");

  defineId(vocabularyContainer, vocabularyContainerId);
  defineId(tabContainer, tabContainerId);
  defineId(contentContainer, contentContainerId);

  appendElement(parent, vocabularyContainer);
  appendElement(vocabularyContainer, tabContainer);
  appendElement(vocabularyContainer, contentContainer);

  iterate(obj, tabContainer, contentContainer);
}

// ***

function iterate(obj, tabContainer, contentContainer) {
  const length = howManyElement(obj);
  let delay = -0.25;

  for (let i = 0; i < length; i++) {
    let index = i;
    delay += 0.25;
    const title = document.createElement("div");
    const wordsContainer = document.createElement("div");
    title.style.animationDelay = delay + "s";

    defineClass(title, titleClass);
    defineClass(wordsContainer, wordsContainerClass);

    conditionalClasses(
      tabContainer,
      contentContainer,
      wordsContainer,
      title,
      obj,
      index
    );
  }
}

// ***

function conditionalClasses(
  tabContainer,
  contentContainer,
  wordsContainer,
  title,
  obj,
  index
) {
  if (index === 0) {
    defineClass(title, titleOnClass);
    defineClass(wordsContainer, wordsOnClass);
  } else {
    defineClass(title, titleOffClass);
    defineClass(wordsContainer, wordsOffClass);
  }

  appendElement(tabContainer, title);
  appendElement(contentContainer, wordsContainer);
  defineText(title, obj[index].type);
  wordsList(obj, index);
}

// ***

function wordsList(obj, index) {
  const wordsContainer = document.querySelectorAll(wordsContainerSelect);
  const length = howManyElement(obj[index].ita);

  for (let i = 0; i < length; i++) {
    const word = document.createElement("div");
    const wordIndex = i;

    defineClass(word, wordClassIta);
    appendElement(wordsContainer[index], word);
    defineText(word, obj[index].ita[i]);
    listenThisElement(word, obj, index, wordIndex);
  }

  listenTitle();
}

// ***

function listenThisElement(word, obj, index, wordIndex) {
  word.addEventListener("click", () => {
    if (word.textContent === obj[index].ita[wordIndex]) {
      changeToEng(word, obj, index, wordIndex);
    } else {
      changeToIta(word, obj, index, wordIndex);
    }
  });
}

// ***

function changeToEng(word, obj, index, wordIndex) {
  defineText(word, obj[index].eng[wordIndex]);
  removeClass(word, wordClassIta);
  defineClass(word, wordClassEng);
}

// ***

function changeToIta(word, obj, index, wordIndex) {
  defineText(word, obj[index].ita[wordIndex]);
  defineClass(word, wordClassIta);
  removeClass(word, wordClassEng);
}

// ***

function listenTitle() {
  const titles = document.querySelectorAll(vocabularyTitleSelect);

  titles.forEach((element, index) => {
    element.addEventListener("click", () => handleClick(index));
  });
}

// ***

function handleClick(index) {
  const titles = document.querySelectorAll(vocabularyTitleSelect);
  const wordsContainer = document.querySelectorAll(wordsContainerSelect);

  defineOnOffTitle(index, titles);
  defineOnOffWords(index, wordsContainer);
}

// ***

function defineOnOffTitle(index, titles) {
  titles.forEach((element) => {
    removeClass(element, titleOnClass);
    defineClass(element, titleOffClass);
  });

  removeClass(titles[index], titleOffClass);
  defineClass(titles[index], titleOnClass);
}

// ***

function defineOnOffWords(index, wordsContainer) {
  wordsContainer.forEach((element) => {
    removeClass(element, wordsOnClass);
    defineClass(element, wordsOffClass);
  });

  removeClass(wordsContainer[index], wordsOffClass);
  defineClass(wordsContainer[index], wordsOnClass);
}
