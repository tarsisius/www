<script lang="ts">
  import { base } from '$app/paths'
  import Date from '$lib/components/icons/date.svelte'
  import type { Meta } from '$lib/extract'

  export let meta: Meta
  $: ({ title, slug, published } = meta)
</script>

<div class="card">
  <a href="{base}/{slug}">
    <h2>
      {title}
    </h2>
  </a>
  <div class="right">
    <div class="date">
      {published.date}
    </div>
    <Date size={14} />
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    animation: reveal 1.5s forwards;
    @media (min-width: 42rem) {
      flex-direction: row;
      justify-content: space-between;
      vertical-align: baseline;
    }
  }

  h2 {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.4rem;
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
