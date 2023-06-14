import { Playground } from "./playground.ts";
import * as BABYLON from 'babylonjs'

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement; // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
const scene = Playground.CreateScene(engine, canvas) //Call the createScene function
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});