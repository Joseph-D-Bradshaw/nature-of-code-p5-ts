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
    this.p.stroke(0);
    this.p.point(this.x, this.y);
  }
}

const sketch = (p: p5) => {
  let walker: Walker;

  p.setup = () => {
    p.createCanvas(400, 400);
    walker = new Walker(p);
  };

  p.draw = () => {
    p.background(220);
    walker.show();
  };
};

export default sketch;
