const inputValue = document.querySelectorAll(".input-value");
const hypotenusButton = document.querySelector("#btn");
const output = document.querySelector("#output");


function calculateSquareSum(a,b){
    const sumOFnumber = a*a + b*b;
    return sumOFnumber;
}

function calculateHypotenus(){
    const sumOFnumber = calculateSquareSum(
        Number(inputValue[0].value), 
        Number(inputValue[1].value)
        );
    const lengthOfHypotenus = Math.sqrt(sumOFnumber);
    output.innerHTML = "The length of hypotenus is : " +lengthOfHypotenus;
}

hypotenusButton.addEventListener('click', calculateHypotenus)