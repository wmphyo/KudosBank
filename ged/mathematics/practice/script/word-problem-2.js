const questionsSets = [
    [
        {
            question: "1. Imelda bought a guitar with no money down and has a loan for $1150 at 6% per year. If she pays off the loan after 4 months, what is the total cost of the guitar?",
            options: [
                "A. $1,167.25",
                "B. $1,173.00",
                "C. $1,219.00",
                "D. $1,840.00"
            ],
            answer: "B",
            explanation: "Explanation: $1150 × 0.06 = $69, but the loan is only for ⅓  of a year, so interest is ⅓ that, or $23.  $1150 + 23 = $1173"
        },
        {
            question: "2. Neva’s car is now worth $12,000. This is 60 percent of what she paid for it. How much did she pay for the car? ",
            options: [
                "A. $72,00",
                "B. $18,000",
                "C. $19,200",
                "D. $20,000"
            ],
            answer: "D",
            explanation: "Explanation:The current worth of the car ($12,000) is part of the base. Solve for the base: $12,000 ÷ 0.6 = $20,000"
        },
        {
            question: "3. How many pounds of peanuts worth $2.00 per pound must be mixed with cashews worth $7.00 per pound to produce 10 pounds of a mixture worth $5.00 per pound?",
            options: [
                "A. 6 pounds",
                "B. 5 pounds",
                "C. 4 pounds",
                "D. 3 pounds"
            ],
            answer: " C ",
            explanation: "Explanation: p pounds of peanuts have a total value of 2p dollars. c pounds of cashews have a total value of 7c dollars. 10 pounds of mixture has a total value of 5*10=50 dollars. 2p+7c=10. p+c=10, p+c-p=10-p , c=10-p , 2p+7c=50, 2p+7(10-p)=50, 2p+70-7p=50, -5p+70=50, -5p+70-70=50-70, -5p=-20, p=4"
        },
        {
            
            question: "4. Stan is diluting 5 quarts of a 50% antifreeze solution down to 20%. How much pure water should he add? ",
            options: [
                "A. 2 quarts",
                "B. 5 quarts",
                "C. 7.5 quarts",
                "D. 12.5 quarts"
            ],
            answer: "C",
            explanation: " Explanation: he amount of pure antifreeze is the concentration times the amount of solution. Starting with 0.50.5 quarts of pure antifreeze and ending with 0.20(5+w)  quarts of pure antifreeze,.50*5=0.20(5+w), since the amount of pure antifreeze remains constant. 0.50*5=0.20(5+w), 2.5+=1+0.2w, 1.5=0.2w, w=7.5"
        },
        {
            question: "5. Alex earns a weekly base salary of $650 as a car salesman. He also earns a 9% commission on his monthly sales after the first $10,000. What was his total salary this month if he sold 7 cars whose average price was $4,500 each?",
            options: [
                "A. $1,935",
                "B. $2,585",
                "C. $2,835",
                "D. $3,485"
            ],
            answer: "B",
            explanation: "Explanation : Alex’s total salary equals his base salary ($650) plus commission. The 9% commission applies only to his sales in excess of $10,000 (but not the initial $10,000 worth of sales). He sold 7 cars worth an average of $4,500 each, for a total of  7* $45,00 = 31,500 in sales. Alex’s commission is therefore 0.09($31,500-$10,000)=$1,935. Alex’s total salary equals $650 + $1,935 =  $2,585, making Choice (B) is correct."
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