import * as THREE from "three";

export const doorLight = new THREE.Group();

// light
const light = new THREE.PointLight("#ff7d46", 2);
light.position.z = 0.33;
light.position.y = -0.11;

// bulb
const bulb = new THREE.Mesh(
  new THREE.SphereGeometry(0.08, 16, 16),
  new THREE.MeshBasicMaterial({
    color: "#ff7d46",
  })
);
bulb.position.z = -0.2;
bulb.position.y = 0.3;

// gui.add(bulb.position, "z").min(-2).max(2).step(0.1);
// gui.add(bulb.position, "y").min(-2).max(2).step(0.1);

doorLight.add(light, bulb);

doorLight.position.set(0, 2.2, 2.3);
