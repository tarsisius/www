<script lang="ts">
  import { TextureLoader } from 'three'
  import Loader from '$lib/components/3d/loader.svelte'
  import wkwk from '$lib/assets/wkwk.webp'

  const textureLoader = new TextureLoader()
</script>

<header>
  {#await textureLoader.loadAsync(wkwk) then texture}
    <Loader {texture} />
  {/await}
</header>

<style>
  header {
    max-width: 34rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 2rem 1rem;
    @media (min-width: 34rem) {
      padding: 2rem 2rem;
    }
  }
</style>
