let topic=null;
let questions=null;
let totalScore=null;

const addedName=document.createElement('span');

(async()=>{
    try{
        const response=await fetch("data.json");
        data=await response.json();
        topic=data.topic;
        questions=data.questions.length;

        setTopic();
        setQuestionNo();
        setTotalScore();
    }
    catch(err){
        console.log(err);
    }
})();

function setTopic(){
    const topicContent=document.getElementById('topic');
    topicContent.innerHTML=topic;
}

const startButton=document.getElementById('startButton');
startButton.addEventListener('click',setName);

function setName() {
    const name = document.getElementById('name').value;
    localStorage.setItem('userName', name);
}

function setQuestionNo(){
    const questionNo=document.getElementById('questionNo');
    questionNo.innerHTML=`${questions}`;
}

function setTotalScore(){
    for(let i=0;i<questions;i++){
        totalScore+=data.questions[i].score;
    }
    const totalScoreElement=document.getElementById('totalScore');
    totalScoreElement.innerHTML=totalScore;
}