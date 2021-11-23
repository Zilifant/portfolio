<!-- Resume -->

<script>
  import res from '../content/resume.json';

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

  function expand() {
    this.classList.toggle("rotated");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    };
  };

  function renderYears(start, end) {
    if (!end || (start === end)) return start;
    return `${start}-${end}`;
  }

</script>

<div class={`page-wrapper resume ${current}`}>
  <section class="content res-intro">
    <div class='achievements'>
      {#each res.intro.achievements as achieve}
        <p class='resume-text res-achieve'>{achieve}</p>
      {/each}
    </div>
    <div class='endorsements'>
      {#each res.intro.endorsements as {name, title, quote}}
        <div class='endorsement'>
          <p class='resume-text endorse-quote'>{quote}</p>
          <p class='resume-text endorse-person'>- {name}, {title}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="content res-skills">
    <ul>skills
      {#each res.skills as skill}
        <p class='resume-text res-skill'>{skill}</p>
      {/each}
    </ul>
  </section>

  <section class="content res-edu">
    <ul>education
      {#each res.education as {degree, subject, name, year}}
        <p class='resume-text edu-degree'>{degree}</p>
        <p class='resume-text edu-subject'>{subject}</p>
        <p class='resume-text edu-name'>{name}</p>
        <p class='resume-text edu-year'>{year}</p>
      {/each}
    </ul>
  </section>

  {#each res.experience as exp}
    <section class='content res-exp'>
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
              <h6>{exp.title}</h6>
              <h6>{renderYears(exp.startYear, exp.endYear)}</h6>
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
      </div>
    </section>
  {/each}

  <section class="content res-interests">
    {#each res.interests as interest}
      <p class='resume-text res-interest'>{interest}</p>
    {/each}
  </section>
</div>