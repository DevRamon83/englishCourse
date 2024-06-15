import { reviewCorrectClass, reviewWrongClass } from "@/variables/className";
import defineClass from "../definers/defineClass";
import appendElement from "../helpers/appendElement";
import howManyElement from "../helpers/howManyElement";
import switchExerciseTypeReview from "../switchers/switchExerciseTypeReview";
import booleanTranslator from "../conditions/booleanTranslator";
import defineText from "../definers/defineText";
import { correctTextBase, wrongTextBase } from "@/variables/texts";

function generateCorrection(answer, answerPanel, obj) {
  const type = obj.type;

  switchExerciseTypeReview(type, answer, answerPanel, obj);
}

// ***

function isAFlashCard(answer, answerPanel, obj) {
  const length = howManyElement(answer);
  const array = answer[0];

  for (let i = 0; i <= length; i++) {
    if (array[i] !== "correctAnswer") {
      const yourAnswer = array[i];
      const rightAnswer = obj.answer[i].toUpperCase();
      const wrongAnswer = document.createElement("p");
      const correctAnswer = document.createElement("p");

      handleElements(answerPanel, wrongAnswer, correctAnswer);
      textDefiner(wrongTextBase, wrongAnswer, yourAnswer);
      textDefiner(correctTextBase, correctAnswer, rightAnswer);
      handleClasses(wrongAnswer, correctAnswer);
    }
  }
}

// ***

function isAnOpenAnswer(answer, answerPanel, obj) {
  const yourAnswer = answer[0];
  const rightAnswer = obj.answer.toUpperCase();
  const wrongAnswer = document.createElement("p");
  const correctAnswer = document.createElement("p");

  handleElements(answerPanel, wrongAnswer, correctAnswer);
  textDefiner(wrongTextBase, wrongAnswer, yourAnswer);
  textDefiner(correctTextBase, correctAnswer, rightAnswer);
  handleClasses(wrongAnswer, correctAnswer);
}

// ***

function isAMultipleAnswer(answer, answerPanel, obj) {
  const yourAnswer = answer;
  const wrongAnswer = document.createElement("p");
  const correctAnswer = document.createElement("p");
  const index = obj.answer;
  const rightAnswer = obj.options[index].toUpperCase();

  handleElements(answerPanel, wrongAnswer, correctAnswer);
  textDefiner(wrongTextBase, wrongAnswer, yourAnswer);
  textDefiner(correctTextBase, correctAnswer, rightAnswer);
  handleClasses(wrongAnswer, correctAnswer);
}

// ***

function isABooleanAnswer(answer, answerPanel, obj) {
  const yourAnswer = booleanTranslator(answer[0]);
  const rightAnswer = booleanTranslator(obj.answer);
  const wrongAnswer = document.createElement("p");
  const correctAnswer = document.createElement("p");

  handleElements(answerPanel, wrongAnswer, correctAnswer);
  textDefiner(wrongTextBase, wrongAnswer, yourAnswer);
  textDefiner(correctTextBase, correctAnswer, rightAnswer);
  handleClasses(wrongAnswer, correctAnswer);
}

// ***

function handleElements(answerPanel, wrongAnswer, correctAnswer) {
  appendElement(answerPanel, wrongAnswer);
  appendElement(answerPanel, correctAnswer);
}

// ***

function handleClasses(wrongAnswer, correctAnswer) {
  defineClass(wrongAnswer, reviewWrongClass);
  defineClass(correctAnswer, reviewCorrectClass);
}

// ***

function textDefiner(base, element, answer) {
  let text = base + answer;
  defineText(element, text);
}

export {
  generateCorrection,
  isAFlashCard,
  isAnOpenAnswer,
  isAMultipleAnswer,
  isABooleanAnswer,
};
