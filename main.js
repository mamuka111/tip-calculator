const billInput = document.querySelector(".input");
const customTipInput = document.querySelector(".costumInput");
const personInput = document.querySelector(".personInput");
const insidePercents = document.querySelectorAll(".insidepercents");
const tipAmount = document.querySelector(".p3");
const totalBill = document.querySelector(".p6");
const resetButton = document.querySelector(".reset");

let firstInput = 0;
let customInput = 0;
let personValueInput = 0;

billInput.addEventListener("input", function () {
  firstInput = billInput.value;
  calculateTip();
});

customTipInput.addEventListener("input", function () {
  customInput = customTipInput.value;
  calculateTip();
});

personInput.addEventListener("input", function () {
  personValueInput = personInput.value;
  calculateTip();
});

insidePercents.forEach((element) => {
  element.addEventListener("click", function () {
    tipAmount.innerHTML = element.innerHTML;
    totalBill.innerHTML = element.innerHTML;
    customTipInput.value = "";
    customInput = 0;
    calculateTip();
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
});

function calculateTip() {
  if (firstInput && personValueInput) {
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
  }
}



