<!-- Code -->

<script>
  import SVGIcon from '../utility/SVGIcon.svelte';
  import projects from '../content/projects.json';
</script>

<div class={'page-wrapper code'}>

  {#each projects as project}
    <section class='code-project'>

      {#if project.type === 'multi-section'}

        <h3>{project.title}</h3>
        <div class='code-project-headline'>{@html project.description}</div>
        {#each project.sections as section}
          <div class="horz-bar code-project-divider"></div>
          <h3>{section.title}</h3>
          <div class='code-project-description'>{@html section.description}</div>
          <div class='code-project-links'>
            {#each section.links as {type, text, icon, href}}
              <a
                class={`btn url-pseudo-btn ${type}-url`}
                href={href}
                target="_blank" rel="noopener noreferrer"
              >
                <SVGIcon
                  ico={icon}
                  cls='flex'
                />
                <p>{text}</p>
              </a>
            {/each}
          </div>
        {/each}

      {:else}

        <h3>{project.title}</h3>
        <div class='code-project-description'>{@html project.description}</div>
        <div class='code-project-links'>
          {#each project.links as {type, text, icon, href}}
            <a
              class={`btn url-pseudo-btn ${type}-url`}
              href={href}
              target="_blank" rel="noopener noreferrer"
            >
              <SVGIcon
                ico={icon}
                cls='flex'
              />
              <p>{text}</p>
            </a>
          {/each}
        </div>

      {/if}

    </section>
  {/each}

</div>

<style lang="scss">

</style>