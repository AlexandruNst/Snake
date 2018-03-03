function explosion(x, y) {

    this.x = x;
    this.y = y;

    this.show = function() {
        var r = 40;
        var d = r * 2;

        noStroke();
        fill(255, 255, 0);
        for (var i = 0; i < d; i += 3) {
            ellipse(this.x, this.y, i, i);
        }

        noStroke();
        fill(255, 140, 0);
        for (var i = 0; i < d; i += 3) {
            ellipse(this.x, this.y, i, i);
        }

        noStroke();
        fill(255, 0, 0);
        for (var i = 0; i < d; i += 3) {
            ellipse(this.x, this.y, i, i);
        }

    }

}