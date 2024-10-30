let topic=null;

const addedName=document.createElement('span');

(async()=>{
    try{
        const response=await fetch("data.json");
        data=await response.json();
        topic=data.topic;

        setTopic();
        setName();
        setMarks();
    }
    catch(err){
        console.log(err);
    }
})();

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