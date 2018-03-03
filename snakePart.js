function snakePart(cell) {

    this.x = cell.x * cell.w;
    this.y = cell.y * cell.w;


    this.getX = function() {
        return this.x;
    }

    this.getY = function() {
        return this.y;
    }

    this.setX = function(x) {
        this.x = x;
    }

    this.setY = function(y) {
        this.y = y;
    }
    this.show = function(r, g, b) {

        noStroke();
        fill(r, g, b);
        rect(this.x, this.y, cell.w, cell.w);



    }

    this.move = function(xdir, ydir) {

        this.x += xdir * cell.w;
        this.y += ydir * cell.w;


        if (this.x > cell.canvasW - 1) {
            this.x = 0;
        }

        if (this.y > cell.canvasW - 1) {
            this.y = 0;
        }

        if (this.x < -0.1) {
            this.x = cell.canvasW - cell.w;
        }

        if (this.y < -0.1) {
            this.y = cell.canvasW - cell.w;
        }
    }

    // this.getPos = function() {
    //     return cell = {
    //         x: this.x / cell.w,
    //         y: this.y / cell.w
    //     };
    // }
    //
    //

}