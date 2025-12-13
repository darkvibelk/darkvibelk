"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
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
                <icosahedronGeometry args={[1, 0]} />
                {/* Chrome/Glass material effect */}
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={5}
                    thickness={2}
                    roughness={0.1}
                    transmission={0.9}
                    ior={1.5}
                    chromaticAberration={0.1}
                    background={new THREE.Color('#050505')}
                />
            </mesh>
            <mesh scale={2.55}>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial wireframe color="#444" transparent opacity={0.1} />
            </mesh>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden">

            {/* 3D Background/Element */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={2} color="white" />
                    <RotatingShape />
                </Canvas>
            </div>

            <div className="z-10 text-center max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-chrome">
                        DARK VIBE
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
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="/services">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
                            >
                                Explore Solutions <ArrowRight className="w-4 h-4" />
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
        </section>
    );
}
