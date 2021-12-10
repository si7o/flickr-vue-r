<template>
  <PanoViewer
    id="panoviewer"
    ref="viewer"
    :tag="'div'"
    :image="image"
    :fov="88"
    projection-type="equirectangular"
    :show-pole-point="true"
    @ready="handlePanoReady"
    @error="handlePanoError"
  />
</template>

<script>
  import { PanoViewer } from "@egjs/vue3-view360";

  export default {
    name: "PanoViewerEgjs",
    components: { PanoViewer },

    props: {
      image: {
        type: String,
        required: true,
      },
    },

    emits: ["ready"],

    created() {
      window.addEventListener("resize", this.resizeCanvas, false);
    },

    methods: {
      handlePanoReady() {
        this.$emit("ready");
      },

      handlePanoError(e) {
        if (this.image) {
          window.alert(e.message);
        }
      },

      resizeCanvas() {
        this.$refs?.viewer?.updateViewportDimensions();
      },
    },
  };
</script>

<style lang="scss">
  #panoviewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
