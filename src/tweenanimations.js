import * as THREE from 'three'
import { backButton } from './main';
import { Tween, Group } from '@tweenjs/tween.js'
export var currentlyAnim = false;

//#region Camera movement functions
export function ToTarget(targetPosition, targetRotation, camera, animGroup, duration, htmlEnable, activeButtons) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    currentlyAnim = true;
    for (var i = 0; i < activeButtons.length; i++) {
        activeButtons[i].layers.set(10);
        activeButtons[i].children[0].layers.set(10);
        console.log(activeButtons[i]);
    }
    backButton.style.visibility = "hidden";

    const toTarget = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
            htmlEnable.style.visibility = "visible";
            currentlyAnim = false;
            for (var i = 0; i < activeButtons.length; i++) {
                activeButtons[i].layers.set(0);
                activeButtons[i].children[0].layers.set(0);
            }
            backButton.style.visibility = "visible";
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

export function ToDefault(targetPosition, targetRotation, camera, animGroup, duration, activeButtons) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    currentlyAnim = true;
    for (var i = 0; i < activeButtons.length; i++) {
        activeButtons[i].layers.set(10);
        activeButtons[i].children[0].layers.set(10);
        console.log(activeButtons[i]);
    }
    const toDefault = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
            currentlyAnim = false;
            for (var i = 0; i < activeButtons.length; i++) {
                activeButtons[i].layers.set(0);
                activeButtons[i].children[0].layers.set(0);
            }
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
//#end region

//#region Scale Animations
export function TextGrow(textObject, targetPos, targetScale, duration, animGroup) {
    const toTargetPos = new Tween(textObject.position)
        .to(targetPos, duration)
        .onUpdate(function () {
            textObject.position.set(textObject.position.x, textObject.position.y, textObject.position.z);
        })
        .onComplete(function () {
            textObject.position.set(targetPos.x, targetPos.y, targetPos.z);
        })
        .start();
    animGroup.add(toTargetPos);


    const toTargetScale = new Tween(textObject.scale)
        .to(targetScale, duration)
        .onUpdate(function () {
            textObject.scale.set(textObject.scale.x, textObject.scale.y, textObject.scale.z);
        })
        .onComplete(function () {
            textObject.scale.set(targetScale.x, targetScale.y, targetScale.z);
        })
        .start();
    animGroup.add(toTargetScale);
}

