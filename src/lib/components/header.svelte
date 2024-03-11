<script lang="ts">
  import Loader from '$lib/components/3d/loader.svelte'
</script>

<header>
  <Loader />
</header>

<style>
  header {
    max-width: 36rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 1rem 1rem;
    @media (min-width: 36rem) {
      padding: 1rem 2rem;
    }
  }
</style>
