const questionsSets = [
    [
        {
            passage: [`Many people believe that exercise is crucial for maintaining good health. Regular physical activity helps improve cardiovascular health, strengthens muscles, and boosts mental well-being. Studies have shown that those who exercise regularly are less likely to develop chronic diseases such as diabetes and heart disease. Therefore, incorporating exercise into daily routines can lead to a healthier and longer life.`,
                ],
            question: "1. What is the main idea of the passage?",
            options: [
                "A. Exercise is good for mental health.",
                "B. Regular physical activity can prevent chronic diseases.",
                "C. Exercise is essential for overall health and well-being.",
                "D. Cardiovascular health is improved by exercise."
            ],
            answer: "C",
            explanation: "Explanation: The passage discusses various benefits of exercise, such as improved cardiovascular health, muscle strength, mental well-being, and prevention of chronic diseases. All these points support the overarching idea that exercise is crucial for maintaining overall health and well-being."
        },
        {
            passage: [`Reading regularly has numerous benefits for individuals of all ages. It enhances vocabulary, improves concentration, and stimulates the brain. Moreover, reading can reduce stress and provide a sense of relaxation. Whether it's fiction or nonfiction, reading allows people to explore new worlds and ideas, making it a valuable activity for personal growth.`,
                ],
            question: "2. What is the main idea of the passage?",
            options: [
                "A. Reading reduces stress and relaxes the mind.",
                "B. Reading fiction is more beneficial than non-fiction.",
                "C. Regular reading has many advantages for personal development.",
                "D. Improving concentration is a benefit of reading."
            ],
            answer: "C",
            explanation: "Explanation: The passage lists various benefits of reading, such as enhancing vocabulary, improving concentration, stimulating the brain, reducing stress, and providing relaxation. These benefits contribute to the main idea that reading is valuable for personal development."
        },
        {
            passage: ['The internet has revolutionized the way we communicate and access information. Social media platforms allow us to connect with friends and family instantly, regardless of distance. Online resources provide a vast amount of information on almost any topic imaginable. However, its important to use the internet wisely and be aware of potential risks, such as misinformation and privacy concerns.',
                ],
            question: "3. What is the main idea of the passage?",
            options: [
                "A. The internet has changed communication and information access.",
                "B. Social media is the best way to connect with others.",
                "C. The internet can pose privacy risks.",
                "D. Online resources offer extensive information on any topic."
            ],
            answer: "A",
            explanation: "Explanation: The passage highlights the ways in which the internet has transformed communication and access to information, while also mentioning the need for wise use due to potential risks. The main idea centers on the revolutionary impact of the internet in these areas."
        },
        {
            passage: "Climate change is one of the most pressing issues facing our planet today. The increase in global temperatures is leading to more frequent and severe weather events, such as hurricanes and wildfires. Additionally, rising sea levels threaten coastal communities and ecosystems. Addressing climate change requires global cooperation and significant changes in how we use energy and resources.",
            question: "4. What is the main idea of the passage?",
            options: [
                "A. Hurricanes and wildfires are becoming more severe.",
                "B. Climate change is causing global temperatures to rise.",
                "C. Rising sea levels are a threat to coastal areas.",
                "D. Climate change is a critical issue that needs global action."
            ],
            answer: "D",
            explanation: "Explanation: The passage outlines various impacts of climate change and emphasizes the need for global cooperation and changes in energy and resource use to address this issue. The main idea is that climate change is a significant and urgent problem requiring worldwide action."
        },
        {
            passage: "Advances in technology have significantly impacted the field of medicine. New diagnostic tools and treatments have improved patient outcomes and increased the accuracy of medical procedures. Telemedicine has made healthcare more accessible, allowing patients to consult with doctors remotely. These technological innovations are transforming healthcare and improving the quality of life for many people.",
            question: "5. What is the main idea of the passage?",
            options: [
                "A. Telemedicine makes healthcare more accessible.",
                "B. Technological advances are transforming the field of medicine. ",
                "C. New diagnostic tools have improved patient outcomes. ",
                "D. The accuracy of medical procedures has increased."
            ],
            answer: "B",
            explanation: "Explanation: The passage discusses various technological advancements in medicine, including new diagnostic tools, treatments, and telemedicine, and how these improvements are making healthcare more accessible and effective. The main idea is that technology is transforming medicine in significant ways. "
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