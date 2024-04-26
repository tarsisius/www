<script>
  import { base } from '$app/paths'
</script>

<div class="footer">
  <div class="top">
    <a class="link" href={base} target="_blank">@thp</a>
    <span class="dot">.</span>
    <a class="link" href={base} target="_blank">about</a>
    <span class="dot">.</span>
    <a class="link" href={base} target="_blank">rss</a>
  </div>
</div>

<style>
  .footer {
    max-width: 32rem;
    margin: 4rem auto 2rem auto;
    padding: 0 2rem;
    font-size: inherit;
    font-weight: inherit;
  }

  .link:hover {
    color: var(--text-hover);
  }

  .dot {
    color: var(--text-hover);
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
</style>
