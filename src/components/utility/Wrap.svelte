<!-- Wrapper -->
<!--
When switching pages, previous page's content fades out while new page's content flys in
from right or left, depending on the pages' relative positions in the navbar.
-->

<script>
  import { fly, fade } from 'svelte/transition';

  export let animation;

  const flyDistance = 3000;
  const flyVector = (animation === 'flyLeft') ? flyDistance : -flyDistance;
  const flyInDelay = 0;
  const flyInDuration = 500;

  const fadeInDelay = 200;
  const fadeInDuration = 200;
  const fadeOutDuration = 200;
</script>

{#if animation === 'fade'}

  <div
    class='transition-wrapper'
    in:fade='{{delay: fadeInDelay, duration: fadeInDuration}}'
    out:fade='{{duration: fadeOutDuration}}'
  >
    <slot></slot>
  </div>

{:else}

  <div
    class='transition-wrapper'
    in:fly='{{x:flyVector, delay: flyInDelay, duration: flyInDuration}}'
    out:fade='{{duration: fadeOutDuration}}'
  >
    <slot></slot>
  </div>

{/if}

<style lang='scss'>
  @import '../../style/utility/wrap.scss';
</style>