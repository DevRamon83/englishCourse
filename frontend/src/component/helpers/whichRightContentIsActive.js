import { activeClass } from "@/variables/className";
import { buttonSelect } from "@/variables/selector";
import containsCondition from "../conditions/containsCondition";

export default function whichRightContentIsActive() {
  const buttons = document.querySelectorAll(buttonSelect);
  let isActive;

  buttons.forEach((element, index) => {
    let buttonActive = containsCondition(element, activeClass);

    if (buttonActive) {
      isActive = index;
    }
  });

  return isActive;
}
