import Vue from "vue";
import Vuex from "vuex";

// Modules
import organizations from "./modules/organizations";

Vue.use(Vuex);

const modules = {
  organizations
};

export default new Vuex.Store({
  modules
});
