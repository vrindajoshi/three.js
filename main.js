import * as THREE from 'three'; 
import "./style.css"

//scene
const scene = new THREE.Scene()

//sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshBasicMaterial ({
  color: "#FFC0CB",
})
// geo + material = mesh
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

//light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(10,10,10)
scene.add(light)

//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)

//render the scene
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene, camera)

//resize
window.addEventListener('resize', () => {
  //update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  //update camera
  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix() //21
})

