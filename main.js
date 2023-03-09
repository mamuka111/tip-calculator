const billInput = document.querySelector(".input");
const customTipInput = document.querySelector(".costumInput");
const personInput = document.querySelector(".personInput");
const insidePercents = document.querySelectorAll(".insidepercents");
const tipAmount = document.querySelector(".p3");
const totalBill = document.querySelector(".p6");
const resetButton = document.querySelector(".reset");
const ressetP = document.querySelector(".p7")

let firstInput = 0;
let customInput = 0;
let personValueInput = 0;

billInput.addEventListener("input", function () {
  firstInput = billInput.value;
  if(firstInput && customInput && personValueInput){
    calculateTip()}
 const billHasnumber = billInput.value.match(/\d+/);
 if (billHasnumber) {
  resetButton.style.backgroundColor = '#9FE8DF';
} else {
  resetButton.style.backgroundColor = '#0D686D';
}
if(personInput.value == 0 ){
  tipAmount.innerHTML = "$0.00"
  totalBill.innerHTML = "$0.00"
}
});

customTipInput.addEventListener("input", function () {
  customInput = customTipInput.value;
  if(firstInput && customInput && personValueInput ){
    calculateTip()}
  const billHasnumber = customTipInput.value.match(/\d+/);
  if (billHasnumber) {
   resetButton.style.backgroundColor = '#9FE8DF';
 } else {
   resetButton.style.backgroundColor = '#0D686D';
 }
 cvladi = 0;
 if(button){
 button.className ="insidepercents"
 }
if(personInput.value == 0 ){
  tipAmount.innerHTML = "$0.00"
  totalBill.innerHTML = "$0.00"
}
// console.log(customInput)
});

personInput.addEventListener("input", function () {
  personValueInput = personInput.value;
  if(firstInput && customInput && personValueInput ){
    calculateTip()
  }
  if(firstInput && cvladi && personValueInput ){
    calculateTip()
  }
  const billHasnumber = personInput.value.match(/\d+/);
  if (billHasnumber) {
   resetButton.style.backgroundColor = '#9FE8DF';
 } else {
   resetButton.style.backgroundColor = '#0D686D';
 }
 if(personValueInput == 0){
  tipAmount.innerHTML = "$0.00"
  totalBill.innerHTML = "$0.00"
 }
});



let button;
let cvladi;
insidePercents.forEach((element) => {
 
      console.log(element)
      
  element.addEventListener("click", function () {
    console.log(element)

    button =  element;
    cvladi = element.innerHTML
    tipAmount.innerHTML = element.innerHTML;
    totalBill.innerHTML = element.innerHTML;
    customTipInput.value = "";
    customInput = 0;
    calculateTip();

    element.className = "active"
    console.log(cvladi);
    insidePercents.forEach((item)=>{
     if(item.innerHTML !== cvladi){
      item.className = "insidepercents"
     } 
     
    })
  });
 
});

resetButton.addEventListener("click", function () {
  billInput.value = "";
  customTipInput.value = "";
  personInput.value = "";
  tipAmount.innerHTML = "$0.00";
  totalBill.innerHTML = "$0.00";
  firstInput = 0;
  customInput = 0;
  personValueInput = 0;
  let billHasNoNumber = billInput.value.match(/\d+/);
 if(billInput.value !== billHasNoNumber){
  resetButton.style.backgroundColor = "#0D686D"
 }
 cvladi = 0;
 button.className ="insidepercents"
});

// function calculateTip() {
//   if (firstInput && personValueInput) {
//     let tipPercent = 0;
//     if (customInput) {
//       tipPercent = customInput;
//     } else {
//       tipPercent = parseFloat(tipAmount.innerHTML);
//     }

//     let tipAmountValue =
//       (firstInput * (tipPercent / 100)) / personValueInput;
//     let totalBillValue = (firstInput / personValueInput) + tipAmountValue;

//     tipAmount.innerHTML = "$" + tipAmountValue.toFixed(2);
//     totalBill.innerHTML = "$" + totalBillValue.toFixed(2);
//   }
// }
function calculateTip() {
  if (firstInput && personValueInput && !isNaN(firstInput) && !isNaN(personValueInput)) {
    console.log(firstInput)
    console.log(personValueInput)
    console.log(firstInput)
    
    let tipPercent = 0;
    
    if (customInput) {
      tipPercent = customInput;
    } else {
      tipPercent = parseFloat(cvladi);
    }
    console.log( tipAmount.innerHTMl)
    console.log(tipPercent)
    let tipAmountValue = 
      (firstInput * (tipPercent / 100)) / personValueInput;
    let totalBillValue = (firstInput / personValueInput) + tipAmountValue;

    tipAmount.innerHTML = "$" + tipAmountValue.toFixed(2);
    totalBill.innerHTML = "$" + totalBillValue.toFixed(2);
  } else {
    tipAmount.innerHTML = "$0.00";
    totalBill.innerHTML = "$0.00";
    
  }
  if(personInput.value == 0 ){
    tipAmount.innerHTML = "$0.00";
    totalBill.innerHTML = "$0.00";
  }
}
console.log("firstInput:", firstInput, "personValueInput:", personValueInput);



