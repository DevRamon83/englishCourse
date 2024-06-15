import { questionContainerId, questionPanelId } from "@/variables/idName";
import defineId from "../definers/defineId";
import defineText from "../definers/defineText";
import appendElement from "../helpers/appendElement";
import { reviewQuestionText } from "@/variables/texts";

export default function generateReviewQuestion() {
  const panel = document.getElementById(questionPanelId);
  const question = document.createElement("div");

  appendElement(panel, question);
  defineId(question, questionContainerId);
  defineText(question, reviewQuestionText);
}
