(async()=>{
    mainFunc();
})();

function mainFunc(){
    let birthYear=Number(prompt("Enter your birth year"));
    let currDate=new Date();
    let currYear=currDate.getFullYear();
    if(currYear-birthYear>=18)
        console.log("Youre not a minor");
    else
        console.log("Youre a minor");
    console.log("Your age is "+(currYear-birthYear));
}