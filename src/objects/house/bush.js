import * as THREE from "three";
import { textureLoader } from "../../utils";

const bushColorMap = textureLoader.load(
  "bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.webp"
);
const bushArmMap = textureLoader.load(
  "bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.webp"
);
const bushNormalMap = textureLoader.load(
  "bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.webp"
);

// texture configs
bushColorMap.colorSpace = THREE.SRGBColorSpace;

const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
  map: bushColorMap,
  aoMap: bushArmMap,
  roughnessMap: bushArmMap,
  metalnessMap: bushArmMap,
  normalMap: bushNormalMap,
  color: "#ccffcc",
});

export const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(0.8, 0.2, 2.2);
bush1.rotation.x = -0.75;
bush1.castShadow = true;

export const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.4, 0.1, 2.1);
bush2.rotation.x = -0.75;
bush2.castShadow = true;

export const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.4, 0.4, 0.4);
bush3.position.set(-0.8, 0.1, 2.2);
bush3.rotation.x = -0.75;
bush3.castShadow = true;

export const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.15, 0.15, 0.15);
bush4.position.set(-1, 0.05, 2.6);
bush4.rotation.x = -0.75;
bush4.castShadow = true;
