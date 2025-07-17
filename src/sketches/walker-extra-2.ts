import p5 from "p5";

// Sometimes goes towards the mouse

class Walker {
  x: number;
  y: number;

  constructor(p: p5) {
    this.x = p.width / 2;
    this.y = p.height / 2;
  }

  show(p: p5) {
    p.stroke(0);
    p.point(this.x, this.y);
  }

  step(p: p5) {
    let r = p.random();
    // Move towards mouse 50% of the time
    if (r < 0.5) {
      this.x += p.mouseX > this.x ? 1 : -1;
      this.y += p.mouseY > this.y ? 1 : -1;
    }

    // Equal chance to move in any direction
    r = p.random();
    if (r < 0.25) this.x++;
    else if (r < 0.5) this.x--;
    else if (r < 0.75) this.y++;
    else this.y--;
  }
}


const sketch = (p: p5) => {
  let walker: Walker;

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(255);
    walker = new Walker(p);
  };

  p.draw = () => {
    walker.step(p);
    walker.show(p);
  };
};

export default sketch;
