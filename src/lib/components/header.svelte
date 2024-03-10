<script lang="ts">
  import ThreeDScene from "$lib/components/3d/scene.svelte"
</script>

<header>
  <figure>
    <ThreeDScene />
  </figure>
</header>

<style>
  header {
    max-width: 42rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 2rem 1rem;
    @media (min-width: 42rem) {
      padding: 2rem 2rem;
    }
  }

  header figure {
    margin: 0;
    padding: 0;
  }
</style>
