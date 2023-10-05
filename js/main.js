// inspirado em https://smallworld.metronomy.co.uk/
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

//const controls = new OrbitControls(camera, renderer.domElement)

// Terra
// ----------

const textureLoader = new THREE.TextureLoader();
const texturaTerra = textureLoader.load("https://assets.codepen.io/141041/small-world.jpg");

// Inicializa geometria da Terra
const geometriaTerra = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria de Marte
const geometriaMarte = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria de Saturno
const geometriaSaturno = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria de Júpiter
const geometriaJupiter = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria de Netuno
const geometriaNetuno = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria de Urano
const geometriaUrano = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria de Vênus
const geometriaVenus = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria de Mercúrio
const geometriaMercurio = new THREE.SphereGeometry(1, 32, 32);

// Inicializa geometria do Sol
const geometriaSol = new THREE.SphereGeometry(2, 32, 32);

// Inicializa material da Terra
const materialTerra = new THREE.MeshBasicMaterial({
  map: texturaTerra,
});

// Inicializa objeto Terra
const terra = new THREE.Mesh(geometriaTerra, materialTerra);

// Inicializa objeto Marte
const marte = new THREE.Mesh(geometriaMarte); //, materialTerra)

// Inicializa objeto Saturno
const saturno = new THREE.Mesh(geometriaSaturno); //, materialTerra)

// Inicializa objeto Jupiter
const jupiter = new THREE.Mesh(geometriaJupiter); //, materialTerra)

// Inicializa objeto Netuno
const netuno = new THREE.Mesh(geometriaNetuno); //, materialTerra)

// Inicializa objeto Urano
const urano = new THREE.Mesh(geometriaUrano); //, materialTerra)

// Inicializa objeto Venus
const venus = new THREE.Mesh(geometriaVenus); //, materialTerra)

// Inicializa objeto Mercurio
const mercurio = new THREE.Mesh(geometriaMercurio); //, materialTerra)

// Inicializa objeto Sol
const sol = new THREE.Mesh(geometriaSol); //, materialTerra)

// Adiciona Terra na cena
scene.add(terra);

// Adiciona marte na cena
scene.add(marte);

// Adiciona saturno na cena
scene.add(saturno);

// Adiciona Jupiter na cena
scene.add(jupiter);

// Adiciona netuno na cena
scene.add(netuno);

// Adiciona urano na cena
scene.add(urano);

// Adiciona venus na cena
scene.add(venus);

// Adiciona mercurio na cena
scene.add(mercurio);

// Adiciona sol na cena
scene.add(sol);

// Posicionamento dos planetas
// ----------
// Terra
terra.position.set(3, 0, 3);

// Marte
marte.position.set(6, 0, 6);

// Saturno
saturno.position.set(9, 0, 9);

// Jupiter
jupiter.position.set(12, 0, 12);

// Netuno
netuno.position.set(-3, 0, -3);

// Urano
urano.position.set(-6, 0, -6);

// Venus
venus.position.set(-9, 0, -9);

// Mercurio
mercurio.position.set(-12, 0, -12);

// Sol
sol.position.set(0, 0, 0);

// Rotação dos planetas
// ----------

// Terra
terra.rotation.set(0, 0, 0);

// Marte
marte.rotation.set(0, 0, 0);

// Saturno
saturno.rotation.set(0, 0, 0);

// Jupiter
jupiter.rotation.set(0, 0, 0);

// Netuno
netuno.rotation.set(0, 0, 0);

// Urano
urano.rotation.set(0, 0, 0);

// Venus
venus.rotation.set(0, 0, 0);

// Mercurio
mercurio.rotation.set(0, 0, 0);

// Sol
sol.rotation.set(0, 0, 0);

// Escala dos planetas
// ----------

// Terra
terra.scale.set(1, 1, 1);

// Marte
marte.scale.set(0.5, 0.5, 0.5);

// Saturno
saturno.scale.set(0.8, 0.8, 0.8);

// Jupiter
jupiter.scale.set(0.9, 0.9, 0.9);

// Netuno
netuno.scale.set(0.7, 0.7, 0.7);

// Urano
urano.scale.set(0.6, 0.6, 0.6);

// Venus
venus.scale.set(0.4, 0.4, 0.4);

// Mercurio
mercurio.scale.set(0.3, 0.3, 0.3);

// Sol
sol.scale.set(1, 1, 1);

// Posicionamento da câmera
// ----------

// Posiciona câmera em Z
camera.position.z = 45;

// Posiciona câmera em Y
camera.position.y = 0;

// Posiciona câmera em X
camera.position.x = 0;

// Rotação da câmera
// ----------
// Rotaciona câmera em X

// Rotaciona câmera em Z

// Rotaciona câmera em Y

// Nuvens
// ----------

// Carrega textura das nuvens
const texturaNuvens = new THREE.TextureLoader().load(
  "https://assets.codepen.io/141041/small-world-clouds.png"
);

// Inicializa geometria de nuvens
const geometriaNuvens = new THREE.SphereGeometry(1.05, 40, 40); // recomenda dimensão um pouco maior que a da Terra

// Inicializa material de nuvens
const materialNuvens = new THREE.MeshBasicMaterial({
  map: texturaNuvens,
  transparent: true, //torna fundo transparente
});

// Inicializa nuvens
const nuvens = new THREE.Mesh(geometriaNuvens, materialNuvens);

// Adiciona nuvens na cena
scene.add(nuvens);

nuvens.position.set(3, 0, 3);

// Animação
// ----------

// Prepara loop de animação
function animate() {
  // Requisita quadros de animação
  requestAnimationFrame(animate);

  // Rotaciona Terra
  terra.rotation.y += 0.0005;

  // Rotaciona nuvens
  nuvens.rotation.y -= 0.001;

  // Renderiza cena
  renderer.render(scene, camera);
}

// chamada da função animate
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
