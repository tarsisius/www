<script lang="ts">
  import { TextureLoader } from "three"
  import { T, useTask, useLoader } from "@threlte/core"

  const { load } = useLoader(TextureLoader)

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
  <T.Mesh rotation.x={rotationX} rotation.y={rotationY} rotation.z={rotationZ}>
    <T.BoxGeometry args={[4.8, 4.8, 4.8]} />
    <T.MeshStandardMaterial {map} />
  </T.Mesh>
{/await}
