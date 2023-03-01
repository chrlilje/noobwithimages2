let myImg;
function preload(){
	//myImg = loadImage("baum.png");	
}

let posx = 0;
function setup() {
	createCanvas(600, 400);
	//myImg.resize(200,0);
	imageMode(CENTER);
}

function draw() {
	background(100);
	//image(myImg, posx, height/2);
	circle(posx, 200, 50);
	posx += 5;
	if(posx > width){
		posx = 0;
	}
}