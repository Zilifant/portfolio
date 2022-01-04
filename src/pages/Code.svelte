<!-- Code -->

<script>
  import SVGIcon from '../utility/SVGIcon.svelte';
  import projects from '../content/projects.json';
</script>

<div class={'page-wrapper code'}>

  {#each projects as {title, description, links}}
    <section class='code-project'>
      <h3>{title}</h3>
      <div class='code-project-description'>{@html description}</div>
      <div class='code-project-links'>
        {#each links as {type, text, icon, href}}
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
    </section>
  {/each}

</div>

<style lang="scss">

</style>