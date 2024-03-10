<script lang="ts">
  import { spring } from "svelte/motion"
  import { TextureLoader } from "three"
  import { T, useTask, useLoader } from "@threlte/core"
  import { interactivity } from "@threlte/extras"

  const { load } = useLoader(TextureLoader)

  interactivity()
  const scale = spring(1)

  let rotationX = 0
  let rotationY = 0
  let rotationZ = 0

  useTask((delta) => {
    rotationX += delta * 0.25
    rotationY += delta * 0.25
    rotationZ += delta * 0.25
  })
</script>

{#await load("/wkwk.webp") then map}
  <T.Mesh
    rotation.x={rotationX}
    rotation.y={rotationY}
    rotation.z={rotationZ}
    scale={$scale}
    on:pointerenter={() => scale.set(1.5)}
    on:pointerleave={() => scale.set(1)}>
    <T.BoxGeometry args={[3.5, 3.5, 3.5]} />
    <T.MeshStandardMaterial {map} />
  </T.Mesh>
{/await}
