<script lang="ts">
  import { TextureLoader, type Mesh } from 'three'
  import { T, useTask, useLoader } from '@threlte/core'

  const { load } = useLoader(TextureLoader)

  let mesh: Mesh

  useTask((delta) => {
    if (!mesh) return

    mesh.rotation.x += delta * 0.25
    mesh.rotation.y += delta * 0.25
    mesh.rotation.z += delta * 0.25
  })
</script>

{#await load('/wkwk.webp') then map}
  <T.Mesh bind:ref={mesh}>
    <T.BoxGeometry args={[3.8, 3.8, 3.8]} />
    <T.MeshPhongMaterial {map} />
  </T.Mesh>
{/await}
