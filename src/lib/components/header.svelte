<script lang="ts">
  // import ThreeDScene from '$lib/components/3d/scene.svelte'
  import Loader from './bare-three/loader.svelte'
</script>

<header>
  <!-- <ThreeDScene /> -->

  <Loader />
</header>

<style>
  header {
    max-width: 34rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem 1rem;
    @media (min-width: 34rem) {
      padding: 2rem 2rem;
    }
  }
</style>
