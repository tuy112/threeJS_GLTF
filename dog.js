import * as THREE from 'three';
import {GLTFLoader} from 'GLTFLoader';

// 1. 장면 (도화지)
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#canvas'),
    antialias : true
});
// renderer.outputEncoding = true.sRGBEncoding;

// 2. 카메라
// PerspectiveCamera : 원근법이 적용된 카메라
// OrthographicCamera : 원근법 무시 카메라
let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0,0,10);

// 3. 배경 + 조명 색
scene.background = new THREE.Color('#fff');
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);

let loader = new GLTFLoader();
loader.load('dog/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    
    function animate(){
        gltf.scene.rotation.y += 0.1;
        gltf.scene.rotation.x += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});