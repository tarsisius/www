<script>
  import { base } from '$app/paths'
  import i_chrome from '$lib/images/i_chrome.gif'
  import i_debian from '$lib/images/i_debian.gif'
  import i_madewithnotepad2 from '$lib/images/i_madewithnotepad2.gif'
  import i_win95 from '$lib/images/i_win95.gif'
</script>

<div class="footer">
  <div class="top">
    <a class="link" href={base} target="_blank">@thp</a>
    <span class="dot">.</span>
    <a class="link" href={base} target="_blank">about</a>
    <span class="dot">.</span>
    <a class="link" href={base} target="_blank">rss</a>
  </div>
  <div class="label">
    <img src={i_chrome} alt="chrome" />
    <img src={i_debian} alt="debian" />
    <img src={i_madewithnotepad2} alt="chrome" />
    <img src={i_win95} alt="chrome" />
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

  .label {
    margin-top: 1rem;
  }
  .label img {
    height: 1.5rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
</style>
