export default function containsCondition(element, classCondition) {
  if (element.classList.contains(classCondition)) {
    return true;
  } else {
    return false;
  }
}
