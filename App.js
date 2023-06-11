const questions = [
  {
    q: "Brain tumors can be located using an isotope of",
    a: [
      { text: "carbon -14", correct: false },
      { text: "uranium 235", correct: false },
      { text: "iodine 131", correct: true },
    ],
  },
  {
    q: "The following are Ores of metals EXCEPT ?",
    a: [
      { text: "graphite", correct: true },
      { text: "dolomite", correct: false },
      { text: "bauxite", correct: false },
    ],
  },
  {
    q: "Ptotal = P1 + P2 + ......Pn, is an expression of law",
    a: [
      { text: "Charles law", correct: false },
      { text: "Dalton law", correct: true },
      { text: "Gay Lussac law", correct: false },
    ],
  },
  {
    q: "All the following belong to the same family EXCEPT",
    a: [
      { text: "polyethene", correct: false },
      { text: "nylon", correct: false },
      { text: "glycerol", correct: true },
    ],
  },
  {
    q: "How many atoms of chlorine are required to saturate the double bonds of a compound containing a triene?",
    a: [
      { text: "6", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    q: "Which of the following gases is absorbed from the air during photosynthesis?",
    a: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon dioxide", correct: true },
    ],
  },
  {
    q: "Non-polar molecules are held together by",
    a: [
      { text: "Covalent bond", correct: false },
      { text: "Van der Waals forces", correct: true },
      { text: "Hydrogen bond", correct: false },
    ],
  },
  {
    q: "Which of the following is a solid at room temperature?",
    a: [
      { text: "Iodine", correct: true },
      { text: "Chlorine", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    q: "The greenhouse effect is a climatic condition associated with the presence of excess",
    a: [
      { text: "Carbon dioxide", correct: false },
      { text: "Hydrogen sulfide", correct: true },
      { text: "Oxygen", correct: false },
    ],
  },
  {
    q: "Which of the following metals is not extracted by electrolysis?",
    a: [
      { text: "Aluminium", correct: false },
      { text: "Magnesium", correct: false },
      { text: "Iron", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.q;

  currentQuestion.a.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => {
      selectAnswer(answer.correct);
    });
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(correct) {
  if (correct) {
    score++;
  }
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your score: ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
