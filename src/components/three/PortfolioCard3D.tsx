import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface PortfolioCard3DProps {
  color: string
  isHovered: boolean
}

interface ParticlesWithVelocities extends THREE.Points {
  velocities?: Float32Array
}

export default function PortfolioCard3D({ color: colorName, isHovered }: PortfolioCard3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<ParticlesWithVelocities>(null)

  // Parse color name to RGB
  const getColorFromName = (colorStr: string): THREE.Color => {
    const colorMap: { [key: string]: string } = {
      'blue': '#0066ff',
      'cyan': '#00ffff',
      'purple': '#aa00ff',
      'pink': '#ff0088',
      'green': '#00ff00',
      'emerald': '#00ff99',
      'orange': '#ff8800',
      'red': '#ff0000',
      'indigo': '#3300ff',
    }

    const match = colorStr.match(/from-(\w+)/)
    const colorKey = match ? match[1] : 'blue'
    return new THREE.Color(colorMap[colorKey] || '#00ffff')
  }

  const color = getColorFromName(colorName)

  // Create particles
  useEffect(() => {
    if (!particlesRef.current) return

    const count = 50
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2

      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
    }

    particlesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesRef.current.velocities = velocities
  }, [])

  useFrame(() => {
    // Rotate main mesh
    if (meshRef.current) {
      meshRef.current.rotation.x += isHovered ? 0.008 : 0.002
      meshRef.current.rotation.y += isHovered ? 0.012 : 0.003
      meshRef.current.rotation.z += isHovered ? 0.005 : 0.001

      // Pulse on hover
      if (isHovered) {
        meshRef.current.scale.set(1.1, 1.1, 1.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }

    // Animate particles
    if (particlesRef.current && particlesRef.current.velocities) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const velocities = particlesRef.current.velocities

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Bounce off walls
        if (Math.abs(positions[i]) > 1) velocities[i] *= -1
        if (Math.abs(positions[i + 1]) > 1) velocities[i + 1] *= -1
        if (Math.abs(positions[i + 2]) > 1) velocities[i + 2] *= -1
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <>
      {/* Main rotating cube */}
      <mesh ref={meshRef} scale={0.8}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={isHovered ? 0.5 : 0.1} />
      </mesh>

      {/* Wireframe cube */}
      <mesh scale={0.8}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          opacity={0.3}
          transparent
          emissive={color}
          emissiveIntensity={isHovered ? 0.3 : 0.05}
        />
      </mesh>

      {/* Floating particles */}
      <points ref={particlesRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.05}
          color={color}
          sizeAttenuation
          transparent
          opacity={isHovered ? 0.8 : 0.4}
        />
      </points>

      {/* Ambient light */}
      <ambientLight intensity={0.5} color={color} />

      {/* Point light that follows hover state */}
      <pointLight
        position={[isHovered ? 2 : 1, isHovered ? 2 : 1, isHovered ? 2 : 1]}
        intensity={isHovered ? 1.5 : 0.8}
        color={color}
      />
    </>
  )
}
