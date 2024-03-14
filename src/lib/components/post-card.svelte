<script lang="ts">
  import { base } from '$app/paths'
  import type { Meta } from '$lib/const'

  export let meta: Meta
  $: ({ title, slug, published } = meta)
</script>

<a href="{base}/{slug}">
  <span>
    {published.date}
  </span>
  <b>
    {title}
  </b>
</a>

<style>
  a {
    position: relative;
    margin: 0;
    transition-timing-function: cubic-bezier(0.2, -0.25, 0, 1.6);
    transition-duration: 0.3s;
    transition-property: transform;
  }

  a:hover {
    color: var(--text-hover);
  }

  a span {
    opacity: 0.5;
    margin-right: 0.5rem;
  }

  a b {
    font-weight: bolder;
  }
</style>
