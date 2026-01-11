"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Text3D, Center, Sparkles, SpotLight, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Network, ShieldCheck, Layout, PenTool } from 'lucide-react';
import Link from 'next/link';
import * as THREE from 'three';
import Magnetic from './ui/Magnetic';
import { Stars } from './ui/ParticleNebula';
import HackerText from './ui/HackerText';

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

function FloatingIcons() {
    return (
        <>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                {/* Network - Top Left */}
                <Html position={[-3.5, 2, 0]} transform>
                    <Network className="w-12 h-12 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] opacity-90" />
                </Html>

                {/* IT Support - Top Right */}
                <Html position={[3.5, 2, 0]} transform>
                    <ShieldCheck className="w-12 h-12 text-green-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] opacity-90" />
                </Html>

                {/* Web Design - Bottom Left */}
                <Html position={[-3.5, -2, 0]} transform>
                    <Layout className="w-12 h-12 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] opacity-90" />
                </Html>

                {/* Graphic Design - Bottom Right */}
                <Html position={[3.5, -2, 0]} transform>
                    <PenTool className="w-12 h-12 text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] opacity-90" />
                </Html>
            </Float>
        </>
    );
}

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex flex-col items-center justify-center md:pt-32 overflow-hidden">

            {/* Combined 3D Scene */}
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

            {/* Content Container - Locked toCenter */}
            <div className="z-10 w-full max-w-7xl px-6 relative pointer-events-none flex flex-col items-center text-center">

                <div className="max-w-4xl pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-chrome">
                            <HackerText text="DARK VIBE" /> <span className="text-3xl text-green-500 animate-pulse block mt-4 md:mt-2">[SYSTEM ONLINE]</span>
                        </h1>
                        <p className="font-heading text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto tracking-wide">
                            NEXT-GENERATION SOLUTIONS FOR DIGITAL AND TECHNICAL INFRASTRUCTURE.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
                            <Link href="/services">
                                <Magnetic>
                                    {/* Glass Hover Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 overflow-hidden group"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">Explore Solutions <ArrowRight className="w-4 h-4" /></span>
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                    </motion.button>
                                </Magnetic>
                            </Link>
                            <Link href="/contact">
                                <Magnetic>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 border border-gray-700 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors bg-black/50 backdrop-blur-sm"
                                    >
                                        <Mail className="w-4 h-4" /> Contact Team
                                    </motion.button>
                                </Magnetic>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
