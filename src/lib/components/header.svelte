<script lang="ts">
  import Loader from '$lib/components/3d/loader.svelte'
</script>

<header>
  <Loader />
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
