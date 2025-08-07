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

      // Create floating particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 800 // Reduced particles count
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.4, // Smaller particles
        color: 0xffffff,
        transparent: true,
        opacity: 0.3, // Reduced opacity
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      // Create geometric shapes
      const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.ConeGeometry(1, 2, 8),
        new THREE.TorusGeometry(1, 0.4, 16, 100),
      ]

      const materials = [
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.05, // More transparent
        }),
        new THREE.MeshBasicMaterial({
          color: 0xcccccc,
          wireframe: true,
          transparent: true,
          opacity: 0.05, // More transparent
        }),
      ]

      // Add floating geometric shapes
      for (let i = 0; i < 6; i++) {
        // Reduced number of shapes
        const geometry = geometries[Math.floor(Math.random() * geometries.length)]
        const material = materials[Math.floor(Math.random() * materials.length)]
        const mesh = new THREE.Mesh(geometry, material)

        mesh.position.x = (Math.random() - 0.5) * 50
        mesh.position.y = (Math.random() - 0.5) * 50
        mesh.position.z = (Math.random() - 0.5) * 50

        mesh.rotation.x = Math.random() * Math.PI
        mesh.rotation.y = Math.random() * Math.PI

        scene.add(mesh)
      }

      camera.position.z = 30

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        // Rotate particles
        if (particles) {
          particles.rotation.x += 0.00025 // Slowed down rotation
          particles.rotation.y += 0.0004 // Slowed down rotation
        }

        // Animate geometric shapes
        scene.children.forEach((child: any, index: number) => {
          if (child.type === "Mesh") {
            child.rotation.x += 0.0025 + index * 0.0005 // Slowed down rotation
            child.rotation.y += 0.004 + index * 0.0005 // Slowed down rotation
            child.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005 // Slowed down movement
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
