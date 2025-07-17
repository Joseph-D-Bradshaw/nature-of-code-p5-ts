import p5 from "p5";

class Walker {
  x: number;
  y: number;
  p: p5;

  constructor(p: p5) {
    this.p = p;
    this.x = p.width / 2;
    this.y = p.height / 2;
  }

  show() {
    const p = this.p;

    p.stroke(0);
    p.point(this.x, this.y);
  }

  step() {
    const p = this.p;

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
    walker.step();
    walker.show();
  };
};

export default sketch;
