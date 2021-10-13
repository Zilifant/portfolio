<!-- Bio -->

<script>
  export let isDarkMode;
  $: dark = isDarkMode ? '-alt' : '';
</script>

<div class="content content-30-left content-left-home">
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

<section class="content content-70-right content-right-home">
  <h6 class="content-title">About me</h6>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, con&shy;secte&shy;tur adip&shy;isc&shy;ing elit, sed do eius&shy;mod tem&shy;por in&shy;ci&shy;didunt ut la&shy;bore et do&shy;lore magna ali&shy;qua. Ut enim ad minim ve&shy;niam, quis nos&shy;trud ex&shy;erci&shy;ta&shy;tion ul&shy;lamco la&shy;boris nisi ut aliquip ex ea com&shy;modo con&shy;se&shy;quat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.</p>
</section>

<div class="horz-bar section-divider"></div>

<section class="content">
  <p class="content-text-center">
    Some of the companies and organizations I've worked with...
  </p>
</section>

<section class="partner-logo-grid">
  <img class="switchable-img" id="pax"
       src={`../assets/images/pax${dark}.png`} alt="Penny Arcade Expo">
  <img class="switchable-img" id="playcrafting"
       src={`../assets/images/playcrafting${dark}.png`} alt="PLaycrafting NYC">
  <img class="switchable-img" id="gencon"
       src={`../assets/images/gencon${dark}.png`} alt="Gen Con">
  <img class="switchable-img" id="cuny"
       src={`../assets/images/cuny${dark}.png`} alt="City University of New York">
  <img class="switchable-img" id="g4c"
       src={`../assets/images/g4c${dark}.png`} alt="Games for Change">
  <img class="switchable-img" id="nyu"
       src={`../assets/images/nyu${dark}.png`} alt="New York University">
  <img class="switchable-img" id="dicetower"
       src={`../assets/images/dicetower${dark}.png`} alt="The Dice Tower">
  <img class="switchable-img" id="seriousplay"
       src={`../assets/images/seriousplay${dark}.png`} alt="Serious Play Conference">
  <img class="switchable-img" id="amc"
       src={`../assets/images/amc${dark}.png`} alt="Appalachian Mountain Club">
  <img class="switchable-img" id="gogame"
       src={`../assets/images/gogame${dark}.png`} alt="The Go Game">
  <img class="switchable-img" id="wildrence"
       src={`../assets/images/wildrence${dark}.png`} alt="Wildrence">
  <img class="switchable-img" id="hireowl"
       src={`../assets/images/hireowl${dark}.png`} alt="HireOwl">
  <img class="switchable-img" id="marist"
       src={`../assets/images/marist${dark}.png`} alt="Marist College">
  <img class="switchable-img" id="greenhouse"
       src={`../assets/images/greenhouse${dark}.png`} alt="Greenhouse">
  <img class="switchable-img" id="techday"
       src={`../assets/images/techday${dark}.png`} alt="New York Tech Day">
  <img class="switchable-img" id="technodramatists"
       src={`../assets/images/technodramatists${dark}.png`} alt="TechnoDramatists">
</section>

<div class="horz-bar section-divider"></div>

<section class="content">
  <p class="content-text-center">Want to work together?<a
    href='mailto:scott.silsbe@gmail.com'
    class='inline-email'
    >Email me.</a></p>
</section>