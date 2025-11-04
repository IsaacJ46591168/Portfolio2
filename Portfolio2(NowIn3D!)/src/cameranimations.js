import * as THREE from 'three'
import {Tween, Group} from '@tweenjs/tween.js'


export function ToMonitor (targetPosition, camera, animGroup, duration)
{
  var curCamPosition = new THREE.Vector3().copy(camera.position);
  const toMonitor = new Tween(curCamPosition)
    .to(targetPosition, duration)
    .onUpdate(function(){
      camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
    })
    .onComplete(function(){
      camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
    })
    .start();
  animGroup.add(toMonitor);
}

export function ToLaptop (targetPosition, camera, animGroup, duration)
{
  var curCamPosition = new THREE.Vector3().copy(camera.position);
  const toLaptop = new Tween(curCamPosition)
    .to(targetPosition, duration)
    .onUpdate(function(){
      camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
    })
    .onComplete(function(){
      camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
    })
    .start();
  animGroup.add(toLaptop);
}

export function ToPhone (targetPosition, camera, animGroup, duration)
{
  var curCamPosition = new THREE.Vector3().copy(camera.position);
  const toPhone = new Tween(curCamPosition)
    .to(targetPosition, duration)
    .onUpdate(function(){
      camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
    })
    .onComplete(function(){
      camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
    })
    .start();
  animGroup.add(toPhone);
}

export function ToDefault (targetPosition, camera, animGroup, duration)
{
  var curCamPosition = new THREE.Vector3().copy(camera.position);
  const toDefault = new Tween(curCamPosition)
    .to(targetPosition, duration)
    .onUpdate(function(){
      camera.position.set(curCamPosition.x, curCamPosition.y, curCamPosition.z);
    })
    .onComplete(function(){
      camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
    })
    .start();
  animGroup.add(toDefault);
}