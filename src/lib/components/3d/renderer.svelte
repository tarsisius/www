<script lang="ts">
  import type { Camera } from 'three'
  import { useThrelte, useTask } from '@threlte/core'
  import { onMount } from 'svelte'
  import {
    EffectComposer,
    EffectPass,
    RenderPass,
    SMAAEffect,
    SMAAPreset,
    BloomEffect,
    PixelationEffect,
    KernelSize,
  } from 'postprocessing'
  const { scene, renderer, camera, size } = useThrelte()
  // Adapt the default WebGLRenderer: https://github.com/pmndrs/postprocessing#usage
  const composer = new EffectComposer(renderer)
  const setupEffectComposer = (camera: Camera) => {
    composer.removeAllPasses()
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(
      new EffectPass(
        camera,
        new BloomEffect({
          intensity: 1,
          luminanceThreshold: 0.15,
          height: 100,
          width: 100,
          luminanceSmoothing: 0.08,
          mipmapBlur: true,
          kernelSize: KernelSize.VERY_SMALL,
        })
      )
    )
    composer.addPass(new EffectPass(camera, new PixelationEffect(4)))
    composer.addPass(
      new EffectPass(camera, new SMAAEffect({ preset: SMAAPreset.LOW }))
    )
  }
  // We need to set up the passes according to the camera in use
  $: setupEffectComposer($camera)
  $: composer.setSize($size.width, $size.height)
  const { renderStage, autoRender } = useThrelte()
  // We need to disable auto rendering as soon as this component is
  // mounted and restore the previous state when it is unmounted.
  onMount(() => {
    let before = autoRender.current
    autoRender.set(false)
    return () => autoRender.set(before)
  })
  useTask(
    (delta) => {
      composer.render(delta)
    },
    {
      stage: renderStage,
      autoInvalidate: false,
    }
  )
</script>
