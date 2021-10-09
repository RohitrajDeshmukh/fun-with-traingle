const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateArea() {
    let baseValue = Number(base.value);
    let heightValue = Number(height.value);

    if(baseValue > 0 && heightValue > 0){
    let area = (baseValue * heightValue) / 2;
    output.innerHTML = "The Area of Triangle is : " +area;
    }else{
        alert("Please Enter the value")
    }
}

areaBtn.addEventListener("click", calculateArea);