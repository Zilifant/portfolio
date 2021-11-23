<!-- Resume -->

<script>
  import res from '../content/resume.json';

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

  //-----------------//
  //Collapsible Lists//
  //-----------------//

  function expand() {
    this.classList.toggle("rotated");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    };
  };

</script>

<div class={`page-wrapper resume ${current}`}>
  <section class="content">
    <p class='resume-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </section>
  
  <section class="content">
    <div class="exl-wrapper">
      <div
        class="exl-btn"
        type="button"
        on:click|preventDefault={expand}
      >
        <div class="exl-btn-icon-wrap">
          <div class="exl-btn-icon-fore preload"></div>
          <div class="exl-btn-icon-back"></div>
        </div>
        <div class="exl-btn-text">
          <div class="exl-btn-text-head">
            <h6>Position</h6>
            <h6>2018-2020</h6>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="exl-content">
        <ul class="exl-content-ul">
          <li class="exl-content-li">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li class="exl-content-li">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li class="exl-content-li">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
          <li class="exl-content-li">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li class="exl-content-li">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li class="exl-content-li">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
      </div>
    </div>
  </section>
  
  <section class="content">
    <p class='resume-text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </section>
</div>