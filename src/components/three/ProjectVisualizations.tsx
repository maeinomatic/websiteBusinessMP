import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Helper to generate random particle positions
const generateParticles = (count: number, scale: number = 1) => {
  return new Float32Array(
    Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * scale)
  )
}

// E-Commerce: Product display shelves
export function ECommerceVisualization() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.005
  })

  return (
    <group ref={groupRef}>
      {/* Three shelves with products */}
      {[0, 1, 2].map((shelf) => (
        <group key={shelf} position={[0, 0.2 - shelf * 0.25, 0]}>
          {/* Shelf base */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.15]} />
            <meshStandardMaterial color="#5a5a5a" metalness={0.5} />
          </mesh>

          {/* Products on shelf */}
          {[0, 1, 2].map((product) => {
            const xPos = -0.2 + product * 0.2
            const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d']
            return (
              <mesh key={product} position={[xPos, 0.08, 0]}>
                <boxGeometry args={[0.12, 0.12, 0.1]} />
                <meshStandardMaterial color={colors[product]} metalness={0.7} roughness={0.3} />
              </mesh>
            )
          })}
        </group>
      ))}

      {/* Price tag indicators */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const shelf = Math.floor(i / 3)
        const product = i % 3
        return (
          <mesh
            key={`tag-${i}`}
            position={[-0.2 + product * 0.2, 0.15 - shelf * 0.25, 0.08]}
          >
            <boxGeometry args={[0.03, 0.03, 0.01]} />
            <meshStandardMaterial color="#ffd93d" emissive="#ffd93d" emissiveIntensity={0.3} />
          </mesh>
        )
      })}

      {/* Shopping indicator particles */}
      <points position={[0, -0.2, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={15}
            array={generateParticles(15, 0.8)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#06b6d4" sizeAttenuation />
      </points>
    </group>
  )
}

// IoT: Webserver with temperature/humidity sensors and display
export function IoTVisualization() {
  const serverRef = useRef<THREE.Mesh>(null)
  const tempBarsRef = useRef<THREE.Group>(null)
  const humidityBarsRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    // Server rotation
    if (serverRef.current) {
      serverRef.current.rotation.z += 0.02
    }

    // Animated temperature bars
    if (tempBarsRef.current) {
      tempBarsRef.current.children.forEach((bar, i) => {
        const baseHeight = 0.05 + (i * 0.02)
        const variation = Math.sin(clock.elapsedTime * 2 + i) * 0.04
        bar.scale.y = baseHeight + variation
      })
    }

    // Animated humidity bars
    if (humidityBarsRef.current) {
      humidityBarsRef.current.children.forEach((bar, i) => {
        const baseHeight = 0.05 + (i * 0.02)
        const variation = Math.sin(clock.elapsedTime * 1.5 + i + 2) * 0.04
        bar.scale.y = baseHeight + variation
      })
    }
  })

  return (
    <group>
      {/* Central Webserver/Hub */}
      <mesh ref={serverRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.15, 0.12]} />
        <meshStandardMaterial color="#a855f7" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Server indicator lights */}
      {[0, 1, 2].map((i) => (
        <mesh key={`light-${i}`} position={[-0.055, 0.05 - i * 0.05, 0.065]}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshStandardMaterial
            color={i === 0 ? '#22c55e' : i === 1 ? '#fbbf24' : '#ef4444'}
            emissive={i === 0 ? '#22c55e' : i === 1 ? '#fbbf24' : '#ef4444'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Temperature Sensor - Left */}
      <mesh position={[-0.25, 0.15, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial color="#ff6b6b" metalness={0.6} />
      </mesh>

      {/* Temperature display bars */}
      <group ref={tempBarsRef} position={[-0.25, -0.05, 0]}>
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i} position={[(i - 2.5) * 0.04, 0, 0]}>
            <boxGeometry args={[0.02, 0.1, 0.02]} />
            <meshStandardMaterial color="#ff6b6b" metalness={0.5} />
          </mesh>
        ))}
      </group>

      {/* Humidity Sensor - Right */}
      <mesh position={[0.25, 0.15, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial color="#4ecdc4" metalness={0.6} />
      </mesh>

      {/* Humidity display bars */}
      <group ref={humidityBarsRef} position={[0.25, -0.05, 0]}>
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i} position={[(i - 2.5) * 0.04, 0, 0]}>
            <boxGeometry args={[0.02, 0.1, 0.02]} />
            <meshStandardMaterial color="#4ecdc4" metalness={0.5} />
          </mesh>
        ))}
      </group>

      {/* Display Screen - Bottom */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[0.18, 0.08, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} />
      </mesh>

      {/* Screen content - data indicators */}
      {[0, 1].map((i) => (
        <group key={`screen-${i}`} position={[-0.06 + i * 0.12, -0.15, 0.012]}>
          {/* Value bar */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.04, 0.04, 0.001]} />
            <meshStandardMaterial
              color={i === 0 ? '#ff6b6b' : '#4ecdc4'}
              emissive={i === 0 ? '#ff6b6b' : '#4ecdc4'}
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      ))}

      {/* Connection lines - data flow */}
      {[[-0.25, 0.1], [0.25, 0.1]].map((sensorPos, i) => (
        <mesh key={`connection-${i}`} position={[(sensorPos[0] as number) / 2, (sensorPos[1] as number) / 2, 0]}>
          <cylinderGeometry
            args={[
              0.005,
              0.005,
              Math.sqrt((sensorPos[0] as number) ** 2 + (sensorPos[1] as number) ** 2),
              8,
            ]}
          />
          <meshStandardMaterial color="#a855f7" transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Data transmission particles */}
      <points position={[0, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={12}
            array={generateParticles(12, 0.6)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#e879f9" sizeAttenuation />
      </points>
    </group>
  )
}

// AI: Voice waveform visualization
export function AIVisualization() {
  const lineRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.children.forEach((child, i) => {
        const time = clock.elapsedTime
        // Create multiple waves for a speaking effect
        const wave1 = Math.sin((i - 20) * 0.15 + time * 3) * 0.08
        const wave2 = Math.sin((i - 20) * 0.08 + time * 2.5 + 1) * 0.05
        const wave3 = Math.sin((i - 20) * 0.12 + time * 3.5) * 0.03
        child.position.y = wave1 + wave2 + wave3
        child.scale.y = 1 + Math.abs(wave1 + wave2 + wave3) * 2
      })
    }
  })

  return (
    <group>
      {/* Waveform bars - simulating audio frequencies */}
      <group ref={lineRef}>
        {Array.from({ length: 40 }).map((_, i) => (
          <mesh key={i} position={[(i - 20) * 0.05, 0, 0]}>
            <boxGeometry args={[0.03, 0.2, 0.02]} />
            <meshStandardMaterial
              color="#22c55e"
              metalness={0.7}
              roughness={0.2}
              emissive="#22c55e"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Center microphone indicator */}
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#84cc16" metalness={0.9} emissive="#84cc16" emissiveIntensity={0.4} />
      </mesh>

      {/* Concentric rings for sound waves */}
      {[0.15, 0.25, 0.35].map((radius, i) => (
        <mesh key={`ring-${i}`} position={[0, 0.15, 0]}>
          <torusGeometry args={[radius, 0.01, 16, 100]} />
          <meshStandardMaterial
            color="#86efac"
            transparent
            opacity={0.4 - i * 0.1}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

// Racing: Rotating steering wheel
export function RacingVisualization() {
  const wheelRef = useRef<THREE.Group>(null)
  const rimRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (rimRef.current) rimRef.current.rotation.z += 0.05
  })

  return (
    <group ref={wheelRef}>
      {/* Steering wheel rim */}
      <group ref={rimRef}>
        <mesh>
          <torusGeometry args={[0.25, 0.04, 16, 100]} />
          <meshStandardMaterial color="#ea580c" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Spokes */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
            <boxGeometry args={[0.04, 0.2, 0.04]} />
            <meshStandardMaterial color="#f97316" metalness={0.8} />
          </mesh>
        ))}

        {/* Center hub */}
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
          <meshStandardMaterial color="#ff6b35" metalness={0.95} />
        </mesh>
      </group>

      {/* Speed indicator particles */}
      <points position={[0, 0, 0.3]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={12}
            array={new Float32Array(
              Array.from({ length: 36 }, (_, i) => {
                const angle = (i / 12) * Math.PI * 2
                return [Math.cos(angle) * 0.15, Math.sin(angle) * 0.15, 0][i % 3]
              })
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ff9a56" sizeAttenuation />
      </points>
    </group>
  )
}

// Task Management Dashboard
export function DnDVisualization() {
  const tasksRef = useRef<THREE.Group>(null)
  const boardRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (boardRef.current) {
      boardRef.current.rotation.y += 0.002
    }

    // Animate tasks moving between columns
    if (tasksRef.current) {
      tasksRef.current.children.forEach((taskGroup, i) => {
        const time = clock.elapsedTime
        const column = i % 3
        const taskInColumn = Math.floor(i / 3)

        // Move tasks cyclically through columns
        const cycleTime = 6
        const progress = (time / cycleTime) % 1
        const targetColumn = (column + Math.floor(time / cycleTime)) % 3

        // Smooth movement between columns
        const ease = Math.sin(progress * Math.PI) * 0.1
        taskGroup.position.x = -0.22 + targetColumn * 0.22 + ease
        taskGroup.position.y = 0.15 - taskInColumn * 0.12
      })
    }
  })

  return (
    <group ref={boardRef}>
      {/* Board background */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[0.7, 0.35, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} />
      </mesh>

      {/* Column headers */}
      {['TO-DO', 'IN PROGRESS', 'DONE'].map((label, i) => (
        <group key={`header-${i}`} position={[-0.22 + i * 0.22, 0.25, 0]}>
          {/* Column separator */}
          <mesh position={[0, -0.15, 0.01]}>
            <boxGeometry args={[0.01, 0.4, 0.01]} />
            <meshStandardMaterial color="#4f46e5" metalness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Task cards with animation */}
      <group ref={tasksRef}>
        {/* Create 9 task cards (3 per column) */}
        {Array.from({ length: 9 }).map((_, i) => {
          const colors = [
            '#ef4444', // Red - high priority
            '#fbbf24', // Yellow - medium priority
            '#22c55e', // Green - low priority
          ]
          const color = colors[i % 3]

          return (
            <group key={`task-${i}`} position={[-0.22, 0.15, 0]}>
              {/* Task card background */}
              <mesh position={[0, 0, 0.01]}>
                <boxGeometry args={[0.16, 0.08, 0.01]} />
                <meshStandardMaterial color="#2a2a2a" metalness={0.4} />
              </mesh>

              {/* Priority indicator bar */}
              <mesh position={[-0.075, 0, 0.015]}>
                <boxGeometry args={[0.01, 0.08, 0.01]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={0.4}
                />
              </mesh>

              {/* Task progress indicator */}
              <mesh position={[0.05, 0.02, 0.015]}>
                <boxGeometry args={[0.08, 0.02, 0.01]} />
                <meshStandardMaterial color="#4f46e5" metalness={0.6} />
              </mesh>

              {/* Task checkbox */}
              <mesh position={[-0.06, -0.02, 0.015]}>
                <boxGeometry args={[0.03, 0.03, 0.01]} />
                <meshStandardMaterial color={color} metalness={0.5} />
              </mesh>
            </group>
          )
        })}
      </group>

      {/* Floating completion particles */}
      <points position={[0.22, 0.2, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={10}
            array={generateParticles(10, 0.3)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#22c55e" sizeAttenuation />
      </points>

      {/* Progress indicator at bottom */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.01]} />
        <meshStandardMaterial color="#4f46e5" metalness={0.5} />
      </mesh>

      {/* Progress fill */}
      <mesh position={[-0.15, -0.2, 0.01]}>
        <boxGeometry args={[0.2, 0.02, 0.01]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}

// Real Estate: Building structure
// Real Estate: Multiple property listings grid
export function RealEstateVisualization() {
  const gridRef = useRef<THREE.Group>(null)
  const propertiesRef = useRef<THREE.Mesh[]>([])

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.y += 0.002
    }

    // Animate properties with hover effect
    propertiesRef.current.forEach((property, i) => {
      const time = clock.elapsedTime
      const baseY = property.userData.baseY || 0
      property.position.y = baseY + Math.sin(time * 1.5 + i * 0.5) * 0.02
    })
  })

  // Property data with prices and status
  const properties = [
    { color: '#06b6d4', price: 450000, status: 'available' },
    { color: '#f97316', price: 320000, status: 'pending' },
    { color: '#22c55e', price: 580000, status: 'available' },
    { color: '#ef4444', price: 275000, status: 'sold' },
    { color: '#8b5cf6', price: 425000, status: 'available' },
    { color: '#ec4899', price: 350000, status: 'pending' },
  ]

  return (
    <group ref={gridRef}>
      {/* Properties grid (2x3) */}
      {properties.map((prop, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        const xPos = -0.2 + col * 0.2
        const yPos = 0.1 - row * 0.15

        return (
          <group key={`property-${i}`} position={[xPos, yPos, 0]}>
            {/* Property card background */}
            <mesh
              ref={(el) => {
                if (el) {
                  propertiesRef.current[i] = el
                  el.userData.baseY = yPos
                }
              }}
              position={[0, 0, 0]}
            >
              <boxGeometry args={[0.14, 0.12, 0.02]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.4} />
            </mesh>

            {/* Property image area */}
            <mesh position={[0, 0.035, 0.015]}>
              <boxGeometry args={[0.12, 0.06, 0.01]} />
              <meshStandardMaterial color={prop.color} metalness={0.6} />
            </mesh>

            {/* Price tag */}
            <mesh position={[0, -0.02, 0.015]}>
              <boxGeometry args={[0.08, 0.025, 0.01]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.7} />
            </mesh>

            {/* Status indicator dot */}
            <mesh position={[0.063, 0.055, 0.02]}>
              <sphereGeometry args={[0.008, 8, 8]} />
              <meshStandardMaterial
                color={
                  prop.status === 'available'
                    ? '#22c55e'
                    : prop.status === 'pending'
                      ? '#fbbf24'
                      : '#ef4444'
                }
                emissive={
                  prop.status === 'available'
                    ? '#22c55e'
                    : prop.status === 'pending'
                      ? '#fbbf24'
                      : '#ef4444'
                }
                emissiveIntensity={0.6}
              />
            </mesh>

            {/* Location indicator */}
            <mesh position={[-0.063, 0.055, 0.02]}>
              <boxGeometry args={[0.01, 0.01, 0.01]} />
              <meshStandardMaterial color="#06b6d4" metalness={0.5} />
            </mesh>
          </group>
        )
      })}

      {/* Search/filter bar at bottom */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.6, 0.04, 0.02]} />
        <meshStandardMaterial color="#4f46e5" metalness={0.5} />
      </mesh>

      {/* Filter buttons */}
      {[0, 1, 2].map((i) => (
        <mesh key={`filter-${i}`} position={[-0.2 + i * 0.2, -0.3, 0.015]}>
          <boxGeometry args={[0.08, 0.025, 0.01]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.6}
            emissive="#06b6d4"
            emissiveIntensity={i === 1 ? 0.5 : 0}
          />
        </mesh>
      ))}

      {/* Listing counter */}
      <mesh position={[0, -0.38, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.01]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Activity particles (new listings coming in) */}
      <points position={[0.3, 0.15, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={8}
            array={generateParticles(8, 0.2)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#06b6d4" sizeAttenuation />
      </points>
    </group>
  )
}
