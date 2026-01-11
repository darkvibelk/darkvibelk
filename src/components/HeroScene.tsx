"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, SpotLight } from '@react-three/drei';
import * as THREE from 'three';
import { Stars } from './ui/ParticleNebula';

function WireframeGlobe() {
    const meshRef = useRef<THREE.Mesh>(null);
    const satellitesRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05;
        }
        if (satellitesRef.current) {
            satellitesRef.current.rotation.y -= delta * 0.1;
            satellitesRef.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <group rotation={[0, 0, Math.PI / 6]}>
                {/* Core Sphere (Black/Dark Blue) */}
                <mesh ref={meshRef} scale={2.8}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial
                        color="#020408"
                        emissive="#00081a"
                        emissiveIntensity={0.8}
                        roughness={0.7}
                    />
                </mesh>

                {/* Tech Wireframe Grid */}
                <mesh scale={2.82} rotation={[0.5, 0.5, 0]}>
                    <sphereGeometry args={[1, 24, 24]} />
                    <meshBasicMaterial
                        color="#3b82f6"
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </mesh>

                {/* Continental/Data Layers Effect */}
                <mesh scale={2.9}>
                    <icosahedronGeometry args={[1, 2]} />
                    <meshBasicMaterial
                        color="#60a5fa"
                        wireframe
                        transparent
                        opacity={0.08}
                    />
                </mesh>

                {/* Orbital Satellites / Data Points */}
                <group ref={satellitesRef}>
                    <mesh position={[3.2, 0, 0]}>
                        <sphereGeometry args={[0.05, 16, 16]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>
                    <mesh position={[-3.2, 0.5, 1]}>
                        <sphereGeometry args={[0.03, 16, 16]} />
                        <meshBasicMaterial color="#4ade80" />
                    </mesh>
                </group>
            </group>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>
                <Stars />
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="white" />
                <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#ffffff" />
                <SpotLight position={[0, 10, 0]} intensity={200} penumbra={0.5} angle={0.8} color="white" castShadow />
                <group position={[0, -0.2, 0]} scale={0.85}>
                    <WireframeGlobe />
                </group>
            </Canvas>
        </div>
    );
}
