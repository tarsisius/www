<script lang="ts">
  import ThreeDScene from '$lib/components/3d/scene.svelte'
</script>

<header>
  <ThreeDScene />
</header>

<style>
  header {
    max-width: 34rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem 1rem;
    @media (min-width: 34rem) {
      padding: 1rem 2rem;
    }
  }
</style>
