import * as dat from "lil-gui";

export const gui = new dat.GUI().show(false);

const url = new URLSearchParams(document.location.search);
if (url.has("debugger")) {
  gui.show(true);
}
