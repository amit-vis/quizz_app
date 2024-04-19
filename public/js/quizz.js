// getting all the required things from HTML
const startButtonContainer = document.getElementById('start-btn-cont');
const formContainer = document.getElementById('child-form-container');
const startButton = document.getElementById('start-btn');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-answer');
const nextAnswer = document.getElementById('next-question');
const prevAnswer = document.getElementById('prev-question');
const notificationContainer = document.getElementById('notification-container');
const displayScore = document.getElementById('display-score');
let currentPage = 1;
let totalPage = 1;
let score = 0;
let answeredCorrectly = [];

// function for start buttons
function showQuizzForm() {
    startButtonContainer.style.display = 'none',
        formContainer.style.display = 'flex'
}

startButton.addEventListener('click', showQuizzForm);

// get all the question and show the question
const getQuestionData = async () => {
    try {
        const response = await fetch(`/quizz/?page=${currentPage}`);
        if (response.ok) {
            const data = await response.json();
            totalPage = data.totalPage;

            notificationContainer.innerHTML = "";

            data.question.map((item)=>{
                form.innerHTML = `<h4>Q:-${currentPage} ${item.question}</h4>
                <input type="radio" name="options" value="${item.options[0]}"/>
                <label>${item.options[0]}</label>
                <br/>
                <input type="radio" name="options" value="${item.options[1]}"/>
                <label>${item.options[1]}</label>
                <br/>
                <input type="radio" name="options" value="${item.options[2]}"/>
                <label>${item.options[2]}</label>
                <br/>
                <input type="radio" name="options" value="${item.options[3]}"/>
                <label>${item.options[3]}</label>
                <br/>
                <button class="submit-btn" id="submit-answer">submit answer</button>`
            })
            return data
        }

    } catch (error) {
        throw new Error("Response not Ok")
    }
}

// function for submit the answer

const submitAnswer = async (e)=>{
    try {
        e.preventDefault(); 
        const options = document.querySelectorAll('input[type="radio"]:checked');
        if(!options.length){
            alert("Please select an answer.");
            return;
        }

        const option = options[0].value;
   

        const id = currentPage-1;
        if(answeredCorrectly.includes(id)) {
            alert("You have already answered this question correctly.");
            return;
        }

        const response = await fetch('/answer',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, option})
        });

        const data = await response.json();

        // after tick the question disabled the button
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(button => {
            button.disabled = true;
        });
        submitBtn.disabled = true;

        // here we have show the notification only ones
        if (currentPage) {
            while (notificationContainer.firstChild) {
                notificationContainer.removeChild(notificationContainer.firstChild);
            }
        }

        // Check if the score needs to be increased
        if (data.isCorrect && !answeredCorrectly.includes(id)) {
            const span = document.createElement('span');
            span.setAttribute('class', "notify");
            span.style.color = "green";
            span.textContent = "Correct";
            notificationContainer.appendChild(span);
            // Update the score only once for each correct answer
            score += 5;
            displayScore.textContent = score;
            answeredCorrectly.push(id);
            return
            
        } else if(!data.isCorrect) {
            const span = document.createElement('span');
            span.setAttribute('id', "notify");
            span.style.color = "red";
            span.textContent = "Incorrect:" +"\n" + `{correct Answer: ${data.correctAnswer}}`;
            notificationContainer.appendChild(span);
        }else{
            return
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred, please try again later.');
    }
}


nextAnswer.addEventListener('click', ()=>{
    if(currentPage<=totalPage){
        currentPage++;
        getQuestionData();
    }

})

prevAnswer.addEventListener('click', ()=>{
    if(currentPage>=1){
        currentPage--;
        getQuestionData()
    }
});

form.addEventListener('submit', submitAnswer);

getQuestionData()