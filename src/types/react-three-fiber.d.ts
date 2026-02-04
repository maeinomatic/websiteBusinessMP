import { GroupProps, MeshProps } from '@react-three/fiber'
import { Object3DProps } from '@react-three/fiber'
import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: Object3DProps<THREE.Group>
    mesh: Object3DProps<THREE.Mesh>
    ambientLight: Object3DProps<THREE.AmbientLight>
    pointLight: Object3DProps<THREE.PointLight>
    icosahedronGeometry: any
    meshPhongMaterial: any
    torusGeometry: any
    sphereGeometry: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any
      mesh: any
      ambientLight: any
      pointLight: any
      icosahedronGeometry: any
      meshPhongMaterial: any
      torusGeometry: any
      sphereGeometry: any
    }
  }
}
