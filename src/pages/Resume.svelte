<!-- Resume -->

<script>
  import res from '../content/resume.json';
  import SVGIcon from '../utility/SVGIcon.svelte';

  let highlightedCat = 'coding';

  // Alphabetize skills.
  const skills = res.skills.skills.sort((a, b) => {
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
    <p class='res-headline-text'>{res.intro.headline}</p>
  </section>

  <section class='content res-achievements'>
    <h2 class='res-sec-title'>At A Glance</h2>
    <ul>
      {#each res.intro.achievements as item}
        <li class='achievement'>{item}</li>
      {/each}
    </ul>
  </section>

  <section class='content res-endorsements'>
    <ul>
      {#each res.intro.endorsements as {name, title, quote}}
        <li class='endorsement'>
          <SVGIcon
            ico='quote'
            cls='endorsement-icon preload'
          />
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
      {#each res.education as {degree, subject, name, year}}
        <p><span class='degree'>{degree} </span><span class='subject'>{subject}</span><br><span class='name'>{name}</span> <span class='year'>{year}</span></p>
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
          {displayName}
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
        <li class='x-wrapper exp'>
          <div
            class='x-btn'
            type='button'
            on:click|preventDefault={expand}
          >
            <SVGIcon
              ico='plus'
              cls='x-btn-icon-wrap preload'
            />
            <h6 class='exp-title'>{exp.title}</h6>
            <div class='exp-org-ano-wrap'>
              <h6 class='exp-org'>{exp.organization}</h6>
              <div class='exp-year'>{renderDates(exp.startYear, exp.endYear)}</div>
            </div>
            <div class='exp-summary'>{exp.summary}</div>
          </div>
          <div class={`x-content blts-${exp.bullets.length}`}>
            <ul class='x-content-ul'>
              {#each exp.bullets as {lead, text}}
                <li class='x-content-li'><span class='lead'>{lead}</span><br>{text}</li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <section class='content res-interests'>
    <h2 class='res-sec-title'>Also...</h2>
    <ul>
      {#each res.interests as interest}
        <li class='interest'>{interest}</li>
      {/each}
    </ul>
  </section>
</div>

<style lang='scss'>
  @import '../style/pages/resume.scss';
</style>