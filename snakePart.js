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
    this.show = function() {

        noStroke();
        fill(0, 255, 0);
        rect(this.x, this.y, cell.w, cell.w);



    }

    this.move = function(xdir, ydir) {

        this.x += xdir * cell.w;
        this.y += ydir * cell.w;


        if (this.x > cell.canvasW) {
            this.x = 0;
        }

        if (this.y > cell.canvasW) {
            this.y = 0;
        }

        if (this.x < -1) {
            this.x = cell.canvasW;
        }

        if (this.y < -1) {
            this.y = cell.canvasW;
        }
    }

}