<script lang="ts">
  import Header from "$lib/components/header.svelte"
</script>

<Header />
<main>
  <slot />
</main>

<style>
  main {
    max-width: 32rem;
    margin: 2.25rem auto;
    padding: 0 1rem;
    @media (min-width: 32rem) {
      padding: 0 2rem;
    }
  }
</style>
