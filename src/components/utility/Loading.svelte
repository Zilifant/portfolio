<!-- Loading Overlay -->
<!--
Displayed in main content section while waiting for page data to load from content server.
-->

<script>
  import { fade } from 'svelte/transition';

  export let loaded;

  const delayIn = 0;
  const durationIn = 0;
  const delayOut = 0;
  const durationOut = 200;
</script>

<div
  class='transition-wrapper'
  in:fade= '{{ delay: delayIn,  duration: durationIn  }}'
  out:fade='{{ delay: delayOut, duration: durationOut }}'
>
  <div class={`page-wrapper loading-grid ${loaded ? 'loaded' : ''}`}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

<style lang='scss'>
  @import '../../style/utility/loading.scss';
</style>