let topic=null;
let question=null;
let choices=[];
let correctAnswer=null;
let score=null;
let data=null;
let currentQuestion=0;

(async()=>{
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
    }
    catch(err){
        console.log(err);
    }
})();

function setTopic(){
    const topicContent=document.getElementById('topic');
    topicContent.innerHTML=topic;
}

function setQuestion(){
    const questionContent=document.getElementById('question');
    questionContent.innerHTML=question;
}

function setChoices() {
    document.getElementById('choice1').innerHTML=choices[0];
    document.getElementById('choice2').innerHTML=choices[1];
    document.getElementById('choice3').innerHTML=choices[2];
    document.getElementById('choice4').innerHTML=choices[3];
}

function showCheckButton(){
    const main=document.querySelector('main');
    const checkButton=document.createElement('button');
    checkButton.innerHTML='Check';
    main.appendChild(checkButton);
}


document.addEventListener('DOMContentLoaded', () => {
    const displayedName=document.getElementById('displayedName');
    const userName=localStorage.getItem('userName');

    if(userName){
        const span=document.createElement('span');
        span.innerHTML=`, ${userName}`;
        displayedName.appendChild(span);
    }
});
