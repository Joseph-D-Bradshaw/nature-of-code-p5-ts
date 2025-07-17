import p5 from "p5";

const sketch = (p: p5) => {
  let randomCounts: number[] = [];
  let total = 50;
  let mean = total / 2;
  let std = 2;

  p.setup = () => {
    p.createCanvas(640, 240);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0;
    }
  };

  p.draw = () => {
    p.background(250);
    let i = p.floor(p.randomGaussian(mean, std));
    randomCounts[i]++;
    p.stroke(0);
    p.fill(127);
    let w = p.width / randomCounts.length;

    // Graph results
    for (let x = 0; x < randomCounts.length; x++) {
      p.rect(x * w, p.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };
};

export default sketch;
