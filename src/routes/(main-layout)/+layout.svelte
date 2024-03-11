<script lang="ts">
  import Header from '$lib/components/header.svelte'
</script>

<Header />
<main>
  <slot />
</main>

<style>
  main {
    max-width: 38rem;
    margin: 1rem auto;
    padding: 0 2rem;
    @media (min-width: 38rem) {
      margin: 2rem auto;
      padding: 0 2rem;
    }
  }
</style>
