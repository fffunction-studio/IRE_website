import * as THREE from 'three'

var statsEnabled = false;
var container, stats;
var camera, scene, renderer;
var mesh;
var spotLight;
var mouseX = 0;
var mouseY = 0;
var targetX = 0;
var targetY = 0;
var rotateX = window.innerWidth / 2;
var rotateY = window.innerHeight / 2;
init();
animate();
function init() {
  container = document.querySelector('.canvas-container');
  //
  camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1200;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xcccccc );
  // LIGHTS
  scene.add( new THREE.HemisphereLight( 0x888888, 0x000008 ) );
  spotLight = new THREE.SpotLight( 0xbbbbbb, 1 );
  spotLight.position.set( 0.5, 0.5, 0.5 );
  spotLight.position.multiplyScalar( 500 );
  scene.add( spotLight );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 200;
  spotLight.shadow.camera.far = 1500;
  spotLight.shadow.camera.fov = 40;
  spotLight.shadow.bias = - 0.005;
  //

  var mapHeight = new THREE.TextureLoader().load( "http://localhost:8080/wp-content/themes/irene-stracuzzi/images/elev_bump_4k.jpg" );
  var material = new THREE.MeshPhongMaterial( {
    color: 0xffffff,
    specular: 0x222222,
    shininess: 25,
    bumpMap: mapHeight,
    bumpScale: 12
  } );

  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  createScene(geometry, 32, material)

  //
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );
  renderer.shadowMap.enabled = true;
  //
  renderer.gammaInput = true;
  renderer.gammaOutput = true;
  //
  if ( statsEnabled ) {
    stats = new Stats();
    container.appendChild( stats.dom );
  }
  // EVENTS
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  window.addEventListener( 'resize', onWindowResize, false );
}
function createScene( geometry, scale, material ) {
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.y = - 50;
  mesh.scale.set( scale, scale, scale );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add( mesh );
}
//
function onWindowResize() {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
function onDocumentMouseMove( event ) {
  mouseX = ( event.clientX * 4 - rotateX );
  mouseY = ( event.clientY * 2 - rotateY );
}
//
function animate() {
  requestAnimationFrame( animate );
  render();
  if ( statsEnabled ) stats.update();
}
function render() {
  targetX = mouseX * .001;
  targetY = mouseY * .001;
  if ( mesh ) {
    mesh.rotation.y += 0.05 * ( targetX - mesh.rotation.y );
    mesh.rotation.x += 0.05 * ( targetY - mesh.rotation.x );
  }
  renderer.render( scene, camera );
}