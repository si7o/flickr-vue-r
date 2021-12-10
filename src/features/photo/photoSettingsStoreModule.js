export default {
  namespaced: true,

  state: {
    quality: "HD",
  },

  mutations: {
    toggleQuality: (state) => {
      state.quality = state.quality === "HD" ? "SD" : "HD";
    },
  },
};
