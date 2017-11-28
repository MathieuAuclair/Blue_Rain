var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var dropCount = document.getElementById("dropCount");
var dropSpeed = document.getElementById("dropSpeed");

var rainDropList = [];

window.onload = function(){
    createRainDrops(dropCount.value);
}

function drawRain(x,y,width,height,color)
{
	context.beginPath();
	context.rect(x, y, width, height);
	context.fillStyle = color;
	context.fill();
}
	
function rainDrop()
{
	this.yPosition = 0-Math.random()*500;
	this.xPosition = canvas.width;
	this.ySpeed = 5;
	this.rainHeight = 10;
}

function createRainDrops(amount){
    for(i = 0; i < amount; i++)//give a value to the array
    {
        rainDropList[i]=new rainDrop();
        rainDropList[i].xPosition = Math.random()*canvas.width;
        rainDropList[i].ySpeed = ((Math.random()*3)+4);
        rainDropList[i].rainHeight = ((Math.random()*10)+10);
    }
}

dropCount.oninput = function(){
    rainDropList = [];
    createRainDrops(this.value);
}

dropSpeed.oninput = function(){
    for(var i = 0; i < rainDropList.length; i++){
        rainDropList[i].ySpeed = ((Math.random() * rainDropList[i].ySpeed) + parseInt(this.value));
    }
}

var gameLoop = setInterval(function(){
	context.clearRect(0,0,canvas.width,canvas.height);
    
	for(i = 0; i < rainDropList.length; i++)
	{
		if(rainDropList[i].yPosition<canvas.height)
            rainDropList[i].yPosition += rainDropList[i].ySpeed;
		else
            rainDropList[i].yPosition = 0-Math.random()*50;
        
		drawRain((rainDropList[i].xPosition),(rainDropList[i].yPosition),(rainDropList[i].ySpeed/1.75),(rainDropList[i].rainHeight),"blue");
	}
},10);//frameRate