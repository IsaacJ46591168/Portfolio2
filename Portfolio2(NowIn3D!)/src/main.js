import { GLTFLoader, OrbitControls } from 'three/examples/jsm/Addons.js';
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
camera.position.set(0.2, 6, 15);
// camera.lookAt(0, 0, 0);
// const controls = new OrbitControls(camera, renderer.domElement);

// controls.enableDamping = false;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 20;
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

//Basic Light
const spotlight = new THREE.SpotLight(0xffffff, 2000, 100, 1, 0.5);
spotlight.position.set(0, 25, 0);
spotlight.castShadow = true;
spotlight.shadow.bias = -0.0001;
scene.add(spotlight);

function animate()
{
  requestAnimationFrame(animate);
  // controls.update();
  renderer.render(scene, camera);
}

animate();