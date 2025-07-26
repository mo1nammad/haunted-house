import * as THREE from "three";
import { textureLoader } from "../../utils";

const roofColorMap = textureLoader.load(
  "roof/roof_slates_02_1k/roof_slates_02_diff_1k.webp"
);
const roofArmMap = textureLoader.load(
  "roof/roof_slates_02_1k/roof_slates_02_arm_1k.webp"
);
const roofNormalMap = textureLoader.load(
  "roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.webp"
);

// texture configs
roofColorMap.colorSpace = THREE.SRGBColorSpace;

roofColorMap.repeat.set(3, 1);
roofArmMap.repeat.set(3, 1);
roofNormalMap.repeat.set(3, 1);

roofColorMap.wrapS = THREE.RepeatWrapping;
roofArmMap.wrapS = THREE.RepeatWrapping;
roofNormalMap.wrapS = THREE.RepeatWrapping;

export const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3.5, 1.5, 4),
  new THREE.MeshStandardMaterial({
    map: roofColorMap,
    aoMap: roofArmMap,
    roughnessMap: roofArmMap,
    metalnessMap: roofArmMap,
    normalMap: roofNormalMap,
  })
);

roof.castShadow = true;

roof.rotation.y = Math.PI * 0.25;
roof.position.y = 2.5 + 0.75 - 0.01; // walls height + half of it own height
