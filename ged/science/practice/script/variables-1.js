const questionsSets = [
    [
        {   
            passage: "You were testing the effectiveness of a cream that’s supposed to grow hair on bald men’s heads.",
            question: "1. Which of the following would be a good control group for this experiment?",
            options: [
                "A. a group of bald women",
                "B. a group of men with full heads of hair who are also given the cream",
                "C. a group of bald men who are given a harmless cream that has no effect",
                "D.a group of men who are almost bald"
            ],
            answer: "C",
            explanation: "A control group should be a group that's representative of the group that you’re testing but does not receive any medication or treatment. Since this study aims to test the effectiveness of the treatment on men, the control group should be men, rather than women. Thus, the first choice is incorrect. Additionally, since the study is testing the effects of the cream specifically on bald men, a control group of men with full heads of hair would not be appropriate. However, a control group of bald men who receive only a cream that has no effect would help scientists see bald men under normal conditions, so that they could see the difference between those who receive the cream and those who do not"
        },
        {
            passage: "A group of fertilized fish eggs from the same parents were divided into four different aquariums, each with a different pressure of CO2. One tank contained the normal atmospheric conditions of 390 microatmospheres of CO2. The other tanks contained 600, 700, and 900 microatmospheres of CO2, respectively. The same number of eggs was placed into each aquarium. The eggs hatched and the fish lived in these aquariums until testing.<br><br> To prepare for the experiment, one fish was placed into an aquarium containing the same CO2 pressure in which it was raised. The fish’s position was recorded every 5 seconds for 2 minutes. Then sounds from a predatory fish were played from an underwater speaker at one end of the aquarium at a volume that was only audible to the fish when swimming near the speaker. The fish’s position was again recorded every 5 seconds for 2 minutes. Trials were repeated with fish from each tank. ",
            question: "2. Identify the independent variable in the investigation.",
            options: [
                "A. CO2 pressure",
                "B. position of fish",
                "C. Number of eggs",
                "D. Number of fish"
            ],
            answer: "A",
            explanation: "Explanation: Independent-CO2 Pressure"
        },
        {
            passage: "A student conducted an experiment to investigate the process of photosynthesis. She filled 2 beakers with 100 ml of distilled water. She clipped 2 large leaves from an ivy plant and placed one leaf into each beaker. She then placed one of the beakers in a sunny location, and one in a dark closet. After two hours she compared the two beakers and noticed that there were many small bubbles at the edges of the plant that had been in the sun, but the bubbles were not present on the leaf that had been in the dark.  ",
            question: "3. Which of the following is a dependent variable(s) in this experiment?",
            options: [
                "A. the amount of bubbles that were produced",
                "B. the amount of light that each leaf received",
                "C. the amount of water in each beaker",
                "D. the number of leaves in each beaker"
            ],
            answer: "A",
            explanation: "Explanation: A dependent variable is one that changes in response to the independent variable(s) in an experiment. The independent variable is a variable that is changed by the researcher.In this experiment, the amount of bubbles produced was the dependent variable. The amount of bubbles produced depended on the independent variable, which was the amount of light that each leaf received.The amount of water in each beaker and the number of leaves in each beaker were not considered variables because both were held constant.  "
        },
        {
            passage: "A pharmaceutical company was testing out a new drug that was intended to lower blood pressure in diabetic patients. Two groups of volunteers were assembled. Group 1 consisted of 200 men, whereas Group 2 consisted of 200 women. All of the trial’s participants were diabetics between the ages of 20 and 50 with similar lifestyles, diet, and general health. Group 2 was given the trial drug, while Group 1 was given a sugar pill as a placebo (fake pill).    ",             
            question: "4. Which of the following is true about the experimental drug trial?   ",
            options: [
                "A. Both groups were control groups",
                "B. Both groups were experimental groups",
                "C. Group 2 was the experimental group, and Group 1 was the control group",
                "D. Group 1 was the experimental group, and Group 2 was the control group"
            ],
            answer: "C",
            explanation: "Explanation: Group 2 was the experimental group, and Group 1 was the control group. The control group is the one that is not exposed to the variable that is being tested (the potential new drug); therefore, Group 1 is the control group because its members received fake pills instead. "
        },
        {
            passage: "High levels of dissolved carbon dioxide can increase the acidity of water and potentially harm the marine life living there. Scientists conducted an experiment to see whether increased acidity affects hearing in fish. One hundred fertilized eggs from the same parent fish were placed in three separate tanks of water. Tank A contained water with the usual atmospheric pressure of carbon dioxide (400 microatmospheres). The carbon dioxide pressure levels in Tanks B and C were 800 microatmospheres and 1,200 micro atmospheres, respectively. Once the fish reached maturity, underwater speakers placed at one end of each tank played the sounds of the fish’s natural predators (these sounds could be heard only when the fish were near the speaker). The positions of the fish in each tank were recorded throughout the experiment. It was found that the fish raised in elevated carbon dioxide levels did not avoid the sound of the predators. However, the fish raised in regular carbon dioxide levels did avoid the end of the tank that had the speaker.  ",            
            question: "5. Which of the following is a true statement?",
            options: [ 
                "A. The independent variable of the experiment was the temperature of the water in each tank, and the dependent variable was the hearing ability of the fish",
                "B. The independent variable of the experiment was the carbon dioxide level in each tank, and the dependent variable was the position of the fish in the tank",
                "C. The independent variable of the experiment was hearing ability of the fish in each tank, and the dependent variable was the position of the fish in the tank",
                "D. The independent variable of the experiment was the position of the fish in the tank, and the dependent variable was the carbon dioxide level in each tank"
            ],
            answer: "B",
            explanation: "Explanation: The independent variable of the experiment was the position of the fish in the tank, and the dependent variable was the carbon dioxide level in each tank.    "
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