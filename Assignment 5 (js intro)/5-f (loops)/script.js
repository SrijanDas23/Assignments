(async()=>{
    mainFunc();
})();

function mainFunc(){
    let num=Number(prompt("Enter a number"));
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    console.log(fact);
    fact=1;
    while(num>0){
        fact*=num;
        num--;
    }
    console.log(fact);
}