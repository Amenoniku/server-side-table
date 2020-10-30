import Vue from "vue";
import Vuex from "vuex";

// Modules
import contacts from "./modules/contacts";

Vue.use(Vuex);

// Хоть и в этом задании больше одного модуля не потребуется но в боевых проектах без них ни куда
const modules = {
  contacts
};

export default new Vuex.Store({
  modules
});
