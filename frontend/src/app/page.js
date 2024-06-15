"use client";

import Lesson from "@/component/Lesson";
import generateLesson from "@/component/creators/generateLesson";
import generateRightContent from "@/component/creators/generateRightContent";
import whatLessonItIs from "@/component/helpers/whatLessonItIs";
import removeLesson from "@/component/removers/removeLesson";
import removeRightContent from "@/component/removers/removeRightContent";
import { nextLessonId, numberLessonId, prevLessonId } from "@/variables/idName";
import { useEffect, useState } from "react";

export default function Home() {
  const [lessonNumber, setLessonNumber] = useState(1);

  let firstRender = true;

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      generateLesson(lessonNumber);
      generateRightContent(lessonNumber);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      whatLessonItIs(lessonNumber);

      const prev = document.getElementById(prevLessonId);
      prev.addEventListener("click", newLesson);

      const next = document.getElementById(nextLessonId);
      next.addEventListener("click", newLesson);

      const isTheLesson = document.getElementById(numberLessonId);
      isTheLesson.addEventListener("input", newLesson);
    }
  }, []);

  function newLesson() {
    const isTheLesson = document.getElementById(numberLessonId);
    const newLesson = parseInt(isTheLesson.value);

    setLessonNumber(newLesson);
    removeLesson();
    removeRightContent();
    generateLesson(newLesson);
    generateRightContent(newLesson);
  }

  return (
    <div id="layout__container">
      <div id="layout__leftPanel">
        <div id="layout__leftConsole"></div>
        <div id="layout__leftContainer"></div>
      </div>
      <div id="layout__rightPanel">
        <div id="layout__rightContainer"></div>
        <div id="layout__rightConsole">
          <Lesson lesson={lessonNumber} />
        </div>
      </div>
    </div>
  );
}
