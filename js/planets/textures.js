import smallWorld from "../../assets/small-world.jpg";
import smallWorldClouds from "../../assets/small-world-clouds.png";

const textureLoader = new THREE.TextureLoader();

const textures = {
  earth: textureLoader.load(smallWorld),
  clouds: textureLoader.load(smallWorldClouds),
};

export default textures;
