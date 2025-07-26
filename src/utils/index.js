import * as THREE from "three";

const manager = new THREE.LoadingManager();

const loaderElement = document.querySelector(".threejs-loader");
const progressElement = document.querySelector(".threejs-loader .progress");

manager.onProgress = (url, loaded, total) => {
  const progress = Math.floor((loaded / total) * 100);
  progressElement.textContent = `${progress}%`;
};
manager.onLoad = () => {
  const threeCanvas = document.querySelector(
    "canvas.threejs-renderer-domElement"
  );
  loaderElement.classList.add("hidden");
  threeCanvas.classList.remove("hidden");
};

export const textureLoader = new THREE.TextureLoader(manager);
