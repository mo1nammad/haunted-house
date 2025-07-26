import * as THREE from "three";

// objects
import { walls } from "./wall";
import { roof } from "./roof";
import { bush1, bush2, bush3, bush4 } from "./bush";
import { door } from "./door";
import { doorLight } from "./doorlight";

// house group
export const house = new THREE.Group();

house.add(walls, roof, bush1, bush2, bush3, bush4, door, doorLight);
