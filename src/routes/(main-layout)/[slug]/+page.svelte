<script lang="ts">
  import { base } from "$app/paths"
  import Undo from "$lib/components/icons/undo.svelte"
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<svelte:head>
  <title>thp. | {data.post.meta.title}</title>
  <meta name="description" content={data.post.meta.title} />
</svelte:head>

<article>
  <div class="top">
    <Undo />
    <a href="{base}/">back to list</a>
  </div>
  <h1 class="title">{data.post.meta.title}</h1>
  <div class="date">
    <time datetime={data.post.meta.published.date}>
      {data.post.meta.published.date}
    </time>
    <small>
      {data.post.meta.published.time}
    </small>
  </div>
  <div class="main-content">
    {@html data.post.content}
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
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

  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .date {
    display: flex;
    gap: 0.5rem;
  }

  .date small {
    padding: 0.2rem 0.25rem;
  }

  .main-content {
    line-height: 1.4rem;
    animation: fade 1.6s forwards;
  }
</style>
