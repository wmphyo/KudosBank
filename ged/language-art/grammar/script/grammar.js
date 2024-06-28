const grammarExplanation = [
    [//practice-1
        '<b>Number 1</b>: Choice C is correct because it correctly places commas after each of the items in a series.',
        '<b>Number 2</b>: Choice A is correct because it shows the appropriate end marks in each sentence.Choice B does not present the proper tone for a community memo.',
        '<b>Number 3</b>: Choice D is correct. It shows the correct use of the pronoun <i>it</i> to refer to the singular word <i>garden</i> in the previous sentence.',
        '<b>Number 4</b>: Choice C is correct because it shows the correct use of an apostrophe to show the possessive form of <i>anyone else: anyone else’s</i>.',
        '<b>Number 5</b>: Choice C is correct because it is uses parallel construction for the verbs <i>experience</i>, <i>enjoy</i>, and <i>grow</i>.'
    ],
    [//practice-2
        '<b>Number 1</b>: Choice D is correct because it uses the conjunctive adverb <i>however</i> to indicate a contrast with the idea in the previous clause.',
        '<b>Number 2</b>: Choice A is correct because it is the only choice in which the modifier <i>first</i> is placed next to the verb it modifies: <i>learn</i>.',
        '<b>Number 3</b>: Choice C is correct. It expresses the ideas in a clear and concise way without creating a run-on sentence.',
        '<b>Number 4</b>: Choice B is correct. The pronoun <i>it</i> correctly refers to the <i>animal</i> in the previous sentence.',
        '<b>Number 5</b>: Choice D uses capitalization correctly. Days of the week should be capitalized, but the word <i>open</i> should not.'
    ],
    [//practice-3
        '<b>Number 1</b>: Choice B is correct. It uses formal or Standard English, which is appropriate to a business letter, while the other choices do not.',
        '<b>Number 2</b>: Choice C correctly uses <i>me</i>, the objective form of the first person pronoun.',
        '<b>Number 3</b>: Choice A correctly uses the homonyms <i>two</i> and <i>to</i>.',
        '<b>Number 4</b>: Choice C is correct because it does not contain any misplaced modifiers.',
        '<b>Number 5</b>:  Choice D is correct because it has the proper coordination of ideas joined by the coordinating conjunction <i>and</i>.'
    ],
    [//practice-4
        '<b>Number 1</b>: Choice A is correct because it correctly uses a comma to set off the introductory phrase.',
        '<b>Number 2</b>: Choice C is correct because it uses the proper coordinating conjunction so. <i>Hence</i> is an adverb.',
        '<b>Number 3</b>: Choice B is correct because <i>his or her</i> is the best use of pronouns to take the place of the singular <i>everyone</i>. Choice D is also singular, but not gender-neutral (which is preferred).',
        '<b>Number 5</b>: Choice A is correct. Its plural verbs are in agreement with their plural subjects: <i>employees/feel</i> and <i>companies/have</i>.',
        '<b>Number 6</b>: Choice D is correct. Unlike the other choices, choice D has a verb, and it creates a complete sentence rather than a fragment.'
    ],
    [//practice-5
        '<b>Number 1</b>: Choice D is correct because the conjunctive adverb <i>therefore</i> makes the most sense in the sentence.',
        '<b>Number 2</b>: Choice A is correct. The idiomatic expression is “up to me.”',
        '<b>Number 3</b>: Choice C is correct. Its verbs are in agreement with its subjects: <i>what/is</i> and <i>brands/are</i>.',
        '<b>Number 4</b>: Choice D correctly uses an apostrophe to indicate the possessive form of the word <i>company</i>',
        '<b>Number 5</b>: Choice A correctly uses the homonyms <i>there</i> and <i>no</i>',
        '<b>Number 6</b>: Choice B is correct. The pronouns in the phrase <i>he or she</i> stand in for the singular antecedent <i>consumer</i>. The words <i>consumer</i>, <i>he</i>, and <i>she</i> are all singular, so the singular verb <i>is</i> is correct here.'
    ],
    [//practice-6
        '<b>Number 1</b>: Choice C is correct because it avoids informal or overblown language.',
        '<b>Number 2</b>: Choice C is correct because unlike the other answer choices, it is a complete sentence with a subject and a verb.',
        '<b>Number 3</b>: Choice D is correct. The words <i>news</i> and <i>activity</i> are singular nouns that require the singular forms of the verbs: <i>is</i> and <i>protects</i>.',
        '<b>Number 4</b>: Choice B is correct. It correctly places a comma between all the items in a series.',
        '<b>Number 5</b>: Choice C is correct because it uses the correct forms of the homonyms <i>your</i> and <i>weight</i>',
        '<b>Number 6</b>: Choice D is correct. It is the only choice that uses a transitional word that suggests contrast.'
    ],
    [//practice-7
        '<b>Number 1</b>: Choice A correctly capitalizes the first word in the sentence and also the two proper nouns: <i>Madison</i> and <i>Longview</i>.',
        '<b>Number 2</b>: Choice A correctly uses the plural possessive form: <i>children’s</i>',
        '<b>Number 3</b>: Choice B is correct. An exclamation point is the most appropriate end mark for this sentence, which expresses great enthusiasm. Choices C and D do not use end marks and create fragments.',
        '<b>Number 4</b>: Choice C is correct. It is balanced and parallel. The listed items are all nouns in the gerund form.',
        '<b>Number 5</b>: Choice B is correct. It uses punctuation and the conjunction and to avoid creating a run-on sentence.',
        '<b>Number 6</b>: Choice D is correct. It is the only choice that is a complete sentence because it contains a subject and a verb.'
    ]
];

var practiceNum;

function checkAnswer() {
    var explanation = grammarExplanation[practiceNum];
    var feedbackARR = [];
    let grade = 0;
    //because i starts from 1
    //decided to not add 'not selected' because if answer is not selected, it's incorrect.
    for (let i = 1; i < explanation.length+1; i++) {
        let answer = document.getElementById('ans' + i);
        if (answer.value === 'correct') {
            grade++;
            answer.classList.add('correct-color');
        } else {
            answer.value = 'correct';   //to display the correct ones
            answer.classList.add('incorrect-color');
            feedbackARR.push(explanation[i-1]);   //set this up for feedback section
        }
        answer.disabled = true;
        //hide checkAns btn and show goBack btn to RLA page
        document.getElementById('btnGoBack').style.display = 'block';
        if(practiceNum!==6){ //don't display next btn for last page
            document.getElementById('btnNextPage').style.display = 'block';
        }
        document.getElementById('btnCheck').style.display = 'none';
    }

    const feedbackSectionDIV = document.querySelector('.grammar-feedback');
    const gradeDIV = document.createElement('p');
    gradeDIV.classList.add('grade');
    gradeDIV.innerHTML = `Your total grade is ${grade}`;
    feedbackSectionDIV.appendChild(gradeDIV);
    
    const explanationDIV = document.createElement('div');
    explanationDIV.classList.add('grammar-explanation');
    feedbackARR.forEach((key,index)=>{
        const explanationPara = document.createElement('p');
        explanationPara.innerHTML = feedbackARR[index];
        explanationDIV.appendChild(explanationPara);        
    });
    feedbackSectionDIV.appendChild(explanationDIV);
}

function grammarPractice(){
    if (window.location.href.includes('grammar-practice-1')) {
        practiceNum=0;
    } else if (window.location.href.includes('grammar-practice-2')) {
        practiceNum=1;
    } else if (window.location.href.includes('grammar-practice-3')) {
        practiceNum=2;
    } else if (window.location.href.includes('grammar-practice-4')) {
        practiceNum=3;
    } else if (window.location.href.includes('grammar-practice-5')) {
        practiceNum=4;
    } else if (window.location.href.includes('grammar-practice-6')) {
        practiceNum=5;
    } else {
        practiceNum=6;
    } 
}

window.onload = grammarPractice();