import p5 from "p5";

// Leans towards the bottom right

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
    const r = p.random();
    if (r < 0.4) this.x++;
    else if (r < 0.6) this.x--;
    else if (r < 0.8) this.y++;
    else this.y--;
  }
}


const sketch = (p: p5) => {
  let walker: Walker;

  p.setup = () => {
    p.createCanvas(400, 400);
    walker = new Walker(p);
  };

  p.draw = () => {
    walker.step(p);
    walker.show(p);
  };
};

export default sketch;
