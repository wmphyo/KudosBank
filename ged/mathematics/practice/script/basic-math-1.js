const questionsSets = [
    [
        {
            question: "1. The U.S. Senate has 100 senators. In 2015, only 20 senators were female. What is the ratio of female senators to male senators? ",
            options: [
                "A. 1:5",
                "B. 1:4",
                "C. 4:5",
                "D. 4:1"
            ],
            answer: "B",
            explanation: "Explanation: There are a total of 100 senators, 20 of whom are female. Therefore,there must be 80 male senators. To find the ratio of female senators to male senators, divide the number of female senators by the number of male senators:  20/80 = ¼. Hence, Choice (B) is the correct answer."
        },
        {
            question: "2. A number divided by 2 is equal to 12 less than the original number. What is the number?",
            options: [
                "A. 12",
                "B. 20",
                "C. 24",
                "D. 28"
            ],
            answer: "C",
            explanation: "Explanation: Take each answer choice and divide it by 2. Then, check to see if the resulting number is 12 less than the answer choice. For example, choice (A): 12: 12 ÷ 2 = 6. And 6 is not 12 less than 12. Thus, choice (A) is incorrect. Only choice (C) works: 24 ÷ 2 = 24 − 12."
        },
        {
            question: "3. Find the value of the expression 22 + 6[(14 - 5) ÷ 3(17 - 14)].",
            options: [
                "A. 2.73",
                "B. 28",
                "C. 76",
                "D. 97"
            ],
            answer: "B",
            explanation: "Explanation: 22 + 6[(14 − 5) ÷ 3(17 - 14)], = 22 + 6[9 ÷ 3(3)], = 22 + 6[9 >÷ 9], = 22 + 6[1], = 22 + 6 = 28"
        },
        {
            question: "4. A beverage container holds 12 servings. If the serving size is 8 ounces, how many ounces does the container hold in all?",
            options: [
                "A. 20",
                "B. 32",
                "C. 48",
                "D. 96"
            ],
            answer: "D",
            explanation: "Explanation: Multiply: 12 servings * 8 ounces = 96 "
            
        },
        {
            question: "5. Sales at 3 concession stands are $839, $527, and $726. What is the total amount in sales?",
            options: [
                "A. $1581",
                "B. $2092",
                "C. $2178",
                "D. $2517"
            ],
            answer: "B",
            explanation: "Explanation: Add to find the total: $839 + $527 + 726 = $2092"
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