// Seleciona os botões circulares e o elemento de resultado
const value1 = document.getElementById("value-1");
const value2 = document.getElementById("value-2");
const value3 = document.getElementById("value-3");
let multiplicadorTranscao = 0.2;

// Adiciona um ouvinte de eventos para cada botão circular
value1.addEventListener("change", function () {
  multiplicadorTranscao = 0.2;
});

value2.addEventListener("change", function () {
  multiplicadorTranscao = 0.8;
});

value3.addEventListener("change", function () {
  multiplicadorTranscao = 3;
});

// inspirado em https://smallworld.metronomy.co.uk/
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

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
// recomendado usar com mjs e npm, seguindo:
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

const materialTerra = new THREE.MeshStandardMaterial({
  map: texturaTerra,
});

const materialSol = new THREE.MeshBasicMaterial({
  map: texturaSol,
});

const materialMarte = new THREE.MeshStandardMaterial({
  map: texturaMarte,
});

const materialVenus = new THREE.MeshStandardMaterial({
  map: texturaVenus,
});

const materialMercurio = new THREE.MeshStandardMaterial({
  map: texturaMercurio,
});

const materialJupiter = new THREE.MeshStandardMaterial({
  map: texturaJupiter,
});

const materialSaturno = new THREE.MeshStandardMaterial({
  map: texturaSaturno,
});

const materialUrano = new THREE.MeshStandardMaterial({
  map: texturaUrano,
});

const materialNetuno = new THREE.MeshStandardMaterial({
  map: texturaNetuno,
});

const materialLua = new THREE.MeshStandardMaterial({
  map: texturaLua,
});

const materialTita = new THREE.MeshStandardMaterial({
  map: texturaTita,
});

const materialEuropa = new THREE.MeshStandardMaterial({
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

// ponto de luz
const pointLight = new THREE.PointLight(0xffffff, 500, 300);
scene.add(pointLight);

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

const texturaNuvens = new THREE.TextureLoader().load(
  "/texturas/small-world-clouds.png"
);
const geometriaNuvens = new THREE.SphereGeometry(1.05, 40, 40); // recomendado dimensão um pouco maior que a da Terra

const materialNuvens = new THREE.MeshStandardMaterial({
  map: texturaNuvens,
  transparent: true, //torna fundo transparente
});

const nuvens = new THREE.Mesh(geometriaNuvens, materialNuvens);
scene.add(nuvens);
nuvens.position.set(9, 0, 9);

//Aneis Saturno
const texturaAneis = new THREE.TextureLoader().load("/texturas/anel.png");

const geometriaAneis = new THREE.RingGeometry(1.2, 1.7, 64);

const materialAneis = new THREE.MeshStandardMaterial({
  map: texturaAneis,
  transparent: true, //torna fundo transparente
  side: THREE.DoubleSide, //garante que o anel aparça dos 2 lados
});

const aneis = new THREE.Mesh(geometriaAneis, materialAneis);
aneis.position.set(18, 0, 18);
aneis.rotation.x = Math.PI / -1.5;

// Definindo o objeto planetasRotacoes com os valores em formato JSON
const astroRotacoes = {
  Sol: 0.0016,
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
  sol.rotation.y += astroRotacoes["Sol"];

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
  result += `${randomNumber(-50, 50)}vw ${randomNumber(
    -50,
    50
  )}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`;
}
console.log(result.substring(0, result.length - 1));

// Objetos 3D para os planetas rochosos e satélites naturais
const terra3d = new THREE.Object3D(); // Terra
const marte3d = new THREE.Object3D(); // Marte
const venus3d = new THREE.Object3D(); // Vênus
const mercurio3d = new THREE.Object3D(); // Mercúrio
const lua3d = new THREE.Object3D(); // Lua
const tita3d = new THREE.Object3D(); // Titã
const europa3d = new THREE.Object3D(); // Europa

// Objetos 3D para os planetas gasosos
const jupiter3d = new THREE.Object3D(); // Júpiter
const saturno3d = new THREE.Object3D(); // Saturno
const urano3d = new THREE.Object3D(); // Urano
const netuno3d = new THREE.Object3D(); // Netuno

// Objetos 3D para nuvens e anéis
const nuvens3d = new THREE.Object3D(); // Nuvens
const aneis3d = new THREE.Object3D(); // Anéis de Saturno

// Adicionando o mesh dos planetas nos objetos 3D
terra3d.add(terra); // Terra
marte3d.add(marte); // Marte
venus3d.add(venus); // Vênus
mercurio3d.add(mercurio); // Mercúrio
lua3d.add(lua); // Lua
tita3d.add(tita); // Titã
europa3d.add(europa); // Europa

// Adicionando o mesh dos planetas gasosos nos objetos 3D
jupiter3d.add(jupiter); // Júpiter
saturno3d.add(saturno); // Saturno
urano3d.add(urano); // Urano
netuno3d.add(netuno); // Netuno

// Adicionando o mesh das nuvens e dos anéis nos objetos 3D
nuvens3d.add(nuvens); // Nuvens
aneis3d.add(aneis); // Anéis de Saturno

// Adicionando os objetos 3D dos planetas rochosos à cena
scene.add(terra3d); // Terra
scene.add(marte3d); // Marte
scene.add(venus3d); // Vênus
scene.add(mercurio3d); // Mercúrio

// Adicionando os objetos 3D dos planetas gasosos à cena
scene.add(jupiter3d); // Júpiter
scene.add(saturno3d); // Saturno
scene.add(urano3d); // Urano
scene.add(netuno3d); // Netuno

// Adicionando os objetos 3D dos satélites naturais à cena
scene.add(lua3d); // Lua
scene.add(tita3d); // Titã
scene.add(europa3d); // Europa

// Adicionando os objetos 3D das nuvens e dos anéis à cena
scene.add(nuvens3d); // Nuvens
scene.add(aneis3d); // Anéis de Saturno

//translação
function translate() {
  // Planetas rochosos
  mercurio3d.rotateY(0.05 * multiplicadorTranscao);
  venus3d.rotateY(0.015 * multiplicadorTranscao);
  terra3d.rotateY(0.0121 * multiplicadorTranscao);
  marte3d.rotateY(0.0063 * multiplicadorTranscao);
  nuvens3d.rotateY(0.0121 * multiplicadorTranscao);

  // Planetas gasosos
  jupiter3d.rotateY(0.001 * multiplicadorTranscao);
  saturno3d.rotateY(0.0004 * multiplicadorTranscao);
  aneis3d.rotateY(0.0004 * multiplicadorTranscao);
  urano3d.rotateY(0.0001 * multiplicadorTranscao);
  netuno3d.rotateY(0.0001 * multiplicadorTranscao);

  // Satélites naturais
  lua3d.rotateY(0.0121 * multiplicadorTranscao);
  tita3d.rotateY(0.0004 * multiplicadorTranscao);
  europa3d.rotateY(0.001 * multiplicadorTranscao);

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(translate);
