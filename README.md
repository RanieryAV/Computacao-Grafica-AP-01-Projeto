# README.md

# [Solar System 🌍](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#solar-system-)

## [Standard view after initializing the code](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#standard-view-after-initializing-the-code)

![https://user-images.githubusercontent.com/58216614/275599825-9177118b-6735-46e6-b9e0-b224b9d098bb.gif](https://user-images.githubusercontent.com/58216614/275599825-9177118b-6735-46e6-b9e0-b224b9d098bb.gif)

## [Feature: Planet rotation (look at Jupiter on the left)](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#feature-planet-rotation-look-at-jupiter-on-the-left)

![https://user-images.githubusercontent.com/58216614/275605461-5869cfcb-8837-423f-b30f-d9c4dfffb47b.gif](https://user-images.githubusercontent.com/58216614/275605461-5869cfcb-8837-423f-b30f-d9c4dfffb47b.gif)

## [Feature: Planet translation](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#feature-planet-translation)

![https://user-images.githubusercontent.com/58216614/275610902-32c2f4c7-f92f-4fe9-b539-afd3e485009f.gif](https://user-images.githubusercontent.com/58216614/275610902-32c2f4c7-f92f-4fe9-b539-afd3e485009f.gif)

## [Feature: Move camera (hold mouse left click + move the mouse cursor)](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#feature-move-camera-hold-mouse-left-click--move-the-mouse-cursor)

![https://user-images.githubusercontent.com/58216614/275613771-0598b732-e093-4f6d-853d-af8805629dc4.gif](https://user-images.githubusercontent.com/58216614/275613771-0598b732-e093-4f6d-853d-af8805629dc4.gif)

## [Feature: Zoom in/out the camera (Mouse Pinch-To-Zoom on touchpad OR CTRL + Mousewheel)](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#feature-zoom-inout-the-camera-mouse-pinch-to-zoom-on-touchpad-or-ctrl--mousewheel)

![https://user-images.githubusercontent.com/58216614/275619273-e67af3cf-f4e5-47e0-b6fd-8183a67113db.gif](https://user-images.githubusercontent.com/58216614/275619273-e67af3cf-f4e5-47e0-b6fd-8183a67113db.gif)

## [Feature: Change speed of planet rotation and translation (look at the bottom right corner)](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#feature-change-speed-of-planet-rotation-and-translation-look-at-the-bottom-right-corner)

![https://user-images.githubusercontent.com/58216614/275621637-bef127f5-5ac5-4320-ad7e-3adfadda69bd.gif](https://user-images.githubusercontent.com/58216614/275621637-bef127f5-5ac5-4320-ad7e-3adfadda69bd.gif)

## [❓ How to run the project:](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#-how-to-run-the-project)

```
# Install the dependencies

$ npm i

# Run

$ npx vite
```

## [⚙ Technologies](https://github.com/RanieryAV/Computacao-Grafica-AP-01-Projeto#-technologies)

Technologies used to develop this application:

- [ThreeJS](https://threejs.org/)
- [WebGL](https://get.webgl.org/)
- [Vite](https://vitejs.dev/)
- [OpenGL](https://www.opengl.org/)

## 🧑🏼‍🏫 Features's explanations

Two characteristics involving the movements of celestial bodies deserve a special explanation in this project:

- Astro’s rotations.
- Astro’s translations

### Astros's Rotations **🪐🌍🌟**

The rotation of the planets is achieved through three codes, two of which are responsible for implementing rules to determine the feasible speeds of celestial bodies according to real speeds in the solar system. Finally, the code that receives these speeds implements the rotation of the Sun, planets, and natural satellites.

**Jupiter's Rotation Speed - jupiterSpeed.mjs 🌟**

This code establishes and prints a variable containing Jupiter's base rotation speed, which will be constant in the calculation of the rotation speed of other planets.

This calculation is based on a video simulation published on YouTube (link in the last section: "Sources"), where the author considered ten real hours to be equivalent to one second in the simulation. Therefore, as per scientific sources, Jupiter's rotation period is 10 hours (9 hours and 48 minutes, to be precise). In our simulation, Jupiter needed to complete one full rotation every one second.

With this in mind, as the speed in the Three.js library is established in radians per second, a division of π by 30 was used to calculate the speed, considering the number of degrees Jupiter would rotate per frame at a rate of 60 frames per second. This resulted in a speed that allowed for 360 degrees, i.e., one complete rotation per second.

Finally, the code was implemented as a JavaScript module with the extension ".mjs" to facilitate its execution, which can be done as follows:

In the terminal with Node.js installed, type:

```
node jupiterSpeed.mjs

```

**Other Planets' Rotation Speed Code - astroRotations.mjs 🪐🌌**

**Explanation 📖**

The code consists of a main function and some variables that are its parameters.

In this case, the function is called `calculateRotationSpeeds()` and receives two parameters:

- `radianoJupiter`: the value of Jupiter's rotation speed in radians per second.
- `valoresAstros`: an object that contains the values of the rotation times of other planets and the Sun in seconds.

The function calculates the rotation speed of each planet using the following formula:

```jsx
velocidadeRotacao = (diaJupiter / tempoRotacao) * radianoJupiter;
```

Where:

- `diaJupiter`: the rotation time of Jupiter in seconds.
- `tempoRotacao`: the rotation time of the planet in seconds.
- `radianoJupiter`: the value of Jupiter's rotation speed in radians per second, according to the established standards.

The function returns a JSON object that contains the rotation speeds of all the planets.

**Example 🌍🌟**

The following example shows how to use the code to calculate the rotation speed of the planets:

```jsx
const velocidadesRotacao = calcularVelocidadesRotacao(0.1047, {
  Sol: 2356340,
  Mercurio: 5034240,
  Venus: 19429200,
  Terra: 86160,
  Marte: 88620,
  Saturno: 36720,
  Urano: 64440,
  Netuno: 68760,
});

console.log(velocidadesRotacao);
```

The output of the code is as follows:

```json
{
  "Sol": 0.0016,
  "Mercurio": 0.0007,
  "Venus": 0.0002,
  "Terra": 0.0437,
  "Marte": 0.0425,
  "Saturno": 0.1026,
  "Urano": 0.0585,
  "Netuno": 0.0548
}
```

**Notes 🗒️**

- The rotation speed of the planets is measured in radians per second.
- The code was implemented as a JavaScript module to facilitate its execution.

This code calculates the rotation speed of all the planets in the Solar System, including the Sun. Jupiter's rotation speed is used as the base for calculating the speeds of the other planets.

**Execution 🚀**

The code is implemented as a JavaScript module with the extension ".mjs". To run the code, open a terminal with Node.js installed and type the following command:

```
node jupiterSpeed.mjs

```

**Main Code - main.js 🪐🌍🚀**

The main code contains all the system's functionality, including the rotation and translation movements.

The rotation of the planets is implemented by the `animate()` function. This function rotates the 3D objects of the planets and natural satellites around the Y-axis, which is the vertical axis. The rotation speed is controlled by the `astroRotacoes` variable, which is a JSON object that stores the values of the real rotation speeds of the planets in the Solar System in radians per second, as received from the `astroRotations` code explained earlier.

Here is a sample of how the result of the astros' rotation speeds is used in the main code:

```jsx
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

...
```

The values of the rotation speeds were chosen to be precise and realistic. This makes the animation more interesting and informative, as it allows users to see how the planets actually rotate in the Solar System. 🪐🌎🚀

### 🌟 Astro's Translations 🌠

The planets and natural satellites of the solar system are animated by rotation around the Y axis, at the center of the system.

The translation speed ⌚ is multiplied by _multiplicadorTranscao_, which can be changed by the user, within pre-defined values, through buttons on the system interface.

1️⃣ The first part of the code below adds the 3D objects of planets🪐, natural satellites, clouds and rings to the scene. This is done using the add() method of the Scene class.

```js
scene.add(terra3d);
scene.add(marte3d);
scene.add(venus3d);
scene.add(mercurio3d);

scene.add(jupiter3d);
scene.add(saturno3d);
scene.add(urano3d);
scene.add(netuno3d);

scene.add(lua3d);
scene.add(tita3d);
scene.add(europa3d);

scene.add(nuvens3d);
scene.add(aneis3d);
```

2️⃣ The second part of the code below animates the rotation of 3D objects. This is done using the translate() function.

The translate() function calls the rotateY() method to rotate each 3D object around the Y axis at the center of the system, which we determine as translation. Translational speed is calculated by multiplying the object's rotational speed by the translation multiplier.

The translation multiplier is a variable that can be used to control the speed of rotation. A higher value will make objects rotate faster, these values and the multiplier are used in the buttons that change the translation speed of celestial bodies.

```js
function translate() {
  mercurio3d.rotateY(0.05 * multiplicadorTranscao);
  venus3d.rotateY(0.015 * multiplicadorTranscao);
  terra3d.rotateY(0.0121 * multiplicadorTranscao);
  marte3d.rotateY(0.0063 * multiplicadorTranscao);
  nuvens3d.rotateY(0.0121 * multiplicadorTranscao);

  jupiter3d.rotateY(0.001 * multiplicadorTranscao);
  saturno3d.rotateY(0.0004 * multiplicadorTranscao);
  aneis3d.rotateY(0.0004 * multiplicadorTranscao);
  urano3d.rotateY(0.0001 * multiplicadorTranscao);
  netuno3d.rotateY(0.0001 * multiplicadorTranscao);

  lua3d.rotateY(0.0121 * multiplicadorTranscao);
  tita3d.rotateY(0.0004 * multiplicadorTranscao);
  europa3d.rotateY(0.001 * multiplicadorTranscao);

  renderer.render(scene, camera);
}
```

3️⃣ The third part of the code below performs the animation using the setAnimationLoop() method of the Renderer class.

```js
renderer.setAnimationLoop(translate);
```

## ℹ️ Sources

### Textures: [https://www.solarsystemscope.com/textures/](https://www.solarsystemscope.com/textures/)

### Scientific and educational sources:

Brasil Escola. Movimento de rotação. Disponível em: [https://brasilescola.uol.com.br/geografia/movimento-rotacao.htm](https://brasilescola.uol.com.br/geografia/movimento-rotacao.htm).

Interplanetary. Selected solar system objects to scale in size, rotation speed and axial tilt. YouTube, 12 de outubro de 2020, [https://www.youtube.com/watch?v=T1MrJvcllpY](https://www.youtube.com/watch?v=T1MrJvcllpY)
