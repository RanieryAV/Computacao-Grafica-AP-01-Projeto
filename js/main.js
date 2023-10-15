// inspirado em https://smallworld.metronomy.co.uk/
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

// Reposicionamento da câmera em Z
camera.position.set(0, 0, 45);

// Inicializa o renderer
const renderer = new THREE.WebGLRenderer({
  alpha: true, //assume transparência
  antialias: true,
});

// Configura dimensão do renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Anexa renderer ao body do front
document.body.appendChild(renderer.domElement);

// Inicializa controles de órbita
// recomendo usar com mjs e npm, seguindo:
// https://threejs.org/docs/index.html#manual/en/introduction/Installation

// Controles
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;

// Texturas
const textureLoader = new THREE.TextureLoader();

const texturaTerra = textureLoader.load("/texturas/small-world.jpg");
const texturaSol = textureLoader.load("/texturas/TEXT_Sol.jpg");
const texturaMarte = textureLoader.load("/texturas/TEXT_Marte.jpg");
const texturaVenus = textureLoader.load("/texturas/TEXT_Venus.jpg");
const texturaMercurio = textureLoader.load("/texturas/TEXT_Mercurio.jpg");
const texturaNetuno = textureLoader.load("/texturas/TEXT_Netuno.jpg");
const texturaUrano = textureLoader.load("/texturas/TEXT_Urano.jpg");
const texturaJupiter = textureLoader.load("/texturas/TEXT_Jupiter.jpg");
const texturaSaturno = textureLoader.load("/texturas/TEXT_Saturno.jpg");
const texturaLua = textureLoader.load("/texturas/TEXT_Lua.jpg");
const texturaTita = textureLoader.load("/texturas/TEXT_Tita.jpg");
const texturaEuropa = textureLoader.load("/texturas/TEXT_Europa.jpg");

// Inicializa as geometrias

const geometriaTerra = new THREE.SphereGeometry(1, 32, 32);
const geometriaMarte = new THREE.SphereGeometry(1, 32, 32);
const geometriaSaturno = new THREE.SphereGeometry(1, 32, 32);
const geometriaJupiter = new THREE.SphereGeometry(1, 32, 32);
const geometriaNetuno = new THREE.SphereGeometry(1, 32, 32);
const geometriaUrano = new THREE.SphereGeometry(1, 32, 32);
const geometriaVenus = new THREE.SphereGeometry(1, 32, 32);
const geometriaMercurio = new THREE.SphereGeometry(1, 32, 32);
const geometriaSol = new THREE.SphereGeometry(2, 32, 32);
const geometriaLua = new THREE.SphereGeometry(1, 32, 32);
const geometriaTita = new THREE.SphereGeometry(1, 32, 32);
const geometriaEuropa = new THREE.SphereGeometry(1, 32, 32);

// Inicializa os materiais

const materialTerra = new THREE.MeshBasicMaterial({
  map: texturaTerra,
});

const materialSol = new THREE.MeshBasicMaterial({
  map: texturaSol,
});

const materialMarte = new THREE.MeshBasicMaterial({
  map: texturaMarte,
});

const materialVenus = new THREE.MeshBasicMaterial({
  map: texturaVenus,
});

const materialMercurio = new THREE.MeshBasicMaterial({
  map: texturaMercurio,
});

const materialJupiter = new THREE.MeshBasicMaterial({
  map: texturaJupiter,
});

const materialSaturno = new THREE.MeshBasicMaterial({
  map: texturaSaturno,
});

const materialUrano = new THREE.MeshBasicMaterial({
  map: texturaUrano,
});

const materialNetuno = new THREE.MeshBasicMaterial({
  map: texturaNetuno,
});

const materialLua = new THREE.MeshBasicMaterial({
  map: texturaLua,
});

const materialTita = new THREE.MeshBasicMaterial({
  map: texturaTita,
});

const materialEuropa = new THREE.MeshBasicMaterial({
  map: texturaEuropa,
});

// Inicializa os objetos

const terra = new THREE.Mesh(geometriaTerra, materialTerra);
const marte = new THREE.Mesh(geometriaMarte, materialMarte);
const saturno = new THREE.Mesh(geometriaSaturno, materialSaturno);
const jupiter = new THREE.Mesh(geometriaJupiter, materialJupiter);
const netuno = new THREE.Mesh(geometriaNetuno, materialNetuno);
const urano = new THREE.Mesh(geometriaUrano, materialUrano);
const venus = new THREE.Mesh(geometriaVenus, materialVenus);
const mercurio = new THREE.Mesh(geometriaMercurio, materialMercurio);
const sol = new THREE.Mesh(geometriaSol, materialSol);
const lua = new THREE.Mesh(geometriaLua, materialLua);
const tita = new THREE.Mesh(geometriaTita, materialTita);
const europa = new THREE.Mesh(geometriaEuropa, materialEuropa);

// Adiciona cada objeto o sol a cena
scene.add(sol);

// Posicionamento dos corpos celestes
mercurio.position.set(3, 0, 3);
venus.position.set(6, 0, 6);
terra.position.set(9, 0, 9);
marte.position.set(12, 0, 12);
jupiter.position.set(15, 0, 15);
saturno.position.set(18, 0, 18);
urano.position.set(21, 0, 21);
netuno.position.set(24, 0, 24);
sol.position.set(0, 0, 0);
lua.position.set(7.65, 0.3, 8);
tita.position.set(19.3, -0.2, 18);
europa.position.set(13.7, -0.3, 15);

// Rotação dos corpos celestes
terra.rotation.set(0, 0, 0);
marte.rotation.set(0, 0, 0);
saturno.rotation.set(0, 0, 0);
jupiter.rotation.set(0, 0, 0);
netuno.rotation.set(0, 0, 0);
urano.rotation.set(0, 0, 0);
venus.rotation.set(0, 0, 0);
mercurio.rotation.set(0, 0, 0);
sol.rotation.set(0, 0, 0);
lua.rotation.set(0, 0, 0);
tita.rotation.set(0, 0, 0);
europa.rotation.set(0, 0, 0);

// Escala dos corpos celestes

terra.scale.set(1, 1, 1);
marte.scale.set(0.5, 0.5, 0.5);
saturno.scale.set(0.8, 0.8, 0.8);
jupiter.scale.set(0.9, 0.9, 0.9);
netuno.scale.set(0.7, 0.7, 0.7);
urano.scale.set(0.6, 0.6, 0.6);
venus.scale.set(0.4, 0.4, 0.4);
mercurio.scale.set(0.3, 0.3, 0.3);
sol.scale.set(1, 1, 1);
lua.scale.set(0.12, 0.12, 0.12);
tita.scale.set(0.15, 0.15, 0.15);
europa.scale.set(0.18, 0.18, 0.18);

// Posicionamento da câmera (X,Y,Z)

camera.position.x = 18;
camera.position.y = 0;
camera.position.z = 40;

// Rotação da câmera
// ----------
// Rotaciona câmera em X

// Rotaciona câmera em Z

// Rotaciona câmera em Y

// Detalhes Adicionais:
// Nuvens

const texturaNuvens = new THREE.TextureLoader().load("/texturas/small-world-clouds.png");
const geometriaNuvens = new THREE.SphereGeometry(1.05, 40, 40); // recomenda dimensão um pouco maior que a da Terra

const materialNuvens = new THREE.MeshBasicMaterial({
  map: texturaNuvens,
  transparent: true, //torna fundo transparente
});

const nuvens = new THREE.Mesh(geometriaNuvens, materialNuvens);
scene.add(nuvens);
nuvens.position.set(9, 0, 9);

// Anel de Saturno
// Satelite

// Animação
// ----------

// Definindo o objeto planetasRotacoes com os valores em formato JSON
const astroRotacoes = {
  Mercurio: 0.0001,
  Venus: 0.00002,
  Terra: 0.0044,
  Marte: 0.0043,
  Jupiter: 0.10471,
  Saturno: 0.0103,
  Urano: 0.0058,
  Netuno: 0.0055,
};

// Prepara loop de animação
function animate() {
  // Requisita quadros de animação
  requestAnimationFrame(animate);

  // Sol
  sol.rotation.y += 0.0016;

  // Planetas rochosos
  terra.rotation.y += astroRotacoes["Terra"];
  venus.rotation.y += astroRotacoes["Venus"];
  mercurio.rotation.y += astroRotacoes["Mercurio"];
  marte.rotation.y += astroRotacoes["Marte"];

  // Planetas gasosos
  jupiter.rotation.y += astroRotacoes["Jupiter"];
  saturno.rotation.y += astroRotacoes["Saturno"];
  urano.rotation.y += astroRotacoes["Urano"];
  netuno.rotation.y += astroRotacoes["Netuno"];

  // Rotaciona Lua
  lua.rotation.y += 0.001;

  // Rotaciona Titã
  tita.rotation.y += 0.001;

  // Rotaciona Europa
  europa.rotation.y += 0.0008;

  // Rotaciona nuvens
  nuvens.rotation.y -= 0.0008;

  // Renderiza cena
  renderer.render(scene, camera);
}

// Chamada da função animate
animate();

// Redimensiona janela
// ----------

// Listener para redimensionamento da janela
window.addEventListener("resize", () => {
  // Atualiza proporção (aspect) da câmera
  camera.aspect = window.innerWidth / window.innerHeight;

  // Atualiza matriz de projeção da câmera
  camera.updateProjectionMatrix();

  // Redimensiona o renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STAR_COUNT = 100;
let result = "";
for (let i = 0; i < STAR_COUNT; i++) {
  result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(
    0,
    3
  )}px ${randomNumber(0, 3)}px #fff,`;
}
console.log(result.substring(0, result.length - 1));

//objetos 3D dos planetas
const terra3d = new THREE.Object3D();
const marte3d = new THREE.Object3D();
const saturno3d = new THREE.Object3D();
const jupiter3d = new THREE.Object3D();
const netuno3d = new THREE.Object3D();
const urano3d = new THREE.Object3D();
const venus3d = new THREE.Object3D();
const mercurio3d = new THREE.Object3D();
const lua3d = new THREE.Object3D();
const tita3d = new THREE.Object3D();
const europa3d = new THREE.Object3D();
const nuvens3d = new THREE.Object3D();

//adicionando o mash dos planetas nos objetos 3D
terra3d.add(terra);
marte3d.add(marte);
saturno3d.add(saturno);
jupiter3d.add(jupiter);
netuno3d.add(netuno);
urano3d.add(urano);
venus3d.add(venus);
mercurio3d.add(mercurio);
lua3d.add(lua);
tita3d.add(tita);
europa3d.add(europa);
nuvens3d.add(nuvens);

//adicionando os objetos 3D na cena
scene.add(terra3d);
scene.add(marte3d);
scene.add(saturno3d);
scene.add(jupiter3d);
scene.add(netuno3d);
scene.add(urano3d);
scene.add(venus3d);
scene.add(mercurio3d);
scene.add(lua3d);
scene.add(tita3d);
scene.add(europa3d);
scene.add(nuvens3d);

//translação
function translate() {
  //Around-sun-rotation
  terra3d.rotateY(0.001);
  nuvens3d.rotateY(0.001);
  marte3d.rotateY(0.008);
  saturno3d.rotateY(0.0009);
  jupiter3d.rotateY(0.002);
  netuno3d.rotateY(0.0001);
  urano3d.rotateY(0.0004);
  venus3d.rotateY(0.015);
  mercurio3d.rotateY(0.04);
  lua3d.rotateY(0.001);
  tita3d.rotateY(0.0005);
  europa3d.rotateY(0.003);

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(translate);
