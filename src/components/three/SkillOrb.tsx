import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const technologies = [
  'React',
  '.NET',
  'Python',
  'TypeScript',
  'SQL',
  'JavaScript',
]

// Generate particle positions once
const generateParticlePositions = () => {
  const positions = new Float32Array(120)
  for (let i = 0; i < 120; i++) {
    positions[i] = (Math.random() - 0.5) * 6
  }
  return positions
}

export default function SkillOrb() {
  const groupRef = useRef<THREE.Group>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [particleOpacity, setParticleOpacity] = useState(0)
  const rotationVelocity = useRef({ x: 0, y: 0 })
  const particleAlphaRef = useRef(0)
  const particlePositions = useMemo(() => generateParticlePositions(), [])

  // Handle mouse move for rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position normalized to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1

      // Only apply rotation if hovering
      if (isHovered) {
        rotationVelocity.current.x = y * 0.01
        rotationVelocity.current.y = x * 0.01
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isHovered && e.touches.length > 0) {
        const touch = e.touches[0]
        const x = (touch.clientX / window.innerWidth) * 2 - 1
        const y = -(touch.clientY / window.innerHeight) * 2 + 1

        rotationVelocity.current.x = y * 0.01
        rotationVelocity.current.y = x * 0.01
      }
    }

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleTouchMove, { passive: true })

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [isHovered])

  useFrame(() => {
    if (groupRef.current) {
      // Base rotation
      groupRef.current.rotation.x += 0.001
      groupRef.current.rotation.y += 0.002

      // Add interactive rotation when hovered
      if (isHovered) {
        groupRef.current.rotation.x += rotationVelocity.current.x * 0.5
        groupRef.current.rotation.y += rotationVelocity.current.y * 0.5

        // Dampen velocity for smooth deceleration
        rotationVelocity.current.x *= 0.95
        rotationVelocity.current.y *= 0.95

        // Smoothly fade in particles
        particleAlphaRef.current = Math.min(particleAlphaRef.current + 0.05, 0.4)
      } else {
        // Smoothly fade out particles
        particleAlphaRef.current = Math.max(particleAlphaRef.current - 0.08, 0)
      }

      // Update state for render
      setParticleOpacity(particleAlphaRef.current * 0.3)
    }
  })

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false)
        rotationVelocity.current = { x: 0, y: 0 }
      }}
    >
      {/* Main icosahedron */}
      <mesh>
        <icosahedronGeometry args={[2, 5]} />
        <meshPhongMaterial
          color={isHovered ? '#00FF88' : '#00D9FF'}
          emissive={isHovered ? '#00FF88' : '#1E3A8A'}
          wireframe={false}
          opacity={isHovered ? 0.9 : 0.7}
          transparent
        />
      </mesh>

      {/* Torus 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.1, 32, 100]} />
        <meshPhongMaterial
          color={isHovered ? '#00FF88' : '#00D9FF'}
          emissive={isHovered ? '#00FF88' : '#00D9FF'}
        />
      </mesh>

      {/* Torus 2 */}
      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[2.5, 0.08, 32, 100]} />
        <meshPhongMaterial
          color={isHovered ? '#1E90FF' : '#1E90FF'}
          emissive={isHovered ? '#1E90FF' : '#1E90FF'}
        />
      </mesh>

      {/* Floating spheres for technologies */}
      {technologies.map((tech, i) => {
        const angle = (i / technologies.length) * Math.PI * 2
        const radius = isHovered ? 3.8 : 3.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <mesh key={tech} position={[x, Math.sin(i) * 1.5, z]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshPhongMaterial
              color={isHovered ? '#00FF88' : '#00D9FF'}
              emissive={isHovered ? '#00FF88' : '#00D9FF'}
              emissiveIntensity={isHovered ? 0.8 : 0.5}
            />
          </mesh>
        )
      })}

      {/* Smooth glowing aura particles on hover */}
      {isHovered && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={40}
              array={particlePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.08}
            color="#00FF88"
            sizeAttenuation
            transparent
            opacity={particleOpacity}
          />
        </points>
      )}
    </group>
  )
}
