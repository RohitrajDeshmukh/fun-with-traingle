const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateArea() {
    let baseValue = Number(base.value);
    let heightValue = Number(height.value);
    let area = (baseValue * heightValue) / 2;
    output.innerHTML = "The Area of Triangle is : " +area;
}

areaBtn.addEventListener("click", calculateArea);