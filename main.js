let input = document.querySelector(".input");
let custominput = document.querySelector(".costumInput");
let personInput = document.querySelector(".personInput");
let p3 = document.querySelector(".p3")
let p4 = document.querySelector(".p4")
let reset = document.querySelector(".reset")
 let firstinputvalue = 0;
 let percent2 = 0;
 let secondinputvalue = 0;
 let answer;
 let answer1 ;


input.addEventListener("input", function(){
    firstinputvalue= input.value
})
custominput.addEventListener("input", function(){
percent2 = custominput.value
})
custominput.addEventListener("input", function(event) {
    // if (event.key === "Enter") { 
        answer1 = firstinputvalue / secondinputvalue * percent2 / 100
        answer1 = Math.ceil(answer1 * 100) / 100;
        p3.innerHTML = "$" + answer1;
        answer = firstinputvalue / secondinputvalue + firstinputvalue / secondinputvalue * percent2 / 100;
        answer = Math.ceil(answer * 100) / 100;
        p4.innerHTML = "$" + answer;
    // }
});
personInput.addEventListener("input", function(){
    secondinputvalue=personInput.value
})
reset.addEventListener("click", function () {
    location.reload();
})

