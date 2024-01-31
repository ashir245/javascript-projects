const startBtn = document.querySelector(".btn");
const popInfo = document.querySelector(".popup-info");
const exitbtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continuebtn = document.querySelector(".continue-btn");
const quizsection = document.querySelector(".quiz-section");
const quizbox = document.querySelector(".quiz-box"); // Changed selector here
const resultbox = document.querySelector(".result-box");
const tryagainbtn = document.querySelector(".try-again-btn");
const gohomebtn = document.querySelector(".gohome-btn");
startBtn.onclick = () => {
  popInfo.classList.add("active");
  main.classList.add("active");
};

exitbtn.onclick = () => {
  popInfo.classList.remove("active");
  main.classList.remove("active");
};

continuebtn.onclick = () => {
  quizsection.classList.add("active");
  popInfo.classList.remove("active");
  main.classList.remove("active");
  quizbox.classList.add("active");
  showQuestions(0);
  questionCount(1);
  headerscore();
};
tryagainbtn.onclick = () => {
  quizbox.classList.add("active");
  resultbox.classList.remove("active");
  questionCount = 0;
  questionNumb = 1;
  userscore = 0;
  showQuestions(questionCount);
  countQuestion(questionNumb);
  nextBtn.classList.remove("active");
  headerscore();
};
gohomebtn.onclick = () => {
  quizsection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultbox.classList.remove("active");
  questionCount = 0;
  questionNumb = 1;
  userscore = 0;
  showQuestions(questionCount);
  countQuestion(questionNumb);
  headerscore();
};

let questionCount = 0;
let questionNumb = 1;
let userscore = 0;
const nextBtn = document.querySelector(".next-btn");
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    countQuestion(questionNumb);
    nextBtn.classList.remove("active");
  } else {
    showresultBox();
  }
};

//getting quest and options from array
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}.${questions[index].question}`;
  let optiontag = `<div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>`;
  optionList.innerHTML = optiontag;
  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionselected(this)");
  }
}

const optionList = document.querySelector(".option-list");

function optionselected(answer) {
  let useranswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let alloptions = optionList.children.length;
  if (useranswer == correctAnswer) {
    answer.classList.add("correct");
    userscore += 1;
    headerscore();
  } else {
    answer.classList.add("incorrect");
    //if answer is incorrect auto select correct one
    for (let i = 0; i < alloptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }
  //user selected disable the rest
  for (let i = 0; i < alloptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
  nextBtn.classList.add("active");
}
function countQuestion(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerscore() {
  const headerscoretext = document.querySelector(".header-score");
  headerscoretext.textContent = `Score: ${userscore} / ${questions.length}`;
}

function showresultBox() {
  quizbox.classList.remove("active");
  resultbox.classList.add("active");
  const scoretext = document.querySelector(".score-text");
  scoretext.textContent = `your Score: ${userscore} / ${questions.length}`;
  const circularProgress = document.querySelector(".circular-progress");
  const Progressvalue = document.querySelector(".progress-value");
  let progressstartvalue = -1;
  let progressendvalue = (userscore / questions.length) * 100;
  let speed = 20;
  let progress = setInterval(() => {
    progressstartvalue++;
    Progressvalue.textContent = `${progressstartvalue}%`;
    circularProgress.style.background = `conic-gradient(#0062c4 ${
      progressstartvalue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;
    if (progressstartvalue == progressendvalue) {
      clearInterval(progress);
    }
  }, speed);
}
