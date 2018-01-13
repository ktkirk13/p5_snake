var snake = [];
var scl = 10;

var food;
var init = true;
var addSeg = false;

var update = true;

var startSize = 8;

var lastKey;

function setup() {
    createCanvas(200, 200);
    for(var i = 0; i < startSize; i++){
        snake.push(new Snake());
        init = false;
    }
    pickLocation();
    lastKey = RIGHT_ARROW;
}

function pickLocation() {
    var cols = random(width/scl);
    var rows = random(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    
    for(var i = 1; i < snake.length; i++){
        if(dist(snake[i].x, snake[i].y, snake[0].x, snake[0].y) < scl){
            update = false;
        }
    }
    
    for(var i = 0; i < snake.length; i++){
        snake[i].show();
    }
     
    if (update) {
        for(var i = snake.length - 1; i > 0; i--){
            if(frameCount % scl === 0){
                snake[i].x = snake[i - 1].x;
                snake[i].y = snake[i - 1].y;
                snake[i].xspeed = snake[i - 1].xspeed;
                snake[i].yspeed = snake[i - 1].yspeed;
            }
        }
        snake[0].update();
    }
    
    update = true;
        
    fill(255, 0, 0);
    rect(food.x, food.y, scl, scl);
    
    if (snake[0].eat(food)) {
        addSeg = true;
        snake.push(new Snake());
        pickLocation();
    }
}

function keyPressed() {
    this.thisKey = keyCode;
    if (this.thisKey === UP_ARROW && (lastKey != DOWN_ARROW && lastKey != UP_ARROW)){
        snake[0].dir(0,-1);
    } else if (this.thisKey === DOWN_ARROW && (lastKey != DOWN_ARROW && lastKey != UP_ARROW)){
        snake[0].dir(0,1);
    } else if (this.thisKey === LEFT_ARROW && (lastKey != LEFT_ARROW && lastKey != RIGHT_ARROW)){
        snake[0].dir(-1,0);
    } else if (this.thisKey === RIGHT_ARROW && (lastKey != LEFT_ARROW && lastKey != RIGHT_ARROW)){
        snake[0].dir(1,0);
    }
    lastKey = this.thisKey;
}