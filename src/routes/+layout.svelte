<script lang="ts">
  import '@fontsource-variable/albert-sans'
</script>

<slot />

<style>
  :global(:root) {
    --black: #040304;
    --white: #f8f8f8;
  }

  :global(body) {
    margin: 0;
    font-family: 'Times New Roman', sans-serif;
    font-weight: 400;
    color: var(--black);
    background-color: var(--white);
    font-size: 12pt;
  }

  :global(p) {
    line-height: 1.75rem;
  }

  :global(a) {
    color: var(--black);
    text-decoration: none;
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
</style>
