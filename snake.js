function Snake(cell) {

    var snake = [];
    var tail = 5;
    //

    for (var i = 0; i < tail; i++) {
        snake.push(new snakePart(cell))
        //    cell.x--;
    }

    //

    /// Too much recursion
    // for (var i = 0; i < tail; i++) {
    //     snake.push(new Snake(cell));
    // }

    this.show = function() {
        for (i = 0; i < tail; i++) {
            snake[i].show();
        }
    }

    this.move = function(x, y) {

        for (i = tail - 1; i > 0; i--) {
            snake[i].setX(snake[i - 1].getX());
            snake[i].setY(snake[i - 1].getY());
        }

        snake[0].move(x, y);
        //this.show();
    }

}