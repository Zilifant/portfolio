<!-- Code -->

<script>

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

</script>

<div class={`page-wrapper code ${current}`}>
  <a
    class='mhk-url'
    href='https://mhk-front.herokuapp.com/'
    target="_blank" rel="noopener noreferrer"
  >
    MHK
  </a>
  <section class='content'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></section>

  <div id='bdy'>
    <div id='main'>
      <a href="#"><div id='moon'></div></a>
      <a href="#bdy"><div id='cover'></div></a>
    </div>
  </div>

</div>

<style lang="scss">

#moon {
  width:100px;
  height:100px;
  background:#eef;
  border-radius:50%;
  transition:all 1s;
  #bdy:target & {
    background:#F6D602;
    border:5px solid #f5eb71;
  };
}

#cover {
  width:100px;
  height:100px;
  background:#001;
  border-radius:50%;
  transform:translate(25px,-125px);
  transition:all 1s;
  #bdy:target & {
    background:#F7F7F7;
    transform:translate(85px,-185px);
  };
}

</style>