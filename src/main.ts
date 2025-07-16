import p5 from "p5";
import sketch1 from "./exampleSketch.ts";

let loadedSketch = false;

document.querySelector("#app")!.innerHTML = `
  <button id="sketch1">Sketch 1</button>
`;

document.getElementById("sketch1")?.addEventListener("click", () => {
  if (loadedSketch) return;
  loadedSketch = true;
  sketch1();
});
