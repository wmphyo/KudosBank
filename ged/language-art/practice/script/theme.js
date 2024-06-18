const questionsSets = [
    [
        {
            passage: [`In the novel 'To Kill a Mockingbird' by Harper Lee, the theme of racial injustice is prominent throughout the story. Set in the southern United States during the 1930s, the narrative follows Atticus Finch, a lawyer who defends a black man falsely accused of raping a white woman. Despite overwhelming evidence of the man's innocence, the deeply ingrained racism of the community leads to an unjust verdict. Through the characters' experiences and interactions, Lee explores the pervasive effects of prejudice and the struggle for equality in a society divided by race.`,
                ],
            question: "1. Based on the passage, which of the following statements best represents the theme of the novel 'To Kill a Mockingbird'?",
            options: [
                "A. The importance of family bonds and loyalty in overcoming adversity.",
                "B. The consequences of societal expectations on individual identity.",
                "C. The impact of racial discrimination and injustice on society.",
                "D. The power of forgiveness and reconciliation in healing past wounds."
            ],
            answer: "A",
            explanation: "Explanation: The passage explicitly mentions the theme of racial injustice as prominent throughout the novel 'To Kill a Mockingbird.' It discusses how the story revolves around the trial of a black man falsely accused of raping a white woman and how the deeply ingrained racism of the community leads to an unjust verdict. Additionally, the passage highlights how the author, Harper Lee, explores the pervasive effects of prejudice and the struggle for equality in a society divided by race. Therefore, option C, which focuses on the impact of racial discrimination and injustice on society, aligns best with the central theme discussed in the passage. "
        },
        {
            passage: [`In George Orwell's '1984', the theme of totalitarianism is evident as the story unfolds in a dystopian society controlled by a tyrannical government. The protagonist, Winston Smith, struggles with the oppressive regime that seeks to control not only the actions but also the thoughts of its citizens. Through constant surveillance and propaganda, the Party enforces absolute conformity and loyalty, eradicating any form of dissent.`,
                ],
            question: "2. Which of the following statements best represents the theme of the novel '1984'?",
            options: [
                "A. The resilience of the human spirit in the face of adversity.",
                "B. The dangers of absolute political power and totalitarianism.",
                "C. The importance of love and personal relationships.",
                "D. The conflict between tradition and modernity."
            ],
            answer: "B",
            explanation: "Explanation: The passage highlights the oppressive control of the government in '1984' and how it enforces absolute conformity and loyalty through surveillance and propaganda. This clearly represents the theme of totalitarianism and the dangers of absolute political power."
        },
        {
            passage: ["In The Great Gatsby by F. Scott Fitzgerald, the theme of the American Dream is scrutinized through the lives of the characters. Jay Gatsby's lavish parties and opulent lifestyle are a facade masking his deep longing for a lost love and his belief that wealth can bring happiness and social status. The novel reveals the hollowness and moral decay that often accompanies the pursuit of wealth and the elusive American Dream.",
                ],
            question: "3. Which of the following statements best represents the theme of the novel 'The Great Gatsby'? ",
            options: [
                "A. The importance of genuine love and friendship.",
                "B. The emptiness of pursuing wealth and the American Dream.",
                "C. The necessity of social change and reform.",
                "D. The beauty of rural life compared to urban existence."
            ],
            answer: "B",
            explanation: "Explanation: The passage discusses Gatsby's pursuit of wealth and status as a means to attain happiness and how it ultimately reveals the hollowness and moral decay associated with such a pursuit. This aligns with the theme of the emptiness of the American Dream."
        },
        {
            passage: "Mary Shelley's 'Frankenstein' delves into the theme of scientific responsibility and the ethical limits of human ambition. Victor Frankenstein's obsession with creating life leads to catastrophic consequences as his creation becomes a monster that he cannot control. The novel explores the dangers of unchecked scientific experimentation and the moral responsibilities that come with great power.",
            question: "4. Which of the following statements best represents the theme of the novel 'Frankenstein'?",
            options: [
                "A. The conflict between nature and nurture.",
                "B. The pursuit of knowledge and its potential to corrupt.",
                "C. The strength of familial ties and their impact on individuals. ",
                "D. The inevitability of fate and destiny."
            ],
            answer: "B",
            explanation: "Explanation: The passage highlights Victor Frankenstein's obsession with creating life and the catastrophic consequences that follow. This reflects the theme of how the pursuit of knowledge, when unchecked, can lead to corruption and disaster."
        },
        {
            passage: "In 'Pride and Prejudice' by Jane Austen, the theme of social class and marriage is central to the plot. Elizabeth Bennet and Mr. Darcy must navigate the prejudices and expectations of their respective social standings to find happiness together. The novel critiques the rigid class structure of the time and the importance placed on marriage for social and economic security.",
            question: "5. Which of the following statements best represents the theme of the novel 'Pride and Prejudice'? ",
            options: [
                "A. The transformative power of love.",
                "B. The struggle for personal freedom against societal norms. ",
                "C. The impact of social class on relationships and marriage. ",
                "D. The journey towards self-discovery and independence. "
            ],
            answer: "C",
            explanation: "Explanation: The passage focuses on the social class prejudices and expectations that Elizabeth Bennet and Mr. Darcy must overcome. This directly aligns with the theme of how social class impacts relationships and marriage."
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