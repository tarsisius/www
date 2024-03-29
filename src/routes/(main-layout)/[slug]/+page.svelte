<script lang="ts">
  import { base } from '$app/paths'
  import ChevronLeft from '$lib/components/icons/chevron-left.svelte'
  import Card from '$lib/components/card.svelte'
  import { dateFormat } from '$lib/time'

  import type { PageServerData } from './$types'
  export let data: PageServerData
</script>

<svelte:head>
  <title>thp. | {data.meta.title}</title>
  <meta name="description" content={data.meta.title} />
</svelte:head>

<article>
  <div class="top">
    <ChevronLeft size={14} />
    <a href="{base}/">back to list</a>
  </div>
  <Card meta={data.meta} home={false} />
  <div class="main-content">
    {@html data.html}
  </div>
  {#if data.meta.updated !== data.meta.published}
    <div class="updated">
      Latest update :<date datetime={data.meta.updated}>
        {dateFormat(data.meta.updated)}
      </date>
    </div>
  {/if}
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

  .updated {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    letter-spacing: 0.02em;
    font-size: 0.8rem;
    text-transform: uppercase;
    animation: fade 0.8s forwards;
  }
</style>
