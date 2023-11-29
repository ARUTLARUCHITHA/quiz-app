const quizData = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Jupiter', 'Mars', 'Saturn', 'Mercury'],
    answer: 'Mars'
  },
  {
    question: 'Who painted the Mona Lisa?',
    choices: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
    answer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the largest mammal in the world?',
    choices: ['Elephant', 'Blue whale', 'Giraffe', 'Hippopotamus'],
    answer: 'Blue whale'
  },
  {
    question: 'Which country is famous for the Great Wall?',
    choices: ['Japan', 'India', 'China', 'Italy'],
    answer: 'China'
  }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const resultsEl = document.getElementById('results');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.textContent = currentQuizData.question;
  choicesEl.innerHTML = '';
  currentQuizData.choices.forEach(choice => {
    const choiceEl = document.createElement('button');
    choiceEl.textContent = choice;
    choiceEl.addEventListener('click', checkAnswer);
    choicesEl.appendChild(choiceEl);
  });
}

function checkAnswer(e) {
  const selectedAnswer = e.target.textContent;
  const correctAnswer = quizData[currentQuestion].answer;
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quiz.style.display = 'none';
  resultsEl.innerHTML = `
    <h2>Your Score: ${score} out of ${quizData.length}</h2>
    <button onclick="location.reload()">Try Again</button>
  `;
}

loadQuestion();