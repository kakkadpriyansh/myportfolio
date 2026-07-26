"use client"

import { useEffect, useRef } from "react"

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, particles: any, animationId: number

    const init = async () => {
      const THREE = await import("three")

      scene    = new THREE.Scene()
      camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // ── Particles ──
      const count = 400
      const posArray   = new Float32Array(count * 3)
      const colorArray = new Float32Array(count * 3)

      const cyan   = new THREE.Color("#22d3ee")
      const violet = new THREE.Color("#8b5cf6")
      const white  = new THREE.Color("#ffffff")

      for (let i = 0; i < count; i++) {
        posArray[i * 3]     = (Math.random() - 0.5) * 60
        posArray[i * 3 + 1] = (Math.random() - 0.5) * 60
        posArray[i * 3 + 2] = (Math.random() - 0.5) * 60

        // Random color: 40% cyan, 30% violet, 30% white
        const r = Math.random()
        const c = r < 0.4 ? cyan : r < 0.7 ? violet : white
        colorArray[i * 3]     = c.r
        colorArray[i * 3 + 1] = c.g
        colorArray[i * 3 + 2] = c.b
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
      geo.setAttribute("color",    new THREE.BufferAttribute(colorArray, 3))

      const mat = new THREE.PointsMaterial({
        size:        0.15,
        vertexColors: true,
        transparent: true,
        opacity:     0.5,
        blending:    THREE.AdditiveBlending,
        depthWrite:  false,
      })

      particles = new THREE.Points(geo, mat)
      scene.add(particles)

      // ── Wireframe shapes ──
      const meshMat = new THREE.MeshBasicMaterial({
        color:      0x22d3ee,
        wireframe:  true,
        transparent: true,
        opacity:    0.025,
      })

      const shapes = [
        new THREE.IcosahedronGeometry(2.5, 0),
        new THREE.OctahedronGeometry(1.8),
        new THREE.TorusGeometry(2, 0.5, 8, 16),
      ]

      for (let i = 0; i < 3; i++) {
        const mesh = new THREE.Mesh(shapes[i], meshMat.clone())
        mesh.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
        )
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
        scene.add(mesh)
      }

      camera.position.z = 25

      // ── Animation ──
      const clock = new THREE.Clock()
      const animate = () => {
        animationId = requestAnimationFrame(animate)
        const elapsed = clock.getElapsedTime()

        if (particles) {
          particles.rotation.x = elapsed * 0.00008
          particles.rotation.y = elapsed * 0.00015
        }

        scene.children.forEach((child: any, idx: number) => {
          if (child.type === "Mesh") {
            child.rotation.x += 0.0003 + idx * 0.00005
            child.rotation.y += 0.0005 + idx * 0.0001
            child.position.y = Math.sin(elapsed * 0.2 + idx * 2) * 2
          }
        })

        renderer.render(scene, camera)
      }
      animate()

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener("resize", onResize)
      return () => window.removeEventListener("resize", onResize)
    }

    init()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (mountRef.current && renderer) {
        try { mountRef.current.removeChild(renderer.domElement) } catch {}
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
}
