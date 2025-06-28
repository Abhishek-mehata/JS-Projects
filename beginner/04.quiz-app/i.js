// ------------------X----------------------------------------X-----------------------------X------------------------------X----------------
const questionElement = document.getElementById("question");
const optionsContainer = document.querySelector(".options");
const questionNoElement = document.querySelector(".s1");
let buttons = document.querySelectorAll(".btn");
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

async function loadQuestions() {
    try {
        const response = await fetch("./questions.json");
        questions = await response.json();
        console.log(questions);
        displayQuestion();
    } catch (error) {
        console.log("opps cannot find questions");
        console.error(error);
    }
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionNoElement.textContent = `Question ${currentQuestionIndex + 1} out of ${questions.length}`;
        questionElement.textContent = currentQuestion.question;

        buttons.forEach((button, index) => {
            button.textContent = currentQuestion.options[index];
            button.disabled = false;
            button.style.background = 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))'; // Reset background
        });
    } else {
        showResults();
    }
}

function showResults() {
    questionNoElement.textContent = "Quiz Completed";
    questionElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    optionsContainer.style = `display:flex;justify-content:center;align-items:center;`;
    optionsContainer.innerHTML = '<button class="btn" onclick="restartQuiz()">Restart</button>';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    optionsContainer.innerHTML = `
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
    `;
    buttons = document.querySelectorAll(".btn"); // Reassign buttons
    buttons.forEach(button => {
        button.disabled = false;
    });

    displayQuestion();
}

optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn")) {
        const selectedIndex = Array.from(buttons).indexOf(e.target);
        checkAnswer(selectedIndex);
    }
});

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
        buttons[selectedIndex].style.background = 'linear-gradient(90deg, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.3))';
    } else {
        buttons[selectedIndex].style.background = 'linear-gradient(90deg, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.3))';
        buttons[currentQuestion.correct].style.background = 'linear-gradient(90deg, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.3))';
    }

    buttons.forEach(button => { button.disabled = true });
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 500);
}

loadQuestions();
