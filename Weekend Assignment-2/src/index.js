function addTask() {
  let li = document.createElement("li");
  let taskvalue = document.getElementById("task").value;
  let box = document.getElementById("todo");
  li.textContent = taskvalue;

  let a = document.createElement("a");
  a.textContent = " Delete";
  a.href = "javascript:void(0)";
  li.appendChild(a);

  box.appendChild(li);

  document.getElementById("task").value = "";
}

let del = document.querySelector("ul");
del.addEventListener("click", function (e) {
  let box = document.getElementById("todo");
  let li = e.target.parentNode;
  box.removeChild(li);
});

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
