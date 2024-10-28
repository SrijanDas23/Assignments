function addData(){
    const name=document.getElementById('name');
    const age=document.getElementById('age');
    const colour=document.getElementById('colour');

    const displayName=document.getElementById('displayName');
    const displayAge=document.getElementById('displayAge');
    const displayColour=document.getElementById('displayColour');

    if(name.value.trim()==='' || age.value.trim()==='' || colour.value.trim()===''){
        alert('Please enter all fields');
        return;
    }

    displayName.innerHTML='Name: ';
    displayAge.innerHTML='Age: ';
    displayColour.innerHTML='Colour: ';

    const newName=document.createElement('span');
    const newAge=document.createElement('span');
    const newColour=document.createElement('span');


    newName.innerHTML=name.value;
    newAge.innerHTML=age.value;
    newColour.innerHTML=colour.value;

    displayName.appendChild(newName);
    displayAge.appendChild(newAge);
    displayColour.appendChild(newColour);

    name.value='';
    age.value='';
    colour.value='';
}