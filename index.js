let buttonEt = document.getElementById("button-et")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let warningEl = document.getElementById("warning-el")

buttonEt.addEventListener("click", function(){
  if(isNaN(inputEl.value) || inputEl.value.length == 0){
    console.log('Invalid Input')
    warningEl.textContent = 'Invalid Input!'
    inputEl.value = ''
  }else{
    warningEl.innerHTML = '&nbsp;'
    compute(inputEl.value)
    inputEl.value = ''
  }
})

function compute(value){
  lengthEl.innerHTML = `${value} meters = ${(value*3.28084).toFixed(3)} | ${value} feet = ${(value/3.28084).toFixed(3)} meters`
  volumeEl.innerHTML = `${value} liters = ${(value / 3.78541).toFixed(3)} gallons | ${value} gallons = ${(value * 3.78541).toFixed(3)} liters`
  massEl.innerHTML = `${value} kilos = ${(value * 2.20462).toFixed(3)} pounds | ${value} pounds = ${(value /  2.20462).toFixed(3)} kilos`
}
