
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