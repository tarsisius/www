<script lang="ts">
  import { T, Canvas } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'

  import Renderer from '$lib/components/3d/renderer.svelte';
  import ThreeDBox from '$lib/components/3d/box.svelte'
</script>

<h1>
  <Canvas>
    <Renderer />
    <T.PerspectiveCamera
      makeDefault
      position={[0, 0, 10]}
      on:create={({ ref }) => {
        ref.lookAt(0, 1, 0)
      }}>
      <OrbitControls enableZoom={false} enableDamping={false} />
    </T.PerspectiveCamera>
    <ThreeDBox />
    <T.AmbientLight intensity={1} />
  </Canvas>
</h1>

<style>
  h1 {
    margin: 0;
    padding: 0;
    height: 120px;
    width: 120px;
    animation: reveal 1s backwards;
  }
</style>
