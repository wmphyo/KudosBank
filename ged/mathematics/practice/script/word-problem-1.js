const questionsSets = [
    [
        {
            question: "1. Tinytown has all of its 132 citizens living on the 40 square miles within its town limits. What is the population density of Tinytown in persons per square mile? ",
            options: [
                "A. 3.1 persons per square mile",
                "B. 3.2 persons per square mile",
                "C. 3.3 persons per square mile",
                "D. 3.4 persons per square mile"
            ],
            answer: "C",
            explanation: "Explanation: 132 persons/40 square miles = 132/40 persons per square mile = 3.3 persons per mile."
        },
        {
            question: "2. If every member of a team is paid 5p dollars for his or her participation, and Team Alpha has 6k members, Team Beta has 4p members, and Team Delta has 9h members, which of the following represents the total amount paid, in dollars, to the members of all three teams? ",
            options: [
                "A. 1080hkp",
                "B. 1080hkp2",
                "C. 120p2k + 45ph",
                "D. 30kp + 20p2 + 45hp"
            ],
            answer: "D",
            explanation: " Explanation: Because 5p is paid to every member, each number of team members would be multiplied by 5p, and the team totals would be added: 5p(6k) +5p(4p) + 5p(9h) = 30kp + 20p2 + 45hp"
        },
        {
            question: "3. A passenger train leaves the station, traveling west at 120 miles per hour. A freight train leaves the same station 2 hours later traveling 80 miles per hour. If t represents the time in hours that the first train has traveled, which equation represents a situation where the two trains are 640 miles apart?",
            options: [
                "A. 120t + 80(t - 2) = 640",
                "B. 120(t + 2) + 80t = 640",
                "C. 120t + 80(t + 2) = 640",
                "D. 120(t - 2) + 80t = 640"
            ],
            answer: "A",
            explanation: "Explanation : Time for 1st train: t; distance: 120t. Time for 2nd train: t – 2; distance:80(t-2)."
        },
        {
            question: "4. The sum of 3 times a number and 4 times a second number is divided by the sum of 2 and a third number. Which of the following expressions represents this series of operations?",
            options: [
                "A. (3x + 4y) ÷ (2 + x)",
                "B. 3x + 4y÷ (2 + z)",
                "C. 3x + 4y ÷ 2 + x",
                "D. (3x + 4y) ÷ 2z"
            ],
            answer: "A",
            explanation: "Explanation: The sum of 3 times a number and 4 times a second number is represented by the expression 3x + 4y. The sum of 2 and a third number is represented by 2 + z. The first expression is divided by the second. Parentheses are necessary to clarify the order of operations."
        },
        {
            question: "5. Sylvia scored 10 points better than Wiley on their science exam. Greg scored 6 points less than Wiley. Altogether, the students earned 226 points. How many points did Sylvia earn?",
            options: [
                "A. 74",
                "B. 78",
                "C. 84",
                "D. 94"
            ],
            answer: "C",
            explanation: "Explanantion: Let w = Wiley’s points, w + 10 = Sylvia’s points, and w – 6 = Greg’s points. Write and solve an equation: w + w + 10 + w − 6 = 226, 3w + 4 = 226, 3w = 222, w = 74. Wiley scored 74 points, so Sylvia scored 74 + 10 = 84 points."
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