<main>
  <slot />
</main>

<style>
  :global(:root) {
    --blue: #10a0a0;
    --black: #040304;
    --white: #f8f8f8;
  }

  :global(html) {
    @font-face {
      font-family: "JetBrainsMono";
      src: url("$lib/assets/fonts/JetBrainsMono-Regular.ttf");
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: "JetBrainsMono";
      src: url("$lib/assets/fonts/JetBrainsMono-SemiBold.ttf");
      font-weight: 600;
      font-display: swap;
    }
    @font-face {
      font-family: "JetBrainsMono";
      src: url("$lib/assets/fonts/JetBrainsMono-Bold.ttf");
      font-weight: 700;
      font-display: swap;
    }
  }

  :global(body) {
    font-family: "JetBrains Mono", sans-serif;
    font-weight: 400;
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
</style>
