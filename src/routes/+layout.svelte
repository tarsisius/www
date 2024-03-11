<script>
  import '../app.css'
</script>

<slot />

<style>
  :global(:root) {
    --blue: #10a0a0;
    --black: #040304;
    --white: #f8f8f8;
  }

  :global(body) {
    margin: 0;
    font-family: 'JetBrains Mono', sans-serif;
    font-weight: 400;
    color: var(--black);
    background-color: var(--white);
    font-size: 12pt;
  }

  :global(p) {
    line-height: 1.75rem;
  }

  :global(a) {
    color: var(--blue);
    text-decoration: underline;
    text-decoration-color: var(--blue);
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
