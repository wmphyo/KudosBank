const questionsSets = [
    [
        {
            passage: [`In the dead of night, a lone figure crept through the shadowy alleyways of the ancient city. The air was thick with tension, and every sound seemed amplified in the oppressive silence. The figure moved with practiced stealth, their eyes darting nervously as they approached their destination.`,
                ],
            question: "1. What is the tone of the passage?",
            options: [
                "A. Joyful",
                "B. Suspenseful",
                "C. Nostalgic",
                "D. Lighthearted"
            ],
            answer: "B",
            explanation: "Explanation: The passage creates a sense of tension and anticipation with descriptions of the 'dead of night,' 'shadowy alleyways,' and 'practiced stealth,' which are characteristic of a suspenseful tone."
        },
        {
            passage: [`The relentless advance of climate change poses a dire threat to ecosystems worldwide. Rising temperatures, melting ice caps, and increasingly severe weather events are clear indicators of a planet in distress. Urgent action is required to mitigate these effects and preserve the environment for future generations.`,
                ],
            question: "2. What is the tone of the passage?",
            options: [
                "A. Optimistic",
                "B. Urgent ",
                "C. Indifferent ",
                "D. Comedic "
            ],
            answer: "B",
            explanation: 'Explanation: The passage emphasizes the pressing need for action against climate change, using words like "relentless," "dire threat," and "urgent action," which convey an urgent tone.'
        },
        {
            passage: ['Quantum computing represents a significant leap forward in computational power, utilizing the principles of quantum mechanics to solve problems that are currently intractable for classical computers. The ability of quantum bits to exist in multiple states simultaneously offers the potential for unprecedented processing speeds.',
                ],
            question: "3. What is the tone of the passage?",
            options: [
                "A. Informative",
                "B. Humorous",
                "C. Pessimistic ",
                "D. Casual"
            ],
            answer: "A",
            explanation: "Explanation: The passage presents factual information about quantum computing and its potential, using a straightforward and educational approach, which is indicative of an informative tone."
        },
        {
            passage: "Yesterday, the city council announced a comprehensive new plan to revitalize the downtown area, aiming to boost local businesses and attract tourists. The plan includes upgrading infrastructure, creating pedestrian-friendly zones, and hosting cultural events. City officials are optimistic about the positive impact these changes will have on the community.",
            question: "4. What is the tone of the passage? ",
            options: [
                "A. Skeptical ",
                "B. Enthusiastic ",
                "C. Sarcastic ",
                "D. Melancholic "
            ],
            answer: "B",
            explanation: "Explanation: The passage uses positive language like 'revitalize,' 'boost,' 'attract,' and 'optimistic,' reflecting an enthusiastic tone about the new plan's potential benefits."
        },
        {
            passage: "Despite facing numerous obstacles as a female scientist in the early 20th century, Marie Curie persevered with remarkable determination. Her groundbreaking research on radioactivity earned her two Nobel Prizes, cementing her legacy as one of the most influential scientists in history. Curie's resilience and dedication continue to inspire generations.",
            question: "5. What is the tone of the passage? ",
            options: [
                "A. Critical",
                "B. Admiring",
                "C. Neutral",
                "D. Humorous"
            ],
            answer: "B",
            explanation: "Explanation: The passage highlights Marie Curie's perseverance, groundbreaking achievements, and lasting influence, using language that conveys respect and admiration for her contributions."
        },
    ],
    // Add more question sets as needed
];


let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let currentQuestionSet = 0;

function loadQuestion() {
    const passageContainer = document.querySelector('.passage');
    const questionContainer = document.querySelector('.multiple-choice');
    const currentQuestion = questionsSets[currentQuestionSet][currentQuestionIndex];

    passageContainer.innerHTML = `<p>${currentQuestion.passage}</p>`;

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