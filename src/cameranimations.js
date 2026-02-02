import * as THREE from 'three'
import { Tween, Group } from '@tweenjs/tween.js'
import { navButtonArray } from './main';
export var currentlyAnim = false;

export function ToTarget(targetPosition, targetRotation, camera, animGroup, duration, htmlEnable) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    currentlyAnim = true;
    for (var i = 0; i < navButtonArray.length; i++) {
        navButtonArray[i].layers.set(10);
        navButtonArray[i].children[0].layers.set(10);
    }


    const toTarget = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
            htmlEnable.style.visibility = "visible";
            currentlyAnim = false;
            for (var i = 0; i < navButtonArray.length; i++) {
                navButtonArray[i].layers.set(0);
                navButtonArray[i].children[0].layers.set(0);
                console.log(navButtonArray[i].layers.mask);
            }
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

export function ToDefault(targetPosition, targetRotation, camera, animGroup, duration, navButtons) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    currentlyAnim = true;
    const toDefault = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
            currentlyAnim = false;
            navButtons[0].style.visibility = "visible";
            navButtons[1].style.visibility = "visible";
            navButtons[2].style.visibility = "visible";
        })
        .start();
    animGroup.add(toDefault);

    const toDefaultRot = new Tween(curCamRotation)
        .to(targetRotation, duration)
        .onUpdate(function () {
            camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
        })
        .onComplete(function () {
            camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
        })
        .start();

    animGroup.add(toDefaultRot);
}