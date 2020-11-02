import API from "@/services/api";
import { get } from "core-js/fn/dict";

const state = {
  list: []
};

const mutations = {
  SET_LIST(state, list) {
    state.list = list;
  }
};

const actions = {
  async getList({ commit }, params = {}) {
    try {
      const data = await API.get("organisations", { params });
      commit("SET_LIST", data);
    } catch (e) {
      console.error(e);
    }
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
