const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Transfer Markup Language",
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What is the output of console.log(2 + '2') in JavaScript?",
        options: [
            "4",
            '"4"',
            '"22"',
            "Error"
        ],
        correctAnswer: '"22"'
    },
    {
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        correctAnswer: "color"
    },
    {
        question: "Which of the following is NOT a programming language?",
        options: [
            "Python",
            "HTML",
            "Java",
            "C++"
        ],
        correctAnswer: "HTML"
    },
    {
        question: "What does `git commit -m 'message'` do in Git?",
        options: [
            "Saves changes to a remote repository",
            "Creates a new branch",
            "Saves changes locally with a message",
            "Deletes the last commit"
        ],
        correctAnswer: "Saves changes locally with a message"
    }
];



//get DOM elements
const displayQuestion = document.getElementById(`question`);
const answerBtns = document.getElementById(`answerBtns`);
const nextBtn = document.getElementById(`nextBtn`);
const progressIndicator = document.getElementById(`progressIndicator`)
let currentQuestionIndex = 0;
let score = 0;
let currentQuestion = questions[currentQuestionIndex];



function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = `Next`;
    showQuestion();
}


function showQuestion() {
    nextBtn.style.display = "block";
    answerBtns.innerHTML = "";
    currentQuestion = questions[currentQuestionIndex];
    displayQuestion.innerHTML = currentQuestion.question;
    currentQuestion.options.forEach(option => {
        const button = document.createElement(`button`);
        button.innerText = option;
        button.classList.add(`btn`);
        button.addEventListener(`click`, () => handleAnswer(option, button));
        answerBtns.appendChild(button);
        progressIndicator.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`
    });
    //nextBtn[0].style.display = `none`
    
}

function showFinalScore(){
    displayQuestion.innerHTML =` You have completed the Quiz!`;
    answerBtns.innerHTML= `Your final score is ${score}/ ${questions.length}`;
    nextBtn.innerHTML =`Restart Quiz`;
    nextBtn.style.display =` block`;
    nextBtn.onclick = startQuiz;
}

nextBtn.addEventListener(`click`, () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
})



function handleAnswer(selectedAns, button) {
    Array.from(answerBtns.children).forEach(btn => btn.disabled = true);
    if (selectedAns === currentQuestion.correctAnswer) {
        button.classList.add(`correct`)
        score++;

    } else {
        button.classList.add(`wrong`)
    }

    Array.from(answerBtns.children).forEach(btn => {
        if (btn.innerText === currentQuestion.correctAnswer) {
            btn.classList.add(`correct`);
        }
    })

    nextBtn[0].style.display = `block`;
}


startQuiz()






