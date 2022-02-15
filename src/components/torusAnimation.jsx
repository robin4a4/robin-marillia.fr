import { onMount } from "solid-js";
import * as THREE from "three";


export default function TorusAnimationComponent() {
    let canvas;

    onMount(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 1, 1000 );
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        canvas.appendChild( renderer.domElement );

        const rectLight1 = new THREE.RectAreaLight( 0x850945, 5, 4, 10 );
        rectLight1.rotation.set(0, 90, 0)
        rectLight1.position.set( - 5, 5, 5 );
        rectLight1.lookAt( 0, 0, 0 );

        scene.add( rectLight1 );

        const rectLight2 = new THREE.RectAreaLight( 0xc95304, 5, 4, 10 );
        rectLight2.position.set( 0, 5, 5 );
        scene.add( rectLight2 );

        const rectLight3 = new THREE.RectAreaLight( 0x0400ff, 5, 4, 10 );
        rectLight3.position.set( 5, 5, 5 );
        scene.add( rectLight3 );

        const geoKnot = new THREE.TorusKnotGeometry( 1.5, 0.5, 200, 16 );
        const matKnot = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0, metalness: 0 } );
        const meshKnot = new THREE.Mesh( geoKnot, matKnot );
        meshKnot.name = 'meshKnot';
        meshKnot.position.set( 0, 1.5, 0 );
        meshKnot.scale.set(0.5, .5, .5)
        scene.add( meshKnot );


        camera.position.z = 5;
        camera.position.y = 1;
        camera.rotation.x = 0;
        const animate = function (time) {
        requestAnimationFrame( animate );
        const mesh = scene.getObjectByName( 'meshKnot' );
        mesh.rotation.y = time / 1000;

        renderer.render( scene, camera );
        };
        animate();
    })
    return (
        <div ref={canvas}></div>
    )
}