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
  if(firstInput && customInput && personValueInput  && insidePercents){
    calculateTip()}
 const billHasnumber = billInput.value.match(/\d+/);
 if (billHasnumber) {
  resetButton.style.backgroundColor = '#9FE8DF';
} else {
  resetButton.style.backgroundColor = '#0D686D';
}
});

customTipInput.addEventListener("input", function () {
  customInput = customTipInput.value;
  if(firstInput && customInput && personValueInput && insidePercents){
    calculateTip()}
  const billHasnumber = customTipInput.value.match(/\d+/);
  if (billHasnumber) {
   resetButton.style.backgroundColor = '#9FE8DF';
 } else {
   resetButton.style.backgroundColor = '#0D686D';
 }
});

personInput.addEventListener("input", function () {
  personValueInput = personInput.value;
  if(firstInput && customInput && personValueInput  && insidePercents){
    calculateTip()
  }
  const billHasnumber = personInput.value.match(/\d+/);
  if (billHasnumber) {
   resetButton.style.backgroundColor = '#9FE8DF';
 } else {
   resetButton.style.backgroundColor = '#0D686D';
 }
});

let cvladi;
insidePercents.forEach((element) => {
 
      // element.style.color = "black"
      console.log(element)
     
  element.addEventListener("click", function () {
    console.log(element)
    
    cvladi = element.innerHTML
    tipAmount.innerHTML = element.innerHTML;
    totalBill.innerHTML = element.innerHTML;
    customTipInput.value = "";
    customInput = 0;
    calculateTip();
    // if(element.innerHTML === cvladi ){
    //   element.style.color = "red"
    //   console.log(cvladi)
    //   console.log(element.innerHTML)
    //   }

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
    let tipPercent = 0;
    if (customInput) {
      tipPercent = customInput;
    } else {
      tipPercent = parseFloat(tipAmount.innerHTML);
    }
    let tipAmountValue =
      (firstInput * (tipPercent / 100)) / personValueInput;
    let totalBillValue = (firstInput / personValueInput) + tipAmountValue;

    tipAmount.innerHTML = "$" + tipAmountValue.toFixed(2);
    totalBill.innerHTML = "$" + totalBillValue.toFixed(2);
  } else {
    tipAmount.innerHTML = "$0.00";
    totalBill.innerHTML = "$0.00";
  }
}
console.log("firstInput:", firstInput, "personValueInput:", personValueInput);



