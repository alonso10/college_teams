import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import createPersistedState from "vuex-persistedstate";

import axios from 'axios';

Vue.use(Vuex);

const persistedstate = {
  key: 'data',
  paths: ['colleges','favorites'],
  storage: window.localStorage
};

const store = new Store({
  state: {
    colleges: [],
    errorRequest: {},
    favorites: [],
    search: []
  },
  getters: {
    getAllColleges(state) {
      return state.colleges;
    },
    getAllSearch(state) {
      return state.search;
    },
    getAllFavorites(state) {
      return state.favorites;
    },
    getRows(state) {
      return state.colleges.length;
    },
    getSearchRecords(state) {
      return state.search.length;
    }
  },
  actions: {
    fetchColleges ({ commit, state }) {
      if(!state.favorites.length) {
        axios
          .get("https://api.collegefootballdata.com/teams")
          .then(({ data }) => { 
            commit('setColleges', data);
          })
          .catch(error => {
            commit('setErrorRequest', error);
          });
      }
    },
    addFavorite ({ commit }, college) {
      commit('setFavorite', { remove: false, college })
    },
    removeFavorite ({ commit }, college) {
      commit('setFavorite', { remove: true, college })
    },
    searchCollege ({ commit }, value) {
      commit('setSearch', value)
    }
  },
  mutations: {
    setColleges(state, colleges) {
      state.colleges = colleges;
    },
    setErrorRequest(state, error) {
      state.errorRequest = error;
    },
    setFavorite(state, { remove, college }) {
      let { favorites } = state;
      if(remove) {
        favorites = favorites.filter((item) => {
          return item.id !== college.id;
        });
      } else {
        favorites.push(college);
      }
      state.favorites = favorites;
    },
    setSearch(state, value) {
      const { colleges } = state;
      const search = colleges.filter((item) => {
        return  item.school && item.school.toLowerCase().includes(value.toLowerCase())
      });
      state.search = search;
    }
  },
  plugins: [createPersistedState(persistedstate)]
});

export default store;