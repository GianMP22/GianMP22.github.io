console.log("Hello There")

function setup(){
    createCanvas(windowWidth/3,windowWidth/3);
    background(250,128,115);
}

function mouseClicked() {
    noStroke();
    fill(150,23,23);
    shift=15;
    sh1ft=20;
	ellipse(mouseX-shift+0.25,mouseY+12-sh1ft,20,20);
	ellipse(mouseX-18-shift,mouseY+2-sh1ft,10,15);
	ellipse(mouseX-7-shift,mouseY-8-sh1ft,10,15);
    ellipse(mouseX+7-shift,mouseY-8-sh1ft,10,15);
	ellipse(mouseX+18-shift,mouseY+2-sh1ft,10,15);
}


