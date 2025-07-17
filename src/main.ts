import p5 from "p5";
import exampleSketch from "./exampleSketch.ts";
import randomWalker from "./sketches/walker.ts";

const sketchMap = {
  exampleSketch: exampleSketch,
  randomWalker: randomWalker,
};

let currentSketch: p5 | null = null;

function loadSketch(sketchFn: (p: p5) => void, container: HTMLElement) {
  if (currentSketch) {
    currentSketch.remove();
  }
  currentSketch = new p5(sketchFn, container);
}

function createSketchButton(id: string): string {
  return `<button id="${id}">${id}</button>`;
}

function start() {
  document.querySelector("#app")!.innerHTML = `
    ${Object.keys(sketchMap).map(createSketchButton).join("")}
    <div id="p5-container"></div>
  `;

  let container = document.getElementById("p5-container");

  Object.entries(sketchMap).forEach(([key, fn]) => {
    document
      .getElementById(key)
      ?.addEventListener("click", () => loadSketch(fn, container!));
  });
}

start();
