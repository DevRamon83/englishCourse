import {
  containerTitleId,
  leftConsoleId,
  leftContainerId,
} from "@/variables/idName";
import { paragraphContainerSelect } from "@/variables/selector";
import removeChild from "./removeChild";

export default function removeLesson() {
  const parentTitle = document.getElementById(leftConsoleId);
  const titleContainer = document.getElementById(containerTitleId);
  const parentBody = document.getElementById(leftContainerId);
  const containerContent = document.querySelectorAll(paragraphContainerSelect);

  removeChild(parentTitle, titleContainer);

  containerContent.forEach((element) => {
    removeChild(parentBody, element);
  });
}
