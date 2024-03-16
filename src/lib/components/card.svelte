<script lang="ts">
  import type { Meta } from '$lib/const'
  import { base } from '$app/paths'
  import Date from '$lib/components/icons/date.svelte'
  import Time from '$lib/components/icons/time.svelte'

  export let meta: Meta
  export let home: boolean
  $: ({ title, slug, published } = meta)

  import { dateFormat } from '$lib/time'
</script>

<article>
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
      {dateFormat(published.date)}
    </date>
    <time datetime={published.time}>
      <Time size={12} />
      {published.time}
    </time>
  </div>
</article>

<style>
  article {
    margin-bottom: 2.75rem;
  }

  .title {
    /* font-family: 'Anton', sans-serif; */
    font-family: var(--font-serif-light);
    color: var(--text-hover);
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin: 0;
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
    letter-spacing: 0.02em;
    font-size: 0.8rem;
    text-transform: uppercase;
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
