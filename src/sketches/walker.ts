import p5 from "p5";

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
    let xstep = p.random(-1, 1);
    let ystep = p.random(-1, 1);
    this.x += xstep;
    this.y += ystep;
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
