const input = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");



function calculateSum(angle1, angle2, angle3){
    const sumOfAngle = angle1+angle2+angle3;
    return sumOfAngle
}

function isTriangle(){
    const sumOfAngle = calculateSum( 
        Number(input[0].value),
        Number(input[1].value),
        Number(input[2].value)
    )
    console.log(sumOfAngle);
    if(sumOfAngle === 180){
        output.innerText = "The angles Form a Triangle!"
    }
    else{
        output.innerText = "Oops! The angle do-not form a Triangle"
    }
}



isTriangleBtn.addEventListener('click', isTriangle)