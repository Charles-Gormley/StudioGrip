"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { randomInt } from 'crypto';

const StudioGrip = () => {
  const mountRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, width / height, .1, 1000);
    camera.position.set(-2, 0, -4);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const lightIntensity = 10;
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, lightIntensity);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    directionalLight.position.set(1, 0, 0).normalize();
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, lightIntensity);
    directionalLight2.position.set(-2, 0, 0).normalize();
    scene.add(directionalLight2);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load('models/studio-grip-new-prod.gltf', (gltf) => {
      const model = gltf.scene;
      const scale = .8
      model.scale.set(scale, scale, scale);
      model.position.set(0, 0, 0);
      scene.add(model);

      // OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.enablePan = false;

      controls.addEventListener('start', () => setIsUserInteracting(true));
      controls.addEventListener('end', () => setIsUserInteracting(false));

      const animate = () => {
        requestAnimationFrame(animate);
        const rotationSpeed = 0.003;

        

        if (!isUserInteracting && model) {
            model.rotation.y += rotationSpeed; // Adjust rotation speed as needed
            model.rotation.x += rotationSpeed
          }

        // Update controls on each frame
        controls.update();
        

        renderer.render(scene, camera);
      };

      animate();
    });

    // Clean up on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '120%', height: '75vh' }} />;
};

export default StudioGrip;
