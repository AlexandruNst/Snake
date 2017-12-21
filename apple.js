function Apple() {
    this.x = random(width);
    this.y = random(height);
    this.r = 5;
    this.d = this.r * 2;

    this.show = function() {
        noStroke();
        fill(200, 0, 30);
        ellipse(this.x, this.y, this.d, this.d);

        //fill(0, 255, 0);
        stroke(0, 255, 0);
        line(this.x, this.y - this.r + 2, this.x + 5, this.y - this.r - 5);
    }
}