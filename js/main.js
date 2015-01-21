var width = window.innerWidth, height = window.innerHeight;

var mouseX = 0, mouseY = 0;

var camera, controls, scene, renderer;

init();
animate();

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(33, width / height, 1, 10000);
  camera.position.z = 500;

  controls = new THREE.TrackballControls( camera );
  controls.addEventListener('change', render);


  var geometry = new THREE.CubeGeometry(75, 75, 75);
  var materialA = new THREE.MeshBasicMaterial({
    color: '#8e9389',
    opacity: 0.6,
    transparent: true,
  });

  var materialB = new THREE.MeshBasicMaterial({
    color: '#bc727a',
    opacity: 0.8,
    wireframe: true,
    transparent: true,
    });

  for(var i = 0; i < 300; i++) {

    var meshA = new THREE.Mesh( geometry, materialA);
    var meshB = new THREE.Mesh( geometry, materialB)

    meshA.position.x = (Math.random() - 0.5) * 3000;
    meshA.position.y = (Math.random() - 0.5) * 2000;
    meshA.position.z = (Math.random() - 0.5) * 3000;

    meshB.position.x = (Math.random() - 0.5) * 1000;
    meshB.position.y = (Math.random() - 0.5) * 3000;
    meshB.position.z = (Math.random() - 0.5) * 2000;


    scene.add(meshA);
    scene.add(meshB);

  }

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

}

function animate() {
  requestAnimationFrame( animate );
  controls.update();
  // render();
}
//
// scene.add( new THREE.AmbientLight( 0x444444 ) );
//
// var light1 = new THREE.DirectionalLight( 0xffffff, 0.8 );
// light1.position.set( 3, 1, 1 );
// scene.add( light1 );
//
var light2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
light2.position.set( 0, -1, 0 );
scene.add( light2 );

function render() {

  camera.position.x += ( mouseX - camera.position.x ) * .05;
  camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;

  camera.lookAt( scene.position );


  // var time = Date.now() * 0.0015;
  //
  // for ( var i = 0; i < scene.children.length; i ++ ) {
  //
  //   var object = scene.children[ i ];
  //   if ( object instanceof THREE.CubeGeometry ) object.rotation.y = time * ( i % 2 ? 1 : -1 );
  //
  // }

  renderer.render( scene, camera );
}
