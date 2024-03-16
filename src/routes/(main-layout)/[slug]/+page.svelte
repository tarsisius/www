<script lang="ts">
  import { base } from '$app/paths'
  import ChevronLeft from '$lib/components/icons/chevron-left.svelte'
  import Card from '$lib/components/card.svelte'

  import type { PageServerData } from './$types'
  export let data: PageServerData
</script>

<svelte:head>
  <title>thp. | {data.post.title}</title>
  <meta name="description" content={data.post.title} />
</svelte:head>

<article>
  <div class="top">
    <ChevronLeft size={14} />
    <a href="{base}/">back to list</a>
  </div>
  <Card meta={data.post} home={false} />
  <div class="main-content">
    {@html data.post.html}
  </div>
</article>

<style>
  article {
    max-width: 32rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .top {
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    animation: fade 0.8s forwards;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .top a:hover {
    color: var(--text-hover);
  }

  .main-content {
    color: var(--text-hover);
    animation: fade 1.6s forwards;
  }
</style>
