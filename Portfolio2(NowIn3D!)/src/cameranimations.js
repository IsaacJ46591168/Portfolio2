import * as THREE from 'three'
import { Tween, Group } from '@tweenjs/tween.js'
export var currentlyAnim = false;

export function ToTarget(targetPosition, targetRotation, camera, animGroup, duration, htmlEnable) {
    var curCamPosition = new THREE.Vector3().copy(camera.position);
    var curCamRotation = new THREE.Vector3().copy(camera.rotation);

    // if (targetName == monitorHTML.id) {
    //     laptopHTML.style.visibility = "hidden";
    //     phoneHTML.style.visibility = "hidden";
    // } else if (targetName == laptopHTML.id) {
    //     monitorHTML.style.visibility = "hidden";
    //     phoneHTML.style.visibility = "hidden";
    // } else if (targetName == phoneHTML.id) {
    //     monitorHTML.style.visibility = "hidden";
    //     laptopHTML.style.visibility = "hidden";
    // } else {
    //     monitorHTML.style.visibility = "hidden";
    //     laptopHTML.style.visibility = "hidden";
    //     phoneHTML.style.visibility = "hidden";
    // }

    currentlyAnim = true;

    const toTarget = new Tween(curCamPosition)
        .to(targetPosition, duration)
        .onUpdate(function () {
            camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
        })
        .onComplete(function () {
            camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
            htmlEnable.style.visibility = "visible";
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