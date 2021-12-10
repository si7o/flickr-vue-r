<template>
  <header :class="isPhotoPage && 'photopage'">
    <router-link to="/">
      <NavLogo />
    </router-link>
    <router-link
      v-if="!isPhotoPage"
      to="/about"
    >
      About
    </router-link>
    <a
      v-if="!isPhotoPage"
      href="https://github.com/si7o/flickr-vue-r"
      referrerPolicy="no-referrer"
      rel="noreferrer"
      target="_blank"
    >
      github
      <GithubIcon />
    </a>
  </header>
</template>

<script>
  import NavLogo from "./NavLogo";
  import GithubIcon from "./icons/GithubIcon.vue";
  import routesMixin from "../router/routesMixin";

  export default {
    name: "NavBar",
    components: { GithubIcon, NavLogo },
    mixins: [routesMixin],
  };
</script>

<style lang="scss" scoped>
  header {
    padding: 8px 30px;
    display: flex;
    align-content: center;
    align-items: center;
    background: #252525;
    position: sticky;
    top: 0;
    z-index: 1000;

    &.photopage {
      background: transparent;
      width: 90px;
      opacity: 0.86;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 0;
    }

    a,
    a:visited {
      margin-right: 16px;
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;
      user-select: none;
    }

    a:hover {
      color: #ffcc00;
      text-decoration: none;
    }
  }

  @media (max-width: 620px) {
    header {
      padding: 8px 8px;
    }
  }
</style>
