import { lessonPanelId } from "@/variables/idName";

export default function removeLessonConsole() {
  const lesson = document.getElementById(lessonPanelId);
  lesson.style.display = "none";
}
