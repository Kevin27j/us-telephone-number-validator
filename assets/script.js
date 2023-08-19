const phoneInput = document.getElementById("phone");
const checkNumberButton = document.querySelector(".check-button");
const resultWrapper = document.getElementById("result-wrapper");

function telephoneCheck(str) {
    return (/^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/g).test(str)
}

checkNumberButton.addEventListener("click", function(){
    let newResult = document.createElement("p");
    resultWrapper.appendChild(newResult);
    if (!telephoneCheck(phoneInput.value)){
        newResult.innerText = "Fail";
    }
    newResult.innerText = "Success";

    console.log(phoneInput.value)
})