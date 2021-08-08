class Cannon {
    constructor(x, y, width, height, angle) {
      this.angle = angle;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    display() {
    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -60, this.width, this.height);
    pop();
    arc(this.x-30, this.y+90, 80, 100, PI, TWO_PI);
    noFill();
    }
  }
  