<!-- Resume -->

<script>
  import res from '../content/resume.json';

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

  let highCat = 'coding';

  const skills = res.skills.skills.sort((a, b) => {
    return a.name.localeCompare(b.name);
  })

  $: skillColor = (cats) => {
    if (cats.includes(highCat)) return `highlight ${highCat}`;
    return '';
  };

  function expand() {
    this.classList.toggle("rotated");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    };
  };

  function renderDates(start, end) {
    if (!end || (start === end)) return start;
    return `${start}-${end}`;
  };

</script>

<div class={`page-wrapper resume ${current}`}>

  <section class="content res-achievements">
    <ul>
      {#each res.intro.achievements as achieve}
        <li class='achievement'>{achieve}</li>
      {/each}
    </ul>
  </section>

  <section class="content res-endorsements">
    <ul>
      {#each res.intro.endorsements as {name, title, quote}}
        <li class='endorsement'>
          <p class='endorse-quote'>{quote}</p>
          <p class='endorse-person'>{name}<br>{title}</p>
        </li>
      {/each}
    </ul>
  </section>

  <section class="content res-skills">
    <div class='skill-btns'>
      {#each res.skills.categories as {id, displayName}}
        <button
          class={`skill-btn ${id}`}
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

  <section class="content res-edu">
    <ul>
      {#each res.education as {degree, subject, name, year}}
        <li class='edu'><span class='degree'>{degree} </span><span class='subject'>{subject}</span><br><span class='name'>{name}</span> <span class='year'>{year}</span></li>
      {/each}
    </ul>
  </section>

  <section class='content res-exp'>
    <ul>
      {#each res.experience as exp}
        <li class="exl-wrapper exp">
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
                <h6>{exp.title}</h6>
                <h6>{renderDates(exp.startYear, exp.endYear)}</h6>
              </div>
              <p>{exp.organization}</p>
              <p>{exp.summary}</p>
            </div>
          </div>
          <div class="exl-content">
            <ul class="exl-content-ul">
              {#each exp.bullets as {lead, text}}
                <li class="exl-content-li"><span class='lead'>{lead}:</span> {text}</li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <section class="content res-interests">
    {#each res.interests as interest}
      <p class='interest'>{interest}</p>
    {/each}
  </section>
</div>