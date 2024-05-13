let inputDay = document.querySelector("#day")
let inputmonth = document.querySelector("#month")
let inputyaer = document.querySelector("#year")

let resultDay = document.querySelector(".result-day")
let resultmonth = document.querySelector(".result-month")
let resultyear = document.querySelector(".result-years")

let submit = document.querySelector("#submit")

submit.addEventListener("click", () => {
    if (inputDay.value !== "" && inputmonth.value !== "" && inputyaer.value !== "") {
        let dateCountYears = new Date().getFullYear()
        let birthYear = dateCountYears - inputyaer.value  
        resultyear.innerHTML = birthYear;

        let dateCountMonth = (birthYear * 12) + (new Date().getMonth() - inputmonth.value)
        resultmonth.innerHTML = dateCountMonth

        let dateSeconds = new Date().getTime() - new Date(`${inputmonth.value}/${inputDay.value}/${inputyaer.value}`).getTime()
        let dateCountDay = Math.floor(((dateSeconds) / (1000 * 60 * 60 * 24))) 
        resultDay.innerHTML = dateCountDay
        
    }
})

