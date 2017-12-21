var snake;
var apple;
var grid;
var sqPerLine = 15;
var w;
var apples = [];

function setup() {
    createCanvas(500, 500);
    apple = new Apple();
    apples.push(apple);
    grid = create2DArray();
    w = width / sqPerLine;
}

function draw() {
    background(51);
    fillGrid();
    for (apple of apples) {
        apple.show();
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
            stroke(255);
            noFill();
            rect(i * w, j * w, w, w);
        }
    }
}

function selectRandomCell() {

}