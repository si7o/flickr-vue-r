<template>
  <div
    :id="divId"
    class="photo-item"
  >
    <router-link
      :to="photoHref"
      class="clickable"
    >
      <img
        :src="thumbnail"
        loading="lazy"
        :alt="title"
      />
      <div class="gradient">
        <p>{{title}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { getUserPhotoUrl } from "../../../shared/urlHelper";
  export default {
    name: "PhotoItem",

    props: {
      photoId: { type: String, required: true },
      title: { type: String, required: true },
      thumbnail: { type: String, required: true },
      pathAlias: { type: String, required: true },
    },

    computed: {
      divId() {
        return `pano-card-${this.photoId}`;
      },
      photoHref() {
        return getUserPhotoUrl(this.pathAlias, "", this.photoId);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .photo-item {
    display: flex;
    flex-direction: column;

    a {
      background-color: #252525;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 230px;
      height: 115px;
      transition: all 0.2s ease-in-out;
      overflow: hidden;
      position: relative;

      .gradient {
        background: linear-gradient(to bottom, #252525, #25252546);
        width: 100%;
        height: 115px;
        z-index: 10;
        position: absolute;
        bottom: 0;
        color: #fafafa;
        transition: all 0.2s ease-in-out;
        opacity: 0;
        padding: 8px;

        p {
          padding-top: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      &:hover .gradient {
        font-size: large;
        opacity: 1;
      }
    }
  }

  @media (max-width: 800px) {
    .photo-item a .gradient {
      background: linear-gradient(to bottom, #25252563, #25252500);
      opacity: 1;

      p {
        padding-top: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        text-shadow: 0 0 3px #000000aa;
      }
    }
  }
</style>