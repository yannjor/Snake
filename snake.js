class Snake {

    constructor() {
        this.x = this.y = 10 * tileSize;
        this.xv = this.yv = 0;
        this.tail = [];
    }

    draw() {
        for (let i = 0; i < this.tail.length; i++) {
            context.drawImage(snakeBody, this.tail[i].x, this.tail[i].y, tileSize, tileSize);
        }
        context.drawImage(snakeHead, this.x, this.y, tileSize, tileSize);
    }

    turn(direction) {
        switch (direction) {
            case "Left":
                if (this.xv <= 0) {
                    this.xv = -1 * tileSize;
                    this.yv = 0;
                }
                break;
            case "Down":
                if (this.yv >= 0) {
                    this.xv = 0;
                    this.yv = 1 * tileSize;
                }
                break;
            case "Right":
                if (this.xv >= 0) {
                    this.xv = 1 * tileSize;
                    this.yv = 0;
                }
                break;
            case "Up":
                if (this.yv <= 0) {
                    this.xv = 0;
                    this.yv = -1 * tileSize;
                }
                break;
        }
    }

    move() {
        this.tail.unshift({ x: this.x, y: this.y });
        this.x += this.xv;
        this.y += this.yv;

        if (this.x >= canvas.width) {
            this.x = 0;
        }
        else if (this.y >= canvas.height) {
            this.y = 0;
        }
        else if (this.x < 0) {
            this.x = canvas.width;
        }
        else if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    checkCollision() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
                score = 0;
                this.tail = [];
                this.xv = 0;
                this.yv = 0;
            }
        }
    }
}