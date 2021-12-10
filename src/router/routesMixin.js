export default {
  computed: {
    isUserPage() {
      return this.$route?.name === "UserPage";
    },

    isPhotoPage() {
      return this.$route?.name === "PhotoPage";
    },

    userPageRoute() {
      return {
        name: "UserPage",
        params: {
          pathAlias: this.pathAlias || this.owner,
        },
      };
    },

    photoPageRoute() {
      return {
        name: "PhotoPage",
        params: {
          pathAlias: this.pathAlias || this.owner,
          photoId: this.photoId,
        },
      };
    },
  },
};
