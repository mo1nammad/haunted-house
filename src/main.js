import * as THREE from "three";

import "./utils/debugger";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Timer } from "three/addons/misc/Timer.js";

// objects
import { floor } from "./objects/floor";
import { house } from "./objects/house";
import { gravesGroup } from "./objects/graves";
import { ghosts, moveGhostsAround } from "./objects/ghost";
import { sky } from "./objects/sky";
import { gui } from "./utils/debugger";

// scene
const scene = new THREE.Scene();

// mesh
// add meshs to scene here
scene.add(house, gravesGroup, floor, ghosts, sky);

// fog
const fogColor = { color: "#373f58" };
scene.fog = new THREE.FogExp2(fogColor.color, 0.08);

gui.addColor(fogColor, "color").onChange((value) => {
  scene.fog.color.set(value);
});
gui.add(scene.fog, "density").min(0).max(1).step(0.005);
// size
const Sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  Sizes.width = window.innerWidth;
  Sizes.height = window.innerHeight;

  camera.aspect = Sizes.width / Sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(Sizes.width, Sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  Sizes.width / Sizes.height,
  0.1,
  1000
);
camera.position.z = 9;
camera.position.y = 4;
camera.lookAt(0, 0, 0);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(Sizes.width, Sizes.height);
renderer.domElement.classList.add("threejs-renderer-domElement", "hidden");
document.body.appendChild(renderer.domElement);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
controls.enableDamping = true;

// light
const directionLight = new THREE.DirectionalLight("#86cdff", 2);
// shadow setups
directionLight.castShadow = true;
directionLight.shadow.mapSize.width = 256;
directionLight.shadow.mapSize.height = 256;
directionLight.shadow.camera.near = 0.5;
directionLight.shadow.camera.far = 20;
directionLight.shadow.camera.left = -8;
directionLight.shadow.camera.right = 8;

directionLight.position.set(3, 2, -8);

const ambientLight = new THREE.AmbientLight("#86cdff", 0.275);
scene.add(ambientLight);
scene.add(directionLight);

const timer = new Timer();

function animate() {
  timer.update();

  const elapsedTime = timer.getElapsed();

  // animations
  moveGhostsAround(elapsedTime);

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
