<!-- Resume -->

<script>
  import res from '../content/resume.json';
  import SVGIcon from '../utility/SVGIcon.svelte';

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

  let highCat = 'coding';

  const skills = res.skills.skills.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  $: skillColor = (cats) => {
    if (cats.includes(highCat)) return `highlight ${highCat}`;
    return '';
  };

  function expand() {
    this.classList.toggle('rotated');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    };
  };

  function renderDates(start, end) {
    if (!end || (start === end)) return start;
    return `${start}-${end}`;
  };

</script>

<div class={`page-wrapper resume ${current}`}>

  <section class='content res-achievements'>
    <h2 class='res-sec-title first-sec'>At A Glance</h2>
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
          <p class='endorse-quote'>{quote}</p>
          <p class='endorse-person'>{name}<br>{title}</p>
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
          on:click={() => highCat = id}
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
            <div class='x-btn-text-head'>
              <h6>{exp.title}</h6>
              <h6>{exp.organization}</h6>
            </div>
            <div class='res-org'>{renderDates(exp.startYear, exp.endYear)}</div>
            <div class='res-summary'>{exp.summary}</div>
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