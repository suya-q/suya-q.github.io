
const slider = document.querySelector(".slider");
const startbutton = document.querySelector(".startbutton");
const items = 7;
let currentangle = 0;
let running = true;
function spinning() {
  if (running) {
    currentangle = currentangle - 0.2;
    slider.style.transform = "translateX(-50%) rotateY("+currentangle+"deg)";
  }
  requestAnimationFrame(spinning);
}
spinning();

function spin() {
  running = false;
  const randomselection = Math.floor(Math.random() * items);
  const itemselectangle = 360 / items;
//   +360 full rotation
  const targetrotation = randomselection * itemselectangle + 360;
  slider.style.transition = "transform 2s";
  slider.style.transform = "translateX(-50%) rotateY("+targetrotation+"deg)";
  currentangle = targetrotation;
//   example of hiding 'click me' - you can grab many items to style them at once. transitions like i've done on the line above will be your best friend here.
  // startbutton.style.display = "none";
}


/* want to make it so audio only works one at a time, 
and only after click me button is pressed, also click again and it turns off*/
var candle = document.getElementById("candlesound"); 
var fluorescent = document.getElementById("fluorescentsound");
var camp = document.getElementById("campsound");
var moon = document.getElementById("moonsound");
var chandelier = document.getElementById("chandsound");
var incense = document.getElementById("matchsound");
var lavalamp = document.getElementById("lavasound");

function playCandle() { 
  candle.play();
}

function playFluo() { 
    fluorescent.play();
}

function playCamp() { 
    camp.play();
}

function playMoon() { 
    moon.play();
}

function playChand() { 
    chandelier.play();
}

/* maybe combining two audios? */
function playIncense() { 
    incense.play();
}

function playLava() { 
    lavalamp.play();
}