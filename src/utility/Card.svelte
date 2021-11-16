<!-- Card -->

<script>
  export let cardClass
</script>

<div class={`card ${cardClass || ''}`}>
  <slot></slot>
</div>