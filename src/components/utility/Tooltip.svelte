<!-- Tooltip -->

<script>
  export let cls, side;
</script>

<div class={`ttip-parent ${cls}`}>
  <slot name='hoverContent'></slot>
  <div class={`ttip ${side}`}>
    <slot name='tipContent'></slot>
  </div>
</div>

<style lang='scss'>
  @import '../../style/utility/tooltip.scss';
</style>