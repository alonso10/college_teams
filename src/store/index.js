import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const store = new Store({
  state: {
    colleges: [],
    errorRequest: {},
    favorite: []
  },
  getters: {
    getAllColleges(state) {
      return state.colleges;
    },
    getRows(state) {
      return state.colleges.length;
    }
  },
  actions: {
    fetchColleges ({ commit }) {
      axios
        .get("https://api.collegefootballdata.com/teams")
        .then(({ data }) => { 
          commit('setColleges', data);
        })
        .catch(error => {
          commit('setErrorRequest', error);
        });
    },
    addFavorite ({ commit }, college) {
      commit('setFavorite', college);
    }
  },
  mutations: {
    setColleges(state, colleges) {
      state.colleges = colleges;
    },
    setErrorRequest(state, error) {
      state.errorRequest = error;
    },
    setFavorite(state, college) {
      let { favorite } = state;
      favorite.push(college);
      state.favorite = favorite;
    }
  }
});

export default store;