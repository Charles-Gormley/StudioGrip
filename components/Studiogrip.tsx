"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



const StudioGrip = () => {
  const mountRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {

    const isDarkMode = document.documentElement.classList.contains('dark');

    if (!mountRef.current) {
      return;
    }
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
    const lightIntensity = 60;
    const positionScalar = 2;

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, lightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    directionalLight.position.set(1*positionScalar, -1*positionScalar, 1*positionScalar).normalize();
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, lightIntensity);
    directionalLight2.position.set(-1*positionScalar, -1*positionScalar, -1*positionScalar).normalize();
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, lightIntensity);
    directionalLight3.position.set(1*positionScalar, 1*positionScalar, 1*positionScalar).normalize();
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xffffff, lightIntensity);
    directionalLight4.position.set(-1*positionScalar, 1*positionScalar, -1*positionScalar).normalize();
    scene.add(directionalLight4);

    // GLTF Loader
    const loader = new GLTFLoader();
    const modelPath = isDarkMode ? 'models/grip.gltf' : 'models/studio-grip-new-prod.gltf';
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      
      model.traverse((child: { isMesh: any; material: any; }) => {
        if (child.isMesh) {
          // Get the material of the mesh
          const material = child.material;
          const color = 0xFFFFFF;
    
          // Create a new material
          const newMaterial = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.2,
            metalness: 1,
            
          });
    
          // Set the properties of the new material
          newMaterial.color.set(color);
    
          // Assign the new material to the mesh
          child.material = newMaterial;
        }
      });


      const scale = .04
      model.scale.set(scale, scale, scale);
      model.position.set(0, 0, 0);
      
      scene.add(model);

      // OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.01;
      controls.enableZoom = false;
      controls.enablePan = false;

      controls.addEventListener('start', () => setIsUserInteracting(true));
      controls.addEventListener('end', () => setIsUserInteracting(false));

      const animate = () => {
        requestAnimationFrame(animate);
        const rotationSpeed = 0.001;

        

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
  return <div ref={mountRef} className="relative order-10 w-full h-full" style={{ height: '75vh' }} />;

};

export default StudioGrip;
