var play=0;
var end=1;
var gameState=play;
var snake,food,b1,b2,b3,b4,r=255,g=255,b=255,score=0,snakeImg,foodImg;
function preload(){snakeImg=loadImage("snake.png");
foodImg=loadImage("food.png");}
function setup(){createCanvas(500,500);
snake=createSprite(250,250,50,50);
snake.addImage(snakeImg);
snake.scale=0.175;
food=createSprite(random(50,450),random(50,450),50,50);
food.addImage(foodImg);
food.scale=0.65;
b1=createSprite(10,250,10,500);
b2=createSprite(250,10,500,10);
b3=createSprite(250,490,500,10);
b4=createSprite(490,250,10,500);
b1.shapeColor=b2.shapeColor=b3.shapeColor=b4.shapeColor=0;}
function draw(){background(r,g,b);  
if(gameState===play){snakeControls();
snakeEatsFood();}
fill(0);
textSize(25);
text("Your Score : "+score,290,50);
if(snake.isTouching(b1)||snake.isTouching(b2)||snake.isTouching(b3)||snake.isTouching(b4)){snakeDie();
gameState=end;}
if(gameState===end){fill(0);
textSize(40);
text("You Loosed !",150,240);}
drawSprites();}
function snakeControls(){if(keyCode===65){snake.x=snake.x-5;}
if(keyCode===68){snake.x=snake.x+5;}
if(keyCode===83){snake.y=snake.y+5;}
if(keyCode===87){snake.y=snake.y-5;}}
function snakeEatsFood(){if(snake.isTouching(food)){food.x=random(50,450);
food.y=random(50,450);
r=random(50.00,150.00);
g=random(50.00,150.00);
b=random(50.00,150.00);
score=score+1;}}
function snakeDie(){snake.destroy();}