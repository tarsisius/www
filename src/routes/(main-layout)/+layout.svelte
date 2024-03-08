<script lang="ts">
  import Header from "$lib/components/header.svelte"
</script>

<Header />
<main>
  <slot />
</main>

<style>
  main {
    max-width: 42rem;
    margin: 2.25rem auto;
    padding: 0 1rem;
    @media (min-width: 42rem) {
      padding: 0 2rem;
    }
  }
</style>
