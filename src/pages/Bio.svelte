<!-- Bio -->

<script>

  import { partners } from '../content/partners';

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

  export let isDarkMode;
  $: dark = isDarkMode ? '-alt' : '';

</script>

<div class={`page-wrapper bio ${current}`}>
  <div class="content content-30-left content-left-bio">
    <div class="headshot-wrapper">
      <img
        class="switchable-img"
        id="headshot"
        src={`../assets/images/headshot${dark}.png`}
        title="Witness me!"
        alt="Headshot: Scott Silsbe, Cool Guy"
      >
    </div>
  </div>

  <section class="content content-70-right content-right-bio large-text">
    <p>Freedom discovers man the moment he loses concern over what impression he is making or about to make.</p>
    <p>A full-stack applicaton. A React app connected to a Node.js server using socket.io.</p>
  </section>

  <div class='text-divider'>
    <div class="text-divider-bar"></div>
    <p class="text-divider-text">Who I've worked with</p>
    <div class="text-divider-bar"></div>
  </div>

  <section class="partner-logo-grid">
    {#each partners as { id, alt }}
      <img class="switchable-img" id={id}
        src={`../assets/images/${id}${dark}.png`} alt={alt}>
    {/each}
  </section>
</div>