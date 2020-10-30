import Vue from "vue";
import Vuex from "vuex";

// Modules
import contacts from "./modules/contacts";

Vue.use(Vuex);

const modules = {
  contacts
};

export default new Vuex.Store({
  modules
});
