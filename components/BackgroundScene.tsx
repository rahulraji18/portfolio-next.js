'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.innerWidth < 720;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      canvas.classList.add('hidden');
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0e14, 0.055);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 17);

    const group = new THREE.Group();
    scene.add(group);

    // --- Node positions inside a flattened ellipsoid volume ---
    const NODE_COUNT = isSmall ? 46 : 90;
    const RADIUS = 11;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      )
        .normalize()
        .multiplyScalar(RADIUS * (0.35 + Math.random() * 0.65));
      v.y *= 0.6;
      nodes.push(v);
    }

    // --- Points (nodes) ---
    const pointsGeo = new THREE.BufferGeometry().setFromPoints(nodes);
    const pointsMat = new THREE.PointsMaterial({
      color: 0x5eead4,
      size: 0.16,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointCloud = new THREE.Points(pointsGeo, pointsMat);
    group.add(pointCloud);

    // --- Connections between nearby nodes ---
    const linkPositions: number[] = [];
    const LINK_DIST = isSmall ? 4.2 : 4.6;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < LINK_DIST) {
          linkPositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          linkPositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linkPositions, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x5eead4, transparent: true, opacity: 0.1 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    // --- A few amber "active request" nodes ---
    const activeIdx: number[] = [];
    while (activeIdx.length < Math.min(5, nodes.length)) {
      const idx = Math.floor(Math.random() * nodes.length);
      if (!activeIdx.includes(idx)) activeIdx.push(idx);
    }
    const activePositions = activeIdx.flatMap((i) => [nodes[i].x, nodes[i].y, nodes[i].z]);
    const activeGeo = new THREE.BufferGeometry();
    activeGeo.setAttribute('position', new THREE.Float32BufferAttribute(activePositions, 3));
    const activeMat = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.32,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const activePoints = new THREE.Points(activeGeo, activeMat);
    group.add(activePoints);

    // --- Mouse parallax ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let running = true;
    let frameId = 0;

    const onVisibility = () => {
      running = document.visibilityState === 'visible';
      if (running && !prefersReducedMotion) frameId = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', onVisibility);

    const clock = new THREE.Clock();

    function animate() {
      if (!running) return;
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.035;
      targetRotX += (mouseY * 0.25 - targetRotX) * 0.03;
      targetRotY += (mouseX * 0.35 - targetRotY) * 0.03;
      group.rotation.x = targetRotX;
      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 1.1 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      pointsMat.opacity = 0.7 + Math.sin(t * 0.6) * 0.1;

      renderer.render(scene, camera);
      if (!prefersReducedMotion) frameId = requestAnimationFrame(animate);
    }

    if (prefersReducedMotion) {
      group.rotation.set(0.1, 0.4, 0);
      renderer.render(scene, camera);
    } else {
      frameId = requestAnimationFrame(animate);
    }

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      pointsGeo.dispose();
      pointsMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      activeGeo.dispose();
      activeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} />;
}
