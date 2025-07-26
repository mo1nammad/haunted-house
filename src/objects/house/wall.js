import * as THREE from "three";
import { textureLoader } from "../../utils/index";

const wallColorMap = textureLoader.load(
  "/wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.webp"
);
const wallArmMap = textureLoader.load(
  "/wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.webp"
);
const wallNormalMap = textureLoader.load(
  "/wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.webp"
);

// texture configs
wallColorMap.colorSpace = THREE.SRGBColorSpace;

const height = 2.5;
const width = 4;

export const walls = new THREE.Mesh(
  new THREE.BoxGeometry(width, height, width),
  new THREE.MeshStandardMaterial({
    map: wallColorMap,
    aoMap: wallArmMap,
    roughnessMap: wallArmMap,
    metalnessMap: wallArmMap,
    normalMap: wallNormalMap,
    side: THREE.DoubleSide,
  })
);
walls.castShadow = true;
walls.receiveShadow = true;

walls.position.y += height * 0.5;
