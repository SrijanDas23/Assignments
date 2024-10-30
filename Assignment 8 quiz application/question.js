let topic=null;
let question=null;
let choices=[];
let correctAnswer=null;
let score=null;
let data=null;
let currentQuestion=0;
let currentScore=0;
let time=null;
let timerInterval=null;
let checkButton=null;
let nextButton=null;
let selectedChoice=null;
const main=document.querySelector('main');
const timerDisplay=document.getElementById('time-left');

const firstRemark=document.getElementById('first-remark');
const secondRemark=document.getElementById('second-remark');

let scores=[];

(async()=>{
    await fetchQuestion();
    setName();
})();

async function fetchQuestion(){
    try{
        const response=await fetch("data.json");
        data=await response.json();
        topic=data.topic;
        question=data.questions[currentQuestion].question;
        choices=data.questions[currentQuestion].choices;
        correctAnswer=data.questions[currentQuestion].correctAnswer;
        score=data.questions[currentQuestion].score;
        console.log(topic);
        console.log(question);
        console.log(choices);
        console.log(correctAnswer);
        console.log(score);

        setTopic();
        setQuestion();
        setChoices();
        startTimer();
        enableChoices();

        clearSelectedAnswers();
        clearRemarks();
    }
    catch(err){
        console.log(err);
    }
}


function setName(){
    const displayedName=document.getElementById('displayedName');
    const userName=localStorage.getItem('userName');

    if(userName){
        const span=document.createElement('span');
        span.innerHTML=`, ${userName}`;
        displayedName.appendChild(span);
    }
}

function setTopic(){
    const topicContent=document.getElementById('topic');
    topicContent.innerHTML=topic;
}

function setQuestion(){
    const questionContent=document.getElementById('question');
    const questionNo=document.getElementById('question-no');
    questionNo.innerHTML=currentQuestion+1;
    questionContent.innerHTML=question;
}

function setChoices() {
    document.getElementById('choice1').innerHTML=choices[0];
    document.getElementById('choice2').innerHTML=choices[1];
    document.getElementById('choice3').innerHTML=choices[2];
    document.getElementById('choice4').innerHTML=choices[3];
}

function showCheckButton(selectedAnswer){
    if(checkButton && main.contains(checkButton)){
        main.removeChild(checkButton);
    }
    clearSelectedAnswers();
    selectedAnswer.classList.add('selected');
    checkButton=document.createElement('button');
    checkButton.innerHTML='Check';
    checkButton.id='checkButton';
    main.appendChild(checkButton);

    selectedChoice=selectedAnswer.innerText;
    checkButton.addEventListener('click', checkAnswer);
}

function checkAnswer(){
    clearInterval(timerInterval);
    console.log(selectedChoice);
    console.log(choices[correctAnswer]);
    if(selectedChoice===choices[correctAnswer]){
        console.log("Correct Answer");
        currentScore+=score;
        const scoreElement=document.getElementById('score');
        scoreElement.innerHTML=currentScore;
        firstRemark.innerHTML='Correct Answer';
        firstRemark.classList.add('correct');
    }
    else{
        firstRemark.classList.add('wrong');
        firstRemark.innerHTML='Wrong Answer';
    }
    secondRemark.innerHTML='Please click on Next';
    disableChoices();

    main.removeChild(checkButton);
    nextButton=document.createElement('button');
    nextButton.innerHTML='Next';
    nextButton.id='nextButton';
    main.appendChild(nextButton);
    nextButton.addEventListener('click', ()=>{
        main.removeChild(nextButton);
        console.log("Next Question");
        currentQuestion++;
        if(currentQuestion<data.questions.length){
            console.log("Next Question");
            fetchQuestion();
        }
        else{
            storeResults();
            window.location.href='results.html';
        }
    });
}

function startTimer(){
    time=60;
    if(timerInterval){
        clearInterval(timerInterval);
    }

    timerInterval=setInterval(()=>{
        if (time>0){
            time--;
            timerDisplay.innerHTML=`00:${time}s`;
        } else {
            clearInterval(timerInterval);
            time=60;
            currentQuestion++;
            if(currentQuestion<data.questions.length){
                fetchQuestion();
            }
        }
    }, 1000);
}

function clearSelectedAnswers(){
    const answers=document.getElementsByClassName('answer');
    Array.from(answers).forEach(answer => {
        answer.classList.remove('selected');
    });
}

function clearRemarks(){
    firstRemark.innerHTML='';
    firstRemark.classList.remove('correct');
    firstRemark.classList.remove('wrong');
    secondRemark.innerHTML='';
}

function storeResults(){
    localStorage.setItem('score', currentScore);
}

function disableChoices(){
    const answers=document.getElementsByClassName('answer');
    Array.from(answers).forEach(answer=>{
        answer.style.pointerEvents='none';    
    });
}

function enableChoices() {
    const answers=document.getElementsByClassName('answer');
    Array.from(answers).forEach(answer=>{
        answer.style.pointerEvents='auto';
        answer.onclick(showCheckButton(answer));
    });
}
