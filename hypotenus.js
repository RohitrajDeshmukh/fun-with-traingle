const inputValue = document.querySelectorAll(".input-value");
const hypotenusButton = document.querySelector("#btn");
const output = document.querySelector("#output");


function calculateSquareSum(a,b){
    if( a > 0 && b > 0){
    const sumOFnumber = a*a + b*b;
    return sumOFnumber;
    }else{
        alert("Enter the value")
    }
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