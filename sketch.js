let time;
let frameCountBuffer = 0;
let fps = 0;

const CANVAS_W = 1200;
const CANVAS_H = 960;

const GRID_SIZE = 64;

const BUTTON_OFFSET = 0;
const BUTTON_W = GRID_SIZE*2;
const BUTTON_H = GRID_SIZE*1.5;
const BUTTON_X = GRID_SIZE*0;
const BUTTON_Y = CANVAS_H-GRID_SIZE*3;
const BUTTON_M = GRID_SIZE*0.5;

let selectButton;
let stripeWidth = 1;

const DEBUG = true;
const DEBUG_VIEW_X = 20;
const DEBUG_VIEW_Y = 20;
const DEBUG_VIEW_H = 20;

function preload() {
}

function setup() {
	createCanvas(CANVAS_W, CANVAS_H);
	frameRate(60);
	time = millis();

	selectButton = buttonInit('select', BUTTON_W, BUTTON_H, BUTTON_X+(BUTTON_M+BUTTON_W)*3, BUTTON_Y);
	selectButton.mousePressed(selectFn);
}
function buttonInit(text, w, h, x, y) {
	let button = createButton(text);
	button.size(w,h);
	button.position(x+BUTTON_OFFSET,y+BUTTON_OFFSET);
	button.style('font-size', '16px');
	return button;
}
function selectFn() {
}
function draw() {
	background(194);
	let current = millis();
	if ( (current-time)>=1000 ){
		time += 1000;
		fps = frameCount - frameCountBuffer;
		frameCountBuffer = frameCount;
	}

	noStroke();
	for (let x = 100; x < 300; x += stripeWidth * 2) {
		fill(0);   // 黒い縞
		rect(x, 100, stripeWidth, 200);
		fill(255); // 白い縞
		rect(x + stripeWidth, 100, stripeWidth, 200);
	}
	for (let y = 100; y < 300; y += stripeWidth * 2) {
		fill(0);   // 黒い縞
		rect(400, y, 200, stripeWidth);
		fill(255); // 白い縞
		rect(400, y + stripeWidth, 200, stripeWidth);
	}
/*
	// 縞模様を描画するエリアのベース（土台）を「白」で塗る
	fill(255);
	noStroke();
	rect(100, 100, 200, 200);
	rect(400, 100, 200, 200);
	
	// その上に、等幅（50%）で黒い線を引いていく
	stroke(0);
	strokeWeight(stripeWidth);
	for (let x = 100; x < 300; x += stripeWidth * 2) {
		line(x, 100, x, 300);
	}
	for (let y = 100; y < 300; y += stripeWidth*2){
		line(400, y, 600, y);
	}
*/

	fill(255);
	textSize(16);
	stroke(255);
	strokeWeight(1);
	let debugY = DEBUG_VIEW_Y;
	text('fps:'+fps, DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
}