<script lang="ts">
  import { base } from "$app/paths"
  import Pointer from "$lib/components/icons/pointer.svelte"
  import type { Meta } from "$lib/extract"

  export let meta: Meta
  $: ({ title, slug, published } = meta)
</script>

<a href="{base}/{slug}">
  <h2>
    {title}
  </h2>
  <div class="right">
    <div class="date">
      {published.date}
    </div>
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
    animation: reveal 0.8s cubic-bezier(0.5, -0.2, 0.1, 1.2) forwards;
    padding: 1rem 0;
  }

  h2 {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.25rem;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0;
    color: var(--blue);
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

  .right .date {
    margin: 0;
    height: 100%;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    position: relative;
  }
</style>
