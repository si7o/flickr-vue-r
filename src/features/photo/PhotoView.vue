<template>
  <section
    id="photopage"
    :class="!isViewerReady && 'loading'"
  >
    <PhotoHeader
      :title="title"
      :username="username"
      :path-alias="pathAlias"
      :photo-id="photoId"
      :loading="isLoading"
    />

    <div
      v-if="!isViewerReady && !isLoading"
      class="message loading"
    >
      Loading image...
    </div>

    <PanoViewerEgjs
      v-if="isSuccess"
      :image="imageUrl"
      @ready="handlePanoViewerReady"
    />
    <div v-else-if="isError">
      <h3>Oops! something went wrong :( </h3>
    </div>

    <PhotoSlider
      photos="userPhotos"
      :path-alias="pathAlias"
      :photo-id="photoId"
    />
    <PhotoSettings />
    <PageLoader :show="isLoading" />
  </section>
</template>

<script>
  import { getUserPhoto } from "../../services/skyboxService";
  import PageLoader from "../../components/PageLoader.vue";
  import PhotoHeader from "./components/PhotoHeader.vue";
  import PhotoSettings from "./components/PhotoSettings.vue";
  import PanoViewerEgjs from "./components/PanoViewerEgjs.vue";
  import PhotoSlider from "../user/components/PhotoSlider.vue";

  export default {
    name: "PhotoView",

    components: {
      PageLoader,
      PhotoHeader,
      PanoViewerEgjs,
      PhotoSettings,
      PhotoSlider,
    },

    props: {
      pathAlias: {
        type: String,
        required: true,
      },
      photoId: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        status: "idle",
        error: "",
        panoViewerReady: false,

        thumbnail: "",
        username: "",
        canLoad: false,
        title: "",
        desc: "",
        url: "",
        sdUrl: "",
        hdUrl: "",
        equirectangular: false,
      };
    },

    computed: {
      isLoading() {
        return ["loading", "idle"].includes(this.status);
      },
      isSuccess() {
        return this.status === "success";
      },
      isError() {
        return this.status === "error";
      },
      isViewerReady() {
        return this.panoViewerReady || this.isError;
      },
      imageUrl() {
        if (this.$store.state.photoSettings.quality === "SD") {
          return this.sdUrl;
        }

        return this.hdUrl;
      },
    },

    watch: {
      // call again the method if the photoId or pathAlias changes
      photoId: "fetchData",
      pathAlias: "fetchData",
    },

    created() {
      this.fetchData();
    },

    methods: {
      // TODO: move this to the store??
      fetchData() {
        this.status = "loading";
        this.canLoad = false;
        this.panoViewerReady = false;

        if (!this.pathAlias || !this.photoId) {
          return null;
        }

        getUserPhoto(this.pathAlias, this.photoId)
          .then((response) => {
            this.thumbnail = response.thumbnail;
            this.username = response.username;
            this.canLoad = response.canLoad;
            this.title = response.title;
            this.desc = response.desc;
            this.url = response.url;
            this.sdUrl = response.sdUrl;
            this.hdUrl = response.hdUrl;
            this.equirectangular = response.equirectangular;

            this.status = "success";
          })
          .catch((e) => {
            this.status = "error";
            this.error = e.message;
            console.log(e);
          });

        this.$store.dispatch("user/fetchData", this.pathAlias);
      },

      handlePanoViewerReady() {
        this.panoViewerReady = true;
      },
    },
  };
</script>

<style lang="scss" scoped>
  #photopage {
    overflow: hidden;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #bebebe;

    .message {
      z-index: 100;
      position: absolute;
      margin-left: auto;
      padding: 10px 15px;
      background-color: #fafafa44;
      font-weight: bold;
      overflow: hidden;
    }
  }

  @keyframes blink-animation {
    to {
      opacity: 0.3;
    }
  }
</style>