import Vue from 'vue'
import Vuex from 'vuex'

import { getItem, setItem } from '@/utils/storage.js'

Vue.use(Vuex)

const USER_KEY = 'toutiao-user'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY) // user the login's status
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
      // Storing the data into local cache
      // window.localStorage.setItem('user', JSON.stringify(state.user));
      setItem(USER_KEY, state.user);
    }
  },
  actions: {
  },
  modules: {
  }
})
