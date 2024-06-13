const testQUestionsEng = [
    [
        {
            question:"1. Name one thing that affects the taste of cacao beans.",
            answers: [
                {text: 'A. Place where cacao beans grow and age of the tree', correct:true},
                {text: 'B. Different types of weather', correct:false},
                {text: 'C. Soil in the countries', correct:false},
                {text: 'D. Various flavours', correct:false},
            ]
        },
        {
            question: "2. ‘This ensures the flavour of the chocolate is consistent over time.’ (lines 8–9) What does ‘consistent over time’ means?",
            answers: [
                {text: 'A. Chocolate is always dark', correct:true},
                {text: 'B. Quality of chocolate will change', correct:false},
                {text: 'C. The taste of chocolate will not change', correct:true},
                {text: 'D. Chocolates have so many flavours', correct:false},
            ]
        },
        {
            question: "3. Select the phrase to describe how chocolate liquor tastes.",
            answers: [
                {text: 'A. Taste pretty good',correct:false},
                {text: 'B. Bitter, not very smooth or creamy',correct:true},
                {text: 'C. Things like sugar, vanilla and milk',correct:false},
                {text: 'D. Right texture',correct:false},
            ]
        },
        {
            question: "4. Which ingredients are added to chocolate liquor to make it taste better?",
            answers: [
                {text: 'A. Mixture through steel rollers.', correct:false},
                {text: 'B. Mixed and mashed chocolate.', correct:false},
                {text: 'C. Sugar, vanilla and milk.', correct:true},
                {text: 'D. Thick paste and creamy.', correct:false},
            ]
        },
        {
            question: "5. What is conching?",
            answers: [
                {text: 'A. Running the mixture through steel rollers.', correct:false},
                {text: 'B. Mixing in things like sugar, vanilla and milk', correct:false},
                {text: 'C. Conching can last from a few hours to six days.', correct:false},
                {text: 'D. Putting the mixture in a machine that mixes and mashed the chocolate', correct:true},
            ]
        },
        {
            question: "6. What is the main idea of the paragraph 4?",
            answers: [
                {text: "A. The importance of Theobroma cacao tree", correct:false},
                {text: "B. Process in making chocolate", correct:false},
                {text: "C. The importance of conching in making chocolate", correct:true},
                {text: "D. How chocolate is made", correct:false},
            ]
        }
    ],
    [
        {
            answers: [
                {text: 'A. your own seeds, additional soil bucket and gardening tools.', correct:false},
                {text: 'B. your own seeds; additional soil bucket, and gardening tools.', correct:false},
                {text: 'C. your own seeds, additional soil, a bucket, and gardening tools.', correct:true},
                {text: 'D. your own seeds, additional soil, a bucket and gardening tools.', correct:false},
            ]
        },
        {
            answers: [
                {text: 'A. community rules. If you do not, you will lose your gardening privileges.', correct:true},
                {text: 'B. community rules! If you do not, you will lose your gardening privileges!!', correct:false},
                {text: 'C. community rules? if you do not, you will lose your gardening privileges?', correct:false},
                {text: 'D. community rules, if you do not, you will lose your gardening privileges.', correct:false},
            ]
        },
        {
            answers: [
                {text:'A. one a great educational resource for children.',correct:false},
                {text:'B. them a great educational',correct:false},
                {text:'C. he or she a great educational resource for children.',correct:false},
                {text:'D. it a great educational resource for children.',correct:true},
            ]
        },
        {
            answers: [
                {text:'A. so that it does not interfere with anyone else.',correct:false},
                {text:'B. so that it does not interfere with anyone elses\'.',correct:false},
                {text:'C. so that it does not interfere with anyone else\'s.',correct:true},
                {text:'D. so that it does not interfere with anyone\'s else.',correct:false},
            ]
        },
        {
            answers: [
                {text:'A. experiencing healthy living, enjoying the outdoors, and growing their own food and flowers.',correct:false},
                {text:'B. experience both healthy living and to also enjoy the outdoors and grow their own food and flowers.',correct:false},
                {text:'C. experience healthy living, enjoy the outdoors, and grow their own food and flowers.',correct:true},
                {text:'D. experiencing healthy living, enjoying the outdoors, and grow their own food and flowers.',correct:false},
            ]
        }
    ]
]
/*Same structure as quiz app js*/
const testQuestionsMath = [
    {
        question: "1. Choose the answer for 423-298.",
        answers: [
            {text:'A. 135',correct:false},
            {text:'B. 125',correct:true},
            {text:'C. 152',correct:false},
            {text:'D. 126',correct:false},
        ]
    },
    {
        question: "2. Joe has 76 oranges. Four oranges are needed to make a glass of freshly squeezed organge juice. How many glasses of orange juice can he make?",
        answers: [
            {text:'A. 19 glasses of orange juice',correct:true},
            {text:'B. 22 glasses of orange juice',correct:false},
            {text:'C. 16 glasses of orange juice',correct:false},
            {text:'D. 20 glasses of orange juice',correct:false},
        ]
    },
    {
        question: "3. What fraction of the shape below is shaded?",
        answers: [
            {text:'A. 8/3', correct:false},
            {text:'B. 6/10', correct:false},
            {text:'C. 3/5', correct:false},
            {text:'D. 3/8', correct:true},
        ],
        imageURL: '../images/pre-ged-test/fraction.jpg'
    },
    {
        question: "4. A box contains 30 chocolates. How many chocolates are in 6 of these boxes?",
        answers: [
            {text:'A. 175 chocolates',correct:false},
            {text:'B. 180 chocolates',correct:true},
            {text:'C. 185 chocolates',correct:false},
            {text:'D. 170 chocolates',correct:false},
        ]
    },
    {
        question: "5. The Venn diagram below shows information about the children in a Grade 6 class. How many children in this class walk to school?",
        answers: [
            {text:'A. 19 students', correct:true},
            {text:'B. 16 students', correct:false},
            {text:'C. 22 students', correct:false},
            {text:'D. 18 students', correct:false},
        ],
        imageURL: '../images/pre-ged-test/venn-diagram.jpg'
    },
    {
        question: "6. A point (2,3) is plotted below. Select the values of two more point whose co-ordinates have a sum of 5.",
        answers: [
            {text:'A. (2,2) and (3,3)', correct:false},
            {text:'B. (1,4) and (3,3)', correct:false},
            {text:'C. (2,3) and (1,3)', correct:false},
            {text:'D. (3,2) and (1,4)', correct:true},
        ],
        imageURL: '../images/pre-ged-test/coordinate.jpg'
    },
    {
        question: "7. The simplest form of 6 / 12 is",
        answers: [
            {text:'A. 2/6', correct:false},
            {text:'B. 1/2', correct:true},
            {text:'C. 3/4', correct:false},
            {text:'D. 12/24', correct:false},
        ]
    },
    {
        question: "8. 0.85 + X = 1. Write down the value of X.",
        answers: [
            {text:'A. 1.85', correct:false},
            {text:'B. -0.15', correct:false},
            {text:'C. 0.15', correct:true},
            {text:'D. -1.85', correct:false},
        ]
    },
    {
        question: "9. 400 x 70 =",
        answers: [
            {text:'A. 21000', correct:false},
            {text:'B. 47000', correct:false},
            {text:'C. 28000', correct:true},
            {text:'D. 2800', correct:false},
        ]
    },
    {
        question: "10. 7.7 + 0.34 =",
        answers: [
            {text:'A. 8.04', correct:true},
            {text:'B. 0.804', correct:false},
            {text:'C. 7.734', correct:false},
            {text:'D. 8.374', correct:false},
        ]
    },
    {
        question: "11. Which fraction is equivalent to 0.5?",
        answers: [
            {text:'A. 1/50', correct:false},
            {text:'B. 50/100', correct:true},
            {text:'C. 100/50', correct:false},
            {text:'D. 1/5', correct:false},
        ]
    },
    {
        question: "12. Calculate the parameter of the shape.",
        answers: [
            {text:'A. 33', correct:false},
            {text:'B. 42', correct:true},
            {text:'C. 36', correct:false},
            {text:'D. 46', correct:false},
        ],
        imageURL: '../images/pre-ged-test/parameter.jpg'
    },
    {
        question: "13. Use the image in Question 12. and calculate the area of the shape.",
        answers: [
            {text:'A. 88', correct:false},
            {text:'B. 74', correct:false},
            {text:'C. 84', correct:true},
            {text:'D. 91', correct:false},
        ]
    },
    {
        question: "14. Describe the value of Seven thousand, nine hundred and six in figures.",
        answers: [
            {text:'A. 6097', correct:false},
            {text:'B. 9607', correct:false},
            {text:'C. 7609', correct:false},
            {text:'D. 7906', correct:true},
        ]
    },
    {
        question: "15. Select the correct answer below.",
        answers: [
            {text:'A. 112 < 102', correct:false},
            {text:'B. 1211 < 1121', correct:false},
            {text:'C. 2111 > 1112', correct:true},
            {text:'D. 1212 = 2121', correct:false},
        ]
    },
    {
        question: "16. Marcel sells ice-creams. How many strawberry-flavored ice-creams did he sell?",
        answers: [
            {text:'A. 24', correct:false},
            {text:'B. 17', correct:true},
            {text:'C. 32', correct:false},
            {text:'D. 9', correct:false},
        ],
        imageURL: '../images/pre-ged-test/tally.jpg'
    },
    {
        question: "17. 1/3 + X = 1. Select the value of X.",
        answers: [
            {text:'A. 1/3', correct:false},
            {text:'B. 2/3', correct:true},
            {text:'C. 3/1', correct:false},
            {text:'D. 4/3', correct:false},
        ]
    },
    {
        question: "18. Choose the numbers that can be divided by 7 with a remainder of 1.",
        answers: [
            {text:'A. 74', correct:false},
            {text:'B. 84', correct:false},
            {text:'C. 85', correct:true},
            {text:'D. 96', correct:false},
        ],
        imageURL: '../images/pre-ged-test/number-grid.jpg'
    },
    {
        question: "19. X / 5 = 24. What is the value of X?",
        answers: [
            {text:'A. 119', correct:false},
            {text:'B. 110', correct:false},
            {text:'C. 125', correct:false},
            {text:'D. 120', correct:true},
        ]
    }, 
    {
        question: "20. The original price of the coat is $45. In a sale, the price is reduced by 15%. Work out the price of the coat in sale is",
        answers: [
            {text:'A. 38.25', correct:true},
            {text:'B. 37.75', correct:false},
            {text:'C. 39.50', correct:false},
            {text:'D. 40', correct:false},
        ]
    }
]

const testQuestionsSci = [
    {
        question: "1. The Earth rotates on its axis. How long the Earth takes to make one complete rotation on its axis?",
        answers: [
            {text:'A. 24 hours 56 seconds', correct:false},
            {text:'B. 23 hours 56 minutes', correct:true},
            {text:'C. 23 hours 59 minutes', correct:false},
            {text:'D. 24 hours 4 seconds', correct:false},
        ]
    },
    {
        question: "2. Which of the following is true?",
        answers: [
            {text:'A. The Sun does not move.', correct:true},
            {text:'B. The Sun goes round the Moon.', correct:false},
            {text:'C. The Sun orbits the Earth.', correct:false},
            {text:'D. The Sun travels round the Earth.', correct:false},
        ]
    },
    {
        question: "3. Cables and wires need to be good electrical conductors. They are made of",
        answers: [
            {text:'A. Gas', correct:false},
            {text:'B. Non-metal', correct:false},
            {text:'C. Carbon', correct:false},
            {text:'D. Metal', correct:true},
        ]
    },
    {
        question: "4. Sounds cannot spread out in all directions.",
        answers: [
            {text:'A. True', correct:false},
            {text:'B. False', correct:true},
        ]
    },
    {
        question: "5. What happens to the frozen salt solution when it melts by room temperature?",
        answers: [
            {text:'A. Salt particles', correct:false},
            {text:'B. Liquid', correct:true},
            {text:'C. Gas', correct:false},
            {text:'D. Water', correct:false},
        ]
    },
    {
        question: "6. What is the boiling point of water?",
        answers: [
            {text:'A. 109 degree celsius', correct:false},
            {text:'B. 98 degree celsius', correct:false},
            {text:'C. 100 degree celsius', correct:true},
            {text:'D. 101 degree celsius', correct:false},
        ]
    },
    {
        question: "7. Energy can be destroyed.",
        answers: [
            {text:'A. True', correct:false},
            {text:'B. False', correct:true},
        ]
    },
    {
        question: "8. Choose which mixture does not react or make a solution.",
        answers: [
            {text:'A. cooking oil and water', correct:true},
            {text:'B. salt and water', correct:false},
            {text:'C. bicarbonate of soda and vinegar', correct:false},
            {text:'D. sugar and water', correct:false},
        ],
        imageURL: '../images/pre-ged-test/mixture.png'
    },
    {
        question: "9. Which of the following observations would help to identify a living thing?",
        answers: [
            {text:'A. It grows.', correct:true},
            {text:'B. It gets smaller.', correct:false},
            {text:'C. It melts.', correct:false},
            {text:'D. It feels warm.', correct:false},
        ]
    },
    {
        question: "10. Why plants do not need to feed on other living things.",
        answers: [
            {text:'A. because they feed on to the death things', correct:false},
            {text:'B. because they are vegetarians', correct:false},
            {text:'C. because they have choloroplasts and can do photosynthesis', correct:true},
            {text:'D. because they are not a living thing', correct:false},
        ]
    }
]

let currentQuestionIndex = 0;
let engScore = 0;
let mathScore = 0;
let sciScore = 0;
let mcqArea = document.querySelector('.right-col');
function startTest(){
    showQuestions();
}

function showQuestions(){
    resetState();
    //if part one [0], if part two [1]
    let currentQuestion = testQUestionsEng[currentQuestionIndex];
    console.log(currentQuestion);
    
    currentQuestion.forEach(questions=>{
        console.log(questions);
        //create question tag
        const questionTag = document.createElement('div');
        //assign question to the tag
        questionTag.innerHTML = questions.question;
        //display on html
        mcqArea.appendChild(questionTag);

        questions.answers.forEach(answers=>{
            const answerTag = document.createElement('p');
            answerTag.classList.add('hover');
            answerTag.innerHTML = answers.text;
            mcqArea.appendChild(answerTag);
            if(answers.correct){
                answerTag.dataset.correct = answers.correct;
            }
            answerTag.addEventListener('click', selectAnswer);
        });
    });
    // console.log(currentQuestion);
    // window.alert("hello");
}

//fix this later  
function selectAnswer(e){
    //assign selected answer into the variable selectedAns
    const selectedAns = e.target;
    //assign dataset value true for condition check
    const isCorrect = selectedAns.dataset.correct === 'true';
    //if dataset is true, change the bg color
    if(isCorrect){
        selectedAns.classList.add('correct');
        //if eng, engScore++, if math, mathScore++, if sci, sciScore++
    } else {
        selectedAns.classList.add('incorrect');
    }
    console.log(mcqArea.children);
    console.log(mcqArea.getElementsByTagName('div'));
    
    const ans = mcqArea.querySelector('p');
    //disable the click after selecting one answer
    Array.from(mcqArea.children).forEach(answer=>{
        //show the correct answer
        if(answer.dataset.correct==='true'){
            answer.classList.add('correct');
        }
        //disable the answer
        answer.disabled = true;
    });
    // preGedTestPreviewBtn.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    /*
        if eng,
        if math
        if sci
    */
}

function resetState(){
    // nextButton.style.display = 'none';

    //remove all the previous answers
    while(mcqArea.firstChild){
        mcqArea.removeChild(mcqArea.firstChild);
    }
}

startTest();


/*Test preview button for Pre-GED Entrance Test*/
let preGedTestPreviewBtn = document.getElementById('pre-ged-test-preview-btn');
preGedTestPreviewBtn.addEventListener('click', function(){
    document.querySelector('.test-preview').classList.add('hide');
    preGedTestPreviewBtn.innerHTML = 'Next';
});