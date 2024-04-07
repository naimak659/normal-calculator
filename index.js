const display = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const operator = document.querySelectorAll(".oparetors");
const number = document.querySelectorAll(".number");
let content = "";
let answer = "";
// buttons event listner
buttons.forEach(function (val, i) {
  val.addEventListener("click", (e) => {
    console.log(e.innerText);
    if (val.textContent == "=") {
      answer = eval(content);
      content = answer;
      display.innerHTML = content;
      content = "";
    } else if (val.textContent == "AC") {
      content = "";
      display.innerText = "";
    } else if (val.textContent == "ans") {
      content = content + answer;
      display.innerText = content;
    } else if (val.textContent == "Del") {
      content = content.slice(0, -1);
      display.innerText = content;
    } else {
      content += val.textContent;
      display.innerHTML = content;
    }
  });
});
