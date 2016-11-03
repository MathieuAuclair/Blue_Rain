var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawRain(x,y,width,height,color)
{
	context.beginPath();
	context.rect(x, y, width, height);
	context.fillStyle = color;
	context.fill();
}
	
var cloudFrameRate = 10;
var cloud = 50;
	
function rainDrop()
{
	this.yPosition = 0-Math.random()*500;
	this.xPosition = canvas.width;
	this.ySpeed = 5;
	this.rainHeight = 10;
}

var rainDropList = [];


for(i=0;i<cloud;i++)//give a value to the array
{
	rainDropList[i]=new rainDrop();
	rainDropList[i].xPosition = Math.random()*canvas.width;
	rainDropList[i].ySpeed = ((Math.random()*3)+4);
	rainDropList[i].rainHeight = ((Math.random()*10)+10);
}

var gameLoop = setInterval(function(){
	context.clearRect(0,0,canvas.width,canvas.height);
	for(i=0;i<rainDropList.length;i++)
	{
		if(rainDropList[i].yPosition<canvas.height)
		rainDropList[i].yPosition += rainDropList[i].ySpeed;
		else
		rainDropList[i].yPosition = 0-Math.random()*50;
		drawRain((rainDropList[i].xPosition),(rainDropList[i].yPosition),(rainDropList[i].ySpeed/1.75),(rainDropList[i].rainHeight),"blue");
	}
},10);//frameRate