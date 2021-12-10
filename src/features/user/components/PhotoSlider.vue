<template>
  <div
    id="photo-slider"
    :class="show && 'show'"
  >
    <button
      class="toggle"
      @click="handleToggleClick"
    >
      {{toggleText}}
    </button>
    <div className="content">
      <button
        class="left"
        @click="handleScrollLeftClick"
      >
        <i class="gg-chevron left"></i>
      </button>
      <div
        v-if="loaded"
        ref="slider"
        class="item-list"
        @click="handleToggleClick"
      >
        <PhotoItem
          v-for="photo in photos"
          :key="photo.id"
          :photo-id="photo.id"
          :title="photo.title"
          :thumbnail="photo.thumbnail"
          :path-alias="pathAlias"
          :is-current="photo.id===photoId"
        />
      </div>
      <div
        v-else
        class="item-list"
      >...loading</div>

      <button
        class='right'
        @click="handleScrollRightClick"
      >
        <i class="gg-chevron"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import PhotoItem from "./PhotoItem.vue";

  export default {
    name: "PhotoSlider",

    components: { PhotoItem },

    props: {
      pathAlias: { type: String, required: true },
      loading: Boolean,
      photoId: { type: String, default: "" },
    },

    data() {
      return { show: false };
    },

    computed: {
      ...mapState("user", ["photos"]),
      toggleText() {
        return this.show ? "Hide" : "More Panos";
      },
      loaded() {
        return (
          !this.loading &&
          ["success", "error"].includes(this.$store.state.user.status)
        );
      },
    },

    created() {},

    methods: {
      handleToggleClick() {
        this.show = !this.show;
      },
      scrollPixels() {
        return window.innerWidth / 2;
      },
      handleScrollLeftClick() {
        this.$refs.slider.scrollLeft -= this.scrollPixels();
      },
      handleScrollRightClick() {
        this.$refs.slider.scrollLeft += this.scrollPixels();
      },
    },
  };
</script>

<style lang="scss" scoped>
  #photo-slider {
    position: fixed;
    bottom: -134px;
    left: 0;
    width: 100vw;
    height: 134px;
    transition: 0.08s ease-in;
    display: flex;
    background: #252525;
    justify-content: center;
    z-index: 20;
    border-top: 3px solid #ffcc00;

    &.show {
      bottom: 0;
    }

    button.toggle {
      width: 120px;
      border-radius: 2px 2px 0 0;
      position: absolute;
      border: 0;
      height: 34px;
      color: #fafafa;
      border: none;
      top: -34px;
      font-weight: bold;
      background: transparent;
      border-bottom: 3px solid #ffcc00;
    }
    button.toggle::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -2;
      background: #252525b6;
    }
    button.toggle:hover {
      color: #252525;
    }
    button.toggle:after {
      content: "";
      position: absolute;
      background: #ffcc00;
      color: #252525;
      bottom: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transition: height 0.08s ease-out;
      height: 0px;
    }
    button.toggle:hover:after {
      height: 34px;
    }

    .content {
      width: 100vw;

      .item-list {
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        scroll-behavior: smooth;
        width: 100vw;
        height: 133px;
        top: 0;
        background: #252525;
      }

      button {
        border: none;
        background-color: transparent;
        color: #fafafa;
        overflow: hidden;
        z-index: 40;
        position: absolute;
        padding: 0;
        top: 0;
        height: 115px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.right {
          right: 0px;
        }

        &.left {
          left: 0px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    #photo-slider button.toggle:hover {
      color: #fafafa;
    }
  }
</style>