function multipleAnswer(inputs) {
  let answer;
  inputs.forEach((element, index) => {
    if (element.checked) {
      answer = index;
    }
  });

  return answer;
}

// ***

function booleanAnswer(inputs) {
  let answer;
  inputs.forEach((element) => {
    if (element.checked && element.value === "vero") {
      answer = true;
    } else if (element.checked && element.value === "falso") {
      answer = false;
    }
  });
  return answer;
}

// ***

function flashCardAnswer(inputs) {
  let answer = [];
  inputs.forEach((element) => {
    answer.push(element.value);
  });

  return answer;
}

export { multipleAnswer, booleanAnswer, flashCardAnswer };
