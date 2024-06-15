import { eight } from "@/lessons/eight";
import { five } from "@/lessons/five";
import { four } from "@/lessons/four";
import { nine } from "@/lessons/nine";
import { one } from "@/lessons/one";
import { seven } from "@/lessons/seven";
import { six } from "@/lessons/six";
import { ten } from "@/lessons/ten";
import { three } from "@/lessons/three";
import { two } from "@/lessons/two";

export default function switchLesson(num) {
  let lesson = {};
  let word; // temporaneo

  switch (num) {
    case 1:
      lesson = one;
      break;
    case 2:
      lesson = two;
      break;
    case 3:
      lesson = three;
      break;
    case 4:
      lesson = four;
      break;
    case 5:
      lesson = five;
      break;
    case 6:
      lesson = six;
      break;
    case 7:
      lesson = seven;
      break;
    case 8:
      lesson = eight;
      break;
    case 9:
      lesson = nine;
      break;
    case 10:
      lesson = ten;
      break;
    case 11:
      word = "eleven";
      break;
    case 12:
      word = "twelve";
      break;
    case 13:
      word = "thirteen";
      break;
    case 14:
      word = "fourteen";
      break;
    case 15:
      word = "fifteen";
      break;
    case 16:
      word = "sixteen";
      break;
    case 17:
      word = "seventeen";
      break;
    case 18:
      word = "eighteen";
      break;
    case 19:
      word = "nineteen";
      break;
    case 20:
      word = "twenty";
      break;
    case 21:
      word = "twentyOne";
      break;
    case 22:
      word = "twentyTwo";
      break;
    case 23:
      word = "twentyThree";
      break;
    case 24:
      word = "twentyFour";
      break;
    case 25:
      word = "twentyFive";
      break;
    case 26:
      word = "twentySix";
      break;
    case 27:
      word = "twentySeven";
      break;
    case 28:
      word = "twentyEight";
      break;
    case 29:
      word = "twentyNine";
      break;
    case 30:
      word = "thirty";
      break;
    case 31:
      word = "thirtyOne";
      break;
    case 32:
      word = "thirtyTwo";
      break;
    case 33:
      word = "thirtyThree";
      break;
    case 34:
      word = "thirtyFour";
      break;
    case 35:
      word = "thirtyFive";
      break;
    case 36:
      word = "thirtySix";
      break;
    case 37:
      word = "thirtySeven";
      break;
    case 38:
      word = "thirtyEight";
      break;
    case 39:
      word = "thirtyNine";
      break;

    default:
      break;
  }

  return lesson;
}
