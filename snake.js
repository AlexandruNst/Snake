function Snake(cell) {

    var snake = [];
    var tail = 5;
    //

    for (var i = 0; i < tail; i++) {
        snake.push(new snakePart(cell))
        //
        // for (var i = 0; i < tail; i++) {
        //     snake[i].move(cell.x, cell.y);
        // }
        //    cell.x--;
    }

    //

    /// Too much recursion
    // for (var i = 0; i < tail; i++) {
    //     snake.push(new Snake(cell));
    // }

    this.show = function() {

        snake[0].show(0, 0, 255);

        for (i = 1; i < tail; i++) {
            snake[i].show(0, 255, 0);
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

    this.eat = function() {
        tail++;
        snake.push(new snakePart(cell));
        snake[tail - 1].setX(snake[tail - 2].getX() - 1);
        snake[tail - 1].setY(snake[tail - 2].getY() - 1);

        console.log("tail: " + tail);
    }

    this.getHeadX = function() {
        return snake[0].getX();
    }

    this.getHeadY = function() {
        return snake[0].getY();
    }
}