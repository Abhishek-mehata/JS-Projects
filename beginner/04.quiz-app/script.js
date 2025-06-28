// Get the DOM elements where we will display content
const questionElement = document.getElementById('question');             // For showing the current question
const optionsContainer = document.querySelector('.options');             // Container for option buttons
const questionNumberElement = document.querySelector('.s1');             // Shows current question number
const buttons = document.querySelectorAll('.btn');                       // All option buttons

// Initialize quiz state
let currentQuestionIndex = 0; // Tracks which question the user is on
let score = 0;                // User's score
let questions = [];           // Stores the loaded questions from the JSON file

// Async function to load questions from external JSON file
async function loadQuestions() {
    try {
        // Fetch the questions from 'questions.json'
        const response = await fetch('questions.json');
        // Parse the JSON data and store it in the questions array
        questions = await response.json();
        // Display the first question
        displayQuestion();
    } catch (error) {
        // If any error occurs, show error message in the question area
        console.error('Error loading questions:', error);
        questionElement.textContent = 'Failed to load questions.';
    }
}

// Function to display the current question and its options
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex]; // Get the current question object

        // Update question number text (e.g., "Question 1 out of 5")
        questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} out of ${questions.length}`;

        // Display the question text
        questionElement.textContent = currentQuestion.question;

        // Display each option
        buttons.forEach((button, index) => {
            button.textContent = currentQuestion.options[index];     // Set button text
            button.disabled = false;                                 // Enable the button
            button.style.background = 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))'; // Default style
        });
    } else {
        // If no more questions, show the final result
        showResults();
    }
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex]; // Get the current question

    if (selectedIndex === currentQuestion.correct) {
        // If the selected answer is correct
        score++; // Increase the score
        // Show green background for correct answer
        buttons[selectedIndex].style.background = 'linear-gradient(90deg, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.3))';
    } else {
        // Show red for selected wrong answer
        buttons[selectedIndex].style.background = 'linear-gradient(90deg, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.3))';
        // Show green for the correct answer
        buttons[currentQuestion.correct].style.background = 'linear-gradient(90deg, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.3))';
    }

    // Disable all buttons after answer is selected
    buttons.forEach(button => button.disabled = true);

    // Move to next question after 1 second
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}

// Function to show the final score after quiz ends
function showResults() {
    questionNumberElement.textContent = 'Quiz Completed!'; // Show completion message
    questionElement.textContent = `Your Score: ${score} out of ${questions.length}`; // Show final score
    // Replace options with a restart button
    optionsContainer.innerHTML = '<button class="btn" onclick="restartQuiz()">Restart Quiz</button>';
}

// Function to restart the quiz from beginning
function restartQuiz() {
    currentQuestionIndex = 0; // Reset question index
    score = 0;                // Reset score

    // Restore the option buttons
    optionsContainer.innerHTML = `
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
    `;

    // Re-select new buttons and re-style them
    document.querySelectorAll('.btn').forEach((button, index) => {
        buttons[index] = button; // Update reference
        button.disabled = false;
        button.style.background = 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))';
    });

    displayQuestion(); // Show the first question again
}

// Event listener to handle button clicks inside the options container
optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        // Convert NodeList to Array and find the index of clicked button
        const selectedIndex = Array.from(buttons).indexOf(e.target);
        checkAnswer(selectedIndex); // Check if selected answer is correct
    }
});

// Start the quiz by loading the questions
loadQuestions();


// loadQuestions() fetches and prepares data from a JSON file.

// displayQuestion() shows each question and its options.

// checkAnswer(index) checks if the user's clicked answer is right/wrong.

// showResults() displays the final score.

// restartQuiz() resets everything and starts again.

// An event listener listens for button clicks and processes answers.




