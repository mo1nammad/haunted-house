import * as THREE from "three";
import { textureLoader } from "../../utils";

const doorColorTexture = textureLoader.load("door/color.webp");
const doorAlphaTexture = textureLoader.load("door/alpha.webp");
const doorAmbientTexture = textureLoader.load("door/ambientOcclusion.webp");
const doorHeightTexture = textureLoader.load("door/height.webp");
const doorMetalnessTexture = textureLoader.load("door/metalness.webp");
const doorNormalTexture = textureLoader.load("door/normal.webp");
const doorRoughnessTexture = textureLoader.load("door/roughness.webp");

// texture configs

doorColorTexture.colorSpace = THREE.SRGBColorSpace;

export const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.2, 2.2, 80, 80),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    aoMap: doorAmbientTexture,
    alphaMap: doorAlphaTexture,
    transparent: true,
    displacementMap: doorHeightTexture,
    displacementScale: 0.15,
    displacementBias: -0.04,
    metalnessMap: doorMetalnessTexture,
    normalMap: doorNormalTexture,
    roughnessMap: doorRoughnessTexture,
  })
);

door.position.z = 4 * 0.5 + 0.02;
door.position.y += 1.1;
