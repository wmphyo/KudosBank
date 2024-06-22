const questionsSets = [
    [
        {
            passage: [`In the bustling city of Metropolis, two bookstores stand out among the rest: The Book Haven and The Literary Lounge. The Book Haven is known for its extensive collection of rare and antique books, attracting bibliophiles who are passionate about finding unique titles. The Literary Lounge, in contrast, focuses on contemporary bestsellers and hosts frequent author events and book signings. Patrons of The Book Haven appreciate the quiet, scholarly atmosphere, while The Literary Lounge is a lively place where readers gather to discuss the latest releases. This has led to a friendly debate among Metropolis residents about which bookstore is the better choice.`,
                ],
            question: "1. Which of the following statements best summarizes the difference in opinion over the bookstores in Metropolis? ",
            options: [
                "A. Some people prefer The Book Haven for its rare books, while others prefer The Literary Lounge for its events and contemporary books.  ",
                "B. The Book Haven is known for hosting author events, while The Literary Lounge has a quiet, scholarly atmosphere.  ",
                "C. Residents debate whether The Book Haven or The Literary Lounge has a more extensive collection of contemporary bestsellers.  ",
                "D. The main difference is that The Book Haven is more lively, while The Literary Lounge is quieter. "
            ],
            answer: "A",
            explanation: "Explanation: The passage explains that The Book Haven is valued for its rare books and quiet atmosphere, while The Literary Lounge is appreciated for its contemporary books and events, highlighting the differing preferences. "
        },
        {
            passage: [`In the town of Rivertown, there are two main gyms that residents can choose from: Fitness Plus and Health Hub. Fitness Plus offers a wide range of equipment and numerous fitness classes, making it a popular choice for those who enjoy a variety of workout options. Health Hub, on the other hand, focuses on personalized training programs and a supportive community environment. Members of Fitness Plus appreciate the diversity of classes and the extensive facilities, while Health Hub members value the personalized attention and sense of community. This has led to ongoing discussions among residents about which gym is the better option.`,
                ],
            question: "2. Which of the following statements best summarizes the difference in opinion over the gyms in Rivertown? ",
            options: [
                "A. Some residents prefer Fitness Plus for its personalized training, while others prefer Health Hub for its variety of equipment.",
                "B. Fitness Plus is favored for its supportive community, whereas Health Hub is known for its fitness classes.  ",
                "C. Some people prefer Fitness Plus for its wide range of classes, while others prefer Health Hub for its personalized programs and community feel.  ",
                "D. The main difference is that Fitness Plus focuses on personalized attention, while Health Hub offers numerous fitness classes. "
            ],
            answer: "C",
            explanation: "Explanation: The passage describes Fitness Plus as popular for its variety of classes and equipment, while Health Hub is appreciated for its personalized programs and community environment, showing the differing preferences. "
        },
        {
            passage: ['In a quiet village, a young boy named Oliver dreams of exploring the world beyond his hometown. One day, he discovers a hidden path in the forest that leads to a bustling city. Excited and nervous, Oliver ventures into the city, meeting new friends and encountering challenges that test his courage and kindness. By the end of his journey, Oliver realizes that while adventure is thrilling, the true joy lies in the friends he makes and the lessons he learns along the way.',
                ],
            question: "3. Which of the following statements best summarizes Oliver's journey? ",
            options: [
                "A. Oliver discovers a hidden path and decides to stay in his quiet village. ",
                "B. Oliver's journey to the city tests his courage and leads to new friendships and valuable lessons. ",
                "C. The iC. Oliver dreams of exploring the world but never leaves his hometown.",
                "D. Oliver finds a hidden path but is too nervous to venture into the city. "
            ],
            answer: "B",
            explanation: "Explanation: The passage describes Oliver's journey to the city where he meets new friends and faces challenges, ultimately learning valuable lessons. This matches option B, which highlights the key aspects of his journey: testing his courage, forming friendships, and gaining lessons. "
        },
        {
            passage: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll. During photosynthesis, plants absorb carbon dioxide from the air and water from the soil, and convert these into glucose and oxygen. This process not only provides essential nutrients for the plants themselves but also produces oxygen, which is vital for most living organisms on Earth.",
            question: "4. Which of the following statements best summarizes the process of photosynthesis? ",
            options: [
                "A. Photosynthesis uses oxygen and glucose to produce carbon dioxide and water. ",
                "B. Photosynthesis is the process by which plants use sunlight to create food and oxygen. ",
                "C. Photosynthesis occurs only in green plants without the need for sunlight. ",
                "D. Photosynthesis converts glucose into carbon dioxide and oxygen. "
            ],
            answer: "B",
            explanation: "Explanation: The passage explains that photosynthesis involves using sunlight to produce glucose and oxygen from carbon dioxide and water. This matches option B, which succinctly summarizes the essential points of the process. "
        },
        {
            passage: "The Industrial Revolution, which began in the late 18th century, was a period of significant technological advancement and economic change. It marked the transition from agrarian societies to industrialized cities with the development of machinery and factories. This era saw the rise of new industries, increased productivity, and profound changes in living and working conditions, ultimately shaping the modern world.",
            question: "5. Which of the following statements best summarizes the impact of the Industrial Revolution? ",
            options: [
                "A. The Industrial Revolution kept agrarian societies stable and unchanged.",
                "B. The Industrial Revolution resulted in less productivity and fewer technological advancements. ",
                "C. The Industrial Revolution led to the development of machinery, new industries, and significant changes in society. ",
                "D. The Industrial Revolution made living conditions worse without any positive outcomes. "
            ],
            answer: "C",
            explanation: "Explanation: The passage highlights the major changes brought about by the Industrial Revolution, including technological advancements, new industries, and changes in living and working conditions. Option C accurately summarizes these key points."
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