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
    this.death = function() {
        var dead = false;
        for (i = 1; i < tail; i++) {
            if (snake[0].getX() == snake[i].getX() &&
                snake[0].getY() == snake[i].getY())
                dead = true;
        }
        //tail = 5;
        return dead;
    }

    this.virtualDeath = function(x, y) {
        var dead = false;

        var asdfX = round(snake[0].getX() + x);
        var asdfY = round(snake[0].getY() + y);

        if (asdfX > cell.canvasW - cell.w) {
            asdfX = 0;
        }

        if (asdfY > cell.canvasW - cell.w) {
            asdfY = 0;
        }

        if (asdfX < -0.1) {
            asdfX = cell.canvasW - cell.w;
        }

        if (asdfY < -0.1) {
            asdfY = cell.canvasW - cell.w;
        }

        for (i = 1; i < tail - 1; i++) {
            if (asdfX == round(snake[i].getX()) &&
                asdfY == round(snake[i].getY()))
                dead = true;
        }
        return dead;
    }

    /// Too much recursion
    // for (var i = 0; i < tail; i++) {
    //     snake.push(new Snake(cell));
    // }

    this.show = function() {



        for (i = 1; i < tail; i++) {
            snake[i].show(0, 255, 0);
        }

        snake[0].show(0, 0, 255);
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

    this.setTail = function(t) {

        while (tail > t) {
            snake.pop();
            tail--;
        }

    }
}