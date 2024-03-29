import { onMount } from "solid-js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MODEL_NAMES, isMobile } from "../utils/consts";
import Macbook3DModelUrl from "../assets/renders/macbook-min.glb?url";
import Mug3DModelUrl from "../assets/renders/mug-min.glb?url";
import Pencil3DModelUrl from "../assets/renders/pencil.glb?url";
import Rubber3DModelUrl from "../assets/renders/rubber.glb?url";
import RubixCube3DModelUrl from "../assets/renders/rubix_cube.glb?url";

function modelLoader(scene, filename, name, position) {
  const loader = new GLTFLoader();
  loader.load(
    filename,
    (gltf) => {
      const object = gltf.scene;
      object.name = name;

      object.position.set(position.x, position.y, position.z);
      object.scale.set(0.35, 0.35, 0.35);
      gltf.scene.traverse((child) => {
        const childMaterial = child.material;
        if (child.material) childMaterial.metalness = 0;
      });
      scene.add(object);
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );
}

function animateObject(scene, name, rotation) {
  const object = scene.getObjectByName(name);
  if (object) {
    object.rotation.set(rotation.x, rotation.y, rotation.z);
  }
}

export default function ThreeAnimation() {
  let canvas;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);

    const rectLight1 = new THREE.RectAreaLight(0x850945, 5, 4, 10);
    rectLight1.rotation.set(0, 90, 0);
    rectLight1.position.set(-5, 5, 5);

    scene.add(rectLight1);

    const rectLight2 = new THREE.RectAreaLight(0xc95304, 5, 4, 10);
    rectLight2.position.set(0, 5, 5);
    scene.add(rectLight2);

    const rectLight3 = new THREE.RectAreaLight(0x0400ff, 5, 4, 10);
    rectLight3.position.set(5, 5, 5);
    scene.add(rectLight3);

    const rectLight4 = new THREE.RectAreaLight(0x850945, 5, 4, 10);
    rectLight4.position.set(-5, 5, 5);
    scene.add(rectLight4);

    modelLoader(scene, Macbook3DModelUrl, MODEL_NAMES.MACBOOK, {
      x: 0,
      y: 1.5,
      z: 0,
    });

    if (!isMobile) {
      modelLoader(scene, Mug3DModelUrl, MODEL_NAMES.MUG, {
        x: 3,
        y: 2,
        z: 1,
      });
      modelLoader(scene, Pencil3DModelUrl, MODEL_NAMES.PENCIL, {
        x: -3,
        y: -1,
        z: -1,
      });
      modelLoader(scene, Rubber3DModelUrl, MODEL_NAMES.RUBBER, {
        x: 2,
        y: 0,
        z: 1,
      });
      modelLoader(scene, RubixCube3DModelUrl, MODEL_NAMES.RUBIX_CUBE, {
        x: -8,
        y: 3,
        z: -7,
      });
    }

    camera.position.z = 5;
    camera.position.y = 1;
    camera.rotation.x = 0;
    const animate = (time) => {
      requestAnimationFrame(animate);
      animateObject(scene, MODEL_NAMES.MACBOOK, {
        x: time / 80000,
        y: time / 80000,
        z: time / 10000,
      });

      if (!isMobile) {
        animateObject(scene, MODEL_NAMES.MUG, {
          x: time / 80000,
          y: 0,
          z: time / 10000,
        });
        animateObject(scene, MODEL_NAMES.PENCIL, {
          x: time / 80000,
          y: 0,
          z: time / 10000,
        });
        animateObject(scene, MODEL_NAMES.RUBBER, {
          x: -time / 80000,
          y: 0,
          z: -time / 10000,
        });
        animateObject(scene, MODEL_NAMES.RUBIX_CUBE, {
          x: -time / 80000,
          y: 0,
          z: -time / 10000,
        });
      }

      renderer.render(scene, camera);
    };

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onWindowResize);

    animate();
  });
  return <div class="w-full" ref={canvas}></div>;
}
