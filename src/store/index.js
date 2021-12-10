import { createStore } from "vuex";
import homeStoreModule from "../features/home/homeStoreModule";
import photoSettingsStoreModule from "../features/photo/photoSettingsStoreModule";
import userStoreModule from "../features/user/userStoreModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home: homeStoreModule,
    user: userStoreModule,
    photoSettings: photoSettingsStoreModule,
  },
});
