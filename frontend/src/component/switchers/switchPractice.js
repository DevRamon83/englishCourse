import { eight } from "@/exercises/eight";
import { five } from "@/exercises/five";
import { four } from "@/exercises/four";
import { nine } from "@/exercises/nine";
import { one } from "@/exercises/one";
import { seven } from "@/exercises/seven";
import { six } from "@/exercises/six";
import { ten } from "@/exercises/ten";
import { three } from "@/exercises/three";
import { two } from "@/exercises/two";

export default function switchPractice(num) {
  let practice = {};
  let word; // temporaneo

  switch (num) {
    case 1:
      practice = one;
      break;
    case 2:
      practice = two;
      break;
    case 3:
      practice = three;
      break;
    case 4:
      practice = four;
      break;
    case 5:
      practice = five;
      break;
    case 6:
      practice = six;
      break;
    case 7:
      practice = seven;
      break;
    case 8:
      practice = eight;
      break;
    case 9:
      practice = nine;
      break;
    case 10:
      practice = ten;
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

  return practice;
}
