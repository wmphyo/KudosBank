const questionsSets = [
    [
        {
            question: "1. For a family get-together, Darryl wants to be sure that each child gets 2 party favors. The party favors cost $3 each, and there are 11 children coming. How many party favors will Darryl need? ",
            options: [
                "A. 9",
                "B. 11",
                "C. 18",
                "D. 22"
            ],
            answer: "D",
            explanation: "Explanation: 11 children * 2 party favors per child = 22."
        },
        {
            question: "2.  Sarah and Kate live 18 miles apart, and they both work at the same office. If Sarah lives 25 miles from the office and Kate lives 30 miles from the office, how many miles farther from the office does Kate live than Sarah?",
            options: [
                "A. 5",
                "B. 7",
                "C. 12",
                "D. 15"
            ],
            answer: "A",
            explanation: "Explanation: Calculate: 30 − 25 = 5. The information that Sarah and Kate live 18 miles apart is not needed."
        },
        {
            question: "3. Which of the following correctly shows 1,543,976 rounded to the nearest hundred thousand?",
            options: [
                "A. 2,000,000",
                "B. 1,600,000",
                "C. 1,500,000",
                "D. 1,540,000"
            ],
            answer: "C",
            explanation: "Explanation:  The digit in the ten thousands column is less than 5, so round down"
        },
        {
            question: "4. Angelo bought a used car with 39,451 miles on it. If the car now has 70,040 miles on it, how many miles has Angelo driven the car? ",
            options: [
                "A. 30,589",
                "B. 39,459",
                "C. 70,040",
                "D. 109,491"
            ],
            answer: "A",
            explanation: "Explanation: Subtract to find the difference in mileage: 70,040 - 39,451 = 30,589 "
            
        },
        {
            question: "5. nventory shows that a warehouse has 45 printers in stock. If each printer is valued at $125, what is the total value of the printer inventory?",
            options: [
                "A. $5625",
                "B. $170",
                "C. $80",
                "D. $45"
            ],
            answer: "A",
            explanation: "Explanation: Multiply: $125 * 45 = $5625"
        },
        
        // Add more questions here
    
        // Add more questions for set 2 here
    ],
    // Add more question sets as needed
];

let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let currentQuestionSet = 0;

function loadQuestion() {
    // const passageContainer = document.querySelector('.passage');
    const questionContainer = document.querySelector('.multiple-choice');
    const currentQuestion = questionsSets[currentQuestionSet][currentQuestionIndex];

    // passageContainer.innerHTML = `<p>${currentQuestion.passage}</p>`;

    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map(option => `
            <label><input type="radio" name="question" value="${option.charAt(0)}"> ${option}</label>
        `).join('')}
        <p class="feedback" id="feedback"></p>
        <p class="explanation" id="explanation"></p>
    `;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsSets[currentQuestionSet].length) {
        loadQuestion();
        document.getElementById('btnCheck').style.display = 'block';
        document.getElementById('btnNext').style.visibility = 'hidden';
    } else {
        if (currentQuestionSet < questionsSets.length - 1) {
            showResults();
        } else {
            showFinalResults();
        }
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    const feedback = document.getElementById('feedback');
    const explanation = document.getElementById('explanation');

    if (selectedOption) {
        const answer = selectedOption.value;
        userAnswers.push(answer);

        if (answer === questionsSets[currentQuestionSet][currentQuestionIndex].answer) {
            feedback.textContent = "Correct!";
            feedback.className = "feedback correct";
            score++;
        } else {
            feedback.textContent = "Incorrect.";
            feedback.className = "feedback incorrect";
        }
        explanation.textContent = questionsSets[currentQuestionSet][currentQuestionIndex].explanation;
        if (currentQuestionIndex === 4) {
            document.getElementById('btnCheck').style.display = 'none';
            document.getElementById('btnNext').style.visibility = 'visible';
            document.getElementById('btnNext').innerHTML = "Show Result";
        } else {
            document.getElementById('btnCheck').style.display = 'none';
            document.getElementById('btnNext').style.visibility = 'visible';
        }
        console.log(currentQuestionIndex);
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.className = "feedback incorrect";
    }
}

function showResults() {
    const passageContainer = document.querySelector('.passage');

    passageContainer.innerHTML = `
        <div class="result-summary">
            <h2>Set ${currentQuestionSet + 1} Results</h2>
            <p>Your score: <span class="score">${score}</span> out of <span class="total">${questionsSets[currentQuestionSet].length}</span></p>
        </div>
        <div class="answer-review">
            <h3>Review Your Answers</h3>
            <ol class="review-list">
                ${userAnswers.map((answer, index) => `
                    <li class="review-item">
                        <p>Your answer: <span class="user-answer ${answer === questionsSets[currentQuestionSet][index].answer ? 'correct' : 'incorrect'}">${answer}</span></p>
                        <p>Correct answer: <span class="correct-answer">${questionsSets[currentQuestionSet][index].answer}</span></p>
                        <p class="explanation">${questionsSets[currentQuestionSet][index].explanation}</p>
                    </li>
                `).join('')}
            </ol>
        </div>
        <button id="next-set-btn" onclick="nextSet()">Next Set</button>
    `;
    document.getElementById('btnNext').style.visibility = 'hidden';
}

function showFinalResults() {
    const box = document.querySelector('.box');
    // passageContainer.style.flex-basis = '100%';

    const questionContainer = document.querySelector('.multiple-choice');
    questionContainer.style.display = 'none';


    box.innerHTML = `
        <div class='final-result'>
            <div class="result-summary">
                <h2>Final Results</h2>
                <p>Your overall score: <span class="score">${score}</span> out of <span class="total">${calculateTotalQuestions()}</span></p>
            </div>
            <div class="answer-review">
                <h3>Review Your Answers</h3>
                <ol class="review-list">
                    ${userAnswers.map((answer, index) => `
                        <li class="review-item">
                            <p>Your answer: <span class="user-answer ${answer === questionsSets[currentQuestionSet][index].answer ? 'correct' : 'incorrect'}">${answer}</span></p>
                            <p>Correct answer: <span class="correct-answer">${questionsSets[currentQuestionSet][index].answer}</span></p>
                            <p class="explanation">${questionsSets[currentQuestionSet][index].explanation}</p>
                        </li>
                    `).join('')}
                </ol>
            </div>
        </div>
        `;
    document.getElementById('btnNext').style.display = 'none';
    document.getElementById('btnGoBack').style.display = 'block';
}

function calculateTotalQuestions() {
    let total = 0;
    for (let i = 0; i < questionsSets.length; i++) {
        total += questionsSets[i].length;
    }
    return total;
}


window.onload = loadQuestion;