let topic=null;

const addedName=document.createElement('span');

(async()=>{
    try{
        const response=await fetch("data.json");
        data=await response.json();
        topic=data.topic;

        setTopic();
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
