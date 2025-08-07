"use client"

import { useEffect, useRef } from "react"

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, particles: any, animationId: number

    const init = async () => {
      const THREE = await import("three")

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create professional floating particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 200 // Minimal for professional look
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        color: 0xffffff,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      // Create minimal geometric shapes
      const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.SphereGeometry(0.8, 32, 32),
        new THREE.OctahedronGeometry(0.6),
      ]

      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.02,
      })

      // Add minimal floating geometric shapes
      for (let i = 0; i < 2; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)]
        const mesh = new THREE.Mesh(geometry, material)

        mesh.position.x = (Math.random() - 0.5) * 30
        mesh.position.y = (Math.random() - 0.5) * 30
        mesh.position.z = (Math.random() - 0.5) * 30

        mesh.rotation.x = Math.random() * Math.PI
        mesh.rotation.y = Math.random() * Math.PI

        scene.add(mesh)
      }

      camera.position.z = 20

      // Professional animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        // Rotate particles professionally
        if (particles) {
          particles.rotation.x += 0.00005
          particles.rotation.y += 0.0001
        }

        // Animate geometric shapes professionally
        scene.children.forEach((child: any, index: number) => {
          if (child.type === "Mesh") {
            child.rotation.x += 0.0003 + index * 0.0001
            child.rotation.y += 0.0005 + index * 0.0001
            child.position.y += Math.sin(Date.now() * 0.0002 + index) * 0.001
          }
        })

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }

    init()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
}
