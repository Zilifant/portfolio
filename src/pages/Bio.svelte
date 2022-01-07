<!-- Bio -->

<script>
  import partners from '../content/partners.json';

  export let theme;
  $: suffix = (theme === 'dark') ? '-alt' : '';
</script>

<div class={'page-wrapper bio'}>
  <div class='content content-30-left content-left-bio'>
    <div class='headshot-wrapper'>
      <img
        class='switchable-img'
        id='headshot'
        src={`../assets/images/headshot${suffix}.png`}
        title='Witness me!'
        alt='Headshot: Scott Silsbe, Cool Guy'
      >
    </div>
  </div>

  <section class='content content-70-right content-right-bio large-text'>
    <p>Hello, I'm Scott.</p>
    <p>I design, produce, and run large-scale live gaming events.</p>
    <p>Or rather, I did. Then 2020 happened. &#x1F610;</p>
    <p>While I continue to explore opportunities in the events space, my focus is now full-stack web development.</p>
    <p>Companies and organizations I've worked with...</p>
  </section>

  <section class='partner-logo-grid'>
    {#each partners as { id, alt }}
      <div class='partner-logo-wrapper'>
        <img
          class='switchable-img'
          src={`../assets/images/${id}${suffix}.png`}
          id={id}
          alt={alt}
        >
      </div>
    {/each}
  </section>
</div>

<style lang='scss'>
  @import '../style/pages/bio.scss';
</style>