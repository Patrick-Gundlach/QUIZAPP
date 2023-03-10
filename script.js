let questions = [
  {
    question: "Was bedeutet CSS?",
    answer_1: "Computer Style Sheets",
    answer_2: "Cascading Style Sheets",
    answer_3: "Creative Style Sheets",
    answer_4: "Current Style Sheets",
    right_answer: 2,
  },
  {
    question: "Wie kann man CSS in HTML integrieren?",
    answer_1: "Durch die Verwendung von JavaScript-Code",
    answer_2: "Durch die Verwendung von PHP-Code",
    answer_3: "Durch die Verwendung von einem Stylesheet-File",
    answer_4: "Durch die Verwendung von Datenbank-Abfragen",
    right_answer: 3,
  },
  {
    question: "Was ist WordPress?",
    answer_1: "Eine kostenlose Website-Builder-Software",
    answer_2: "Eine kostenpflichtige E-Commerce-Plattform",
    answer_3: "Eine Open-Source-Blogging-Plattform",
    answer_4: "Eine Social-Media-Plattform",
    right_answer: 3,
  },
  {
    question: "Was bedeutet HTML?",
    answer_1: "Hyperlinks and Text Markup Language",
    answer_2: "Home Tool Markup Language",
    answer_3: "High Tech Markup Language",
    answer_4: "Hyper Text Markup Language",
    right_answer: 4,
  },
  {
    question: "Was ist das alt-Attribut in HTML?",
    answer_1: "Ein Attribut, das das Layout einer Website steuert",
    answer_2:
      "Ein Attribut, das die Art und Weise bestimmt, wie Text auf einer Website formatiert wird",
    answer_3:
      "Ein Attribut, das eine alternative Beschreibung für Bilder bereitstellt",
    answer_4: "Ein Attribut, das eine alternative Sichtweise bereitstellt",
    right_answer: 3,
  },
  {
    question: "Wann wurde GitHub erfunden?",
    answer_1: "2003",
    answer_2: "2008",
    answer_3: "2005",
    answer_4: "2011",
    right_answer: 2,
  },
  {
    question: "Wer hat den Grundstein von Windows erfunden?",
    answer_1: "Tim Paterson 1980er",
    answer_2: "University of California, Berkeley 1970er",
    answer_3: "Bill Gates 1975er",
    answer_4: "Fred Brooks 1960er",
    right_answer: 1,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
  document.getElementById('allQuestions').innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    sohwEndScreen();

  } else {
    updateProgressBar()
    updateToNextQuestion();
  }
}
function gameIsOver() {
  return currentQuestion >= questions.length;
}
function sohwEndScreen() {
  document.getElementById('endScreen').style = '';
  document.getElementById('questionBody').style = 'display: none';
  document.getElementById('allQuestionsFin').innerHTML = questions.length;
  document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
  document.getElementById('header-image').src = './img/cup.png';
  startConfetti();
}

function startConfetti(){
  document.getElementById('header-image').classList.add('confettiGo');
  let headerImageHover = document.querySelector('.confettiGo');
  headerImageHover.addEventListener('mouseover', handleImageHover);
}


function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('isQuestions').innerHTML = currentQuestion + 1;
  document.getElementById('questionText').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}
function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById('progressBar').innerHTML = `${percent} %`;
  document.getElementById('progressBar').style = `width: ${percent}%`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(selectedQuestionNumber, question)) {
    successButton(selection);
  } else {
    dagerButton(selection, idOfRightAnswer);
  }
  document.getElementById("nextButten").disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question['right_answer'];
}

function successButton(selection) {
  document.getElementById(selection).parentNode.classList.add("bg-success");
  AUDIO_SUCCESS.play();
  rightQuestions++;
}
function dagerButton(selection, idOfRightAnswer) {
  document.getElementById(selection).parentNode.classList.add("bg-danger");
  document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  AUDIO_FAIL.play();
}
function nextQuestion() {
  currentQuestion++;
  document.getElementById("nextButten").disabled = true;
  resetAnswertButton();
  showQuestion();
}

function resetAnswertButton() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

// Confetti
function loadConfetti() {
  let btnConfetti = document.querySelector('.finConfetti');
  btnConfetti.addEventListener('click', function () {
    confetti({
      particleCount: 100,
      spread: 300,
      origin: { y: 0.6 }
    })
  })
}

function loadConfettiHover() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.7 }
  });
}
function handleImageHover() {
  console.log('Confetti für alle')
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.7 }
  });
}

function restartGame() {
  document.getElementById('header-image').src = './img/background-paper.jpg';
  document.getElementById('endScreen').style = 'display: none';
  document.getElementById('questionBody').style = '';
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
