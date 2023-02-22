//positions of the player
var playerX = 200;
var playerY = 200;

var rannum = randomNumber(5,395); //rng

var score  = 0; //score of the player
var lives = 5; //player lives

var player = createSprite(200, 200); //player hitbox
player.scale = 0.1;
player.shapeColor = "red";
  
//determines the speed
var enemyspeed = 5;
var playerspeed = 6;

//pac man
var pellets = createSprite(rannum,rannum,20,20);
var pellets2 = createSprite(randomNumber(1, 100),randomNumber(1, 100),20,20);
var pellets3 = createSprite(randomNumber(10, 250),randomNumber(10, 300),20,20);
var pellets4 = createSprite(randomNumber(5, 400),randomNumber(5, 330),20,20);

pellets.shapeColor = "white";
pellets2.shapeColor = "white";
pellets3.shapeColor = "white";
pellets4.shapeColor = "white";

//enemies... yes ik I spelt them wrong.
var enemie = createSprite(0, 150);
enemie.scale = 0.5;

var enemie2 = createSprite(0, -150);
enemie2.scale = 0.5;

var enemie3 = createSprite(0, -150);
enemie3.scale = 0.5;

var enemie4 = createSprite(0, -150);
enemie4.scale = 0.7;

var enemie5 = createSprite(0, -150);
enemie5.scale = 0.5;

enemie.shapeColor = rgb(206,196,179);
enemie2.shapeColor = rgb(206,196,179);
enemie3.shapeColor = rgb(206,196,179);
enemie4.shapeColor = rgb(206,196,179);
enemie5.shapeColor = rgb(206,196,179);

//enemy below originally followed the player

//var enemie6 = createSprite(0, -150);
//enemie6.scale = 0.5;

//positions for the lives icon
var pos = 10;
var pos2 = 35;
var pos3 = 60;
var pos4 = 85;
var pos5 = 110;
var texpos = 30;

function draw() {
    background("green");
    
    player.x = playerX; //determines the hitboxs position
    player.y = playerY;
    
    enemie.velocityX = enemyspeed;
    
    //events that happen when score hits a value
    if (score >= 10){
        enemie2.velocityY = enemyspeed;
    }
    if (score >= 20){
        enemie3.velocityX = enemyspeed;
    }
    if (score >= 30){
        enemyspeed = 7;
    }
    if (score >= 40){
        enemie4.velocityX = enemyspeed;
    }
    if (score >= 80){
        enemie5.velocityX = enemyspeed;
        enemie5.velocityY = enemyspeed;
    }
    if (score >= 200){
        playerspeed = 10;
    }
    if (score >= 250){
        enemyspeed = 15;
    }
    if (score >= 500){
        enemyspeed = 20;
    }
    if (score >= 1000){
        enemyspeed = 50;
    }
    if (score >= 100000){ //your not going to make it
        enemyspeed = 100;
    }
    
    //makes it so the enemies loop when they touch the edge
    if (enemie.x > 450) {
        enemie.x = randomNumber(0, 0);
        enemie.y = randomNumber(400, 0);
    }
    if (enemie2.y > 450) {
        enemie2.x = randomNumber(400, 0);
        enemie2.y = randomNumber(0, 0);
    }
    if (enemie3.x > 450) {
        enemie3.x = randomNumber(0, 0);
        enemie3.y = randomNumber(30, 400);
    }
    if (enemie4.x > 450) {
        enemie4.x = randomNumber(0, 0);
        enemie4.y = randomNumber(400, 0);
    }
    if (enemie5.x > 450) {
        enemie5.x = randomNumber(0, 0);
        enemie5.y = randomNumber(400, 0);
    }
    if (enemie5.y > 450) {
        enemie5.x = randomNumber(0, 0);
        enemie5.y = randomNumber(400, 0);
    }

    strokeWeight(3);
    fill("red");
    ellipse(playerX, playerY, 60, 60); //the player display
    
    Movement(); //makes the player move
    
    //collision
    if (player.isTouching(pellets)){
        score += 5;
        pellets.x = randomNumber(0,400);
        pellets.y = randomNumber(0,400);
    }
    
    if (player.isTouching(pellets2)){
        score += 5;
        pellets2.x = randomNumber(1, 100);
        pellets2.y = randomNumber(1, 100);
    }
    
    if (player.isTouching(pellets3)){
        score += 5;
        pellets3.x = randomNumber(10, 250);
        pellets3.y = randomNumber(10, 300);
    }
    
    if (player.isTouching(pellets4)){
        score += 5;
        pellets4.x = randomNumber(5, 400);
        pellets4.y = randomNumber(5, 330);
    }
    
    if (player.isTouching(enemie)){
        playSound("https://plainsys.github.io/music/hitHurt.wav", true);
        playerX = 200;
        playerY = 200;
        lives -= 1;
    }
    
    if (player.isTouching(enemie2)){
        playSound("https://plainsys.github.io/music/hitHurt.wav", true);
        playerX = 200;
        playerY = 200;
        lives -= 1;
    }
    
    if (player.isTouching(enemie3)){
        playSound("https://plainsys.github.io/music/hitHurt.wav", true);
        playerX = 200;
        playerY = 200;
        lives -= 1;
    }
    
    if (player.isTouching(enemie4)){
        playSound("https://plainsys.github.io/music/hitHurt.wav", true);
        playerX = 200;
        playerY = 200;
        lives -= 1;
    }
    
    if (player.isTouching(enemie5)){
        playSound("https://plainsys.github.io/music/hitHurt.wav", true);
        playerX = 200;
        playerY = 200;
        lives -= 1;
    }
    
    //changes position of player if they touch the edge.
    if (playerY <= -30){
        playerY = 405;
    }
        
    if (playerY >= 430){
        playerY = -5;
    }
    
    if (playerX >= 430){
        playerX = -5;
    }
    
    if (playerX <= -30){
        playerX = 405;
    }
        
    HUD(); //displays the HUD
    
    //game over
    if (lives <= -1){
        background("black");
        
        player.destroy();
        enemie.destroy();
        enemie2.destroy();
        enemie3.destroy();
        enemie4.destroy();
        enemie4.destroy();
        enemie5.destroy();
        
        pellets.destroy();
        pellets2.destroy();
        pellets3.destroy();
        pellets4.destroy();
        
        fill("red");
        textSize(40);
        text("Game Over", 95, 200);
        textSize(25);
        fill("blue");
        text("High Score: " + score, 85,250);
    }
    
    drawSprites();
}

//the HUD
function HUD(){
  
    fill("red");
    ellipse(pos,385,20,20);
    ellipse(pos2,385,20,20);
    ellipse(pos3,385,20,20);
    ellipse(pos4,385,20,20);
    ellipse(pos5,385,20,20);
    
    fill("white");
    textSize(40);
    text("Score: " + score,120,42);
    
    //lives display 
    if (lives >= 5){
        pos = 10;
        textSize(25);
        text("x " + lives, texpos, 393);
        pos2 = -35;
        pos3 = -60;
        pos4 = -85;
        pos5 = -110;
        texpos = 30;
    } //I was gonna add it so you can get more lives but that never happens so this line is unused.
    
    if (lives == 5){
        pos = 10;
        pos2 = 35;
        pos3 = 60;
        pos4 = 85;
        pos5 = 110;
        texpos = -50;
    }
    if (lives == 4){
        pos = 10;
        pos2 = 35;
        pos3 = 60;
        pos4 = 85;
        pos5 = -110;
    }
    if (lives == 3){
        pos = 10;
        pos2 = 35;
        pos3 = 60;
        pos4 = -85;
        pos5 = -110;
    }
    if (lives == 2){
        pos = 10;
        pos2 = 35;
        pos3 = -60;
        pos4 = -85;
        pos5 = -110;
    }
    if (lives == 1){
        pos = 10;
        pos2 = -35;
        pos3 = -60;
        pos4 = -85;
        pos5 = -110;
    }
    if (lives == 0){
        pos = -10;
        pos2 = -35;
        pos3 = -60;
        pos4 = -85;
        pos5 = -110;
    }
}

function Movement(){
    if (keyDown("right") || keyDown("d")){
        playerX += playerspeed;
    }
    
    if (keyDown("left") || keyDown("a")){
        playerX -= playerspeed;
    }
    
    if (keyDown("up") || keyDown("w")){
        playerY -= playerspeed;
    }
    
    if (keyDown("down") || keyDown("s")){
        playerY += playerspeed;
        
    }
}