import { activeConsoleClass, offConsoleClass } from "@/variables/className";
import { consoleId, rightConsoleId } from "@/variables/idName";
import removeChild from "./removeChild";
import removeClass from "./removeClass";
import defineClass from "../definers/defineClass";

export default function removeConsole() {
  const container = document.getElementById(rightConsoleId);
  const console = document.getElementById(consoleId);

  removeClass(console, activeConsoleClass);
  defineClass(console, offConsoleClass);

  setTimeout(() => {
    removeChild(container, console);
  }, 1000);
}
