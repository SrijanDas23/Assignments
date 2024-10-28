function addData(){
    const email=document.getElementById('email');
    const name=document.getElementById('name');

    if(email.value.trim()==='' || name.value.trim()===''){
        alert('please enter complete data');
        return;
    }

    const displayName=document.getElementById('displayName');
    const displayEmail=document.getElementById('displayEmail');

    displayName.innerHTML='Name: ';
    displayEmail.innerHTML='Email: ';

    const newName=document.createElement('span');
    const newEmail=document.createElement('span');

    newName.innerHTML=name.value;
    newEmail.innerHTML=email.value;

    displayName.appendChild(newName);
    displayEmail.appendChild(newEmail);
    
    email.value='';
    name.value='';
}

let bool=true;
function toggleCol(){
    const body=document.querySelector('body');
    body.style.backgroundColor= bool ? 'blue' : 'white';
    bool=!bool;
}