const bodyEl = document.querySelector('.body');
const resultEl = document.querySelector('.result');
const scoreEl = document.querySelector('.score');
const newp = document.querySelector('.body p');



//Second
const renderQuiz = (questions) => {
    bodyEl.innerHTML = questions.map(question => {
        return `
        <center><div class="item">
        <hr>
            <h1>Question ${question.id}</h1>
            <div class="questions">
                <center><p>Q. ${question.question}</p>
                <div class="options" style="display:flex; justify-content:center;">
                    <ul>
                        <li><input type="radio" name="option" value="option1">${question.option1}</li>
                        <li><input type="radio" name="option" value="option2">${question.option2}</li>
                        <li><input type="radio" name="option" value="option3">${question.option3}</li>
                        <li><input type="radio" name="option" value="option4">${question.option4}</li>
                    </ul>
                </div>
                <button type="button" onclick="checkButton()">Submit</button>
            </div>
        </div></center>
    `
    }).join('');

};


//Fourth
const finalBtn = document.createElement('button');
finalBtn.innerHTML = "Show Correct Answers";
finalBtn.setAttribute("type", "button");
finalBtn.setAttribute("onclick", "showResult()");
resultEl.appendChild(finalBtn);

const scoreBtn = document.createElement('button');
scoreBtn.innerHTML = "Check Score (Scroll down on clicking)";
scoreBtn.setAttribute("type", "button");
scoreBtn.setAttribute("onclick", "checkScore()");
resultEl.appendChild(scoreBtn);


//Fifth
const fetchAnswers = async(answer) => {
    const response = await fetch('https://6083c8329b2bed0017040391.mockapi.io/api/answers');
    const result = await response.json();
    renderAnswers(result);

};

//Sixth
const renderAnswers = (answers) => {
    bodyEl.innerHTML = answers
        .map(a1 =>
            `
        <p style = "text-decoration:underline;">Question ${a1.id}</p><p>Answer: ${a1.answer}</p>
        <br>`)
        .join('');
};

function showResult() {
    if (quizAnswers.length == 7) {
        fetchAnswers();
    } else {
        alert("Please attend all questions");
    }
}

//First
const fetchQuiz = async() => {
    const response = await fetch('https://6083c8329b2bed0017040391.mockapi.io/api/questions');
    const result = await response.json();
    renderQuiz(result);
};

fetchQuiz();


//Third
var quizAnswers = [];
var actualAns = ["option1", "option2", "option3", "option1", "option2", "option3", "option1"];
var finalResult = [];

function checkButton() {
    var getSelectedValue = document.querySelector(
        'input[name="option"]:checked');

    if (getSelectedValue != null) {
        alert("Selected option is: " + getSelectedValue.value);
        quizAnswers.push(getSelectedValue.value);

    } else {
        alert("No option selected");
    }

    // quizAnswers.forEach((e1) => actualAns.forEach((e2) => {

    //     if (e1 == e2) {
    //         finalResult.push("true");
    //     } else {
    //         finalResult.push("false");
    //     }
    //     return finalResult = finalResult.slice(0,7);
    // }));

    for (var i = 0; i <= quizAnswers.length; i++) {
        if (quizAnswers[i] != actualAns[i]) {
            finalResult.push("false");
            break;
        }
        finalResult.push("true")

    }
    return finalResult = finalResult.slice(0, 7);

}


//Seventh

function checkScore() {
    if ((quizAnswers != null) && (quizAnswers.length == actualAns.length)) {
        const h1El = document.createElement('h1');
        h1El.innerHTML = "Your Quiz Completed"
        scoreEl.appendChild(h1El);

        const pEl = document.createElement('p');
        pEl.innerHTML = "Result"
        scoreEl.appendChild(pEl);


        var countTrue = finalResult.filter(function(item) {
            return item == 'true';
        }).length;

        var countFalse = finalResult.filter(function(item) {
            return item == 'false';
        }).length;


        const p2El = document.createElement('p');
        p2El.innerHTML = "Correct Answers:" + countTrue;
        scoreEl.appendChild(p2El);

        const p3El = document.createElement('p');
        p3El.innerHTML = "Wrong Answers:" + countFalse;
        scoreEl.appendChild(p3El);

    } else {
        alert("You have not attempted/completed the quiz !!!")
    }

}