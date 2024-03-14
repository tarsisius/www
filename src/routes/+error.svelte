<script>
  import { base } from '$app/paths'
</script>

<svelte:head>
  <title>thp. | 404 Not Found</title>
  <meta name="description" content="404" />
</svelte:head>

<div class="error">
  <div class="top">
    <a href="{base}/">back to list</a>
  </div>
  <pre>
$$\   $$\  $$$$$$\  $$\   $$\ 
$$ |  $$ |$$$ __$$\ $$ |  $$ |
$$ |  $$ |$$$$\ $$ |$$ |  $$ |
$$$$$$$$ |$$\$$\$$ |$$$$$$$$ |
\_____$$ |$$ \$$$$ |\_____$$ |
      $$ |$$ |\$$$ |      $$ |
      $$ |\$$$$$$  /      $$ |
      \__| \______/       \__|
  </pre>
</div>

<style>
  .error {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    justify-content: center;
    max-width: 38rem;
    margin: 0 auto;
    padding: 0 1rem;
    @media (min-width: 38rem) {
      padding: 0 2rem;
    }
  }

  .top {
    margin-bottom: 1rem;
    animation: fade 0.8s forwards;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .top a {
    color: var(--text);
  }

  pre {
    margin: 0;
    text-decoration: none;
    font-size: 0.5rem;
    padding: 0;
    line-height: 0.5rem;
    font-weight: 700;
  }
</style>
