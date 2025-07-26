import * as THREE from "three";
import { textureLoader } from "../utils";

// textures
export const graveColorMap = textureLoader.load(
  "/grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.webp"
);
export const graveArmMap = textureLoader.load(
  "/grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.webp"
);
export const graveNormalMap = textureLoader.load(
  "/grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.webp"
);

// textures config
graveColorMap.colorSpace = THREE.SRGBColorSpace;

graveColorMap.repeat.set(0.3, 0.4);
graveArmMap.repeat.set(0.3, 0.4);
graveNormalMap.repeat.set(0.3, 0.4);

graveColorMap.wrapS = THREE.RepeatWrapping;
graveArmMap.wrapS = THREE.RepeatWrapping;
graveNormalMap.wrapS = THREE.RepeatWrapping;

graveColorMap.wrapT = THREE.RepeatWrapping;
graveArmMap.wrapT = THREE.RepeatWrapping;
graveNormalMap.wrapT = THREE.RepeatWrapping;

export const gravesGroup = new THREE.Group();

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
  map: graveColorMap,
  aoMap: graveArmMap,
  roughnessMap: graveArmMap,
  metalnessMap: graveArmMap,
  normalMap: graveNormalMap,
});

// grave generator

for (let i = 0; i < 30; i++) {
  const grave = new THREE.Mesh(graveGeometry, graveMaterial);

  // grave configs
  grave.castShadow = true;
  grave.receiveShadow = true;

  const angle = Math.random() * Math.PI * 2;
  const radius = 3 + Math.random() * 4;

  const [x, z, y] = [
    Math.sin(angle) * radius, // x
    Math.cos(angle) * radius, // z
    Math.random() * 0.4, // y
  ];
  grave.position.set(x, y, z);

  grave.rotation.x = Math.random() - 0.5;
  grave.rotation.y = Math.random() * 0.4 - 0.2;

  grave.rotation.z = Math.random() * 0.5 - 0.25;

  gravesGroup.add(grave);
}
