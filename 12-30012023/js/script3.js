let textInCircle = document.querySelector("#textInCircle");
let btnTextCanvas = document.querySelector(".btnTextCanvas");
let btnCanvas = document.querySelector(".btnCanvas");
let clear = document.querySelector(".clear");
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

btnCanvas.addEventListener("click", function () {
  canvas.style.opacity = "1";
});

btnTextCanvas.addEventListener("click", function () {
  context.font = "40px calibri";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeText(textInCircle.value, 80, 140);
});
clear.addEventListener("click", function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
});