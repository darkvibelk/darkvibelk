"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Custom random sphere generator to avoid 'maath' dependency issues
const generateSphere = (count: number, radius: number) => {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = Math.cbrt(Math.random()) * radius;
        const sinPhi = Math.sin(phi);
        points[i * 3] = r * sinPhi * Math.cos(theta);
        points[i * 3 + 1] = r * sinPhi * Math.sin(theta);
        points[i * 3 + 2] = r * Math.cos(phi);
    }
    return points;
};

// Export Stars so it can be used in other Canvases
export function Stars(props: any) {
    const groupRef = useRef<any>();
    const pointsRef = useRef<any>();
    const [sphere] = useState(() => generateSphere(5000, 1.5));

    useFrame((state, delta) => {
        // Continuous rotation (Spinning Universe) - applied to inner points
        if (pointsRef.current) {
            pointsRef.current.rotation.y -= delta * 0.1; // Consistent slow spin
            pointsRef.current.rotation.x -= delta * 0.05;
        }

        // Mouse interaction (Tilting the view) - applied to outer group
        if (groupRef.current) {
            const x = state.pointer.x * 2; // Much higher sensitivity
            const y = state.pointer.y * 2;
            // Faster interpolation for snappier feel
            groupRef.current.rotation.x += (y - groupRef.current.rotation.x) * delta * 5;
            groupRef.current.rotation.y += (x - groupRef.current.rotation.y) * delta * 5;
        }
    });

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
            <group ref={pointsRef}>
                <Points positions={sphere} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial
                        transparent
                        color="#ffffff"
                        size={0.003}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.8}
                    />
                </Points>
            </group>
        </group>
    );
}

export default function ParticleNebula() {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}
