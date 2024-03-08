<script>
  import { base } from "$app/paths"
  import Undo from "$lib/components/icons/undo.svelte"
</script>

<svelte:head>
  <title>thp. | 404 Not Found</title>
  <meta name="description" content="404" />
</svelte:head>

<div class="error">
  <div class="top">
    <Undo />
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
  }

  .top {
    margin-bottom: 1rem;
    animation: fade 0.8s forwards;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .top a {
    color: var(--blue);
  }

  pre {
    margin: 0;
    text-decoration: none;
    font-size: 0.5rem;
    font-weight: 900;
    padding: 0;
  }
</style>
