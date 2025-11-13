import * as THREE from 'three'
import { Tween, Group } from '@tweenjs/tween.js'

//Get individual HTML elements for turning off and on depending on where the camera is
var monitorHTML = document.getElementById("monitorDisplay");
var laptopHTML = document.getElementById("laptopDisplay");
var phoneHTML = document.getElementById("phoneDisplay");

export var currentlyAnim = false;

export function ToTarget(targetName, targetPosition, targetRotation, camera, animGroup, duration) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    if (targetName == monitorHTML.id) {
        laptopHTML.style.visibility = "hidden";
        phoneHTML.style.visibility = "hidden";
    } else if (targetName == laptopHTML.id) {
        monitorHTML.style.visibility = "hidden";
        phoneHTML.style.visibility = "hidden";
    } else if (targetName == phoneHTML.id) {
        monitorHTML.style.visibility = "hidden";
        laptopHTML.style.visibility = "hidden";
    } else {
        monitorHTML.style.visibility = "hidden";
        laptopHTML.style.visibility = "hidden";
        phoneHTML.style.visibility = "hidden";
    }

    currentlyAnim = true;

    const toTarget = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
            if (targetName == monitorHTML.id) {
                monitorHTML.style.visibility = "visible"
            } else if (targetName == laptopHTML.id) {
                monitorHTML.style.visibility = "visible"
            } else if (targetName == phoneHTML.id) {
                monitorHTML.style.visibility = "visible"
            } else {

            }
            currentlyAnim = false;
        })
        .start();
    animGroup.add(toTarget);

    const toTargetRot = new Tween(curCamRotation)
        .to(targetRotation, duration)
        .onUpdate(function () {
            camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
        })
        .onComplete(function () {
            camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
        })
        .start();

    animGroup.add(toTargetRot);
}

// export function ToLaptop(targetPosition, targetRotation, camera, animGroup, duration) {
//     var curCamPosition = new THREE.Vector3().copy(camera.position);
//     var curCamRotation = new THREE.Vector3().copy(camera.rotation);

//     monitorHTML.style.visibility = "hidden";
//     phoneHTML.style.visibility = "hidden";

//     currentlyAnim = true;

//     const toLaptop = new Tween(curCamPosition)
//         .to(targetPosition, duration)
//         .onUpdate(function () {
//             camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
//         })
//         .onComplete(function () {
//             camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
//             laptopHTML.style.visibility = "visible"
//             currentlyAnim = false;
//         })
//         .start();
//     animGroup.add(toLaptop);

//     const toLaptopRot = new Tween(curCamRotation)
//         .to(targetRotation, duration)
//         .onUpdate(function () {
//             camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
//         })
//         .onComplete(function () {
//             camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
//         })
//         .start();

//     animGroup.add(toLaptopRot);
// }

// export function ToPhone(targetPosition, targetRotation, camera, animGroup, duration) {
//     var curCamPosition = new THREE.Vector3().copy(camera.position);
//     var curCamRotation = new THREE.Vector3().copy(camera.rotation);

//     monitorHTML.style.visibility = "hidden";
//     laptopHTML.style.visibility = "hidden";

//     currentlyAnim = true;

//     const toPhone = new Tween(curCamPosition)
//         .to(targetPosition, duration)
//         .onUpdate(function () {
//             camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
//         })
//         .onComplete(function () {
//             camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
//             phoneHTML.style.visibility = "visible"
//             currentlyAnim = false;
//         })
//         .start();
//     animGroup.add(toPhone);

//     const toPhoneRot = new Tween(curCamRotation)
//         .to(targetRotation, duration)
//         .onUpdate(function () {
//             camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
//         })
//         .onComplete(function () {
//             camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
//         })
//         .start();

//     animGroup.add(toPhoneRot);
// }

// export function ToDefault(targetPosition, targetRotation, camera, animGroup, duration) {
//     var curCamPosition = new THREE.Vector3().copy(camera.position);
//     var curCamRotation = new THREE.Vector3().copy(camera.rotation);

//     monitorHTML.style.visibility = "hidden";
//     laptopHTML.style.visibility = "hidden";
//     phoneHTML.style.visibility = "hidden";

//     currentlyAnim = true;

//     const toDefault = new Tween(curCamPosition)
//         .to(targetPosition, duration)
//         .onUpdate(function () {
//             camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
//         })
//         .onComplete(function () {
//             camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
//             currentlyAnim = false;
//         })
//         .start();
//     animGroup.add(toDefault);

//     const toDefaultRot = new Tween(curCamRotation)
//         .to(targetRotation, duration)
//         .onUpdate(function () {
//             camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
//         })
//         .onComplete(function () {
//             camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
//         })
//         .start();

//     animGroup.add(toDefaultRot);
// }