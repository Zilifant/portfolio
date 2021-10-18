<!-- Wrapper -->

<script>
  import { fade } from 'svelte/transition';
</script>

<div class='view-grid'>
  <div
    class='view-wrapper'
    in:fade='{{duration: 100, delay: 150}}'
    out:fade='{{duration: 100}}'
  >
    <slot></slot>
  </div>
</div>