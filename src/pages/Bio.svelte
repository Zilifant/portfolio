<!-- Bio -->

<script>

  import { partners } from '../content/partners';

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

  export let isDarkMode;
  $: dark = isDarkMode ? '-alt' : '';

</script>

<div class={`page-wrapper bio ${current}`}>
  <div class='content content-30-left content-left-bio'>
    <div class='headshot-wrapper'>
      <img
        class='switchable-img'
        id='headshot'
        src={`../assets/images/headshot${dark}.png`}
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

  <!-- <div class='text-divider'>
    <div class='text-divider-bar'></div>
    <p class='text-divider-text'>Who I've worked with...</p>
    <div class='text-divider-bar'></div>
  </div> -->

  <section class='partner-logo-grid'>
    {#each partners as { id, alt }}
      <div class='partner-logo-wrapper'>
        <img
          class='switchable-img'
          src={`../assets/images/${id}${dark}.png`}
          id={id}
          alt={alt}
        >
      </div>
    {/each}
  </section>
</div>

<style lang='scss'>
  @import '../style/bio.scss';
</style>