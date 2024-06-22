const questionsSets = [
    [
        {
            passage: [`The industrial revolution, which began in the late 18th century, marked a major turning point in history.
            It transformed economies that had been based on agriculture and handicrafts into economies based on large-scale industry, mechanized manufacturing, and the factory system.
            New machines, such as the steam engine, were developed, and innovations in iron and textile production improved efficiency and productivity.
            As a result, cities grew rapidly as people moved from rural areas to urban centers in search of work.<br><br>
            However, the industrial revolution also brought significant challenges.
            Working conditions in factories were often harsh and dangerous, with long hours and low wages.
            Child labor was widespread, and environmental pollution from factories became a major problem.
            Despite these issues, the industrial revolution paved the way for modern economies and improved standards of living for many people.`,
                ],
            question: "1. Which of the following best concludes the passage? ",
            options: [
                "A. The industrial revolution was entirely beneficial, with no negative consequences.  ",
                "B. While the industrial revolution led to economic growth and improved living standards, it also introduced significant social and environmental challenges. ",
                "C. The industrial revolution did not affect the urbanization of cities.",
                "D. The industrial revolution only had negative impacts on society. "
            ],
            answer: "B",
            explanation: "Explanation: The passage outlines both the positive and negative impacts of the industrial revolution. Option B accurately summarizes the dual nature of these impacts, making it the best conclusion. "
        },
        {
            passage: [`Advancements in medical technology have significantly improved healthcare outcomes over the past few decades. Innovations such as minimally invasive surgical techniques, advanced imaging technologies, and personalized medicine have revolutionized the way diseases are diagnosed and treated. These advancements have led to better patient outcomes, shorter recovery times, and a reduction in the overall cost of healthcare.<br><br> 

            Despite these benefits, there are also challenges associated with rapid technological advancements in medicine. The high cost of new technologies can make them inaccessible to many patients, leading to disparities in healthcare. Additionally, the increasing reliance on technology can sometimes lead to a depersonalization of patient care, as healthcare providers may focus more on data and machines than on the patient as an individual.<br><br> 
            
            Overall, while medical technology has greatly enhanced the ability to diagnose and treat diseases, it is important to address the associated challenges to ensure equitable and compassionate care for all patients.`,
                ],
            question: "2. Which of the following best concludes the passage? ",
            options: [
                "A. Medical technology has only improved healthcare without any drawbacks.",
                "B. The challenges of medical technology outweigh its benefits. ",
                "C. Medical technology has transformed healthcare, but addressing its challenges is crucial for equitable and compassionate care. ",
                "D. The high cost of medical technology makes it unusable in most healthcare settings."
            ],
            answer: "C",
            explanation: " Explanation: The passage discusses the benefits and challenges of medical technology. Option C summarizes the overall positive impact of medical technology while emphasizing the need to address its challenges, making it the best conclusion. "
        },
        {
            passage: ['Renewable energy sources, such as solar, wind, and hydropower, are becoming increasingly important in the global effort to combat climate change. These energy sources produce little to no greenhouse gas emissions, making them a cleaner alternative to fossil fuels. The adoption of renewable energy can help reduce air pollution, decrease dependency on finite resources, and create new economic opportunities through the development of green technologies.<br><br> However, transitioning to renewable energy also presents challenges. The initial cost of setting up renewable energy infrastructure can be high, and the intermittent nature of sources like solar and wind requires the development of efficient energy storage solutions. Additionally, integrating renewable energy into existing power grids requires significant upgrades and changes to energy management systems.<br><br> In conclusion, while renewable energy offers a sustainable solution to many environmental and economic challenges, careful planning and investment are necessary to overcome the obstacles associated with its implementation.',
                ],
            question: "3. Which of the following best concludes the passage? ",
            options: [
                "A. Renewable energy is too costly to be a viable solution for most countries.",
                "B. The benefits of renewable energy far outweigh any challenges it presents.  ",
                "C. Renewable energy provides a sustainable solution, but overcoming implementation challenges requires careful planning and investment.  ",
                "D. Fossil fuels are a more reliable energy source than renewable energy. "
            ],
            answer: "C",
            explanation: "Explanation: The passage highlights the benefits and challenges of renewable energy. Option C accurately reflects the need for careful planning and investment to address these challenges, making it the best conclusion. "
        },
        {
            passage: "The development of artificial intelligence (AI) has led to significant advancements in various fields, including healthcare, finance, and transportation. In healthcare, AI algorithms can analyze medical images with high accuracy, assist in diagnosing diseases, and personalize treatment plans for patients. In finance, AI systems are used to detect fraudulent activities, manage investments, and provide customer service through chatbots. In transportation, AI powers autonomous vehicles, optimizes traffic flow, and improves safety through predictive maintenance. <br><br> Despite these benefits, the widespread adoption of AI also raises ethical and societal concerns. Issues such as data privacy, algorithmic bias, and the potential displacement of jobs need to be addressed. Ensuring that AI systems are transparent, fair, and accountable is crucial to gaining public trust and maximizing the positive impact of AI technologies.<br><br>  In conclusion, while AI has the potential to revolutionize various industries and improve quality of life, it is essential to address the ethical and societal challenges it presents to ensure its benefits are realized responsibly.",
            question: "4. Which of the following best concludes the passage? ",
            options: [
                "A. AI will completely eliminate the need for human workers in all industries.  ",
                "B. The benefits of AI are so significant that any ethical concerns are irrelevant.  ",
                "C. AI has the potential to revolutionize industries, but addressing ethical and societal challenges is essential.  ",
                "D. The use of AI in healthcare is the most important advancement. "
            ],
            answer: "C",
            explanation: "Explanation: The passage discusses both the benefits and challenges of AI. Option C. accurately captures the need to address ethical and societal concerns while acknowledging the transformative potential of AI, making it the best conclusion. "
        },
        {
            passage: "Climate change poses a significant threat to global food security. Rising temperatures and changing precipitation patterns can reduce crop yields and affect the availability of water resources. Extreme weather events, such as droughts, floods, and storms, can devastate agricultural lands and disrupt food production. Additionally, the spread of pests and diseases is exacerbated by changing climate conditions, further threatening crops and livestock.<br><br> Efforts to mitigate the impacts of climate change on food security include developing climate-resilient crops, improving water management practices, and adopting sustainable farming techniques. Enhancing the resilience of agricultural systems is crucial to ensuring a stable food supply for the growing global population.<br><br> In summary, addressing the challenges posed by climate change is essential to safeguarding global food security and ensuring the sustainability of agricultural systems.",
            question: "5. Which of the following best concludes the passage? ",
            options: [
                "A. Climate change will lead to a complete collapse of global food systems.",
                "B. Sustainable farming techniques alone can solve the problem of climate change.",
                "C. Addressing climate change challenges is essential for safeguarding global food security and sustainable agriculture.",
                "D. The spread of pests and diseases is the most critical issue caused by climate change. ."
            ],
            answer: "C",
            explanation: "Explanation: The passage highlights the threats climate change poses to food security and the importance of developing resilient agricultural practices. Option C. summarizes the need to address these challenges to ensure food security and sustainability, making it the best conclusion."
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