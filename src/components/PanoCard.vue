<template>
  <div
    v-if="!!photo"
    :id="divId"
    :class="['pano-card', className]"
  >
    <router-link
      :to="photoPageRoute"
      class="card"
    >
      <div class="img">
        <img
          :src="photo.thumbnail"
          loading="lazy"
          :alt="photo.title"
        />
        <div className="gradient"></div>
      </div>
      <div className="info">
        <h6 className="title">{{photo.title}}</h6>
      </div>
    </router-link>
    <ul
      v-if="!small"
      class="footer"
    >
      <li>
        by
        <router-link :to="userPageRoute">{{photo.username}}</router-link>
      </li>
      <li>
        on
        <a
          :href="flickrPhotoUrl"
          target="_blank"
          rel="noreferrer"
          className="flickr"
        >
          flick<i>r</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getFlickrPhotoUrl } from "../shared/urlHelper";
  export default {
    name: "PanoCard",

    props: {
      small: Boolean,
      photo: {
        type: Object,
        default: () => ({
          id: "",
          title: "",
          thumbnail: "",
          username: "",
          owner: "",
          pathAlias: "",
        }),
      },
    },

    computed: {
      divId() {
        return `pano${this.photo.id}`;
      },

      className() {
        return this.small && "small";
      },

      userPageRoute() {
        return {
          name: "UserPage",
          params: {
            pathAlias: this.photo.pathAlias || this.photo.owner,
          },
        };
      },

      photoPageRoute() {
        return {
          name: "PhotoPage",
          params: {
            pathAlias: this.photo.pathAlias || this.photo.owner,
            photoId: this.photo.id,
          },
        };
      },

      flickrPhotoUrl() {
        return getFlickrPhotoUrl(
          this.photo.pathAlias,
          this.photo.owner,
          this.photo.id
        );
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pano-card {
    display: flex;
    flex-direction: column;
    margin: 8px 8px;

    a.card {
      color: #252525;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 320px;
      transition: all 0.15s ease-in-out;
      text-decoration: none;
      border: none;

      &:hover,
      &:visited {
        color: #252525;
      }

      .img {
        width: auto;
        overflow: hidden;
        position: relative;
        height: 150px;
        opacity: 0.9;
        transition: all 0.15s ease-in-out;
        .gradient {
          height: 26px;
          width: 320px;
          z-index: 10;
          position: absolute;
          bottom: 0;
        }
      }

      &:hover {
        background-color: #ffffff;
        box-shadow: 0 4px 4px #24242433;
        transform: translateY(-3px);
        > .img {
          opacity: 1;
        }
      }

      .info {
        padding: 10px;
        color: #2e2e2e;
        display: flex;
        flex-direction: column;
        height: 90px;

        h6.title {
          font-size: 16px;
          text-overflow: ellipsis;
          overflow: hidden;
          text-decoration: none;
        }
      }
    }

    &.small a.card .info {
      height: 80px;
    }

    p {
      margin-bottom: 4px;
      align-self: flex-end;
    }

    ul.footer {
      padding: 0;
      margin: 0;
      margin-top: 4px;
      list-style: none;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }

    ul.footer li {
      margin-left: 6px;
      width: auto;
      white-space: nowrap;
    }
  }
</style>