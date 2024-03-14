<script lang="ts">
  import type { PageData } from './$types'
  import PostCard from '$lib/components/post-card.svelte'

  export let data: PageData
</script>

<svelte:head>
  <title>thp. | Life Log Site</title>
  <meta name="description" content="It's my life logging" />
</svelte:head>

<article>
  {#each data.meta as meta}
    <PostCard {meta} />
  {/each}
</article>

<style>
  article {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
</style>
