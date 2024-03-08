<main>
  <slot />
</main>

<style>
  :global(:root) {
    --blue: #10a0a0;
    --black: #212121;
    --white: #f8f8f8;
  }

  :global(body) {
    font-family: "JetBrains Mono", sans-serif;
    color: var(--white);
    background-color: var(--black);
    font-size: 14px;
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
    padding: 0 1rem;
    @media (min-width: 32rem) {
      padding: 0 2rem;
    }
  }
</style>
