"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Text3D, Center, Sparkles, SpotLight, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Network, ShieldCheck, Layout, PenTool } from 'lucide-react';
import Link from 'next/link';
import * as THREE from 'three';

function RotatingShape() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2;
            mesh.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={mesh} scale={2.5}>
                <dodecahedronGeometry args={[1, 0]} />
                {/* Dark Tech Material effect */}
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={1}
                    thickness={1}
                    roughness={0.2}
                    transmission={1}
                    ior={1.2}
                    chromaticAberration={0.2}
                    anisotropy={1}
                    distortion={0.2}
                    distortionScale={0.3}
                    temporalDistortion={0.1}
                    background={new THREE.Color('#020202')}
                    color="#ffffff"
                />
            </mesh>
            {/* Network Wireframe Shell */}
            <mesh scale={3}>
                <icosahedronGeometry args={[1, 2]} />
                <meshBasicMaterial wireframe color="#3b82f6" transparent opacity={0.03} />
            </mesh>
            <mesh scale={3.1} rotation={[0, 0, Math.PI / 4]}>
                <torusGeometry args={[1, 0.01, 16, 100]} />
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
            </mesh>
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

            {/* 3D Background/Element */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={2} color="white" />
                    <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#ffffff" />
                    <SpotLight position={[0, 10, 0]} intensity={200} penumbra={0.5} angle={0.8} color="white" castShadow />
                    <RotatingShape />
                    <RotatingShape />
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
                            DARK VIBE <span className="text-3xl text-green-500 animate-pulse block mt-4 md:mt-2">[SYSTEM ONLINE]</span>
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
                                {/* Glass Hover Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">Explore Solutions <ArrowRight className="w-4 h-4" /></span>
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border border-gray-700 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors bg-black/50 backdrop-blur-sm"
                                >
                                    <Mail className="w-4 h-4" /> Contact Team
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
