<script lang="ts">
  import type { Meta } from '$lib/const'
  import Date from '$lib/components/icons/date.svelte'
  import Time from '$lib/components/icons/time.svelte'
  import { base } from '$app/paths'

  export let meta: Meta
  export let home: boolean
  $: ({ title, slug, published } = meta)
</script>

<h1 class="title">
  {#if home}
    <a href="{base}/{slug}">{title}</a>
  {:else}
    {title}
  {/if}
</h1>
<div class="published">
  <date datetime={published.date}>
    <Date size={14} />
    {published.date}
  </date>
  <time datetime={published.time}>
    <Time size={12} />
    {published.time}
  </time>
</div>

<style>
  .title {
    color: var(--text-hover);
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin-bottom: 1rem;
    font-weight: bolder;
  }

  .title a {
    color: var(--text-hover);
  }

  .title a:hover {
    color: var(--text);
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
</style>
