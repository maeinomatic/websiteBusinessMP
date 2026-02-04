import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Extend React.JSX global namespace for React Three Fiber
declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      group: any
      mesh: any
      ambientLight: any
      pointLight: any
      icosahedronGeometry: any
      octahedronGeometry: any
      torusGeometry: any
      sphereGeometry: any
      boxGeometry: any
      cylinderGeometry: any
      coneGeometry: any
      meshPhongMaterial: any
      meshStandardMaterial: any
      bufferGeometry: any
      bufferAttribute: any
      pointsMaterial: any
      points: any
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)