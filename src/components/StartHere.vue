<template>
  <div id="start-here">
    <h2>{{title}}</h2>
    <h3>{{subtitle}}</h3>
    <form
      id="start-here-form"
      name="start-here-form"
      autoComplete="off"
      @submit.prevent="handleSubmit"
    >
      <label htmlFor="flickrInput">
        Enter your Flickr username or the URL to your flickr equirectangular
        panorama
        <input
          id="flickrInput"
          v-model="flickrInput"
          name="flickrInput"
          placeholder="Enter a username or a flickr URL"
          autoComplete="off"
        />
      </label>
      <button
        type="submit"
        :disabled="!flickrInput"
      >
        go
      </button>
    </form>
  </div>
</template>

<script>
  import { getStartHereURL } from "../shared/urlHelper";

  export default {
    name: "StartHere",
    props: {
      title: {
        type: String,
        default: "Watch flickr equirrectangular panoramas the right way.",
      },

      subtitle: {
        type: String,
        default: "Start here!",
      },
    },

    data() {
      return {
        flickrInput: "",
      };
    },

    methods: {
      handleSubmit() {
        const url = getStartHereURL(this.flickrInput);
        this.$router.push(url);
      },
    },
  };
</script>

<style lang="scss" scoped>
  #start-here {
    margin-bottom: 32px;
    background: rgb(255, 204, 0);
    background: linear-gradient(
      135deg,
      rgba(255, 204, 0, 1) 0%,
      rgba(230, 60, 142, 1) 98%
    );
    padding: 10px 16px 20px 16px;
    color: #252525;

    h2 {
      margin-bottom: 12px;
    }

    h3 {
      font-weight: bold;
    }

    p {
      font-size: 16px;
      margin-bottom: 6px;
    }

    form {
      margin-top: 16px;
      display: flex;
      align-items: flex-end;

      label {
        flex-grow: 0.7;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        min-width: 150px;
      }

      input {
        height: 46px;
        padding-left: 16px;
        margin-right: 8px;
        margin-top: 8px;
        font-size: 18px;
        flex-grow: 1;
      }

      button {
        flex-grow: 1;
        height: 48px;
        border: none;
        font-size: 26px;
        font-weight: bold;
        background-color: #fafafa44;
        transition: all 0.82s ease;
        padding: 0 15px;
        color: #fafafadd;
        text-transform: uppercase;

        &:disabled {
          transition: all 0.82s ease;
          cursor: default;
          opacity: 0.4;
        }
        &:hover:not(:disabled) {
          left: 100%;
          color: #ffffff;
          text-shadow: 0 0 6px #ffffff77;
          border-color: #fafafa77;
          background-color: #fafafa44;
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      }
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>