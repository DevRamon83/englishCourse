import { recommendedId } from "@/variables/idName";

export default function listenCloseReview(close) {
  close.addEventListener("click", () => {
    const recommended = document.getElementById(recommendedId);
    recommended.click();
  });
}
