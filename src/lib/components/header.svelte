<script lang="ts">
  import Loader from '$lib/components/3d/loader.svelte'
</script>

<header>
  <Loader />
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    max-width: 32rem;
    margin: 2.75rem auto;
    padding: 0 2rem;
  }
</style>
