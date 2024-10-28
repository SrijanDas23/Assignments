function addTask(){
    const task=document.getElementById('task');
    
    if(task.value.trim()===''){
        alert('Please enter a task');
        return;
    }

    const newTask=document.createElement('li');
    newTask.innerHTML=`${task.value}<button onclick="deleteTask(this)">Delete</button>`;
    document.getElementById('taskList').appendChild(newTask);
    task.value='';
}

function deleteTask(button){
    console.log(button);
    const taskItem=button.parentNode;
    taskItem.remove();
}