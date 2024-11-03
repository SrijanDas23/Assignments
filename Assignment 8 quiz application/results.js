let topic=null;
let questionLength=null;

const addedName=document.createElement('span');

(async()=>{
    try{
        const response=await fetch("data.json");
        data=await response.json();
        topic=data.topic;

        setQuestionLength();
        setTopic();
        setName();
        setMarks();
        setScoreList();
    }
    catch(err){
        console.log(err);
    }
})();

function setQuestionLength(){
    questionLength=data.questions.length;
}

function setTopic(){
    const topicContent=document.getElementById('topic');
    topicContent.innerHTML=topic;
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

function setMarks(){
    const marksContent=document.getElementById('score');
    const marks=localStorage.getItem('score');
    marksContent.innerHTML=marks;
}

function setScoreList(){
    const reviewContainer=document.querySelector('.reviewContainer');

    for(let i=1;i<=questionLength;i++){
        const score=localStorage.getItem(`score${i}`);
        const scoreItem=document.createElement('p');
        scoreItem.innerHTML=`Question ${i}: Score ${score}`;
        reviewContainer.appendChild(scoreItem);
    }
}