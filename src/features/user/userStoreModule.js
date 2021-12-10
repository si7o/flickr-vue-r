import { getUserPhotos } from "../../services/skyboxService";

export const DATA_TTL = 300000;

export default {
  namespaced: true,

  state: {
    status: "idle",
    error: null,
    lastUpdated: 0,
    username: "",
    pathAlias: "",
    owner: "",
    photos: [],
  },

  mutations: {
    userDataReceived: (state, { photos, username, pathAlias, owner }) => {
      state.photos = photos;
      state.username = username;
      state.pathAlias = pathAlias;
      state.owner = owner;
      state.lastUpdated = Date.now();
      state.status = "success";
      state.error = null;
    },

    loading: (state) => {
      state.status = "loading";
    },

    errorReceived: (state, error) => {
      state.status = "error";
      state.photos = [];
      state.error = error;
      state.username = "";
      state.pathAlias = "";
      state.owner = "";
    },

    reset: (state) => {
      state.photos = [];
      state.username = "";
      state.pathAlias = "";
      state.owner = "";
      state.lastUpdated = 0;
      state.status = "idle";
      state.error = null;
    },
  },

  actions: {
    fetchData: ({ state, commit }, username) => {
      if (username === state.pathAlias && Date.now() - state.lastUpdated <= DATA_TTL) {
        return null;
      }

      commit("reset");
      commit("loading");
      return getUserPhotos(username)
        .then((response) => {
          commit("userDataReceived", response);
        })
        .catch((e) => {
          commit("errorReceived", e);
        });
    },
  },

  getters: {
    isLoading: (state) => {
      return state.status === "loading";
    },

    isError: (state) => {
      return state.status === "error";
    },
  },
};
