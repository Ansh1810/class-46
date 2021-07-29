var ground,  bg, player, playerImage, star, starImage;
var brick1, brick2, brick3, brickImage;


function preload(){
bg = loadImage("bgg.jpg")
playerImage = loadAnimation("run 1.png", "run 2.png", "run 3.png", "run 4.png")
starImage = loadImage("starr.png")
brickImage = loadImage("brick.jpg")
leftIdleImg = loadImage("left idle.png")
rightIdleImg = loadImage("right idle.png")
}
function setup(){
createCanvas(displayWidth,displayHeight- 120 )

ground = createSprite(displayWidth/2, displayHeight/2+253, displayWidth, 20);

bg1 = createSprite (displayWidth/2, displayHeight-459);
bg1.addImage("bg0", bg)
bg1.scale = 2.3;
 

player = createSprite (displayWidth/4-210, displayHeight-217);
player.addImage("bg0", leftIdleImg )
player.scale = 4 ;
 
star = createSprite (displayWidth/2, displayHeight-509);
star.addImage("star", starImage)
star.scale = 0.05;

brick1 = createSprite (displayWidth/2 - 128, displayHeight-300);
brick1.addImage("b", brickImage)
brick1.scale = 0.27;

brick2 = createSprite (displayWidth/1.7 +50, displayHeight-350);
brick2.addImage("b2", brickImage)
brick2.scale = 0.27;

brick3 = createSprite (displayWidth/1.4 - 241, displayHeight-670);
brick3.addImage("b3", brickImage)
brick3.scale = 0.27;
}
function draw(){
background(0)
if(keyDown("space")){
player.y = player.y - 70;

}
player.velocityY = player.velocityY + 0.5

if(keyDown("LEFT_ARROW")){
player.x = player.x - 4
player.addAnimation("run", playerImage)
}
if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 4
    player.addAnimation("run", playerImage)
    }
player.collide(ground) 
drawSprites();

}