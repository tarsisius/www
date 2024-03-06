<script lang="ts">
  import Pointer from "$lib/components/icons/pointer.svelte"
  import type { Meta } from "$lib/extract-markdown"

  export let meta: Meta
  $: ({ title, slug, published } = meta)
</script>

<a href={slug}>
  <h2>
    {title}
  </h2>
  <div class="right">
    <p>{published.date}</p>
    <Pointer />
  </div>
</a>

<style>
  a {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    vertical-align: baseline;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid var(--border);
    animation: reveal 0.8s cubic-bezier(0.5, -0.2, 0.1, 1.2) forwards;
    padding: 1rem 0;
  }

  a:hover {
    border-bottom: 1px solid var(--accent-border);
  }

  h2 {
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    position: relative;
    margin:0;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: inherit;

    transition-timing-function: cubic-bezier(0.2, -0.25, 0, 1.6);
    transition-duration: 0.3s;
    transition-property: transform;
    transform: translateX(1.5rem);
  }

  a:hover .right {
    transform: translateX(0);
  }

  .right p {
    margin:0;
    opacity: 0.7;
    height: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    position: relative;
  }
</style>
