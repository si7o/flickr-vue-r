<template>
  <section id="userpage">
    <h2
      v-if="isLoading"
      class="loading"
    >
      Loading {{username||pathAlias}} panoramas
    </h2>
    <template v-else-if="isError">
      <h2 :style="{marginBottom:'15px'}">Oops! Something went wrong when loading <i>{{username||pathAlias}}</i> panoramas.</h2>
      <StartHere
        title=""
        subtitle="Try something else."
      />
    </template>
    <h2 v-else>
      {{username||pathAlias}} has {{photos.length}} panoramas on
      <a
        :href="flickrUserUrl"
        class="flickr"
        target="_blank"
        rel="noreferrer"
      >
        flick<i>r</i>
      </a>
    </h2>

    <div id="pano-cards">
      <div
        v-if="photos.length > 0"
        class="panos"
      >
        <PanoCard
          v-for="photo in photos"
          :key="photo.id"
          :photo="{...photo, pathAlias, owner}"
          :small="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  import PanoCard from "../../components/PanoCard.vue";
  import StartHere from "../../components/StartHere.vue";
  import { getFlickrUserUrl } from "../../shared/urlHelper";

  export default {
    name: "UserView",

    components: { PanoCard, StartHere },

    props: {
      pathAlias: {
        type: String,
        required: true,
      },
    },

    computed: {
      ...mapState("user", ["photos", "username", "owner"]),
      ...mapGetters("user", ["isError", "isLoading"]),

      flickrUserUrl() {
        return getFlickrUserUrl(this.pathAlias, "");
      },
    },

    watch: {
      // call again the method if pathAlias changes
      pathAlias: "fetchData",
    },

    created() {
      this.fetchData();
    },

    methods: {
      fetchData() {
        if (!this.pathAlias) {
          return null;
        }

        this.$store.dispatch("user/fetchData", this.pathAlias);
      },
    },
  };
</script>

<style lang="scss" scoped>
  #pano-cards {
    margin-top: 16px;

    .panos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
