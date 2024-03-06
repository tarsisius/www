<script>
  import Header from "$lib/components/header.svelte"
</script>

<Header />
<main>
  <slot />
</main>

<style>
  :global(:root) {
    --background: #f4f4f5;
    --foreground: #27272a;

    --accent-background: #ffffff;
    --accent-foreground: #71717a;

    --border: #d4d4d8;
    --accent-border: #3f3f46;
  }

  :global(body) {
    font-family: "Figtree", sans-serif;
    color: var(--foreground);
    background-color: var(--background);
  }

  @keyframes -global-reveal {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 100%;
      transform: translateY(0);
    }
  }

  @keyframes -global-fade {
    0% {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }

  main {
    max-width: 32rem;
    margin: 2.25rem auto;
    @media (min-width: 32rem) {
      padding: 0 2rem;
    }
  }
</style>
