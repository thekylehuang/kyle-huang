import React, { useRef } from 'react';
import { useGLTF, MeshTransmissionMaterial, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/Crown.glb')
  const { viewport } = useThree()
  const ref = useRef(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.02;
      ref.current.rotation.y += 0.02;
    }
  })
  return (
    <group {...props} dispose={null} scale={viewport.width / 10}>
      <Text font={'/fonts/InterTight-Black.ttf'} position={[0, 2, -1]} fontSize={2} color="white" anchorX="center" anchorY="middle">
        Kyle Huang
      </Text>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Crown.geometry}
        material={nodes.Crown.material}
        position={[0, 1.5, 0]}
        scale={[2.5, 2.5, 2.5]}
        ref={ref}
      >
        <MeshTransmissionMaterial
        thickness={0.2}
        roughness={0}
        transmission={1}
        ior={1.2}
        chromaticAberration={0.05}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Crown.glb')