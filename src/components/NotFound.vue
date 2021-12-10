<template>
  <section id="not-found">
    <h1>Oops!</h1>
    <StartHere
      title="Sorry, we couldn't find what you were looking for..."
      subtitle="Try something different?"
    />
    <ul>
      <li>
        <router-link to="HomePage">Home</router-link>
      </li>
      <li>
        <router-link to="AboutPage">About</router-link>
      </li>
      <li>
        <a
          href="https://github.com/si7o/flickr-vue-r"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
          <GithubIcon />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import StartHere from "./StartHere.vue";
  export default {
    components: {
      StartHere,
    },
  };
</script>

<style lang="scss" scoped>
  #not-found {
    padding-top: 10vh;
    display: flex;
    min-width: 290px;
    max-width: 50vw;
    align-self: center;
    margin: auto;
    flex-direction: column;

    h1 {
      color: #ffcc00;
      font-weight: bold;
      font-size: 42px;
    }

    ul {
      display: flex;
      list-style-type: none;
      justify-content: center;
      padding: 0;
      margin: 0;

      li {
        font-size: 22px;
        margin-right: 20px;

        svg {
          width: 22px;
          height: 22px;
          margin-left: 2px;
        }
      }
    }
  }
</style>