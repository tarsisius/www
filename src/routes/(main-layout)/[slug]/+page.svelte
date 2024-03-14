<script lang="ts">
  import { base } from '$app/paths'
  import ChevronLeft from '$lib/components/icons/chevron-left.svelte'
  import PostCard from '$lib/components/post-card.svelte'

  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
  <title>thp. | {data.post.meta.title}</title>
  <meta name="description" content={data.post.meta.title} />
</svelte:head>

<article>
  <div class="top">
    <ChevronLeft size={14} />
    <a href="{base}/">back to list</a>
  </div>
  <PostCard meta={data.post.meta} home={false} />
  <div class="main-content">
    {@html data.post.html}
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
  }

  .top {
    margin-bottom: 0.5rem;
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
