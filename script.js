const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const buttons = document.querySelector(".btn");

let scale = 1;
const message = [
  "are you sure? 🥺",
  "really sure??",
  "think again 💘",
  "you're breaking my heart 😢",
  "Last chance!",
  "Ok... I'll keep asking 😌",
];

let index = 0;
let gap = 10;

noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  gap += 8;
  buttons.style.gap = gap + "px";

  question.textContent = message[index];
  index++;

  if (index >= message.length) {
    index = 0;
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
