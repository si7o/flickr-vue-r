import { getHomePhotos } from "../../services/skyboxService";

export const DATA_TTL = 300000;

export default {
  namespaced: true,

  state: {
    status: "idle",
    error: null,
    lastUpdated: 0,
    photos: [],
  },

  mutations: {
    photosReceived: (state, photos) => {
      state.photos = photos;
      state.lastUpdated = Date.now();
      state.status = "success";
      state.error = null;
    },

    loading: (state) => {
      state.status = "loading";
    },

    errorReceived: (state, error) => {
      state.photos = [];
      state.error = error;
      state.status = "error";
    },

    reset: (state) => {
      state.photos = [];
      state.lastUpdated = 0;
      state.status = "idle";
      state.error = null;
    },
  },

  actions: {
    fetchData: ({ state, commit }) => {
      if (Date.now() - state.lastUpdated <= DATA_TTL) {
        return null;
      }

      commit("loading");
      return getHomePhotos()
        .then((response) => {
          commit("photosReceived", response.photos);
        })
        .catch((e) => {
          commit("errorReceived", e);
        });
    },
  },

  getters: {
    isLoading() {
      return this.status === "loading";
    },

    isError() {
      return this.status === "error";
    },
  },
};
