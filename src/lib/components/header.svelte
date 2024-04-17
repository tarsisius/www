<script lang="ts">
  import { base } from '$app/paths'
  import Loader from '$lib/components/3d/loader.svelte'
</script>

<header>
  <a href="{base}/">
    <Loader />
  </a>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    position: relative;

    max-width: 32rem;
    margin: 2.75rem auto;
    padding: 0 2rem;
  }
</style>
