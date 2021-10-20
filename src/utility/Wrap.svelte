<!-- Wrapper -->

<script>
  import { fly, fade } from 'svelte/transition';
  export let flyDirection;

  const distance = 3000;
  const delay = 0;
  const duration = 200;
  const flyDuration = 500;
</script>

{#if flyDirection === 'right'}

  <div
    class='transition-wrapper'
    in:fly='{{x:-distance, delay: delay, duration: flyDuration}}'
    out:fade='{{duration: duration}}'
  >
    <slot></slot>
  </div>

{:else}

  <div
    class='transition-wrapper'
    in:fly='{{x:distance, delay: delay, duration: flyDuration}}'
    out:fade='{{duration: duration}}'
    >
    <slot></slot>
  </div>

{/if}