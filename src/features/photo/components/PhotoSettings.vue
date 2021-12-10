
<template>
  <div
    id="photo-settings"
    :class="show && 'show'"
  >
    <button
      class="toggle"
      @click="handleShowToggleClick"
    >
      <SettingsIcon />
    </button>
    <div class="content">
      <button
        :class="['qualityToggle', isHDSelected && 'active']"
        @click="handleQualityToggleClick"
      >
        4K
      </button>
    </div>
  </div>
</template>

<script>
  import SettingsIcon from "../../../components/icons/SettingsIcon.vue";
  import hideableComponentMixin from "../../../shared/hideableComponentMixin";

  export default {
    name: "PhotoSettings",

    components: { SettingsIcon },

    mixins: [hideableComponentMixin],

    computed: {
      isHDSelected() {
        return this.$store.state.photoSettings.quality === "HD";
      },
    },

    methods: {
      handleQualityToggleClick() {
        this.$store.commit("photoSettings/toggleQuality");
      },
    },
  };
</script>

<style lang="scss">
  #photo-settings {
    position: fixed;
    right: 25px;
    width: 80px;
    height: 37px;
    transition: all 0.1s ease-in;
    background: #00000081;
    z-index: 10;
    bottom: -44px;

    &.show {
      bottom: 0;
    }

    button {
      border: none;
      display: flex;
      justify-content: center;
      align-content: center;

      &.toggle {
        width: 43px;
        height: 43px;
        border: 0;
        background: transparent;
        color: #fafafa;
        border: none;
        position: absolute;
        font-weight: bold;
        top: -43px;
        right: 0;
      }
      &.toggle > svg {
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: rotate(90deg);
        }
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      button {
        display: flex;
        flex-direction: row;
        display: flex;
        height: 30px;
        width: 30px;
        line-height: 30px;
        font-weight: bold;
        overflow: hidden;
        padding: 0;
        background: transparent;
        color: #fafafa44;
        border-bottom: 5px solid #fafafa44;

        &.active {
          color: #fafafadd;
          border-color: #fafafadd;
        }
      }
    }
  }
</style>