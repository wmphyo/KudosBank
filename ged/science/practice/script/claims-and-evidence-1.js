const questionsSets = [
    [
        {   
            passage: "The process of some members of a species being better able to survive and reproduce than others is called natural selection. Natural selection works on traits that affect organisms’ ability to survive in their environment. You can tell that selection is occurring when a specific version of a trait becomes more or less common in a species.<br><br> The fish population in a freshwater lake has been monitored by local ecologists for 26 years. The population includes both dark- and light-colored fish. Over this period, the ratio of dark to light fish has remained about 3 to 2.  ",
            question: "1. Ecologists can conclude that natural selection is NOT occurring because",
            options: [
                "A. the fish do not have enough variation in body color",
                "B. the fish have enough food and do not need to change",
                "C. neither body color has a greater effect on fish survival",
                "D. humans are causing artificial selection to occur instead"
            ],
            answer: "C",
            explanation: "Explanation: If one version of a trait provides no advantage over the other, no change in the proportions will be observed. Because the proportion of dark to light fish remained about the same over time, the ecologists can assume that no selection occurred because there is no differential survivability."
        },
        {
            passage: "In a scientific study, a change in the independent variable results in a change in the dependent variable. For example, a change in tree trunk color resulted in a change in wing-color frequencies in England's peppered moth population.",
            question: "2. When studying natural selection, which of the following observations would provide the clearest proof that selection is happening?  ",
            options: [
                "A. a change in the dependent variable",
                "B. no change in the dependent variable",
                "C. a change in the independent variable",
                "D. no change in the independent variable"
            ],
            answer: "A",
            explanation: "Explanation: A change in the dependent variable shows that natural selection is occurring. In the peppered moths example, the dependent variable is the proportion of dark- and light-winged moths observed. Because these proportions changed over time, natural selection was occurring."
        },
        {
            passage: "Scientists believe that the universe formed 10 to 20 billion years ago. The most widely accepted model of how the universe began is called the Big Bang theory. According to this theory, all of the matter and energy in the universe was once contained in an area the size of an atom. An enormous explosion (Big Bang) caused the matter and energy to rapidly expand outward, creating the universe. Scientists believe the universe has been expanding ever since.",
            question: "3. The Big Bang theory provides the leading model for the formation of the",
            options: [
                "A. Earth",
                "B. universe",
                "C. solar system",
                "D. Milky Way galaxy"
            ],
            answer: "B",
            explanation: "Explanation: Scientists believe that the universe formed as the result of a giant explosion termed the Big Bang."
        },
        {
            passage: "Biologists have long known that some types of electromagnetic radiation, such as X-rays and gamma rays, can be dangerous to human beings. However, until now, no one has ever suggested that microwave radiation might also be harmful. In preliminary test-tube laboratory results, a scientist has found elevated growth rates in cancer cells exposed to low doses of microwaves. These results are only preliminary because, first, there has been no controlled study of the effects of microwaves on human beings. Second, this study was of short duration, raising the possibility that the dangers of long term exposure have not yet been assessed. Although federal guidelines for how much electromagnetic energy can be allowed to enter the work and home environment have been made more stringent since they were first implemented in 1982, the recent study poses troubling questions about the safety of microwaves.<br><br>I. Individuals who extensively use point-to-point telecommunications, which heavily utilize microwaves, have higher-than-average incidences of cancer. <br><br> II. A long-term study of cancer cells exposed to microwaves in the laboratory shows the same pattern of growth found in the short-term study. <br><br> III. A study of dental associates who regularly work with X-rays shows that such individuals have higher-than-normal incidences of cancer.",
            question: "4.  Which of the following, if true, would lend weight to the scientists’ initial findings regarding microwaves?",
            options: [
                "A. I only",
                "B. II only",
                "C. I and II",
                "D. I and III"
            ],
            answer: "C",
            explanation: "Explanation: Statement I addresses the first reason presented in the passage—as yet there has been no study on human beings —and provides you with a study that supports the initial findings with new findings on human subjects. Statement II addresses the second reason presented in the passage—there has been no long-term study as of yet—by providing information from a long-term study of cancer cells exposed to microwaves. Statement III, however, focuses on people who have been exposed to X-rays, rather than microwaves. Since this study does not relate to microwaves, the results would not lend any weight to the initial results described in the passage. Thus, I and II, but not III, support the initial results, and the correct answer is (C).  "
        },
        {
            passage: "Asteroids are composed of rock, and comets are composed of frozen gas and dust.",
            question: "5. Scientists observe a previously unidentified object in the solar system. What information would best help scientists identify whether the object is an asteroid or comet?",
            options: [
                "A. the size of the object",
                "B. the object's composition",
                "C. the location of the object",
                "D. the number of times the object has orbited the sun"
            ],
            answer: "B",
            explanation: "Explanation: Asteroids are composed of rock, and comets are composed of frozen gas and dust. Identifying the composition of the object will tell scientists what type of object it is."
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