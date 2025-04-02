
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    // Set size
    const canvasWidth = mountRef.current.clientWidth;
    const canvasHeight = mountRef.current.clientHeight;
    renderer.setSize(canvasWidth, canvasHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create a green fintech-themed sphere with wireframe
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x2ECC71,
      transparent: true,
      opacity: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
    // Add wireframe to the sphere
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(sphereGeometry),
      new THREE.LineBasicMaterial({ color: 0x2ECC71, transparent: true, opacity: 0.5 })
    );
    sphere.add(wireframe);
    scene.add(sphere);
    
    // Create smaller data points (particles) around the sphere
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Position
      const radius = 2.5 + Math.random() * 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Color - alternate between blue and green
      const isBlue = Math.random() > 0.5;
      colors[i * 3] = isBlue ? 0.2 : 0.2;
      colors[i * 3 + 1] = isBlue ? 0.3 : 0.8;
      colors[i * 3 + 2] = isBlue ? 0.8 : 0.2;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Add some floating data connection lines
    const connectionsGeometry = new THREE.BufferGeometry();
    const connectionCount = 50; // Number of lines
    const connectionPositions = new Float32Array(connectionCount * 6); // 2 points per line, 3 coords per point
    
    for (let i = 0; i < connectionCount; i++) {
      const startIndex = Math.floor(Math.random() * particleCount);
      const endIndex = Math.floor(Math.random() * particleCount);
      
      // Start point
      connectionPositions[i * 6] = positions[startIndex * 3];
      connectionPositions[i * 6 + 1] = positions[startIndex * 3 + 1];
      connectionPositions[i * 6 + 2] = positions[startIndex * 3 + 2];
      
      // End point
      connectionPositions[i * 6 + 3] = positions[endIndex * 3];
      connectionPositions[i * 6 + 4] = positions[endIndex * 3 + 1];
      connectionPositions[i * 6 + 5] = positions[endIndex * 3 + 2];
    }
    
    connectionsGeometry.setAttribute('position', new THREE.BufferAttribute(connectionPositions, 3));
    
    const connectionsMaterial = new THREE.LineBasicMaterial({
      color: 0x3B5998,
      transparent: true,
      opacity: 0.2,
    });
    
    const connections = new THREE.LineSegments(connectionsGeometry, connectionsMaterial);
    scene.add(connections);
    
    // Position the camera
    camera.position.z = 5;
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate sphere slowly
      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.001;
      
      // Rotate particles in opposite direction
      particles.rotation.y -= 0.001;
      particles.rotation.x += 0.0005;
      
      // Rotate connections slightly
      connections.rotation.y += 0.0008;
      
      // Render the scene
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation loop
    animate();
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
