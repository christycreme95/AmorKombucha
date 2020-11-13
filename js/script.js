let collapseOne = document.getElementById("collapseOne");
let collapseTwo = document.getElementById("collapseTwo");
let collapseThree = document.getElementById("collapseThree");


let step1Btn = document.getElementById("btnTest");
let step2Btn = document.getElementById("btnTest1");
let step3Btn = document.getElementById("btnTest2");


let step1 = false;
let step2 = false;
let step3 = false;

step1Btn.addEventListener("click", function () {
    if (!step1) {
        collapseOne.classList.add("show")
        step1 = true;
    }
    else {
        collapseOne.classList.remove("show")
        step1 = false;
    }
});

step2Btn.addEventListener("click", function () {
    if (!step2) {
        collapseTwo.classList.add("show")
        step2 = true;
    }
    else {
        collapseTwo.classList.remove("show")
        step2 = false;
    }
});

step3Btn.addEventListener("click", function () {
    if (!step3) {
        collapseThree.classList.add("show")
        step3 = true;
    }
    else {
        collapseThree.classList.remove("show")
        step3 = false;
    }
});