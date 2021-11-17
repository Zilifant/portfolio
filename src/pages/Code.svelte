<!-- Code -->

<script>
  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

</script>

<div class={`page-wrapper code ${current}`}>
  <section class='grd'>
    <div class='project-title mhk large-text'>
      <p>MHK. A web implementation of the popular social deduction game, <em>Deception: Murder in Hong Kong</em>.</p>
      <p>A full-stack applicaton. A React app connected to a Node.js server using socket.io.</p>
    </div>
    <a
      class='url-pseudo-btn app-url mhk'
      href='https://mhk.vercel.app/'
      target="_blank" rel="noopener noreferrer"
    >
      MHK Live
    </a>
    <a
      class='url-pseudo-btn github-url backend mhk'
      href='https://mhk.vercel.app/'
      target="_blank" rel="noopener noreferrer"
    >
      MHK Github Front
    </a>
    <a
    class='url-pseudo-btn github-url frontend mhk'
    href='https://mhk.vercel.app/'
    target="_blank" rel="noopener noreferrer"
    >
      MHK Github Back
    </a>
  </section>
</div>

<style lang="scss">

</style>