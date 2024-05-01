<script lang="ts">
  import '../app.css'
</script>

<slot />

<style>
  :global(:root) {
    --text: #9ca3af;
    --text-hover: #374151;
    --bg: #fff;
    --font: 'martian_mono', monospace;
  }

  :global(body) {
    margin: 0;
    font-family: var(--font);
    font-weight: 400;
    color: var(--text);
    background-color: var(--bg);
    font-size: 9pt;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  :global(p) {
    font-size: inherit;
    line-height: 1.75;
  }

  :global(a) {
    color: var(--text);
    text-decoration: none;
  }

  :global(img) {
    max-width: 100%;
    height: auto;
  }

  :global(h1, h2, h3, h4, h5) {
    letter-spacing: 0.05rem;
    font-family: var(--font);
    line-height: 2;
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
