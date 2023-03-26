const questions = [
  {
    Question: "Which of the following is a markup language ?",
    a: "Css",
    b: "Bootstrap",
    c: "HTML",
    d: "JS",
    correct: "c",
  },
  {
    Question: "What year was JavaScript Launched ?",
    a: "1999",
    b: "1945",
    c: "1995",
    d: "1990",
    correct: "c",
  },
  {
    Question: "What does Css stands for?",
    a: "Hyper text markup language",
    b: "Cascading Style Sheet",
    c: "None of the Above",
    d: "Both a and b",
    correct: "b",
  },
];
let index = 0;
let total = questions.length;
let Right = 0;
let Wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const LoadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  // console.log(data);
  quesBox.innerText = ` ${index + 1}) ${data.Question}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const SubmitQuiz = () => {
  const data = questions[index];
  const Ans = getAnswer();
  if (Ans === data.correct) {
    Right++;
  } else {
    Wrong++;
  }
  index++;
  LoadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `  
  <div style=" text-align:center">
  <h3> Thanks for Attempting Quiz.<h3/>
  <h2> ${Right}/ ${total} are correct.<h2/>
  <div/>
  `;
};
LoadQuestion();
