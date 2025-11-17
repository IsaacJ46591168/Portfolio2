import { GLTFLoader, OrbitControls, RectAreaLightHelper } from 'three/examples/jsm/Addons.js';
import './style.css'
import * as THREE from 'three'
import { Tween, Group } from '@tweenjs/tween.js'
import { ToTarget, currentlyAnim } from './cameranimations';
import { projectsArr, aboutWindowsArr, contactLinksArr, navigationButtonsArr } from './buttonarrays';

//#region ThreeJS Setup
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
export const startingPos = new THREE.Vector3(0.2, 6, 16);
export const startingRot = new THREE.Vector3(0, 0, 0);

//Position and rotation setup for camera view changes
export const monitorView = new THREE.Vector3(0.05, 5.4, 5);

export const laptopView = new THREE.Vector3(-0.03, 4.6, 1.7);
export const laptopRotation = new THREE.Vector3(0, 35 * (Math.PI / 180), 0);

export const phoneView = new THREE.Vector3(3.3, 7.5, 0.23);
export const phoneRotation = new THREE.Vector3(-79.8 * (Math.PI / 180), 0, -16.5 * (Math.PI / 180))

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
// controls.target = new THREE.Vector3(0, 6, 0)
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


//Phone backlight
const phoneLight = new THREE.RectAreaLight(0xffdb87, 10, 0.277, 0.53);
phoneLight.position.set(3.2925, 4.054, -0.356);
phoneLight.rotateX(Math.PI / 2);
phoneLight.rotateZ(16.3 * (Math.PI / 180))
scene.add(phoneLight);

const phoneHelper = new RectAreaLightHelper(phoneLight, 0xffffff);
phoneLight.add(phoneHelper);

//camera animations
const camAnimations = new Group();
//#endregion



//#region Website Functionality

//Adding click events to all buttons
//Buttons to move around the website
var navButtons = document.getElementsByClassName("navButton");
for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', MoveCamera);
}

//Buttons that will bring up project info
var projectBarButtons = document.getElementsByClassName("pBElement");
for (var i = 0; i < projectBarButtons.length; i++) {
  projectBarButtons[i].addEventListener('click', OpenProject);
}

//Buttons that bring up info about self
var aboutButtons = document.getElementsByClassName("abBarElement");
for (var i = 0; i < aboutButtons.length; i++) {
  aboutButtons[i].addEventListener('click', OpenAbout);
}

//Buttons that close the individual self-info windows
var abWindowCloseButtons = document.getElementsByClassName("lWindowClose");
for (var i = 0; i < abWindowCloseButtons.length; i++) {
  abWindowCloseButtons[i].addEventListener('click', CloseAbout);
}

//Buttons that send user to contact links
var phoneButtons = document.getElementsByClassName("contactApp");
for (var i = 0; i < phoneButtons.length; i++) {
  phoneButtons[i].addEventListener('click', OpenLink);
}

//button to close project info window 
var monWinClose = document.getElementById("mWindowClose");
monWinClose.addEventListener('click', HideProject);

var projDisplay = document.getElementById("projectDisplay");
function OpenProject() {
  projDisplay.style.visibility = "visible";

  var projName = document.getElementById("pName");
  var projDevelop = document.getElementById("develop");
  var projRelease = document.getElementById("release");
  var projAvailable = document.getElementById("available");

  for (i = 0; i < projectBarButtons.length; i++) {
    if (this.id == projectsArr[i].id) {
      projName.innerText = projects[i].Name;
      projDevelop.innerText = projects[i].Developers;
      projRelease.innerText = projects[i].Release;
      projAvailable.innerText = projects[i].Link;
      break;
    }
  }
}

function OpenAbout() {
  for (i = 0; i < aboutButtons.length; i++) {
    var curButton = aboutWindows[i].Open
    var curWindow = document.getElementById(curButton);
    curWindow.style.zIndex = 9;
    if (this.id == aboutWindowsArr[i].Name) {
      curWindow.style.visibility = "visible";
      curWindow.style.zIndex = 10;
    }
  }
}

function CloseAbout() {
  for (i = 0; i < abWindowCloseButtons.length; i++) {
    var curWindow = document.getElementById(this.id).parentElement.parentElement;
    curWindow.style.visibility = "hidden";
  }
}

function OpenLink() {
  console.log(this.id);
  for (i = 0; i < phoneButtons.length; i++) {
    if (this.id == contactLinksArr[i].Name) {
      console.log("found matching contact option");
      contactLinks[i].Open();
      break;
    }
  }
}

function HideProject() {
  projDisplay.style.visibility = "hidden";
}

function HideElement() {
  this.style.visibility = "hidden";
}


//Get individual HTML elements for turning off and on depending on where the camera is
var monitorHTML = document.getElementById("monitorDisplay");
var laptopHTML = document.getElementById("laptopDisplay");
var phoneHTML = document.getElementById("phoneDisplay");

function MoveCamera() {
  for (i = 0; i < navButtons.length; i++) {
    if (this.id == navigationButtonsArr[i].id) {
      if (!currentlyAnim) {
        navigationButtonsArr[i].MoveTo(camera, camAnimations, 500, monitorHTML, laptopHTML, phoneHTML);
        // navButtons[i].style.visibility = "hidden";
      }
    } else {
      console.log(navButtons[i]);
      navButtons[i].style.top = navigationButtonsArr[i].SmallFormTPos;
      if (this.id == "lapNav" && navigationButtonsArr[i].id == "monNav") {
        navButtons[i].style.left = navigationButtonsArr[i].SmallFormLPosAlt;
      } else {
        navButtons[i].style.left = navigationButtonsArr[i].SmallFormLPos;
      }
      navButtons[i].style.width = navigationButtonsArr[i].SmallFormWidth;
      navButtons[i].style.height = navigationButtonsArr[i].SmallFormHeight;
    }
  }
}

//#endregion

//Key testing
document.addEventListener("keydown", OnKeyDown, false);

function OnKeyDown(event) {
  var keyCode = event.which;
  if (!currentlyAnim) {
    if (keyCode == 38) //uarr
    {
      ToTarget(monitorView, startingRot, camera, camAnimations, 500, monitorHTML);
    } else if (keyCode == 40) //darr
    {
      ToTarget(startingPos, startingRot, camera, camAnimations, 500, monitorHTML);
    } else if (keyCode == 37) //larr
    {
      ToTarget(laptopView, laptopRotation, camera, camAnimations, 500, laptopHTML);
    } else if (keyCode == 39) //rarr
    {
      ToTarget(phoneView, phoneRotation, camera, camAnimations, 500, phoneHTML);
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