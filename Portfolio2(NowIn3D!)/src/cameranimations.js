import * as THREE from 'three'
import { Tween, Group } from '@tweenjs/tween.js'


export function ToMonitor(targetPosition, targetRotation, camera, animGroup, duration) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    const toMonitor = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
        })
        .start();
    animGroup.add(toMonitor);

    const toMonitorRot = new Tween(curCamRotation)
        .to(targetRotation, duration)
        .onUpdate(function () {
            camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
        })
        .onComplete(function () {
            camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
        })
        .start();

    animGroup.add(toMonitorRot);
}

export function ToLaptop(targetPosition, targetRotation, camera, animGroup, duration) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    const toLaptop = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
        })
        .start();
    animGroup.add(toLaptop);

    const toLaptopRot = new Tween(curCamRotation)
        .to(targetRotation, duration)
        .onUpdate(function () {
            camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
        })
        .onComplete(function () {
            camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
        })
        .start();

    animGroup.add(toLaptopRot);
}

export function ToPhone(targetPosition, targetRotation, camera, animGroup, duration) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    const toPhone = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
        })
        .start();
    animGroup.add(toPhone);

    const toPhoneRot = new Tween(curCamRotation)
        .to(targetRotation, duration)
        .onUpdate(function () {
            camera.rotation.set(curCamRotation.x, curCamRotation.y, curCamRotation.z);
        })
        .onComplete(function () {
            camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
        })
        .start();

    animGroup.add(toPhoneRot);
}

export function ToDefault(targetPosition, targetRotation, camera, animGroup, duration) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    const toDefault = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
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