"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function ParticleRing({ radius = 2.5 }: { radius?: number }) {
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const angle = (i / 500) * Math.PI * 2;
      const r = radius + Math.random() * 0.5;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = Math.sin(angle) * r;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    return positions;
  }, [radius]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#06B6D4"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function PulsingRing({ radius = 2, speed = 1 }: { radius?: number; speed?: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * speed) * 0.15;
      ringRef.current.scale.set(scale, scale, 1);
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} />
    </mesh>
  );
}

function ClickIndicator() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Arrow pointing down */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.3, 0.6, 3]} />
        <meshBasicMaterial color="#3B82F6" />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
        <meshBasicMaterial color="#3B82F6" />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={particlesRef} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export const ProjectsCallToAction = () => {
  return (
    <div className="relative w-full h-48 mb-8">
      {/* Three.js Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <FloatingParticles />
          <ParticleRing radius={2} />
          <ParticleRing radius={2.5} />
          <PulsingRing radius={1.5} speed={2} />
          <PulsingRing radius={2.2} speed={1.5} />
          <ClickIndicator />
        </Canvas>
      </div>

      {/* Overlay Text with Animation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-center"
        >
          <div className="text-6xl mb-2">👇</div>
          <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl font-bold">
            CLICK TO EXPLORE
          </div>
          <div className="text-cyan-300 text-sm mt-2 font-mono animate-pulse">
            ← Each card reveals the full transformation story →
          </div>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent blur-xl"></div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 border-4 border-cyan-500/50 rounded-2xl"
        animate={{
          borderColor: ["rgba(6, 182, 212, 0.5)", "rgba(59, 130, 246, 0.5)", "rgba(139, 92, 246, 0.5)", "rgba(6, 182, 212, 0.5)"],
          boxShadow: [
            "0 0 20px rgba(6, 182, 212, 0.3)",
            "0 0 40px rgba(59, 130, 246, 0.4)",
            "0 0 30px rgba(139, 92, 246, 0.3)",
            "0 0 20px rgba(6, 182, 212, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner Indicators */}
      {[
        { top: -2, left: -2, rotate: 0 },
        { top: -2, right: -2, rotate: 90 },
        { bottom: -2, right: -2, rotate: 180 },
        { bottom: -2, left: -2, rotate: 270 },
      ].map((position, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8"
          style={position}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        >
          <div
            className="w-full h-full border-t-4 border-l-4 border-cyan-400"
            style={{ transform: `rotate(${position.rotate}deg)` }}
          />
        </motion.div>
      ))}
    </div>
  );
};
