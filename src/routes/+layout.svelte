<script lang="ts">
  import '@fontsource-variable/albert-sans'
</script>

<slot />

<style>
  :global(:root) {
    --text: #9ca3af;
    --text-hover: #374151;
    --bg: #fff;
  }

  :global(body) {
    margin: 0;
    font-family: 'Albert Sans', sans-serif;
    font-weight: 400;
    color: var(--text);
    background-color: var(--bg);
    font-size: 12pt;
  }

  :global(p) {
    font-size: inherit;
    line-height: 1.75rem;
  }

  :global(a) {
    color: var(--text);
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
