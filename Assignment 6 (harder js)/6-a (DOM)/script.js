function changeCol(){
    const colour=document.getElementById('colour');
    const container=document.getElementById('container1');

    if(colour.value.trim()===''){
        alert('Please enter a colour');
        return;
    }

    container.style.backgroundColor=colour.value;
    colour.value='';
}

let h1=null;

function changeName(){
    const name=document.getElementById('name');
    const container=document.getElementById('container2');

    if(name.value.trim()===''){
        alert('Please enter a name');
        return;
    }

    if(h1!==null){
        container.removeChild(h1);
    }

    h1=document.createElement('h1');
    h1.innerHTML=name.value;
    container.appendChild(h1);  

    name.value='';
}

function random(num){
    return Math.floor(Math.random()*(num+1));
}

let colName=null;

function randCol(){
    const container=document.getElementById('container3');
    if(colName!==null){
        container.removeChild(colName);
    }
    const colour=`rgb(${random(255)},${random(255)},${random(255)})`;
    colName=document.createElement('h1');
    colName.innerHTML=colour;
    container.appendChild(colName);
    container.style.backgroundColor=colour;
}