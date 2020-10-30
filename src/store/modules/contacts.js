import idgen from "idgen";

const state = {
  list: [
    {
      id: idgen(10),
      fields: [
        { label: "Имя", value: "Эдуард", id: idgen(7) },
        { label: "Телефон", value: "+79051287643", id: idgen(7) }
      ]
    },
    {
      id: idgen(10),
      fields: [
        { label: "Имя", value: "Даниил", id: idgen(7) },
        { label: "Телефон", value: "+79493476541", id: idgen(7) }
      ]
    },
    {
      id: idgen(10),
      fields: [
        { label: "Имя", value: "Евгений", id: idgen(7) },
        { label: "Телефон", value: "+79913549115", id: idgen(7) }
      ]
    }
  ]
};

const mutations = {
  ADD_CONTACT(state, contact) {
    state.list.push(contact);
  },
  REMOVE_CONTACT(state, id) {
    const index = state.list.findIndex(item => item.id === id);
    state.list.splice(index, 1);
  },
  UPDATE_CONTACT(state, { id, fields }) {
    const index = state.list.findIndex(item => item.id === id);
    state.list[index].fields = fields;
  }
};

const actions = {
  // Обычно в боевых проектах в экшенах делаюсьтся АПИ запросы и по этому я использую из для вызова мутации а не вызываю мутации напрямую
  addContact({ commit }, contact = {}) {
    commit("ADD_CONTACT", contact);
  },
  removeContact({ commit }, id) {
    if (confirm("Хотите удалить контакт?")) commit("REMOVE_CONTACT", id);
  },
  updateContact({ commit }, { id, fields }) {
    commit("UPDATE_CONTACT", { id, fields });
  }
};

const getters = {
  contactById: state => id => state.list.find(item => item.id === id) || {}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
