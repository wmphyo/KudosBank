const questionsSets = [
    [
        {   
            passage: "A scientist designed an experiment in which he took a random sample of patients who tested positive for measles and found out whether, prior to their infection with the disease, they had received no measles vaccine, one dose of vaccine, or two doses of vaccine. He surveyed 100 patients who tested positive for measles and found that 7 people had received one dose of measles vaccine, 3 people had received two doses, and 90 people had not had the vaccine.   ",
            question: "1. The scientist repeated the experiment with a different set of 100 measles patients and found that 5 people had received one dose of measles vaccine, 3 people had received two doses, and 92 people had not had the vaccine. How can he best reconcile the data from these two studies to state a conclusion?   ",
            options: [
                "A. The measles vaccine is 90% effective at preventing measles",
                "B. The measles vaccine is highly effective at preventing measles and is most effective with two doses",
                "C. The effectiveness of the measles vaccine is variable based on when it is received",
                "D. Three doses of measles vaccine can completely protect people from measles"
            ],
            answer: "B",
            explanation: " In both experiments, one dose of vaccine proved a high degree of protection and in both experiments two doses provided even more protection  "
        },
        {
            passage: "Researchers in a particular city theorize that decreasing the greenhouse gas emissions in that city will result in better respiratory health for its citizens. In order to test this theory, they institute two programs. The first program provides commuters with financial incentives to take public transportation, and the second program initiates a respiratory care education campaign and provides free clinics for citizens suffering from respiratory health issues. During the five years after the researchers institute the two programs, greenhouse gas emissions in the city decrease by 50%, and a citywide survey reveals that cases of illness due to respiratory problems have decreased by 65%. Researchers therefore conclude that their theory was correct: Decreasing greenhouse gas emissions resulted in better respiratory health for local citizens.  ",
            question: "2. Which of the following best shows why the researchers'conclusion is flawed?",
            options: [
                "A. They failed to compare the city’s air quality to that of any other towns, so they don’t know if greenhouse gases decreased more or less than they should have",
                "B. They should have tested the city’s drinking water, too, since that has a greater effect on citizens’ health than air quality does",
                "C. Their conclusion doesn’t explain the 15% difference between the decrease in greenhouse gases and the decrease in respiratory problems",
                "D. They instituted two programs instead of one, so they can’t be sure which is responsible for the resulting health improvements"
            ],
            answer: "D",
            explanation: "Explanation: According to the scientific method, experiments should test only one variable in order to reach a conclusion about that variable. In this study, the researchers did two things instead of just one: they created incentives to decrease pollution and also created free clinics. Therefore, they don’t know which is responsible for the health improvements. Choice (D) best describes this. Other answer choices do not address this flaw. "
        },
        {
            passage: "Some of the stars you see in the night sky are so far away from Earth that the light from them has taken millions of years to reach you. So what you are really seeing is what those stars looked like millions of years ago. You are actually seeing into the past. To help us handle these huge distances, we use a special unit of measurement called a light-year to describe them. As its name suggests, a light-year is equal to the distance that light travels in one year. Light travels at 300,000 km per second in the vacuum of space. Objects that are moving away from Earth are red-shifted. Objects that are traveling towards Earth are blue-shifted.",
            question: "3. What can you deduce about a star if the light from it has been blue-shifted?",
            options: [
                "A. The star is cooler than most other stars",
                "B. The light from the star is traveling faster than light normally travels",
                "C. The star is moving away from Earth",
                "D. The star is moving toward Earth"
            ],
            answer: "D",
            explanation: "Explanation:  The star is moving toward Earth. According to the Doppler effect, the frequency of the light emitted from moving objects will shift toward either the red end of the spectrum or the blue end (depending on the direction of motion). Objects that are moving away from Earth are red-shifted. Objects that are traveling toward Earth are blue-shifted, making Choice (D) the correct answer.  "
        },
        {
            passage: "A pharmaceutical company was testing out a new drug that was intended to lower blood pressure in diabetic patients. Two groups of volunteers were assembled. Group 1 consisted of 200 men, whereas Group 2 consisted of 200 women. All of the trial’s participants were diabetics between the ages of 20 and 50 with similar lifestyles, diet, and general health. Group 2 was given the trial drug, while Group 1 was given a sugar pill as a placebo (fake pill).  ",             
            question: "4. If the results of the experiment showed no change in the blood pressure for the members of either group, what conclusion can be made? ",
            options: [
                "A. The drug does not lower blood pressure in either men or women",
                "B. The drug does not lower blood pressure in men",
                "C. The drug does not lower blood pressure in women",
                "D. The drug may lower blood pressure in men"
            ],
            answer: "D",
            explanation: "Explanation:The drug was given only to a relatively small group of women, so you can’t say with any certainty that it does not reduce blood pressure in men; hence, you can reject Choices (A) and (B). Choice (C) may be tempting, but you can’t be sure that the drug doesn’t lower women’s blood pressure, because you have the results of only a single experiment. (More experiments would need to be performed before you could say this for sure.) "
        },
        {
            passage: "A majority of teenagers develop acne, but scientists still struggle to explain its cause. It has long been thought that bacteria play a role, although until recently it was assumed that role was purely detrimental—contributing to acne. However, a team of researchers began to wonder whether different strains of bacteria might impact acne in different ways. The research team studied 49 individuals with acne and 52 individuals without acne, and the researchers collected samples of bacteria from the nasal pores of all those individuals. The researchers found that some combinations of bacterial strains were highly likely to be found in clear skinned individuals, while other combinations were highly likely to be found in individuals with acne. After carefully analyzing their data, the scientists concluded that, while some bacterial combinations likely contribute to acne, other bacterial combinations may actually help to ward it off. The researchers suggested that, if further studies confirm these findings, we may want to treat acne by encouraging the growth of helpful bacteria.  ",            
            question: "5. What conclusion did the researchers reach based on their data?",
            options: [ 
                "A.  Combinations of bacteria are a major cause of acne",
                "B. Acne sufferers have more types of bacterial strains in their facial pores than do non-sufferers",
                "C. The way we currently treat acne is misguided",
                "D. Some combinations of bacteria may actually help ward off acne"
            ],
            answer: "D",
            explanation: "Explanation: Some combinations of bacteria may actually help ward off acne. This question asks for the researchers’ conclusion—that is, the idea they embraced after concluding their study. That idea is described by choice (D). Choice (A) is an assumption many people held before the research began. Choice (B) is not supported by the passage. Choice (C) is not supported by the passage: after drawing their conclusions, the researchers suggested a way to treat acne in the future, but they did not suggest that current treatments are misguided.   "
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