import generateImgLesson from "../creators/generateImgLesson";
import generateListLesson from "../creators/generateListLesson";
import generateParagraphLesson from "../creators/generateParagraphLesson";
import generateTitleLesson from "../creators/generateTitleLesson";

export default function switchElementType(element) {
  switch (element.type) {
    case "title":
      generateTitleLesson(element);
      break;
    case "paragraph":
      generateParagraphLesson(element);
      break;
    case "list":
      generateListLesson(element);
      break;
    case "img":
      generateImgLesson(element);
      break;
    default:
      break;
  }
}
