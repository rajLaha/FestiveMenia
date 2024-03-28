let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let control = document.querySelector("#control");
let typingEffect = document.querySelector("#typing-effect");
let typingEffectMob = document.querySelector("#typing-effect-mob");

const btn1clicker = () => {
  btn1.classList.add("hide");
  btn1.classList.add("divAni");
  btn2.classList.add("divAni");
  (() => {
    setTimeout(() => {
      btn2.classList.remove("hide");
      control.classList.remove("hide");
    }, 150);
  })();
};

const btn2clicker = () => {
  btn2.classList.add("hide");
  (() => {
    setTimeout(() => {
      btn1.classList.remove("hide");
      control.classList.add("hide");
    }, 150);
  })();
};

btn1.addEventListener("click", btn1clicker);
btn2.addEventListener("click", btn2clicker);

let i = 0;
let txt = "Welcome to the Vibrant World of Holi!"; /* The text */
let speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    typingEffect.innerHTML += txt.charAt(i);
    typingEffectMob.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();