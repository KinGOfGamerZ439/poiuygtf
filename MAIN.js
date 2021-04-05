canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="https://postimg.cc/9rqYz9HM";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="https://postimg.cc/9rqYz9HM";
car2_x=10;
car2_y=100;

background_image="https://postimg.cc/9rqYz9HM";


function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1up();
        console.log("up");
    }	
    if(keyPressed == '40')
    {
        car1down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        car1left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        car1right();
        console.log("right");
    }
    if(keyPressed == '83')
    {
        car2right();
        console.log("s");
    }
    if(keyPressed == '87')
    {
        car2up();
        console.log("w");
    }
    if(keyPressed == '65')
    {
        car2left();
        console.log("a");
    }
    if(keyPressed == 'd')
    {
        car2down();
        console.log("68");
    }
 
}   

   