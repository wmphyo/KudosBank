const questionsSets = [
    [
        {
            question: "1. The length of a rectangle is 5 centimeters more than the width. The perimeter of the rectangle is 90 centimeters. What is the length of the rectangle? ",
            options: [
                "A. 15 centimeters",
                "B. 18 centimeters",
                "C. 22.5 centimeters",
                "D. 25 centimeters"
            ],
            answer: "D",
            explanation: "Explanation: 2(w+5)+2w=90, 2w+10+2w=90, 4w+10=90, 4w=80, w=20, l=20+5=25 "
        },
        {
           
            question: "2. Given a rectangular field 125 by 100 feet, what would be the length of the side of an equilateral triangle with the same perimeter? ",
            options: [
                "A. 150 feet",
                "B. 225 feet",
                "C. 300 feet",
                "D. 450 feet"
            ],
            answer: "A",
            explanation: "Explanantion: The perimeter of the field is 450 feet. The equilateral triangle has three equal sides, so each will be 150 feet."
        },
        {   
           
            question: "3. Andrea must paint an antique sign composed of three spheres, each of which has a diameter of 12 inches. Each can of paint covers 288 square inches. How many cans of paint must Andrea buy to do the job?",
            options: [
                "A. 4",
                "B. 5",
                "C. 6",
                "D. 7"
            ],
            answer: "B",
            explanation: "Explanations: Each sphere has a radius r = 6 inches. The surface area is given by 4πr^2 = 4π * 6^2 = 4π * 36 = 144π = 144 * 3.14 = 452.16. Each sphere has an area of 452.16 square inches. Together, all three require 1356.48 square inches of paint. At 288 square inches a can, this means she needs 1356.48 ÷ 288 = 4.71 cans. She must buy 5 whole cans."
        },
        {
           
            question: "4. Given a square 4 feet on a side, what is the area of the largest circle that fits within the square? ",
            options: [
                "A. 25.14 square feet",
                "B. 12.56 square feet",
                "C. 6.28 square feet",
                "D. 14 square feet"
            ],
            answer: "B",
            explanation: "Explanation:  A square 4 feet on a side allows a circle of radius r = 2 feet. The area of this square will be A = πr^2 = π2^2 = 4π = 4 * 3.14 = 12.56 square feet."
        },
        {
            
            question: "5. A regulation soccer ball has a circumference of 68 centimeters, and a regulation basketball has a circumference of 75.5 centimeters. What is the difference in their volumes?",
            options: [
                "A. 1900 cubic centimeters",
                "B. 1958 cubic centimeters",
                "C. 2060 cubic centimeters",
                "D. 2152 cubic centimeters"
            ],
            answer: "B",
            explanation: "Explanation: Use C r= 2π to find the radius of each ball and V = 4/3πr^3 to find each volume.Dividing the circumference of the soccer ball by 2π gives a radius of 10.8 and a volume of 5310. Doing the same for the basketball gives a radius of 12 and a volume of 7268 cubic centimeters. The difference is 1958 cubic centimeters."
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