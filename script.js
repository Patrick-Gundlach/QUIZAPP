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

let currentQuestion = 0;

function init() {
  document.getElementById('allQuestions').innerHTML = questions.length;
  document.getElementById('allQuestionsFin').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
  } else {

    let question = questions[currentQuestion];
    document.getElementById('isQuestions').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("nextButten").disabled = false;
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
function loadConfetti(){
  let btnConfetti = document.querySelector('.finConfetti');
  btnConfetti.addEventListener('click', function(){
    confetti({
      particleCount: 100,
      spread: 300,
      origin: {y: 0.6}
   })
  })
}

function loadConfettiHover() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {y: 0.7}
  });
}
