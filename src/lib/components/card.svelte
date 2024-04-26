<script lang="ts">
  import { onMount } from 'svelte'
  import { base } from '$app/paths'

  import { dateFormat } from '$lib/time'
  import type { Meta } from '$lib/type'

  import { stagger, timeline } from 'motion'
  import SplitType from 'split-type'

  export let meta: Meta
  export let home: boolean

  $: ({ title, slug, published } = meta)

  let titleText: HTMLParagraphElement | HTMLAnchorElement

  onMount(() => {
    const splitTitle = new SplitType(titleText)

    timeline([
      [titleText, { opacity: 1 }, { duration: 0 }],
      [
        splitTitle.words!,
        {
          y: ['-100%', '0%'],
          opacity: [0, 1],
        },
        {
          delay: stagger(0.08),
          easing: [0.2, 0.8, 0.2, 1],
          duration: 0.25,
        },
      ],
    ])
  })
</script>

<article>
  {#if home}
    <div class="published">
      <date datetime={published}>
        {dateFormat(published)}
      </date>
    </div>
  {/if}
  <h1 class="title">
    {#if home}
      <a bind:this={titleText} href="{base}/{slug}">{title}</a>
    {:else}
      <p bind:this={titleText}>
        {title}
      </p>
    {/if}
  </h1>
  {#if !home}
    <div class="published">
      <date datetime={published}>
        {dateFormat(published)}
      </date>
    </div>
  {/if}
</article>

<style>
  article {
    width: 100%;
    margin-bottom: 1.8rem;
  }

  .title {
    color: var(--text-hover);
    font-size: 1.25rem;
    margin: 0;
    margin-top: 0.5rem;
    font-weight: bolder;
  }

  .title a {
    opacity: 0;
    color: var(--text-hover);
  }

  .title a:hover {
    color: var(--text);
  }

  .title p {
    opacity: 0;
  }

  .published {
    display: flex;
    gap: 0.5rem;
    margin-right: 1rem;
    letter-spacing: 0.02em;
    font-size: 0.8rem;
    text-transform: uppercase;
    animation: fade 0.8s forwards;
  }

  .published date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    article {
      flex-direction: column;
    }

    .published {
      margin-right: 0;
    }
  }
</style>
