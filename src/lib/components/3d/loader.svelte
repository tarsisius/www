<script lang="ts">
  import { onMount } from 'svelte'
  import {
    AmbientLight,
    BoxGeometry,
    Mesh,
    MeshLambertMaterial,
    PerspectiveCamera,
    Scene,
    TextureLoader,
    Vector3,
    WebGLRenderer,
  } from 'three'
  import {
    EffectComposer,
    OrbitControls,
    OutputPass,
    RenderPass,
    RenderPixelatedPass,
  } from 'three/addons'
  import wkwk from '$lib/assets/wkwk.webp'

  let el: HTMLCanvasElement

  onMount(() => {
    const camera = new PerspectiveCamera(3.8, 1 / 1, 0.01, 50000)
    camera.position.y = 20
    camera.position.x = 20 * Math.sin(0.2 * Math.PI)
    camera.position.z = 20 * Math.cos(0.2 * Math.PI)
    camera.lookAt(new Vector3(0, 0, 0))

    const geometry = new BoxGeometry()
    const material = new MeshLambertMaterial()
    const textureLoader = new TextureLoader()

    const texture = textureLoader.load(wkwk)
    material.map = texture

    const cube = new Mesh(geometry, material)
    const ambientLight = new AmbientLight(0x404040, 20)

    const scene = new Scene()
    scene.add(cube)
    scene.add(ambientLight)

    const renderer = new WebGLRenderer({
      canvas: el,
      antialias: false,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(100, 100)
    renderer.setPixelRatio(1)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = false
    controls.enableZoom = false

    const composer = new EffectComposer(renderer)

    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    // const renderPixelatedPass = new RenderPixelatedPass(2.25, scene, camera)
    // composer.addPass(renderPixelatedPass)

    const outputPass = new OutputPass()
    composer.addPass(outputPass)

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01 * 0.25
      cube.rotation.y += 0.01 * 0.25
      cube.rotation.z += 0.01 * 0.25

      composer.render()
    }

    animate()
  })
</script>

<canvas bind:this={el}> </canvas>

<style>
  canvas {
    animation: fade 1.5s forwards;
    margin: 0;
    height: 100px;
  }
</style>
