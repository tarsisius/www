<script lang="ts">
  import Header from '$lib/components/header.svelte'
</script>

<Header />
<main>
  <slot />
</main>

<style>
  main {
    max-width: 34rem;
    margin: 1rem auto;
    padding: 0 1rem;
    @media (min-width: 34rem) {
      margin: 2rem auto;
      padding: 0 2rem;
    }
  }
</style>
