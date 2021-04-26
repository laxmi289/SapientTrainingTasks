const bodyEl = document.querySelector('.body');
const resultEl = document.querySelector('.result');

// const newDiv = document.createElement('div');
// const newh1 = document.createElement('h1');
// newh1.innerHTML = "Results"
// newDiv.appendChild(newh1);
// bodyEl.appendChild(newDiv);


//Second
const renderQuiz = (questions) => {
    bodyEl.innerHTML = questions.map(question => {
        return `
        <div class="item">
            <h1>Question ${question.id}</h1>
            <div class="questions">
                <p>Q. ${question.question}</p>
                <div class="options">
                    <ul>
                        <li><input type="radio" name="option" value="option1">${question.option1}</li>
                        <li><input type="radio" name="option" value="option2">${question.option2}</li>
                        <li><input type="radio" name="option" value="option3">${question.option3}</li>
                        <li><input type="radio" name="option" value="option4">${question.option4}</li>
                    </ul>
                </div>
                <button type="button" onclick="checkButton()">Submit</button>
            </div>
        </div>
    `
    }).join('');

};

//Fourth
const finalBtn = document.createElement('button');
finalBtn.innerHTML = "Final Submit";
finalBtn.setAttribute("type", "button");
finalBtn.setAttribute("onclick", "showResult()");
resultEl.appendChild(finalBtn);

const finalSubmit = document.querySelector('.result button');

//Fifth
const fetchAnswers = async(answer) => {
    const response = await fetch('https://6083c8329b2bed0017040391.mockapi.io/api/answers');
    const result = await response.json();
    renderAnswers(result);

};

//Sixth
const renderAnswers = (answers) => {
    bodyEl.innerHTML = answers
        .map(a1 => `<p style = "text-decoration:underline;">Question ${a1.id}</p><p>Answer: ${a1.answer}</p><br>`)
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

function checkButton() {
    var getSelectedValue = document.querySelector(
        'input[name="option"]:checked');

    if (getSelectedValue != null) {
        alert("Selected option is: " + getSelectedValue.value);
        quizAnswers.push(getSelectedValue.value);
    } else {
        alert("No option selected");
    }
}

// var actualAns = ["option1", "option2", "option3", "option1", "option2", "option3", "option1"];
// var n = quizAnswers.includes("option1", 1);