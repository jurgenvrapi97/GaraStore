import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

function Model() {
  const gltf = useLoader(GLTFLoader, '/assets/Solid_Wooden_Wheel.gltf')
  return <primitive object={gltf.scene} />
}

const ThreeDProject = () => {
  const containerRef = useRef()

  useEffect(() => {
    const container = containerRef.current

    const handleWheel = (event) => {
      event.preventDefault()
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ height: '100vh', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ThreeDProject
