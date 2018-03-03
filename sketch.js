var snake;
var apple;
var grid;
var sqPerLine = 15;
var w;
var apples = [];
var x;
var xmove = 0;
var ymove = 0;

function setup() {
    createCanvas(500, 500);

    apple = new Apple(selectRandomCell());
    apples.push(apple);
    grid = create2DArray();
    var a = selectCentreCell();
    snake = new Snake(a);
    w = width / sqPerLine;
}

function draw() {
    var i = 0;
    frameRate(10);
    background(52);
    fillGrid();
    for (apple of apples) {
        apple.show();
    }

    snake.show();
    snake.move(xmove, ymove);
    for (apple of apples) {
        console.log("snake: " + snake.getHeadX() + " " + ceil(snake.getHeadY()));
        console.log("apple: " + apple.getX() + " " + ceil(apple.getY()));
        if (round(snake.getHeadX()) == round(apple.getX()) && round(snake.getHeadY()) == round(apple.getY())) {
            snake.eat();
            apples.pop();
            apples.push(new Apple(selectRandomCell()));
        }
    }



    //snake.eat();
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            xmove = 0;
            ymove = -1;
            break;
        case DOWN_ARROW:
            xmove = 0;
            ymove = 1;
            break;
        case RIGHT_ARROW:
            xmove = 1;
            ymove = 0;
            break;
        case LEFT_ARROW:
            xmove = -1;
            ymove = 0;
            break;
    }
}

function create2DArray() {

    var arr = new Array(sqPerLine)
    for (var i = 0; i < sqPerLine; i++) {
        arr[i] = new Array(sqPerLine);
    }

    return arr;
}

function fillGrid() {

    for (var i = 0; i < sqPerLine; i++) {
        for (var j = 0; j < sqPerLine; j++) {
            strokeWeight(1);
            stroke(255);
            noFill();
            rect(i * w, j * w, w, w);
        }
    }
}

function selectRandomCell() {


    var col = floor(random(sqPerLine));
    var row = floor(random(sqPerLine));

    //var cell = new Cell(row, col);

    var cell = {
        x: col,
        y: row,
        w: width / sqPerLine
    };

    return cell;
}

function selectCentreCell() {

    var col = floor(sqPerLine / 2);
    var row = floor(col);

    var cell = {
        x: col,
        y: row,
        w: width / sqPerLine,
        canvasW: width
    };

    return cell;
}