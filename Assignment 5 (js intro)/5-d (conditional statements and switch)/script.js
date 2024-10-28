(async=>{
    mainFunc();
})();

function mainFunc(){
    let num1=Number(prompt("Enter number 1"));
    let num2=Number(prompt("Enter number 2"));
    let op=prompt("Enter operator sign");
    const ans=operation(num1,num2,op);
    console.log(ans);
};

function operation(num1,num2,op){
    switch(op){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
        case "%":
            return num1%num2;
        default:
            return "Invalid operator";
    }
};