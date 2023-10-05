import SphereObject from "./SphereObject";
import textures from "./textures";

class Earth extends SphereObject {
  constructor(radius, widthSegments, heightSegments) {
    super(radius, widthSegments, heightSegments);
    this.setTexture(textures.earth);
    this.meshObject();

    const cloudsGeometry = new THREE.SphereGeometry(1.05, 40, 40);
    const cloudsMaterial = new THREE.MeshBasicMaterial({
      map: textures.clouds,
      transparent: true,
    });

    this.clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
  }

  setPosition(x, y, z) {
    this.xPosition = x;
    this.yPosition = y;
    this.zPosition = z;
  }

  addClouds() {
    this.clouds.position.set(this.xPosition, this.yPosition, this.zPosition);
    scene.add(this.clouds);
  }

  addEarth() {
    this.object.position.set(this.xPosition, this.yPosition, this.zPosition);
    scene.add(this.object);
  }

  animate() {
    this.object.rotation.y += 0.001;
    this.clouds.rotation.y += 0.001;
  }
}

export default Earth;
