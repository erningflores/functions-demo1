const select = document.querySelector("select");
const firstNumber = document.querySelector("#fn");
const secondNumber = document.querySelector("#sn");
const h3 = document.querySelector("h3");
const submit = document.querySelector("#answer");


 
submit.addEventListener("click", function(event){
    let answer=0, n1=0, n2=0;
    n1 = parseInt(firstNumber.value);
    n2 = parseInt(secondNumber.value);

    switch(select.value){
        case "+":
            answer = n1 + n2;
            break;
        case "-":
            answer = n1 - n2;
            break;
        case "*":
            answer = n1 * n2;
            break;
        case "/":
            answer = n1 / n2;
            break;
        case "%":
            answer = n1 % n2;
            break;
        default:
            answer = n1**n2;
            break;
    }
    h3.textContent = answer;
    event.preventDefault();
});

