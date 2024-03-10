<script lang="ts">
  import { T, Canvas } from "@threlte/core"
  import { OrbitControls } from "@threlte/extras"

  import ThreeDBox from "$lib/components/3d/box.svelte"
</script>

<h1>
  <Canvas>
    <T.PerspectiveCamera
      makeDefault
      position={[0, 0, 10]}
      on:create={({ ref }) => {
        ref.lookAt(0, 1, 0)
      }}>
      <OrbitControls enableDamping />
    </T.PerspectiveCamera>
    <T.AmbientLight intensity={2} />
    <ThreeDBox />
  </Canvas>
</h1>

<style>
  h1 {
    margin: 0;
    padding: 0;
    height: 80px;
    width: 80px;
    @media (min-width: 42rem) {
      height: 100px;
      width: 100px;
    }
  }
</style>
