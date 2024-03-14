<script lang="ts">
  import { base } from '$app/paths'

  import Date from '$lib/components/icons/date.svelte'
  import Time from '$lib/components/icons/time.svelte'
  import ChevronLeft from '$lib/components/icons/chevron-left.svelte'

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
  <h1 class="title">{data.post.meta.title}</h1>
  <div class="published">
    <date datetime={data.post.meta.published.date}>
      <Date size={14} />
      {data.post.meta.published.date}
    </date>
    <time datetime={data.post.meta.published.time}>
      <Time size={12} />
      {data.post.meta.published.time}
    </time>
  </div>
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

  .title {
    color: var(--text-hover);
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin-bottom: 1rem;
    font-weight: bolder;
  }

  .published {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .published date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .published time {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .main-content {
    color: var(--text-hover);
    animation: fade 1.6s forwards;
  }
</style>
