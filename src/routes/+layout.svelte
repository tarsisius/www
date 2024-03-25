<script lang="ts">
  import '../app.css'
</script>

<slot />

<style>
  :global(:root) {
    --text: #9ca3af;
    --text-hover: #374151;
    --bg: #fff;
    --font-sans-book: '__sansBook_c41cca', '__sansBook_Fallback_c41cca',
      sans-serif;
    --font-sans-light: '__sansLight_462f7d', '__sansLight_Fallback_462f7d',
      sans-serif;
    --font-serif-light: '__serifLight_bac4ed', '__serifLight_Fallback_bac4ed',
      serif;
  }

  :global(body) {
    margin: 0;
    font-family: var(--font-sans-book);
    font-weight: 400;
    color: var(--text);
    background-color: var(--bg);
    font-size: 12pt;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  :global(p) {
    font-size: inherit;
    line-height: 1.75rem;
  }

  :global(a) {
    color: var(--text);
    text-decoration: none;
  }

  :global(h1, h2, h3, h4, h5) {
    font-family: var(--font-serif-light);
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
