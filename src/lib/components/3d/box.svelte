<script lang="ts">
  import { T, useTask } from "@threlte/core"
  import { interactivity } from "@threlte/extras"

  interactivity()

  let rotationX = 0
  let rotationY = 0
  let rotationZ = 0

  useTask((delta) => {
    rotationX += delta * 0.25
    rotationY += delta * 0.25
    rotationZ += delta * 0.25
  })
</script>

<T.Mesh rotation.x={rotationX} rotation.y={rotationY} rotation.z={rotationZ}>
  <T.BoxGeometry args={[2.5, 2.5, 2.5]} />
  <T.MeshBasicMaterial color="#fff" />
</T.Mesh>
