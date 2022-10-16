window.onload= function (){
	
var track1 = new Audio("Brightoncut.mp3");

var track2 = new Audio("Brightoncut.ogg");

var paper = new Raphael(document.getElementById("svg"), 800, 600);

var backGround = paper.rect(0,-2941,800,3541);

var plane = paper.image("6.png", 370, 420, 80, 80);

var btn = paper.image("play.jpg", 380, 520, 60,60);

backGround.attr({fill:"url(5.jpg)"});

var rain1 = paper.ellipse(50,-1600,2,1);

var rain2 = paper.ellipse(155,-20,2,20);

var rain3 = paper.ellipse(241,-20,2,20);

var rain4 = paper.ellipse(322,-20,2,20);

var rain5 = paper.ellipse(471,-20,2,20);

var rain6 = paper.ellipse(605,-20,2,20);

var rain7 = paper.ellipse(718,-20,2,20);

var sun = paper.circle(400,-50,30);

rain1.attr({ fill: "45-blue-white"});

rain2.attr({ fill: "45-blue-white"});

rain3.attr({ fill: "45-blue-white"});

rain4.attr({ fill: "45-blue-white"});

rain5.attr({ fill: "45-blue-white"});

rain6.attr({ fill: "45-blue-white"});

rain7.attr({ fill: "45-blue-white"});

sun.attr({fill: "yellow"});

function rain1_drop() {

rain1.animate({cy: 720 , cx: 50 , rx: 2 , ry: 120}, 7500, 'ease-in', rain4_drop);

}

function rain2_drop() {

rain2.animate({cy: 720 , cx: 155 , rx: 2 , ry: 120}, 1400, 'ease-in', rain5_drop);

}

function rain3_drop() {

rain3.animate({cy: 720 , cx: 241 , rx: 2 , ry: 120}, 1500, 'ease-in', rain6_drop);

}

function rain4_drop() {

rain4.animate({cy: 720 , cx: 322 , rx: 2 , ry: 120}, 1500, 'ease-in', rain7_drop);

}

function rain5_drop() {

rain5.animate({cy: 720 , cx: 471 , rx: 2 , ry: 120}, 1400, 'ease-in', sun_drop);

}

function rain6_drop() {

rain6.animate({cy: 720 , cx: 605 , rx: 2 , ry: 120}, 1600, 'ease-in', rain2_drop);

}

function rain7_drop() {

rain7.animate({cy: 720 , cx: 718 , rx: 2 , ry: 120}, 1400, 'ease-in', rain3_drop);

}

function sun_drop() {

sun.animate({"95%":{cy:200 , cx: 400 , r: 60, fill: "white"}, "100%":{cy:200 , cx: 400 , r: 600}},4500, 'ease-out',);

}

function backGround_move() {
	
backGround.animate({y:0, x:0, width:800, height:3541}, 25000, 'linear')	
	
}  

btn.node.onclick = function(){
rain1_drop();backGround_move();
if (track1.canPlayType("audio/mp3")) {
    track1.play();
}else if(track2.canPlayType("audio/ogg")) {
    track2.play();
}
}

}