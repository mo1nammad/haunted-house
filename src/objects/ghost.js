import * as THREE from "three";

export const ghosts = new THREE.Group();

const ghost1 = new THREE.PointLight("#8800ff", 6);
const ghost2 = new THREE.PointLight("#ff0088", 6);
const ghost3 = new THREE.PointLight("#ff0000", 8);

ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;

ghost1.shadow.mapSize.width = 512;
ghost2.shadow.mapSize.width = 512;
ghost3.shadow.mapSize.width = 512;

ghost1.shadow.mapSize.height = 512;
ghost2.shadow.mapSize.height = 512;
ghost3.shadow.mapSize.height = 512;

ghost1.shadow.camera.near = 0.5;
ghost2.shadow.camera.near = 0.5;
ghost3.shadow.camera.near = 0.5;

ghost1.shadow.camera.far = 8;
ghost2.shadow.camera.far = 8;
ghost3.shadow.camera.far = 8;

ghosts.add(ghost1, ghost2, ghost3);

export const moveGhostsAround = (angle) => {
  const ghost1Angle = angle * 0.5;
  const ghost2Angle = angle * 0.38;
  const ghost3Angle = angle * 0.29;

  ghost1.position.x = Math.cos(ghost1Angle) * 4;
  ghost1.position.z = Math.sin(ghost1Angle) * 4;
  ghost1.position.y =
    Math.sin(ghost1Angle) *
    Math.sin(ghost1Angle * 2.34) *
    Math.sin(ghost1Angle * 3.45);

  ghost2.position.x = Math.cos(ghost2Angle) * 5;
  ghost2.position.z = -Math.sin(ghost2Angle) * 5;
  ghost2.position.y =
    Math.sin(ghost2Angle) *
    Math.sin(ghost2Angle * 2.34) *
    Math.sin(ghost2Angle * 3.45);

  ghost3.position.x = Math.cos(ghost3Angle) * 6;
  ghost3.position.z = Math.sin(ghost3Angle) * 6;
  ghost3.position.y =
    Math.sin(ghost3Angle) *
    Math.sin(ghost3Angle * 2.34) *
    Math.sin(ghost3Angle * 3.45);
};
