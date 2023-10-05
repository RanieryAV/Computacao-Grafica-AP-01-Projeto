class SphereObject {
  constructor(radius, widthSegments, heightSegments) {
    this.radius = radius;
    this.widthSegments = widthSegments;
    this.heightSegments = heightSegments;
    this.sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  }
  // Getter - get the geometry of the object
  get sphereGeometry() {
    return this.sphereGeometry;
  }
  // Setter - set the texture of the object
  setTexture(texture) {
    this.texture = new THREE.TextureLoader(texture);

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
    });
  }
  // create the object
  meshObject() {
    this.object = new THREE.Mesh(this.sphereGeometry, this.material);
  }
  // Getter - return the object
  getSphereObject() {
    return this.object;
  }
}

export default SphereObject;
