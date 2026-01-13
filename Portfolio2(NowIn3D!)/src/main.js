import { GLTFLoader, OrbitControls, RectAreaLightHelper } from 'three/examples/jsm/Addons.js';
import './style.css'
import * as THREE from 'three'
import { Tween, Group } from '@tweenjs/tween.js'
import { ToTarget, currentlyAnim } from './cameranimations';
import { projectOBJs, smallProjectOBJs, projectLinkOBJs, aboutWindowsOBJs, funFacts, contactLinkOBJs, navButtonOBJs } from './objectarrays';

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
export var navButtons = document.getElementsByClassName("navButton");
for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', NavButtonClick);
}

//Button to remove all content from monitor
var monitorHome = document.getElementById("pHome");
monitorHome.addEventListener('click', HideMonContent);

//Buttons that bring up the modal image screen
var modalImages = document.getElementsByClassName("modal");
for (var i = 0; i < modalImages.length; i++) {
  modalImages[i].addEventListener('click', OpenModalMedia);
}

//Buttons to open either the studio or play project links
var projectLinkButtons = document.getElementsByClassName("sPBItem");
for (var i = 0; i < projectLinkButtons.length; i++) {
  projectLinkButtons[i].addEventListener('click', OpenProjLink);
}

//Buttons that will bring up project info
var projectBarButtons = document.getElementsByClassName("project");
for (var i = 0; i < projectBarButtons.length; i++) {
  projectBarButtons[i].addEventListener('click', OpenProject);
}

//Button that brings up the small project finder window
var smallProjectBarButton = document.getElementById("smallProjBar");
smallProjectBarButton.addEventListener('click', OpenSmallProjectFinder);

//Buttons that will bring up small project info
var smallProjectButtons = document.getElementsByClassName("smallProjectContainer");
for (var i = 0; i < smallProjectButtons.length; i++) {
  smallProjectButtons[i].addEventListener('click', OpenSmallProject);
}

//Mouse listeners to allow for horizontal drag scrolling of small project gallery
var scrollParent = document.getElementById("sProjGallery");
var scrollGallery = document.getElementById("spgWrapper");
scrollParent.addEventListener("mousemove", RunDrag);
scrollParent.addEventListener("mousedown", DragStart);
scrollParent.addEventListener("mouseup", DragStop);
scrollParent.addEventListener("mouseleave", DragStop);

//buttons to close monitor windows 
var monWinCloseButtons = document.getElementsByClassName("mWindowClose");
for (var i = 0; i < monWinCloseButtons.length; i++) {
  monWinCloseButtons[i].addEventListener('click', HideMonContent);
}

//Buttons that bring up info about self
var aboutButtons = document.getElementsByClassName("abBarElement");
for (var i = 0; i < aboutButtons.length; i++) {
  aboutButtons[i].addEventListener('click', OpenAbout);
}

//Buttons that scroll the facts gallery
var fFbuttons = document.getElementsByClassName("fFButton");
for (var i = 0; i < fFbuttons.length; i++) {
  fFbuttons[i].addEventListener('click', ChangeButtonGallery);
}

//Buttons that closes the individual self-info windows
var abWindowCloseButtons = document.getElementsByClassName("lWindowClose");
for (var i = 0; i < abWindowCloseButtons.length; i++) {
  abWindowCloseButtons[i].addEventListener('click', CloseAbout);
}

//Buttons that send user to contact links
var phoneButtons = document.getElementsByClassName("contactApp");
for (var i = 0; i < phoneButtons.length; i++) {
  phoneButtons[i].addEventListener('click', OpenLink);
}

var projDisplay = document.getElementById("projectDisplay");
var smallProjFinder = document.getElementById("smallProjectFinder");
var smallProjDisplay = document.getElementById("smallProjectProperties");
var modalContentWindow = document.getElementById("modalContentWindow");
function OpenProject() {
  projDisplay.style.visibility = "visible";
  projDisplay.style.zIndex = 10;
  smallProjFinder.style.zIndex = 9;
  smallProjDisplay.style.zIndex = 9;
  modalContentWindow.style.zIndex = 9;

  var projName = document.getElementById("pName");
  var projRelease = document.getElementById("release");
  var projAbout = document.getElementById("descText");
  var projRole = document.getElementById("roleText");

  for (i = 0; i < projectBarButtons.length; i++) {
    if (this.id == projectOBJs[i].id) {
      console.log(projectOBJs[i].Name);
      projName.innerText = projectOBJs[i].Name;
      projRelease.innerText = projectOBJs[i].Release;
      for (k = 0; k < projectLinkButtons.length; k++) {
        if (projectLinkButtons[k].id == "studio") {
          projectLinkButtons[k].setAttribute("href", projectOBJs[i].Developers);
        } else {
          projectLinkButtons[k].setAttribute("href", projectOBJs[i].Link);
        }
      }

      projAbout.innerText = projectOBJs[i].About;
      projRole.innerText = projectOBJs[i].RoleAct;

      var galleryElements = document.getElementsByClassName("monGalleryElement");
      for (var k = 0; k < projectOBJs[i].Gallery.length; k++) {
        galleryElements[k].style.backgroundImage = "url(/src/Images/" + projectOBJs[i].Gallery[k] + ")";
      }
      break;
    }
  }
}

function OpenProjLink() {
  for (i = 0; i < projectLinkButtons.length; i++) {
    if (this.id == projectLinkOBJs[i].id) {
      projectLinkOBJs[i].Open(projectLinkButtons[i].getAttribute('href'));
      break;
    }
  }
}

function OpenSmallProjectFinder() {
  smallProjFinder.style.visibility = "visible";
  projDisplay.style.zIndex = 9;
  smallProjFinder.style.zIndex = 10;
  smallProjDisplay.style.zIndex = 9;
  modalContentWindow.style.zIndex = 9;
}

var sGalleryVideo = document.getElementById("sGalleryVideo");
function OpenSmallProject() {
  smallProjDisplay.style.visibility = "visible";
  projDisplay.style.zIndex = 9;
  smallProjFinder.style.zIndex = 9;
  smallProjDisplay.style.zIndex = 10;
  modalContentWindow.style.zIndex = 9;

  var sProjName = document.getElementById("sProjName");
  var sProjType = document.getElementById("sProjType");
  var sProjDesc = document.getElementById("sProjDesc");

  sGalleryVideo.setAttribute("src", "");

  for (i = 0; i < smallProjectButtons.length; i++) {
    if (this.id == smallProjectOBJs[i].id) {
      sProjName.innerText = smallProjectOBJs[i].Name;
      sProjType.innerText = smallProjectOBJs[i].Type;
      sProjFinish.innerText = smallProjectOBJs[i].Finish;
      sProjDesc.innerText = smallProjectOBJs[i].Desc;

      var galleryElements = document.getElementsByClassName("sGalleryElement");
      for (var k = 0; k < smallProjectOBJs[i].Gallery.length; k++) {
        var string = smallProjectOBJs[i].Gallery[k];
        if (string.substring(string.length - 4) == "webm" && smallProjectOBJs[i].id == this.id) {
          galleryElements[k].style.backgroundImage = "";
          sGalleryVideo.setAttribute("src", "/src/Videos/" + smallProjectOBJs[i].Gallery[k]);
        } else {
          galleryElements[k].style.backgroundImage = "url(/src/Images/" + smallProjectOBJs[i].Gallery[k] + ")";
        }
      }
      break;
    }
  }
}

var curModalImage = document.getElementById("modalContent");
var modalVideoDisplay = document.getElementById("modalVideo");
function OpenModalMedia() {
  console.log(curScrollValue);
  if (curScrollValue != 0) {
    return
  }
  if (!this.firstElementChild || this.firstElementChild.getAttribute("src") == "") {
    modalVideoDisplay.setAttribute("src", "");
    curModalImage.style.backgroundImage = this.style.backgroundImage;
  } else {
    console.log(this.firstElementChild.src);
    curModalImage.style.backgroundImage = "";
    modalVideoDisplay.setAttribute("src", this.firstElementChild.getAttribute("src"));
  }
  modalContentWindow.style.visibility = "visible ";
  projDisplay.style.zIndex = 9;
  smallProjFinder.style.zIndex = 9;
  smallProjDisplay.style.zIndex = 9;
  modalContentWindow.style.zIndex = 10;
}

function OpenAbout() {
  for (i = 0; i < aboutButtons.length; i++) {
    var curButton = aboutWindowsOBJs[i].Open
    var curWindow = document.getElementById(curButton);
    curWindow.style.zIndex = 9;
    if (this.id == aboutWindowsOBJs[i].Name) {
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
    if (this.id == contactLinkOBJs[i].Name) {
      console.log("found matching contact option");
      contactLinkOBJs[i].Open();
      break;
    }
  }
}

function HideMonContent() {
  if (this.id == "pHome") {
    projDisplay.style.visibility = "hidden";
    smallProjDisplay.style.visibility = "hidden";
    smallProjFinder.style.visibility = "hidden";
  } else {
    for (i = 0; i < monWinCloseButtons.length; i++) {
      var curWindow = document.getElementById(this.id).parentElement.parentElement;
      curWindow.style.visibility = "hidden";
    }
  }
}


var mouseClicked = false;
var mouseStartPos = 0;
var scrollProgress = 0;
var curScrollValue = 0;
function DragStart(event) {
  console.log("mousepressed");
  scrollGallery.style.cursor = "grabbing";
  mouseClicked = true;
  mouseStartPos = event.pageX - scrollParent.offsetLeft;
  scrollProgress = scrollParent.scrollLeft;
  curScrollValue = 0;
}

function DragStop() {
  mouseClicked = false;
  scrollGallery.style.cursor = "pointer";
}


function RunDrag(event) {
  if (!mouseClicked) {
    return;
  }
  event.preventDefault();
  var curX = event.pageX - scrollParent.offsetLeft;
  curScrollValue = (curX - mouseStartPos) * 2; //Adjusting the scroll speed
  scrollParent.scrollLeft = scrollProgress - curScrollValue
  console.log(curScrollValue);
}


var galleryText = document.getElementsByClassName("fFText");
var galleryIndicators = document.getElementsByClassName("progressIndicator");

var galleryCount = 0;
galleryText[0].innerText = funFacts[galleryCount].line1;
galleryText[1].innerText = funFacts[galleryCount].line2;
galleryIndicators[galleryCount].classList.add("pIActive");

function ChangeButtonGallery() {
  if (this.id == "fFBack") {
    if (galleryCount != 0) {
      galleryIndicators[galleryCount].classList.remove("pIActive");
      galleryCount -= 1;
    }
  } else if (galleryCount != funFacts.length - 1) {
    galleryIndicators[galleryCount].classList.remove("pIActive");
    galleryCount += 1;
  }

  galleryText[0].innerText = funFacts[galleryCount].line1;
  galleryText[1].innerText = funFacts[galleryCount].line2;
  galleryIndicators[galleryCount].classList.add("pIActive");
}


//Get individual HTML elements for turning off and on depending on where the camera is
var monitorHTML = document.getElementById("monitorDisplay");
var laptopHTML = document.getElementById("laptopDisplay");
var phoneHTML = document.getElementById("phoneDisplay");

function NavButtonClick() {
  var visibleButtons = new Array();
  var clickedButton = null;

  for (i = 0; i < navButtons.length; i++) {
    navButtons[i].style.visibility = "hidden";
    if (this.id == navButtonOBJs[i].id) {
      clickedButton = navButtonOBJs[i];
    } else {
      visibleButtons.push(navButtons[i]);
      ChangeButtonVis(this.id, navButtons[i], navButtonOBJs[i]);
    }
  }

  if (!currentlyAnim) {
    if (this.id == "defaultNav") {
      ResetNavButtons(visibleButtons, navButtonOBJs);
    }
    clickedButton.MoveTo(camera, camAnimations, 500, monitorHTML, laptopHTML, phoneHTML, visibleButtons);
  }
}
//TODO: Make more efficient (Doesn't need to be called every time as only one of the 4 buttons actually move between locations)
function ChangeButtonVis(activeButton, curButtonHTML, curButtonObj) {
  curButtonHTML.style.top = curButtonObj.ActiveTPos;
  curButtonHTML.style.width = curButtonObj.ActiveWidth;
  curButtonHTML.style.height = curButtonObj.ActiveHeight;
  curButtonHTML.firstElementChild.firstElementChild.innerText = curButtonObj.ActiveText;
  curButtonHTML.firstElementChild.firstElementChild.style.display = "block";

  if (activeButton == "lapNav" && curButtonObj.id == "monNav") {
    curButtonHTML.style.left = curButtonObj.ActiveLPosAlt;
    curButtonHTML.firstElementChild.firstElementChild.innerText = curButtonObj.ActiveTextAlt;
  } else {
    curButtonHTML.style.left = curButtonObj.ActiveLPos;
  }
}

function ResetNavButtons(buttonsHTML, buttonOBJs) {
  for (i = 0; i < buttonsHTML.length; i++) {
    buttonsHTML[i].style.top = buttonOBJs[i].DefaultTPos;
    buttonsHTML[i].style.left = buttonOBJs[i].DefaultLPos;
    buttonsHTML[i].style.width = buttonOBJs[i].DefaultWidth;
    buttonsHTML[i].style.height = buttonOBJs[i].DefaultHeight;
    buttonsHTML[i].firstElementChild.firstElementChild.innerText = buttonOBJs[i].DefaultText;
    buttonsHTML[i].firstElementChild.firstElementChild.style.display = "";
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
  // console.log(mouseClicked);
}

animate();