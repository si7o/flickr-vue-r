<template>
  <div
    id="photo-header"
    data-testid="photo-header"
    :title="`${title} by ${username}`"
    :class="mainClass"
  >
    <div class="content">
      <h4>{{title}}</h4>
      <p>
        <span :title="`View more panoramas uploaded by ${username}`">
          by <router-link :to="userUrl">{{username}}</router-link>.
        </span>
        <span>
          view on
          <a
            :href="flickrPhotoUrl"
            target="_blank"
            rel="noreferrer"
            class="flickr"
            title="`Go to ${username} flickr account`}"
          >
            flick<i>r</i>
          </a>
        </span>
      </p>
    </div>
    <div class="header-controls">
      <button @click="handleShowToggleClick">
        <i :class="toggleButtonClass"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import { getUserUrl, getFlickrPhotoUrl } from "../../../shared/urlHelper";
  import hideableComponentMixin from "../../../shared/hideableComponentMixin";

  export default {
    name: "PhotoHeader",

    mixins: [hideableComponentMixin],

    props: {
      pathAlias: { type: String, required: true },
      photoId: { type: String, required: true },
      title: { type: String, default: "Loading Panorama" },
      username: { type: String, default: "" },
      loading: { type: Boolean },
    },

    computed: {
      userUrl() {
        return getUserUrl(this.pathAlias);
      },
      flickrPhotoUrl() {
        return getFlickrPhotoUrl(this.pathAlias, "", this.photoId);
      },
      mainClass() {
        return [this.loading && "loading", this.show ? "visible" : "hidden"];
      },
      toggleButtonClass() {
        return [`gg-chevron ${this.show ? "up" : "down"}`];
      },
    },

    watch: {
      title: "init",
    },

    created() {
      this.init();
    },

    methods: {
      init() {
        this.show = true;
      },
    },
  };
</script>

<style lang="scss">
  #photo-header {
    position: fixed;
    user-select: none;
    top: 0px;
    right: 0px;
    padding: 2px 10px;
    padding-left: 95px;
    width: 100vw;
    height: 68px;
    color: #fafafa;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background-color: #00000081;
    transition: all 0.2s cubic-bezier(0.28, 0.84, 0.42, 1);

    &.hidden {
      top: -68px;
    }

    a,
    a:visited {
      color: #ffffff;
      text-decoration: underline;
    }
    a:hover {
      color: #ffcc00;
    }

    .content {
      padding-left: 95px;
      padding-bottom: 4px;
    }

    h4 {
      overflow: hidden;
      text-align: right;
      width: calc(100vw - 110px);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-bottom: 0;

      span {
        margin-left: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .header-controls {
      position: absolute;
      top: 72px;
      right: 20px;

      button {
        border: none;
        background-color: #00000081;
        color: #fff;
        display: flex;
        justify-content: center;
        width: 60px;
        border-radius: 0 0 1px 1px;
      }
    }
  }
</style>