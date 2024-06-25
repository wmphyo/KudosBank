const questionsSets = [
    {
        passage: "Scientists performed an experiment to determine whether there is a connection between learning ability and food. They took two groups of 25 dogs each, all from the same breed and between the ages of 8 and 10 months old. Both groups of dogs were deprived of food for 1 day and then given a customary training session to learn a new (never before encountered) trick – to “speak” or bark on command. Immediately after each successful “speak”, Group 1 was fed a piece of kibble, but Group 2 was not (they were told “Good dog” and continued being trained). A week later, all of the dogs were tested to see whether they could remember to “speak” on command. The results can be seen in the following table: <br><br> ",
        question: "1. Which of the following could be considered a dependent variable for the food motivation experiment?",
        options: [
            "A. the ages of the dogs that were used in the experiment",
            "B. the total number of dogs that were used in the experiment",
            "C. whether or not the dogs could remember to “speak” one week later",
            "D. whether or not the dogs were given kibble for performing the trick"
        ],
        answer: "C",
        explanation: "Explanation: An independent variable is a variable that is changed, controlled, or manipulated by the researcher in an experiment to create two or more comparison groups. A dependent variable is a variable that changes in response to the independent variable(s) in an experiment. In this experiment, whether or not the dogs remembered to “speak” one week later was found to be dependent on whether or not the dogs were given kibble for performing the “speak” trick. ",
        image: "var-2-1-dog-experiment.jpg",
        alt: "Image of a table with data groups"
    },
    {
        passage: `Every material has a property known as specific heat capacity. Specific heat capacity is the amount of heat that is required to raise the temperature of that material by a certain amount. Materials that have a low specific heat capacity heat up very quickly, whereas materials that have a high specific heat capacity heat up more slowly. <br><br> It can be calculated by using the following equation: <br><br> c=qm⋅ΔT<br><br> where q represents the amount of heat (in joules), m represents the mass of the substance (in grams), and ΔT represents the change in temperature.<br><br>  Jada is asked to identify a certain material by it’s specific heat capacity. She performs an experiment where she weighs her given sample, then adds a certain amount of heat and records the temperature change. Her data can be found in the following table:`,
        question: "2. Which of the following could best be classified as the dependent variable in Jada’s experiment?",
        options: [
            "A. c",
            "B. m",
            "C. q",
            "D. ΔT"
        ],
        answer: "D",
        explanation: "Explanation: An independent variable is a variable that is changed, controlled, or manipulated by the researcher in an experiment to create two or more comparison groups. A dependent variable is a variable that changes in response to the independent variable(s) in an experiment. Jada controls the amount of heat (q) added to the sample, and then observes the temperature change (ΔT) that occurs in response. Therefore, ΔT is the dependent variable in the experiment.",
        image: "var-2-2-heat-capacity.jpg",
        alt: "Image of a table with two columns and data"
    },
    {
        passage: `<b>Newton’s Second Law of Motion – Pulley Experiment</b> <br><br> Molly set up an experiment in which a cart weighing 5 kilograms was attached to a pulley. She then applied a different force on the cart in each of the four tests. The results can be found in the table. She hypothesized that her data would be consistent with Newton’s Second Law of Motion, which is represented by the following equation: <br><br> F=ma<br><br> F is the force applied to an object, m is mass of the object, and a is the acceleration of the object.<br><br>`,
        question: "3. Choose the phrase that best completes the following sentence: <br><br> In Molly’s set of tests, _____ functions as a dependent variable.",
        options: [
            "A. Newton’s 2nd Law of Motion",
            "B. the acceleration of the cart",
            "C. the force applied to the cart",
            "D. the mass of the cart "
        ],
        answer: "B",
        explanation: "Explanation: n Molly’s set of tests, the acceleration of the cart functions as a dependent variable.  An independent variable is a variable that is changed, controlled, or manipulated by the researcher in an experiment to create two or more comparison groups. A dependent variable is a variable that  changes in response to the independent variable(s) in an experiment. In this experiment, Molly (the researcher) has changed the force applied to the cart in each of her tests to see how the acceleration changed in response. ",
        image: "var-2-3-law-of-motion.jpg",
        alt: "Image of a table with two rows and data"
    },
    {
        passage: `A scientist is studying the effects high levels of processed grains have on the mind by feeding them to rats. The scientist has an idea in his head as to what the results will be, but he would like to confirm this. His idea is that rats fed with highly processed grains will not think as clearly as those fed a healthier diet. To perform his experiment, he feeds a specific amount of highly processed grains to one sample of rats for a set amount of time, while the others are fed a diet of plant-based foods. Each set of rats is then sent through a maze individually and timed to determine the speed at which they are able to solve the maze.`,
        question: "4. What is the independent variable?",
        options: [
            "A. The diet",
            "B. The speed at which the rats solve the puzzle",
            "C. The environment",
            "D. Time"
        ],
        answer: "A",
        explanation: "Explanation: The independent variable is the factor that the scientist changes or manipulates to observe its effects on the dependent variable. In this case, the scientist is altering the diet of the rats (between highly processed grains and a plant-based diet) to see its impact on the dependent variable, which is “the speed at which the rats solve the maze.” The maze and the environment are constants in this experiment, as they are not being altered and remain the same for all groups of rats. ",
    },
    {
        passage: `A study was done to measure the effectiveness of an antibiotic on different bacteria. The antibiotic Vancomycin was tested on 3 types of bacteria: Enterococcus, Staphylococcus, and Streptococcus. Bacterial growth was measured at 3 different durations of time exposure to the antibiotic: 1 hour, 24 hours, and 7 days. The rate of bacterial growth was measured by bacterial colony size at each time interval. The data for each duration was calculated and compiled into the graph shown below. As a control, each bacteria species was also grown with no exposure to the antibiotic. This control culture was measured after 7 days.`,
        question: "5. What are the independent and dependent variables in this experiment? ",
        options: [
            "A. The independent variable is the duration of exposure to Vancomycin; the dependent variable is bacterial colony size.",
            "B. The independent variable is the bacterial colony size; the dependent variable is the duration of exposure to Vancomycin.",
            "C. The independent variable is the bacterial colony size; the dependent variable is the type of bacteria. ",
            "D. The independent variable is the duration of exposure to Vancomycin; the dependent variable is the type of bacteria."
        ],
        answer: "D",
        explanation: "Explanation: An independent variable is a variable that is changed or manipulated in a scientific experiment in order to test the effects on the dependent variable. In this case the researchers could control the duration of exposure and the type of bacteria. The dependent variable responds to the independent variable. It is called dependent because it 'depends' on the independent variable. <br><br>  In this case the bacteria colony size depends on the duration of exposure and the type of bacteria. In this study there are two independent variables and there is one dependent variable. The independent variables are the duration of exposure to Vancomycin and the type of bacteria used. The dependent variable is the bacterial colony size, which depends on length of exposure to the antibiotic. ",
        image: "var-2-5-vancomycin.jpg",
        alt: "Image of a bar chart with data"
        // Path to your image file (adjust as needed)
    }
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