<!-- Wrapper -->
<!--
When switching pages, previous page's content fades out while new page's content flys in
from right or left, depending on the pages' relative positions in the navbar.
-->

<script>
  import { fly, fade } from 'svelte/transition';

  export let flyDirection;

  const distance = 3000;
  const vector = (flyDirection === 'left') ? distance : -distance;
  const delay = 0;
  const fadeDuration = 200;
  const flyDuration = 500;
</script>

<div
  class='transition-wrapper'
  in:fly='{{x:vector, delay: delay, duration: flyDuration}}'
  out:fade='{{duration: fadeDuration}}'
>
  <slot></slot>
</div>

<style lang='scss'>
  @import '../../style/utility/wrap.scss';
</style>