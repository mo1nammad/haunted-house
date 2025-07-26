import * as THREE from "three";
import { textureLoader } from "../utils";

export const floorAlphaMap = textureLoader.load("/floor/alpha.webp");
export const floorColorMap = textureLoader.load(
  "/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp"
);
export const floorArmMap = textureLoader.load(
  "/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp"
);
export const floorNormalMap = textureLoader.load(
  "/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.webp"
);
export const floorDisplacementMap = textureLoader.load(
  "/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.webp"
);

// configs

floorColorMap.colorSpace = THREE.SRGBColorSpace;

floorColorMap.repeat.set(8, 8);
floorArmMap.repeat.set(8, 8);
floorNormalMap.repeat.set(8, 8);
floorDisplacementMap.repeat.set(8, 8);

floorColorMap.wrapS = THREE.RepeatWrapping;
floorColorMap.wrapT = THREE.RepeatWrapping;

floorArmMap.wrapS = THREE.RepeatWrapping;
floorArmMap.wrapT = THREE.RepeatWrapping;

floorNormalMap.wrapS = THREE.RepeatWrapping;
floorNormalMap.wrapT = THREE.RepeatWrapping;

floorDisplacementMap.wrapS = THREE.RepeatWrapping;
floorDisplacementMap.wrapT = THREE.RepeatWrapping;

export const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20, 100, 100),
  new THREE.MeshStandardMaterial({
    alphaMap: floorAlphaMap,
    transparent: true,
    map: floorColorMap,
    aoMap: floorArmMap,
    roughnessMap: floorArmMap,
    metalnessMap: floorArmMap,
    normalMap: floorNormalMap,
    displacementMap: floorDisplacementMap,
    displacementScale: 0.47,
    displacementBias: -0.23,
  })
);

floor.receiveShadow = true;

floor.rotation.x = Math.PI * -0.5;
