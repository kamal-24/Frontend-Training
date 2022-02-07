import "./styles.css";

document.getElementById("red").onclick = function () {
  changeBackgroundColor("red");
};
document.getElementById("blue").onclick = function () {
  changeBackgroundColor("blue");
};
document.getElementById("green").onclick = function () {
  changeBackgroundColor("green");
};

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
