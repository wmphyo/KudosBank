const questionsSets = [
    [
        {   
            passage: " High levels of dissolved carbon dioxide can increase the acidity of water and potentially harm the marine life living there. Scientists conducted an experiment to see whether increased acidity affects hearing in fish. One hundred fertilized eggs from the same parent fish were placed in three separate tanks of water. Tank A contained water with the usual atmospheric pressure of carbon dioxide (400 microatmospheres). The carbon dioxide pressure levels in Tanks B and C were 800 microatmospheres and 1,200 micro atmospheres, respectively. Once the fish reached maturity, underwater speakers placed at one end of each tank played the sounds of the fish’s natural predators (these sounds could be heard only when the fish were near the speaker). The positions of the fish in each tank were recorded throughout the experiment. It was found that the fish raised in elevated carbon dioxide levels did not avoid the sound of the predators. However, the fish raised in regular carbon dioxide levels did avoid the end of the tank that had the speaker.",
            question: "1. Which of the following statements is the best hypothesis for this experiment?",
            options: [
                "A. An increase in ocean acidity causes a decrease in predator avoidance in fish",
                "B. Fish lose their hearing when greenhouse gases are dissolved in the ocean",
                "C. Increasing ocean acidity impedes the transfer of sound through the water",
                "D. Fish hearing improves with increasing ocean acidity"
            ],
            answer: "A",
            explanation: "An increase in ocean acidity causes a decrease in predator avoidance in fish. The experiment simply shows that fish raised in elevated carbon dioxide levels (increased acidity) did not avoid the sounds of the predators as much as fish raised in normal levels of acidity. Note that you cannot conclude with any certainty that this was due to a decrease in the fish’s hearing (further experiments would be needed to confirm that)."
        },
        {
            passage: " A majority of teenagers develop acne, but scientists still struggle to explain its cause. It has long been thought that bacteria play a role, although until recently it was assumed that role was purely detrimental—contributing to acne. However, a team of researchers began to wonder whether different strains of bacteria might impact acne in different ways. The research team studied 49 individuals with acne and 52 individuals without acne, and the researchers collected samples of bacteria from the nasal pores of all those individuals. The researchers found that some combinations of bacterial strains were highly likely to be found in clear skinned individuals, while other combinations were highly likely to be found in individuals with acne. After carefully analyzing their data, the scientists concluded that, while some bacterial combinations likely contribute to acne, other bacterial combinations may actually help to ward it off. The researchers suggested that, if further studies confirm these findings, we may want to treat acne by encouraging the growth of helpful bacteria.",
            question: "2. What was the researchers’ hypothesis?",
            options: [
                "A. Combinations of bacteria are a major cause of acne",
                "B. Different kinds of bacteria may impact acne differently",
                "C. We may want to change the way we treat acne, treating it by encouraging the growth of beneficial bacteria",
                "D. Some combinations of bacteria may actually help ward off acne"
            ],
            answer: "B",
            explanation: "Explanation: Different kinds of bacteria may impact acne differently. The last sentence of the first paragraph provides this answer as well. The researchers “began to wonder whether different strains of bacteria might impact acne in different ways”: that statement represents the idea they sought to test—that is, their hypothesis. Choice (A) describes an assumption that was widely held before the researchers began their study. Choice (C) is a suggestion the researchers made after concluding their study, and choice (D) is their conclusion—not their starting hypothesis."
        },
        {
            passage: "Suppose that you notice your right knee hurts every time you play softball. You suspect that one of the movements involved in playing softball is causing your knee to hurt, but you are not sure which movement is the culprit. You decide to do a scientific investigation to find out more. ",
            question: "3. What should be the hypothesis of this investigation?",
            options: [
                "A. You make a list of each of the movements involved in softball. In the off season (when you are not playing entire games), you plan to perform each movement several times without performing the others",
                "B. Based on the data you collected in your experiment, you think it is likely that stopping suddenly after running a short distance is indeed the cause of your knee pain",
                "C. Based on your experience, you make a guess about which of the movements involved in playing softball puts the greatest stress on the knees. You suspect that it may be stopping suddenly after running a short distance",
                "D. After performing each movement in isolation, record how your knee feels. Let your knee recover between tests of each type of movement"
            ],
            answer: "C",
            explanation: "Explanation:  Hypothesis is making an educated guess about the question that the scientist wants to investigate. The scientist wants to know which movement causes knee pain. So, the guess that stopping suddenly after running a short distance could be the culprit is hypothesis."
        },
        {
            passage: "An office manager noticed that each time she touched the metal filing cabinet next to her desk, she experienced an electrostatic shock (commonly known as “static”). Her assistant, however, only rarely experienced such shocks when touching the cabinet. The office manager liked to wear nylon clothing, and her assistant usually wore cotton clothing. Most of the days, they wore similar types of slippers.  The office manager wondered why this might be.",             
            question: "4. What could be the hypothesis?",
            options: [
                "A. Differences in clothing could explain why she was experiencing more shocks than her assistant",
                "B. Differences in body building could explain why she was experiencing more shocks than her assistant",
                "C. Differences in diet could explain why she was experiencing more shocks than her assistant",
                "D. Differences in slippers could explain why she was experiencing more shocks than her assistant"
            ],
            answer: "A",
            explanation: "Explanation:The passage clearly stated that the office manager and her assistant wore different types of clothing, and they wore similar types of slippers. So, the differences should be the cause of electrostatic shock rather than the similarities.  "
        },
        {
            passage: "The scientist researched the growth rate of plants at various greenhouses, some of which use cool water and some of which use warm water to water their plants. Then, for 6 weeks, the scientist used water at 75 degrees to water plants in Group A and used water at 55 degrees to water plants in Group B. He recorded their growth during this period. At the end of 6 weeks, the plants in Group A were, on average, 2 inches taller than plants in Group B. The scientist interpreted this to mean that warm water is better for plants than cool water. ",            
            question: "5. What would be the hypothesis of this investigation?",
            options: [ 
                "A. Differences in type of water might affect the plants differently",
                "B. Differences in pH might affect the plants differently",
                "C. Differences in light intensity might affect the plants differently",
                "D. Difference in temperature might affect the plants differently"
            ],
            answer: "D",
            explanation: "Explanation: The investigation is conducted by making a difference in water temperature so it means the scientist must have guessed that the differences in water temperature affect the plants growth differently. The scientist must make a change of the variable that he wants to investigate, or he thinks the cause at the start of the experiment. "
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