<script>
  import { base } from '$app/paths'
</script>

<h1>
  <a class="link" href={base} target="_blank">@thp</a>
  <span class="dot">.</span>
  <a class="link" href={base} target="_blank">about</a>
  <span class="dot">.</span>
  <a class="link" href={base} target="_blank">rss</a>
  <br />
  <span class="since">from 2024/03/01</span>
</h1>

<style>
  h1 {
    margin-top: 2rem;
    font-size: inherit;
    font-weight: inherit;
  }

  .link:hover {
    color: var(--text-hover);
  }

  .dot {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  .since {
    opacity: 0.5;
  }
</style>
