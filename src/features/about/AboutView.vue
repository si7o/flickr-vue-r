<template>
  <section id="aboutpage">
    <h2>About</h2>
    <p>
      This is an
      <a
        href="https://wiki.panotools.org/Equirectangular_Projection"
        referrerPolicy="no-referrer"
        rel="noreferrer"
        target="_blank"
      >
        equirectangular panorama
      </a>
      viewer for
      <a
        href="http://www.flickr.com"
        target="_blank"
        rel="noreferrer"
        className="flickr"
      >
        flick<i>r</i>
      </a>
      images.
    </p>
    <p>
      This UI is a remake of an old project,
      <a
        href="https://vr.andeandaran.com"
        referrerPolicy="no-referrer"
        rel="noreferrer"
        target="_blank"
      >
        <i>skybox</i>
      </a>, and it is made using Vuejs + Vuex to revisit vuejs development and also compare it
      to React+redux.
    </p>
    <p>
      You can check the source code in GitHub:
    <ul>
      <li>
        <a
          href="https://github.com/si7o/flickr-vue-r"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          flickr-vue-r
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/si7o/flickr-vr-react"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          flickr-vr-react
          <GithubIcon />
        </a>
        <small>
          (same project built using react + redux)
        </small>
      </li>
      <li>
        <a
          href="https://github.com/si7o/skybox"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          skybox
          <GithubIcon />
        </a>
        <small>
          (old project source code & api code)
        </small>
      </li>
    </ul>
    </p>
    <p>
      And you can also check
      <router-link to="/photos/sitoo">
        my equirectangular panoramas from flickr
      </router-link>
      ;-).
    </p>
  </section>
</template>

<script>
  export default {
    name: "AboutView",
  };
</script>

<style lang="scss" scoped>
  #aboutpage {
    margin: 16px 42px;
    font-size: larger;

    p {
      margin-bottom: 15px;
    }
  }
</style>