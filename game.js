const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");
const tileSize = tileCount = 25;


//Load images
const foodImage = new Image();
const snakeBody = new Image();
const snakeHead = new Image();

foodImage.src = "img/food.png";
snakeBody.src = "img/body.png";
snakeHead.src = "img/head.png";

let snake = new Snake();
let food = new Food();
let score = 0;

food.spawn();


document.addEventListener("keydown", ((event) => {
    const dir = event.key.replace('Arrow', '');
    snake.turn(dir);
}));


function drawAll() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    food.draw();
    snake.move();
    snake.draw();

    if (snake.x == food.x && snake.y == food.y) {
        score++;
        food.spawn();
    } else {
        snake.tail.pop();
    }
    snake.checkCollision();

    //Score
    context.fillStyle = "white";
    context.font = "30px Arial";
    context.fillText(score, tileCount, tileCount);
}



//draw every 100ms
let game = setInterval(drawAll, 100);