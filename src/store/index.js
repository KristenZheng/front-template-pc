import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import sys from './modules/sys';

export default new Vuex.Store({
  modules: {
    sys
  }
})