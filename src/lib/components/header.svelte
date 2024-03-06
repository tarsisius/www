<script lang="ts">
  import { base } from "$app/paths"

  let isOpen = false
</script>

<header>
  <a class="title" href="{base}/">thp.</a>
  <div class="menu">
    <button
      class={isOpen ? "clicked" : ""}
      type="button"
      on:click={() => (isOpen = !isOpen)}>
      menu
    </button>
    {#if isOpen}
      <ul>
        <li>
          <a href="{base}/">abot</a>
        </li>
        <li>
          <a href="{base}/">kontag</a>
        </li>
      </ul>
    {/if}
  </div>
</header>

<style>
  header {
    max-width: 32rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media (min-width: 32rem) {
      padding: 4rem 2rem;
    }
  }

  header .title {
    margin: 0;
    font-size: 2.25rem;
    font-weight: 800;
    letter-spacing: -0.08em;
    text-decoration: none;
    color: inherit;
  }

  .menu {
    position: relative;
  }

  .menu button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-family: inherit;
    cursor: pointer;
    border-radius: 1rem;
    font-weight: 500;
    font-size: inherit;
    border: none;
    background: transparent;
  }

  .menu .clicked {
    background-color: var(--accent-background);
    color: var(--accent-foreground);
  }

  .menu button:hover {
    background-color: var(--accent-background);
    color: var(--accent-foreground);
  }

  .menu button:transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  .menu ul {
    position: absolute;
    z-index: 3;
    width: 9rem;
    right: 0;
    top: 3.5rem;
    padding: 0.25rem;
    margin: 0;
    border-radius: 1rem;
    background-color: var(--accent-background);
    color: var(--accent-foreground);
  }

  .menu ul li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menu ul li a {
    font-size: inherit;
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: inherit;
    border-radius: 0.75rem;
    color: var(--accent-foreground);
  }

  .menu ul li a:hover {
    background-color: var(--background);
    color: var(--foreground);
  }
</style>
