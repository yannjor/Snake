class Food {
    constructor() {
        this.x;
        this.y;
    }

    spawn() {
        this.x = Math.floor(Math.random() * tileCount) * tileSize;
        this.y = Math.floor(Math.random() * tileCount) * tileSize;
    }

    draw() {
        context.drawImage(foodImage, this.x, this.y, tileSize, tileSize);
    }
}