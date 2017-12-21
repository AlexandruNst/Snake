function Apple(cell) {
    this.x = cell.x * cell.w;
    this.y = cell.y * cell.w;
    this.r = cell.w / 3;
    this.d = this.r * 2;

    this.show = function() {
        noStroke();
        fill(200, 0, 30);
        ellipse(this.x + cell.w / 2, this.y + cell.w / 2, this.d, this.d);

        //fill(0, 255, 0);
        stroke(0, 255, 0);
        strokeWeight(4);
        line(this.x + cell.w / 2, this.y - this.r + 2 + cell.w / 2, this.x + 5 + cell.w / 2, this.y - this.r - 5 + cell.w / 2);

        console.log("apple" + this.x + " " + this.y);
    }
}