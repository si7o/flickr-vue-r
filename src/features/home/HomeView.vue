<template>
  <section id="homepage">
    <StartHere />
    <h4>Latest panoramas from Flickr</h4>
    <div id="pano-cards">
      <div
        v-if="photos.length > 0"
        className="panos"
      >
        <PanoCard
          v-for="photo in photos"
          :key="photo.id"
          :photo="photo"
          todo="{...userData}"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from "vuex";
  import StartHere from "../../components/StartHere.vue";
  import PanoCard from "../../components/PanoCard.vue";

  export default {
    name: "HomeView",

    components: {
      PanoCard,
      StartHere,
    },

    computed: {
      ...mapState("home", ["photos"]),
    },

    created() {
      this.$store.dispatch("home/fetchData");
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
