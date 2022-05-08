import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import testVertexShader from './shaders/curtain/vertex.glsl';
import testFragmentShader from './shaders/curtain/fragment.glsl';



/**
 * Base
 */
// DEBUG
const gui = new dat.GUI();
gui.close();
const debugObject = {};

// Color
// debugObject.depthColor = '#290981';
// debugObject.surfaceColor = '#723bb5';
// debugObject.backgroundColor = '#ffffff';
// debugObject.depthColor = '#0b0981';
// debugObject.surfaceColor = '#3b49b5';
// debugObject.backgroundColor = '#ffffff';
debugObject.depthColor = '#16163c';
debugObject.surfaceColor = '#5f6977';
debugObject.backgroundColor = '#ffffff';

//scale

//camera position
// debugObject.scaleY = 1.2;
// debugObject.scaleX = 0.95;
// debugObject.cameraPositionX = 0;
// debugObject.cameraPositionY = -1.05;
// debugObject.cameraPositionZ = 1.2;

// debugObject.scaleY = 1.2;
// debugObject.scaleX = 0.95;
// debugObject.cameraPositionX = 0;
// debugObject.cameraPositionY = -0.8;
// debugObject.cameraPositionZ = 1.6;

debugObject.scaleY = 1;
debugObject.scaleX = 1;
// debugObject.cameraPositionX = 0;
// debugObject.cameraPositionY = 0;
// debugObject.cameraPositionZ = 1.6;
// debugObject.cameraPositionX = 0;
// debugObject.cameraPositionY = 0;
// debugObject.cameraPositionZ = 1.7;
debugObject.cameraPositionX = 0;
debugObject.cameraPositionY = 0;
debugObject.cameraPositionZ = 1.6;
debugObject.title = true;

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
//const flagTexture = textureLoader.load('/textures/fabric-master-blu.jpg');

/**
 * Test mesh
 */
// Geometry
// const geometry = new THREE.BoxGeometry(1, 1, 0.04, 512, 512);
const geometry = new THREE.BoxGeometry(6, 1.7, 0.04, 512, 512);

const count = geometry.attributes.position.count;
const randoms = new Float32Array(count)

for(let i = 0; i < count; i++) {
    randoms[i] = Math.random();
}

// SHADER MATERIAL - ha attributi presettati da three.js
// const material = new THREE.ShaderMaterial({
//     vertexShader: testVertexShader,
//     fragmentShader: testFragmentShader,
//     uniforms: {
//         uFrequency: { value: new THREE.Vector2(20, 5) },
//         uTime: { value: 0 },
        
//         uDepthColor: { value: new THREE.Color(debugObject.depthColor )},
//         uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor )},
//         uColorOffset: { value: 0.029 },
//         uColorMultiplier: { value: 6.681 },

//         // uNoiseFrequency: {value: 6.5},
//         // uNoiseAmplitude: {value: 0.08},
//         uNoiseFrequency: {value: 4.66},
//         uNoiseAmplitude: {value: 0.09},
// 				uElevation: {value: 0.7},
// 				uWave1Power: {value: 0.55},
// 				uWave2Power: {value: 2.5},
//         // uBorderNoiseFrequency: {value: 0.2},
//         // uBorderNoiseAmplitude: {value: 0.08},
//         uBorderNoiseFrequency: {value: 0.3},
//         uBorderNoiseAmplitude: {value: 0.12},
//         uSpeed: {value: 1.07},
//         uRadiusX: {value: 0.02},
//         uRadiusY: {value: 0.3},
//         //uTexture: { value: flagTexture }
//     },
//     side: THREE.DoubleSide,
// });

const material = new THREE.ShaderMaterial({
	vertexShader: testVertexShader,
	fragmentShader: testFragmentShader,
	uniforms: {
        uFrequency: { value: new THREE.Vector2(20, 5) },
        uTime: { value: 0 },
        
        uDepthColor: { value: new THREE.Color(debugObject.depthColor )},
        uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor )},
        uColorOffset: { value: 0.121 },
        uColorMultiplier: { value: 2.994 },

        // uNoiseFrequency: {value: 6.5},
        // uNoiseAmplitude: {value: 0.08},
        uNoiseFrequency: {value: -1.24},
        uNoiseAmplitude: {value: 0.05},
        uElevation: {value: 0.13},
        uWave1Power: {value: 1.52},
        uWave2Power: {value: 3.82},
        // uBorderNoiseFrequency: {value: 0.2},
        // uBorderNoiseAmplitude: {value: 0.08},
        uBorderNoiseFrequency: {value: 0.4},
        uBorderNoiseAmplitude: {value: 0.05},
        uSpeed: {value: 1.07},
        uRadiusX: {value: 0.02},
        uRadiusY: {value: 0.08},
        //uTexture: { value: flagTexture }
	},
	side: THREE.DoubleSide
});

// SHADER MATERIAL - ha attributi presettati da three.js
// const material2 = new THREE.ShaderMaterial({
//     vertexShader: testVertexShader,
//     fragmentShader: testFragmentShader,
//     uniforms: {
//         uFrequency: { value: new THREE.Vector2(20, 5) },
//         uTime: { value: 0 },
        
//         uDepthColor: { value: new THREE.Color('#51370b')},
//         uSurfaceColor: { value: new THREE.Color('#7c5709')},
//         uColorOffset: { value: 0.029 },
//         uColorMultiplier: { value: 6.681 },

//         uNoiseFrequency: {value: 3.31},
//         uNoiseAmplitude: {value: -0.16},
//         uSpeed: {value: 5.00},
//         uRadiusX: {value: 0.11},
//         uRadiusY: {value: -0.22},
//         // uTexture: { value: flagTexture }
//     },
//     side: THREE.DoubleSide
// });

gui.add(material.uniforms.uFrequency.value, 'x').min(0).max(20).step(0.01).name('frequencyX');
gui.add(material.uniforms.uFrequency.value, 'y').min(0).max(20).step(0.01).name('frequencyY');

gui.add(material.uniforms.uNoiseFrequency, 'value').min(-8).max(8).step(0.01).name('uNoiseFrequency');
gui.add(material.uniforms.uNoiseAmplitude, 'value').min(-0.5).max(0.5).step(0.01).name('uNoiseAmplitude');
gui.add(material.uniforms.uBorderNoiseFrequency, 'value').min(-8).max(8).step(0.01).name('uBorderNoiseFrequency');
gui.add(material.uniforms.uBorderNoiseAmplitude, 'value').min(-0.5).max(0.5).step(0.01).name('uBorderNoiseAmplitude');
gui.add(material.uniforms.uElevation, 'value').min(-2).max(2).step(0.01).name('uElevation');
gui.add(material.uniforms.uWave1Power, 'value').min(0).max(10).step(0.01).name('uWave1Power');
gui.add(material.uniforms.uWave2Power, 'value').min(0).max(10).step(0.01).name('uWave2Power');
gui.add(material.uniforms.uRadiusX, 'value').min(-2).max(2).step(0.01).name('uRadiusX');
gui.add(material.uniforms.uRadiusY, 'value').min(-2).max(2).step(0.01).name('uRadiusY');
gui.add(material.uniforms.uSpeed, 'value').min(0).max(5).step(0.01).name('uSpeed');


gui
    .addColor(debugObject, 'depthColor')
    .name('depthColor')
    .onChange(() => {
        material.uniforms.uDepthColor.value.set(debugObject.depthColor)
    })

gui
    .addColor(debugObject, 'surfaceColor')
    .name('surfaceColor')
    .onChange(() => {
        material.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor)
    })

gui.add(material.uniforms.uColorOffset, 'value').min(-0.2).max(0.5).step(0.001).name('uColorOffset');
gui.add(material.uniforms.uColorMultiplier, 'value').min(0).max(10).step(0.001).name('uColorMultiplier');

gui.add(debugObject, 'scaleX').min(0.2).max(4).step(0.1).name('scaleX')
.onChange(() => {
    mesh.scale.x = debugObject.scaleX;
});
gui.add(debugObject, 'scaleY').min(0.2).max(4).step(0.1).name('scaleY').onChange(() => {
    mesh.scale.y = debugObject.scaleY;
});

geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))


/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Mesh
const mesh = new THREE.Mesh(geometry, material)
//const mesh2 = new THREE.Mesh(geometry2, material2)
mesh.scale.x = debugObject.scaleX;
mesh.scale.y = debugObject.scaleY;
scene.background = new THREE.Color(debugObject.backgroundColor);

scene.add(mesh)
//scene.add(mesh2)



window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// const zoom = sizes.height - 100;
// const camera = new THREE.OrthographicCamera(sizes.width / -zoom, sizes.width / zoom, sizes.height / zoom , sizes.height / -zoom, 0.1, 1000 );

// Update camera
// const visibleHeightAtZDepth = ( depth, camera ) => {
//     // compensate for cameras not positioned at z=0
//     const cameraOffset = camera.position.z;
//     if ( depth < cameraOffset ) depth -= cameraOffset;
//     else depth += cameraOffset;
  
//     // vertical fov in radians
//     const vFOV = camera.fov * Math.PI / 180; 
  
//     // Math.abs to ensure the result is always positive
//     return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );
//   };
  
//   const visibleWidthAtZDepth = ( depth, camera ) => {
//     const height = visibleHeightAtZDepth( depth, camera );
//     return height * camera.aspect;
//   };
  
// camera.position.set(0, 0, 2);
// mesh.scale.x = visibleWidthAtZDepth(0, camera);
// mesh.scale.y = visibleWidthAtZDepth(0, camera) * 0.3;

camera.position.set(
    debugObject.cameraPositionX, 
    debugObject.cameraPositionY, 
    debugObject.cameraPositionZ
    )
scene.add(camera)

//debug

gui
    .add(debugObject, 'cameraPositionX')
    .name('cameraPositionX')
    .min(-5)
    .max(5)
    .step(0.1)
    .onChange(() => {
        camera.position.set(
            debugObject.cameraPositionX, 
            debugObject.cameraPositionY, 
            debugObject.cameraPositionZ
        )
    })

gui
    .add(debugObject, 'cameraPositionY')
    .name('cameraPositionY')
    .min(-5)
    .max(5)
    .step(0.1)
    .onChange(() => {
        camera.position.set(
            debugObject.cameraPositionX, 
            debugObject.cameraPositionY, 
            debugObject.cameraPositionZ
        )
    })

gui
    .add(debugObject, 'cameraPositionZ')
    .name('cameraPositionZ')
    .min(-500)
    .max(500)
    .step(1)
    .onChange(() => {
        camera.position.set(
            debugObject.cameraPositionX, 
            debugObject.cameraPositionY, 
            debugObject.cameraPositionZ
        )
    })

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


gui
    .add(debugObject, 'title')
    .name('title')
    .onChange(() => {
        setTitle();
    })

const setTitle = () =>
{
    if(debugObject.title) {
        let title = document.querySelector('.main-title');
        title.style.display = 'block'
    } else {
        let title = document.querySelector('.main-title');
        title.style.display = 'none'
    }
}

setTitle();

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update material
    material.uniforms.uTime.value = elapsedTime;

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()