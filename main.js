var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawRain(x,y)
{
	context.clearRect(0,0,canvas.width,canvas.height);
	context.beginPath();
	context.rect(x, y, 3, 10);
	context.fillStyle = "blue";
	context.fill();
}
	
var cloudFrameRate = 10;
var cloud = "50"
	
function rainDrop()
{
	this.yPosition = -50;
	this.xPosition = canvas.width;//Math.random()*canvas.width
	this.ySpeed = 10/cloudFrameRate;
}

var rainDropList = [];

//give a value to the array
for(i=0;i<cloud;i++)
	{
		rainDropList[i]=new rainDrop();
	}


var gameLoop = setInterval(function(){
	for(i=0;i<rainDropList.length;i++)
	{
		drawRain(rainDropList[i].xPosition,rainDropList[i].yPosition);
		if(rainDropList[i].yPosition<canvas.height)
		rainDropList[i].yPosition += rainDropList[i].ySpeed;
		else
		rainDropList[i].yPosition = -50;
	}
},cloudFrameRate);