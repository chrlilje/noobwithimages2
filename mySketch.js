let myImg;
function preload(){
	myImg = loadImage("baum.png");	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	myImg.resize(200,0);
	imageMode(CENTER);
}

function draw() {
	background(100);
	image(myImg, width/2, height/2);
}