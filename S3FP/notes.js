let lastX = null;
let lastY = null;

function setup() {
    createCanvas(400, 400);
    background(50, 128, 88);
    userStartAudio();
}

function draw() {
    //background(220);
}

//Paint splatter triggered by on mouse movement
function mouseMoved() {
    //Only draw splatter if movement is significant
    if (lastX !== null) {
        let dx = mouseX - lastX;
        let dy = mouseY - lastY;
        let distMoved = sqrt(dx * dx + dy * dy);

        if (distMoved > 100) {
            drawSplatter(mouseX, mouseY);
            playRandomNote();
            lastX = mouseX;
            lastY = mouseY;
        }
    } else {
        lastX = mouseX;
        lastY = mouseY;
    }
}

// needed for VScode?
function mousePressed() {
    userStartAudio();
}


function drawSplatter(x, y) {
    noStroke();

    let blobs = 1 + random(20);   //number of splatter drops

    for (let i = 0; i < blobs; i++) {
        let baseHue = random(255); //color bounds break but it looks more lively than if they don't
        let angle = random(TWO_PI);
        let dist = random(5, 30);
        let size = random(5, 20);

        let px = x + cos(angle) * dist;
        let py = y + sin(angle) * dist;

        fill(baseHue + random(-50, 50), 207 + random(-50, 50), 187 + random(-50, 50));
        circle(px, py, size);
    }
}

// Play one random note 
//Matches with each paint splatter...I hope
// why not working in vscode?
function playRandomNote() {
    let ids = ["1", "2", "3", "4", "5", "6", "7"];
    let choice = random(ids);

    let note = document.getElementById(choice);

    note.currentTime = 0;
    note.play();
}