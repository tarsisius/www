<script lang="ts">
  import { T, Canvas } from "@threlte/core"

  import ThreeDBox from "$lib/components/3d/box.svelte"
</script>

<h1>
  <Canvas>
    <T.AmbientLight intensity={2} />
    <T.DirectionalLight position={[2, 1, 1]} />
    <ThreeDBox />
  </Canvas>
</h1>

<style>
  h1 {
    margin: 0;
    padding: 0;
    height: 100px;
    width: 100px;
  }
</style>
