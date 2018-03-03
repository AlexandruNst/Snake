var snake;
var apple;
var grid;
var sqPerLine = 15;
var w;
var apples = [];
var x;
var xmove = 0;
var ymove = 0;
var ydone = false;
var odone = false;
var rdone = false;
var r = 0;
var gameStart = false;
var score = 0;

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
    frameRate(10);
    background(52);
    fillGrid();
    for (apple of apples) {
        apple.show();
    }

    snake.show();
    snake.move(xmove, ymove);
    for (apple of apples) {
        if (round(snake.getHeadX()) == round(apple.getX()) && round(snake.getHeadY()) == round(apple.getY())) {
            snake.eat();
            score++;
            apples.pop();
            apples.push(new Apple(selectRandomCell()));
        }
    }




    if (snake.death()) {
        snake.setTail(5);
        xmove = 0;
        ymove = 0;
        if (gameStart) {
            explode(snake.getHeadX(), snake.getHeadY());
            if (ydone && odone && rdone) {
                ydone = false;
                odone = false;
                rdone = false;
            }
        }
        score = 0;
        console.log("ded");
    }

    showScore();

}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            xmove = 0;
            if (ymove != 1) ymove = -1;
            break;
        case DOWN_ARROW:
            xmove = 0;
            if (ymove != -1) ymove = 1;
            break;
        case RIGHT_ARROW:
            if (xmove != -1) xmove = 1;
            ymove = 0;
            break;
        case LEFT_ARROW:
            if (xmove != 1) xmove = -1;
            ymove = 0;
            break;
    }
    gameStart = true;
    r = 0;
    ydone = false;
    odone = false;
    rdone = false;

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

function explode(x, y) {

    if (r < 71 && !ydone) {
        noStroke();
        fill(255, 255, 0);
        ellipse(x + w / 2, y + w / 2, r, r);
        console.log("yellow");
        r += 7;
        if (r >= 70) {
            ydone = true;
            r = 0;
        }
    }

    if (r < 71 && ydone && !odone) {

        noStroke();
        fill(255, 140, 0);
        ellipse(x + w / 2, y + w / 2, r, r);
        console.log("orange");
        r += 7;
        if (r >= 70) {
            odone = true;
            r = 0;
        }
    }

    if (r < 71 && ydone && odone && !rdone) {

        noStroke();
        fill(255, 0, 0);

        ellipse(x + w / 2, y + w / 2, r, r);
        console.log("red");
        r += 7;
        if (r >= 70) {
            rdone = true;
            r = 0;
        }
    }

    if (ydone && odone && rdone) {
        gameStart = false;
    }
}

function showScore() {

    stroke(50);
    fill(255, 255, 255);
    textFont("Helvetica");
    textSize(30);
    text(score, width / 2 - w / 4, 50);

}