const questionsSets = [
    [
        {
            question: "1.  In drawing cards from a deck, any single card has an equal chance of being drawn. After six cards have been drawn and removed, what is the probability of drawing an ace of hearts if it has not yet been drawn? ",
            options: [
                "A. 1:50",
                "B. 1:48",
                "C. 1:46",
                "D. 1:44"
            ],
            answer: "C",
            explanation: "Explanation:This question is a test in probability. You're asked to figure out the probability of an event occurring. If you had an entire deck of 52 cards, the probability of drawing an ace of hearts would be 1:52. If you remove 6 cards and none of them is the ace of hearts, you may as well have a 46-card deck (52 – 6). The probability of drawing an ace of hearts from a 46-card deck is 1:46. "
        },
        {
            question: "2.  A standard deck of playing cards has 52 cards, with 13 cards each of hearts, diamonds, clubs, and spades. If a card is drawn randomly from the deck, what is the probability that it will be either hearts or diamonds?",
            options: [
                "A. 1 in 2",
                "B. 1 in 4",
                "C. 1 in 8",
                "D. 1 in 16"
            ],
            answer: "A",
            explanation: "Explanation: 1 in 2 Of the 52 cards, 26 are either hearts or diamonds: 26/52  = ½."
        },
        {
            question: "3. There are 15 colored chips in a bag. Eight are green, and seven are white. Five white chips are removed. What is the probability that the next chip selected will be green?",
            options: [
                "A. 100%",
                "B. 80%",
                "C. 75%",
                "D. 25%"
            ],
            answer: "B",
            explanation: "Explanation: After the five white chips are removed from the bag, the bag contains 10 chips, with 8 green and 2 white. The probability of getting green is 8/10, which equals 80%."
        },
        {
            passage: "A fair die has six sides, each marked with a different integer from 1 to 6. Each side is equally likely to land face up when the die is rolled.",
            question: "4. Suppose you roll the die 66 times. How many times are you likely to roll a 6?",
            options: [
                "A. 6",
                "B. 11",
                "C. 55",
                "D. 66"
            ],
            answer: "B",
            explanation: "Explanation: Each roll of the die has a one in six chance of landing on any of the six numbers. Therefore, multiplying the number of rolls by ⅙ will give you an estimate of how many times a 6 is likely to appear ⅙*66  =11. "
        },
        {
            passage: "Noah has eight different shirts. Two of the shirts are T-shirts, two are dress shirts, two are sweatshirts, and two are polo shirts. He has four different pairs of pants, and three different pairs of shoes.",
            question: "5.  If an outfit consists of one shirt, one pair of pants, and one pair of shoes, how many distinct outfits can Noah make?",
            options: [
                "A. 8",
                "B. 13",
                "C. 32",
                "D. 96"
            ],
            answer: "D",
            explanation: "Explanation:  He has eight choices of shirt, four choices of pants, and three choices of shoes. 8 × 4 × 3 = 96."
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