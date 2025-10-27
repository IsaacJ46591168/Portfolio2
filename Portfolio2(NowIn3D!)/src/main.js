import { GLTFLoader, OrbitControls, RectAreaLightHelper } from 'three/examples/jsm/Addons.js';
import './style.css'
import * as THREE from 'three'


const scene = new THREE.Scene();

//Renderer setup
const renderer = new THREE.WebGLRenderer({
  // canvas: document.querySelector("#background"),
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
camera.position.set(0.2, 6, 16);
// camera.rotateY(20 * (Math.PI / 180))
// camera.lookAt(5, 5, 5);
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = false;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 50;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 6, 2)
controls.update();


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

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})
// const torus = new THREE.Mesh(geometry, material);
// scene.add(torus);

//Create ground plane as a point of reference
const groundPlane = new THREE.PlaneGeometry(20, 20, 32, 32);
groundPlane.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide, wireframe: true})
const groundMesh = new THREE.Mesh(groundPlane, groundMaterial);
scene.add(groundMesh);

//Basic spotlight
// const spotlight = new THREE.SpotLight(0xf0aa4f, 10, 100, 1.1, 0.5);
// spotlight.position.set(0, 10, 0);
// spotlight.rotateZ(-Math.PI / 2);
// spotlight.castShadow = true;
// spotlight.shadow.mapSize.width = 2048;
// spotlight.shadow.mapSize.height = 2048;
// spotlight.shadow.bias = -0.0005;
// scene.add(spotlight);

// let topLight = new THREE.SpotLightHelper(spotlight, 0xffffff);
// spotlight.add(topLight);



//Ambient light
const ambLight = new THREE.AmbientLight(0x23227A, 10);
scene.add(ambLight);

//Window light
const dirLight = new THREE.DirectionalLight(0xf0aa4f, 1);
dirLight.position.set(2, 4, 4);
dirLight.target.position.set(0, 3, 0);
// dirLight.castShadow = true;
// dirLight.shadow.camera.left = -5;
// dirLight.shadow.camera.right = 1;
// dirLight.shadow.camera.top = 5;
// dirLight.shadow.camera.bottom = -5;
// dirLight.shadow.bias = -0.0001;
scene.add(dirLight);

// let dirLighthelper = new THREE.DirectionalLightHelper(dirLight, 5);
// dirLight.add(dirLighthelper);

//Side Light
const sideLight = new THREE.SpotLight(0x350dff, 1000, 70, 2, 0.5);
sideLight.position.set(8, 10, 5);
sideLight.target.position.set(0, 0, 0);
sideLight.castShadow = true;
sideLight.shadow.mapSize.width = 2048;
sideLight.shadow.mapSize.height = 2048;
sideLight.shadow.bias = -0.0001;
scene.add(sideLight);

// let sLightHelper = new THREE.SpotLightHelper(sideLight, 0xffffff);
// sideLight.add(sLightHelper);

//Front light
const frontLight = new THREE.SpotLight(0x350dff, 200, 100, 2, 0.5);
frontLight.position.set(0, 6, 6);
frontLight.target.position.set(0, 0, 0);
frontLight.castShadow = true;
frontLight.shadow.mapSize.width = 2048;
frontLight.shadow.mapSize.height = 2048;
frontLight.shadow.bias = -0.0009;
scene.add(frontLight);

let fLightHelper = new THREE.SpotLightHelper(frontLight, 0xffffff);
frontLight.add(fLightHelper);



//Monitor Backlight
const monitorLight = new THREE.RectAreaLight(0xffdb87, 10, 3.6, 1.8);
monitorLight.position.set(0.04, 5.4, -2.5);
monitorLight.rotateX(Math.PI)
scene.add(monitorLight);

let monHelper = new RectAreaLightHelper(monitorLight, 0xffdb87);
monitorLight.add(monHelper);

//Laptop backlight
const laptopLight = new THREE.RectAreaLight(0x2128b5, 10, 1.6, 0.83);
laptopLight.position.set(-2.66, 4.52, -2.01);
laptopLight.rotateX(Math.PI)
laptopLight.rotateY(-36.2 * (Math.PI / 180))
scene.add(laptopLight);

let lapHelper = new RectAreaLightHelper(laptopLight, 0xffffff);
laptopLight.add(lapHelper);


function animate()
{
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();