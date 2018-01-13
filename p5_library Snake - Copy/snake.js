function Snake() {
    if (addSeg === true){
        this.x = snake[snake.length - 1].x*(-Math.abs(snake[snake.length - 1].xspeed));
        this.y = snake[snake.length - 1].y*(-Math.abs(snake[snake.length - 1].yspeed));
        this.xspeed = snake[snake.length - 1].xspeed;
        this.yspeed = snake[snake.length - 1].yspeed;
    } else if (init === true){
        this.x = startSize*scl;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
    } else {
        this.x = (startSize - snake.length)*scl;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
    }
    
    this.update = function() {
        if (frameCount % scl === 0) {
            this.x += this.xspeed*scl;
            this.y += this.yspeed*scl;
        }
        
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }
    
    this.show = function() {
        fill(255);
        rect(this.x, this.y, scl, scl);
    }
    
    this.dir = function(x,y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    
    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            return true;
        } else {
            return false;
        }
    }
}