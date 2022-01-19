<!-- Resume -->

<script>
  let highlightedCat = 'coding';
  export let res;

  // Alphabetize skills.
  $: skills = res?.skills.skills.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // Takes an array of categories. If one of those is the highlighted category, add the
  // CSS class to apply that category's unique color.
  $: skillColor = (cats) => {
    if (cats.includes(highlightedCat)) return `highlight ${highlightedCat}`;
    return '';
  };

  // Connected to `onClick`. Expands (or hides) div to show/hide content, and toggles
  // CSS class that causes child SVG element to rotate.
  function expand() {
    this.classList.toggle('rotated');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    };
  };

  // Return a string of either one or two dates.
  function renderDates(start, end) {
    if (!end || (start === end)) return start;
    return `${start}-${end}`;
  };
</script>

<div class={'page-wrapper resume'}>

  <section class='content res-headline'>
    <p class='res-headline-text'>{res.intro.headline.general}</p>
  </section>

  <section class='content res-achievements'>
    <h2 class='res-sec-title'>At A Glance</h2>
    <ul>
      {#each res.intro.achievements.general as item}
        <li class='achievement'>{item}</li>
      {/each}
    </ul>
  </section>

  <section class='content res-endorsements'>
    <ul>
      {#each res.endorsements as {name, title, quote}}
        <li class='endorsement'>
          <div class='svg-wrap endorsement-icon preload'>
            <svg
              class="svg-quote"
              viewBox="0 0 100 71"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(1,0,0,1,-255.796,-131.335)">
                <g transform="matrix(3.23417,0,0,3.23417,-2301.4,-336.441)">
                  <path d="M809.985,166.436C809.381,166.436 808.906,166.22 808.56,165.787C808.215,165.355 808.042,164.879 808.042,164.36C808.042,163.581 808.215,162.803 808.56,162.024L814.131,147.361C814.563,146.496 814.995,145.825 815.427,145.349C815.858,144.874 816.549,144.636 817.499,144.636L819.702,144.636C820.393,144.636 820.911,144.895 821.257,145.414C821.602,145.933 821.688,146.582 821.516,147.361L819.054,162.932C818.968,163.97 818.665,164.814 818.147,165.463C817.629,166.112 816.852,166.436 815.815,166.436L809.985,166.436ZM792.625,166.436C792.021,166.436 791.546,166.22 791.2,165.787C790.855,165.355 790.682,164.879 790.682,164.36C790.682,163.581 790.855,162.803 791.2,162.024L796.771,147.361C797.203,146.496 797.635,145.825 798.067,145.349C798.498,144.874 799.189,144.636 800.139,144.636L802.342,144.636C803.033,144.636 803.551,144.895 803.896,145.414C804.242,145.933 804.328,146.582 804.156,147.361L801.694,162.932C801.608,163.97 801.305,164.814 800.787,165.463C800.269,166.112 799.492,166.436 798.455,166.436L792.625,166.436Z"/>
                </g>
              </g>
            </svg>
          </div>
          <div class='endorsement-text'>
            <p class='endorse-quote'>{quote}</p>
            <p class='endorse-person'>{name}<br>{title}</p>
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <section class='content res-edu'>
    <div class='edu'>
      <h3>Education</h3>
      {#each res.education as {degreeShort, subject, nameLong, gradYear}}
        <p><span class='degree'>{degreeShort} </span><span class='subject'>{subject}</span><br><span class='name'>{nameLong}</span> <span class='year'>{gradYear}</span></p>
      {/each}
    </div>
  </section>

  <section class='content res-skills'>
    <h2 class='res-sec-title'>Skills</h2>
    <div class='skill-btns'>
      {#each res.skills.categories as {id, displayName}}
        <button
          class={`btn skill-btn ${id}`}
          on:click={() => highlightedCat = id}
        >
          <p>{displayName}</p>
        </button>
      {/each}
    </div>
    <ul>
      {#each skills as {name, categories}}
        <li class={`skill ${skillColor(categories)}`}>{name}</li>
      {/each}
    </ul>
  </section>

  <section class='content res-exp'>
    <h2 class='res-sec-title'>Experience</h2>
    <ul>
      {#each res.experience as exp}
        {#if exp.id !== 'webdev'}
          <li class='x-wrapper exp'>
            <div
              class='x-btn'
              type='button'
              on:click|preventDefault={expand}
            >
              <div class='svg-wrap x-btn-icon-wrap preload'>
                <svg
                  class="svg-x-btn"
                  viewBox="0 0 75 75"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M45,30L45,1C45,0.448 44.552,-0 44,0C41.273,0 33.727,0 31,0C30.448,-0 30,0.448 30,1C30,6.209 30,30 30,30L1,30C0.448,30 -0,30.448 0,31C0,33.727 0,41.273 0,44C-0,44.552 0.448,45 1,45C6.209,45 30,45 30,45L30,74C30,74.552 30.448,75 31,75C33.727,75 41.273,75 44,75C44.552,75 45,74.552 45,74C45,68.791 45,45 45,45L74,45C74.552,45 75,44.552 75,44C75,41.273 75,33.727 75,31C75,30.448 74.552,30 74,30C68.791,30 45,30 45,30Z"/>
                </svg>
              </div>
              <h6 class='exp-title'>{exp.title}</h6>
              <div class='exp-org-ano-wrap'>
                <h6 class='exp-org'>{exp.organization}</h6>
                <div class='exp-year'>{renderDates(exp.startYear, exp.endYear)}</div>
              </div>
              <div class='exp-summary'>{exp.summary.general}</div>
            </div>
            <div class={`x-content blts-${exp.bullets.length}`}>
              <ul class='x-content-ul'>
                {#each exp.bullets as {lead, text}}
                  <li class='x-content-li'><span class='lead'>{lead}</span><br>{text}</li>
                {/each}
              </ul>
            </div>
          </li>
        {/if}
      {/each}
    </ul>
  </section>

  <section class='content res-interests'>
    <h2 class='res-sec-title'>Also...</h2>
    <ul>
      {#each res.interests.longForm as interest}
        <li class='interest'>{interest}</li>
      {/each}
    </ul>
  </section>

</div>

<style lang='scss'>
  @import '../../style/pages/resume.scss';
</style>