var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawCloud(x,y,width,height,color)
{
    context.beginPath();
	context.rect(x, y, width, height, color);
	context.closePath();
	context.fillStyle = color;
	context.fill();
	context.strokeStyle = "black"
	context.stroke();
}


function drawRain(x,y,width,height,color)
{
	context.beginPath();
	context.rect(x, y, width, height);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}
	
var cloudFrameRate = 10;
var rainPerCloud = 50;
var cloudPerCanvas = 3;
	
function stormCloud()
{
	this.xSize = 150;
	this.ySize = 70;
	this.xPosition = 0;
	this.yPosition = 0;
	this.xSpeed = 0.5;
}

var cloudList = [];
	
for(i=0;i<cloudPerCanvas;i++)//give a value to the array
{
	cloudList[i]=new stormCloud();
	cloudList[i].xPosition = Math.random()*canvas.width;
	cloudList[i].yPosition = Math.random()*100;
	cloudList[i].xSpeed = Math.random()*randomSide()+0.45;
}	
	
function rainDrop()
{
	this.yPosition = 0-Math.random()*500;
	this.xPosition = canvas.width;
	this.ySpeed = 5;
	this.rainHeight = 10;
}

var rainDropList = [];

for(i=0;i<rainPerCloud;i++)//give a value to the array
{
	rainDropList[i]=new rainDrop();
	rainDropList[i].xPosition = Math.random()*canvas.width;
	rainDropList[i].ySpeed = ((Math.random()*3)+4);
	rainDropList[i].rainHeight = ((Math.random()*10)+10);
}

var gameLoop = setInterval(function(){
	context.clearRect(0,0,canvas.width,canvas.height);
	//cloud
	for(i=0;i<cloudList.length;i++)
	{
		if(cloudList[i].xPosition<canvas.width)
			cloudList[i].xPosition += cloudList[i].xSpeed;
		else
			cloudList[i].xPosition = -250;
		drawCloud(cloudList[i].xPosition,cloudList[i].yPosition,cloudList[i].xSize,cloudList[i].ySize,"rgb(120,120,120)");
	}
	//rain
	for(i=0;i<rainDropList.length;i++)
	{
		if(rainDropList[i].yPosition<canvas.height)
		rainDropList[i].yPosition += rainDropList[i].ySpeed;
		else
		rainDropList[i].yPosition = 0-Math.random()*50;
		drawRain((rainDropList[i].xPosition),(rainDropList[i].yPosition),(rainDropList[i].ySpeed/1.75),(rainDropList[i].rainHeight),"blue");
	}
},10);//frameRate





function randomSide () //return a negative or positive
{
	if(Math.random()<0.5)
		return 1;
	else
		return -1;
}