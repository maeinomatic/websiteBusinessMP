import '@react-three/fiber'

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
