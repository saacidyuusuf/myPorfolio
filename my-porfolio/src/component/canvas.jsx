/* eslint-disable */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { threejs1, threejs2, threejs3 } from "../assets";
const MovingBackground = () => {
  const canvasRef = useRef(null);
/*   const heroSectionRef = useRef(null);
 */
  useEffect(() => {
    let renderer, scene, camera, controls, clock, o_mes;

    const texture = {
      matcap: threejs1,
      skin: threejs2,
      env: threejs3,
    };

    const config = {
      scene: {
        speed: 0.2,
      },
      object: {
        speed: 0,
      },
    };

   

    const init = () => {
      const canvas = canvasRef.current;

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, -1.7, 5);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.rotateSpeed = 0.9;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.02;

      clock = new THREE.Clock();

      scene.background = new THREE.Color(0x000a0b);

      const light = new THREE.HemisphereLight(0xffffff, 0xaaaacc, 1);
      scene.add(light);

      const o_geo = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
      const o_mat = new THREE.MeshMatcapMaterial({
        color: 0xffffff,
        matcap: new THREE.TextureLoader().load(texture.matcap),
      });

      o_mes = new THREE.Mesh(o_geo, o_mat);

      scene.add(o_mes);

      animate();
      window.addEventListener("resize", handleResize);

    };
    


    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      scene.rotation.y = elapsedTime * config.scene.speed;
      o_mes.rotation.y = -elapsedTime * config.object.speed;
      o_mes.rotation.z = elapsedTime * config.object.speed;
      o_mes.rotation.x = elapsedTime * config.object.speed;
      o_mes.position.y = Math.sin(elapsedTime * config.object.speed) * 0.2;

      controls.update();

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };

  }, []);
  

  return (
    <canvas ref={canvasRef} />
  )
};

export default MovingBackground;
