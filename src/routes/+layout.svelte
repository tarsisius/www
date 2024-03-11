<script>
  import "../app.css"
</script>

<slot />

<style>
  :global(:root) {
    --blue: #10a0a0;
    --black: #040304;
    --white: #f8f8f8;
  }

  :global(body) {
    font-family: "JetBrains Mono", sans-serif;
    font-weight: 400;
    color: var(--white);
    background-color: var(--black);
    font-size: 12pt;
  }

  :global(p) {
    line-height: 1.8rem;
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
