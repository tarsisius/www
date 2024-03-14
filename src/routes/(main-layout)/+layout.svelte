<script lang="ts">
  import Footer from '$lib/components/footer.svelte'
  import Header from '$lib/components/header.svelte'
</script>

<main>
  <Header />
  <slot />
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 32rem;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>
