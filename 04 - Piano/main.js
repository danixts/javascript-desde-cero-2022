import "./src/assets/css/style.css";

document.addEventListener("DOMContentLoaded", function () {
  const keys = document.querySelectorAll(".key");
  const note = document.querySelector(".note__text");

  window.addEventListener("keydown", function (e) {
    const codePress = e.code;
    const audio = document.querySelector(`audio[data-key="${codePress}"]`);
    const key = document.querySelector(`.key[data-key="${codePress}"]`);
    if (!key) return;
    note.classList.add("active");
    note.textContent = `${key.dataset.note}`;
    key.classList.add("active");
    audio.currentTime = 0;
    audio.play();
  });

  keys.forEach((key) => {
    key.addEventListener("transitionend", function (e) {
      this.classList.remove("active");
      note.classList.remove("active");
    });
  });
});

// window.addEventListener("keypress", function (e) {
//     console.log("KEYPRESS");
//     console.log(e);
//   });

//   window.addEventListener("keydown", function (e) {
//     console.log("KEYDOWN");
//     console.log(e);
//   });

//   window.addEventListener("keyup", function (e) {
//     console.log("KEYUP");
//     console.log(e);
//   });
