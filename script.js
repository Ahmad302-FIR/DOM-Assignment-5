// Task 1: Button Click Event
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function () {
    alert("Button Clicked Successfully");
});


// Task 2: Change Text on Click
const changeTextBtn = document.getElementById("changeTextBtn");
const textPara = document.getElementById("textPara");

changeTextBtn.addEventListener("click", function () {
    textPara.textContent = "Text Updated Successfully";
});


// Task 3: Background Color Change
const bgBtn = document.getElementById("bgBtn");

bgBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgreen";
});


// Task 4: Input Event (Live Typing)
const liveInput = document.getElementById("liveInput");
const liveText = document.getElementById("liveText");

liveInput.addEventListener("input", function () {
    liveText.textContent = liveInput.value;
});


// Task 5: Mouse Events
const box = document.getElementById("box");

box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = "orange";
});

box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = "lightblue";
});


// Task 6: Double Click Event
const doubleClickBtn = document.getElementById("doubleClickBtn");

doubleClickBtn.addEventListener("dblclick", function () {
    alert("Double Click Detected");
});