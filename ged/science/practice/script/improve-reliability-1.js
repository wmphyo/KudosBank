const questionsSets = [
    [
        {   
            passage: "Use the following information for Questions 1 and 2. <br><br> A pharmaceutical company was testing out a new drug that was intended to lower blood pressure in diabetic patients. Two groups of volunteers were assembled. Group 1 consisted of 200 men, whereas Group 2 consisted of 200 women. All of the trial’s participants were diabetics between the ages of 20 and 50 with similar lifestyles, diet, and general health. Group 2 was given the trial drug, while Group 1 was given a sugar pill as a placebo (fake pill).   ",
            question: "1. Which of the following could lead to an error in this experiment?   ",
            options: [
                "A. One of the groups was not given any real medication",
                "B. All of the participants had diabetes",
                "C. There were too many participants in each group",
                "D. The members of the experimental group and the control group were not similar enough"
            ],
            answer: "D",
            explanation: "The members of the experimental group and the control group were not similar enough. Ideally, the members of both the experimental group and the control group should be as similar as possible, but in this case, Group 1 consisted entirely of men while Group 2 consisted entirely of women. A drug that works well for males may not work well for females (or vice versa), so Choice (D) is correct. You can reject Choice (A) because one of the groups has to act as the control group and therefore should not be given the drug being tested. You can reject Choice (B) because all the members should have diabetes so the pharmaceutical company can test how well the drug works. Choice (C) can be rejected because results from larger groups are more reliable than results from smaller groups."
        },
        {
            passage: "A pharmaceutical company was testing out a new drug that was intended to lower blood pressure in diabetic patients. Two groups of volunteers were assembled. Group 1 consisted of 200 men, whereas Group 2 consisted of 200 women. All of the trial’s participants were diabetics between the ages of 20 and 50 with similar lifestyles, diet, and general health. Group 2 was given the trial drug, while Group 1 was given a sugar pill as a placebo (fake pill).",
            question: "2. How could the design of the experiment be improved to eliminate this potential source of error?",
            options: [
                "A Give the members of both groups the medication",
                "B. Choose only participants who do not have diabetes",
                "C. Reduce the number of participants in each group to 20 each",
                "D. Swap 100 of the males from Group 1 with 100 of the females from Group 2"
            ],
            answer: "D",
            explanation: "Explanation: Swap 100 of the males from Group 1 with 100 of the females from Group 2. A drug can work differently for males and females, so Choice (D) would eliminate the source of error by ensuring that each group has the same number of men and women."
        },
        {
            passage: "Midge is conducting an experiment to see if objects with more mass fall at a faster rate. She has a volleyball, a bowling ball, and a soccer ball of approximately the same size. She drops each of the balls from a height of 15 feet and records the time it takes for each to hit the ground. ",
            question: "3. Which of the following changes is the best way to improve the design of this experiment by reducing possible sources of experimental error?  ",
            options: [
                "A. Drop the balls from a height of 20 feet, instead of 15 feet",
                "B. Measure and record the mass of each ball",
                "C. Test each ball twice, recording the time it takes for the ball to hit the ground both times",
                "D. Use balls of different sizes, such as a golf ball, a tennis ball, and a bowling ball"
            ],
            answer: "B",
            explanation: "Explanation: The best way to improve the design of this experiment is to measure and record the mass of each ball. Since Midge wants to see if objects with more mass fall at a faster rate, then she must know the mass of each object she tests. She won’t know if there is a relationship between mass and rate of falling unless she knows both the mass of the object, and the rate at which the object fell to the ground. Dropping the balls from a different height should not affect the results of the experiment. That is, the rate of falling should be the same for any height from which the balls are dropped. The important thing would be to make sure all balls are dropped from the same height. Testing the balls twice does represent an improvement to the experimental design, but it is not the best way to improve the experimental design. As described above, Midge must know the mass of the balls to be able to answer the question of whether objects with more mass fall at a faster rate. Using balls of different sizes would not improve the design of the experiment. In fact, this would make the results less reliable. It is important in an experiment to hold as many variables constant as possible. Using objects of about the same shape and size represents good experimental design.  "
        },
        {
            passage: "Strawberries and Yeast Experiment<br><br>An experiment was conducted in which three freshly picked strawberries of the same size were each placed into three separate plastic bags. A teaspoon of active yeast was added to bag #1. A tablespoon of a different type of active yeast was added to bag #2. No yeast was added to bag #3. All three bags were placed in the same dark location. After five days, the following observations were made:<br><br>1. Bag #1 and bag #2 were both slightly inflated.<br><br>2. The strawberry in bag #2 was the most broken down.<br><br>3. The strawberry in bag #3 was still mainly intact.<br><br>  ",             
            question: "4. Which of the following changes is the best way to improve the design of the experiment by reducing possible sources of experimental error?",
            options: [
                "A. Place all strawberries into the same plastic bag",
                "B. Place the bags in different locations, rather than in the same location",
                "C. Set up the experiment in triplicate",
                "D. Record observations three days after adding the strawberries and yeast to the bags"
            ],
            answer: "C",
            explanation: "Explanation: A. Place all strawberries into the same plastic bag. B. Place the bags in different locations, rather than in the same location. C. Set up the experiment in triplicate. D. Wait to record observations until seven days after adding the strawberries and yeast to the bags. The best way to improve the design of the experiment is to set up the experiment in triplicate. By testing three strawberries under each of the three conditions being tested, the researchers will have more reliable data. Placing the strawberries in different locations will not improve the design of the experiment because this represents an additional variable. Placing all strawberries into the same bag would represent a bad experimental design, because it no longer allows the researcher to compare the differences in decomposition for a strawberry exposed to no yeast, a teaspoon of yeast, or a tablespoon of yeast. That is, all three strawberries would be exposed to the same conditions if they were all in the same bag together. Recording observations after just three days, rather than five, does not improve the experiment. This allows less time for decomposition to occur, so it will probably provide less reliable results than the original design of recording observations after five days."
        },
        {
            passage: "Strawberries and Yeast Experiment<br><br>An experiment was conducted in which three freshly picked strawberries of the same size were each placed into three separate plastic bags. A teaspoon of active yeast was added to bag #1. A tablespoon of a different type of active yeast was added to bag #2. No yeast was added to bag #3. All three bags were placed in the same dark location. After five days, the following observations were made:<br><br>1. Bag #1 and bag #2 were both slightly inflated.<br><br>2.The strawberry in bag #2 was the most broken down.<br><br>3. The strawberry in bag #3 was still mainly intact. ",            
            question: "5. Which of the following represents a source of error in the design of the experiment? ",
            options: [ 
                "A. All strawberries were the same size and freshly picked",
                "B. Different types and amounts of yeast were added to bags #1 and #2",
                "C. No yeast was added to bag #3",
                "D. The strawberries were placed in three separate bags"
            ],
            answer: "B",
            explanation: "Explanation: Notice that “[a] teaspoon of active yeast was added to bag #1. A tablespoon of a different type of active yeast was added to bag #2.” This is a potential source of error, because two variables are being manipulated: both type and amount of yeast added. It would have been better to use the same type of yeast in both bags #1 and #2, since two different amounts of yeast were added. Alternatively, the researchers could have used two different types of yeast, but then they should have kept the amount of yeast constant for bags #1 and #2. Experimental results are most reliable when all variables are held constant, other than the one being tested. Although no yeast was added to the third bag, this represents good experimental design because it is a control. The control allows the researchers to observe the difference between strawberries exposed to yeast, and strawberries not exposed to yeast. Using strawberries of the same size, and all freshly picked was the best way to keep the three tests constant with respect to the strawberry used. Using three separate bags allowed the researchers to observe the differences in decomposition for a strawberry exposed to no yeast, a teaspoon of yeast, or a tablespoon of yeast. This also shows good experimental design.  "
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