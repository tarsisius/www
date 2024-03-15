<script lang="ts">
  import type { PageData } from './$types'
  import Card from '$lib/components/card.svelte'

  export let data: PageData
</script>

<svelte:head>
  <title>thp. | Life Log Site</title>
  <meta name="description" content="It's my life logging" />
</svelte:head>

<div class="home">
  {#each data.meta as meta}
    <Card {meta} home />
  {/each}
</div>

<style>
  .home {
    max-width: 32rem;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>
