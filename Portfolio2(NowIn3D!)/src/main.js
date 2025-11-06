import { GLTFLoader, OrbitControls, RectAreaLightHelper } from 'three/examples/jsm/Addons.js';
import './style.css'
import * as THREE from 'three'
import { Tween, Group } from '@tweenjs/tween.js'
import { ToLaptop, ToPhone, ToDefault, ToMonitor, currentlyAnim } from './cameranimations';


const scene = new THREE.Scene();

//Renderer setup
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#mainScene"),
  antialias: true
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement)


//Camera setup
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
const startingPos = new THREE.Vector3(0.2, 6, 16);
const startingRot = new THREE.Vector3(0, 0, 0);

//Position and rotation setup for camera view changes
const monitorView = new THREE.Vector3(0.05, 5.4, 5);

const laptopView = new THREE.Vector3(-0.03, 4.6, 1.7);
const laptopRotation = new THREE.Vector3(0, 35 * (Math.PI / 180), 0);

const phoneView = new THREE.Vector3(3.3, 7.5, 0.23);
const phoneRotation = new THREE.Vector3(-79.8 * (Math.PI / 180), 0, -16.5 * (Math.PI / 180))

//debug starting position changes
camera.position.set(startingPos.x, startingPos.y, startingPos.z);
camera.rotation.set(startingRot.x, startingRot.y, startingRot.z);

// camera.position.set(monitorView.x, monitorView.y, monitorView.z);
// camera.rotation.set(startingRot.x, startingRot.y, startingRot.z);

// camera.position.set(laptopView.x, laptopView.y, laptopView.z);
// camera.rotation.set(laptopRotation.x, laptopRotation.y, laptopRotation.z);

// camera.position.set(phoneView.x, phoneView.y, phoneView.z);
// camera.rotation.set(phoneRotation.x, phoneRotation.y, phoneRotation.z);


// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = false;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 50;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target = new THREE.Vector3(0, 6, 2)
// controls.update();


const loader = new GLTFLoader().setPath('DeskModel/')
console.log('loader initialised');
loader.load('portfolio2.gltf', (gltf) => { //Callback function (active when other one finishes)
  const mesh = gltf.scene;
  mesh.position.set(0, 4.2, 0);
  mesh.rotateY(-Math.PI / 2);
  mesh.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  })
  scene.add(mesh);
});

//Create ground plane as a point of reference
const groundPlane = new THREE.PlaneGeometry(20, 20, 32, 32);
groundPlane.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, wireframe: true })
const groundMesh = new THREE.Mesh(groundPlane, groundMaterial);
scene.add(groundMesh);

//Ambient light
const ambLight = new THREE.AmbientLight(0x23227A, 10);
scene.add(ambLight);

//Window light
const dirLight = new THREE.DirectionalLight(0xe39520, 0.1);
dirLight.position.set(2, 4, 4);
dirLight.target.position.set(0, 3, 0);
scene.add(dirLight);

const dirLighthelper = new THREE.DirectionalLightHelper(dirLight, 5);
dirLight.add(dirLighthelper);

//Side Light
const sideLight = new THREE.SpotLight(0x1f31a6, 1500, 70, 2, 0.5);
sideLight.position.set(8, 10, 5);
sideLight.target.position.set(0, 0, 0);
sideLight.castShadow = true;
sideLight.shadow.mapSize.width = 2048;
sideLight.shadow.mapSize.height = 2048;
sideLight.shadow.bias = -0.0001;
scene.add(sideLight);

const sLightHelper = new THREE.SpotLightHelper(sideLight, 0xffffff);
sideLight.add(sLightHelper);


//Front light
const frontLight = new THREE.SpotLight(0x996615, 100, 100, 2, 0.5);
frontLight.position.set(0, 6, 6);
frontLight.target.position.set(0, 0, 0);
frontLight.castShadow = true;
frontLight.shadow.mapSize.width = 2048;
frontLight.shadow.mapSize.height = 2048;
frontLight.shadow.bias = -0.0009;
scene.add(frontLight);

const fLightHelper = new THREE.SpotLightHelper(frontLight, 0xffffff);
frontLight.add(fLightHelper);


//Monitor Backlight
const monitorLight = new THREE.RectAreaLight(0xffdb87, 10, 3.65, 1.8);
monitorLight.position.set(0.03, 5.4, -2.5);
monitorLight.rotateX(Math.PI)
scene.add(monitorLight);

const monHelper = new RectAreaLightHelper(monitorLight, 0xffffff);
monitorLight.add(monHelper);


//Laptop backlight
const laptopLight = new THREE.RectAreaLight(0x2128b5, 10, 1.62, 0.83);
laptopLight.position.set(-2.66, 4.53, -2.01);
laptopLight.rotateX(Math.PI)
laptopLight.rotateY(-36.2 * (Math.PI / 180))
scene.add(laptopLight);

const lapHelper = new RectAreaLightHelper(laptopLight, 0xffffff);
laptopLight.add(lapHelper);

//camera animations
const camAnimations = new Group();

//Button testing
document.addEventListener("keydown", OnKeyDown, false);

function OnKeyDown(event) {
  var keyCode = event.which;
  if (!currentlyAnim) {
    if (keyCode == 38) //uarr
    {
      ToMonitor(monitorView, startingRot, camera, camAnimations, 500);
    } else if (keyCode == 40) //darr
    {
      ToDefault(startingPos, startingRot, camera, camAnimations, 500);
    } else if (keyCode == 37) //larr
    {
      ToLaptop(laptopView, laptopRotation, camera, camAnimations, 500);
    } else if (keyCode == 39) //rarr
    {
      ToPhone(phoneView, phoneRotation, camera, camAnimations, 500);
    } else {
      return;
    }
    console.log(keyCode);
  }
}

function animate() {
  requestAnimationFrame(animate);
  // controls.update();
  camAnimations.update();
  renderer.render(scene, camera);
}

animate();