import appendElement from "../helpers/appendElement";
import defineClass from "../definers/defineClass";
import defineId from "../definers/defineId";
import counters from "../practice/counters";
import { consoleId, rightConsoleId } from "@/variables/idName";
import { activeConsoleClass } from "@/variables/className";

export default function generateReportConsole(progress, correct, wrong, point) {
  const container = document.getElementById(rightConsoleId);
  const console = document.createElement("div");

  defineId(console, consoleId);
  defineClass(console, activeConsoleClass);
  appendElement(container, console);
  counters(console, progress, correct, wrong, point);
}
