function Snake(cell) {

    var snake = [];
    var tail = 5;
    //
    this.x = cell.x;
    this.y = cell.y;
    //

    /// Too much recursion
    // for (var i = 0; i < tail; i++) {
    //     snake.push(new Snake(cell));
    // }

    this.show = function() {
        for (i = 0; i < tail; i++) {
            noStroke();
            fill(0, 255, 0);
            rect(this.x, this.y, cell.w, cell.w);
        }
    }



}