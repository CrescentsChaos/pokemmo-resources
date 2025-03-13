async function fetchQuestions() {
    const response = await fetch('../../data/questions.json');
    const data = await response.json();
    return shuffleArray(data).slice(0, 5); // Limit to 5 questions
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = 0;
let chartInstance = null;

async function loadQuestion() {
    if (questions.length === 0) {
        questions = await fetchQuestions();
    }
    
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("question").innerText = "Quiz Over!";
        document.getElementById("options").innerHTML = "";
        showChart();
        document.getElementById("restart").style.display = "block";
        return;
    }
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("options").innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        document.getElementById("options").appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    } else {
        incorrectAnswers++;
    }
    document.getElementById("score").innerText = score;
    currentQuestionIndex++;
    loadQuestion();
}

function showChart() {
    const ctx = document.getElementById('resultChart').getContext('2d');
    const totalQuestions = score + incorrectAnswers;
    const correctPercentage = ((score / totalQuestions) * 100).toFixed(2);
    const incorrectPercentage = ((incorrectAnswers / totalQuestions) * 100).toFixed(2);
    
    if (chartInstance) {
        chartInstance.destroy();
    }
    
    chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [`Correct Answers (${correctPercentage}%)`, `Incorrect Answers (${incorrectPercentage}%)`],
            datasets: [{
                data: [score, incorrectAnswers],
                backgroundColor: ['#28a745', '#dc3545']
            }]
        }
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("restart").style.display = "none";
    document.getElementById("resultChart").getContext('2d').clearRect(0, 0, 400, 400);
    questions = [];
    loadQuestion();
}

loadQuestion();