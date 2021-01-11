import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base: null,
    currencies: {},
    baseCurrencies : {}
  },
  mutations: {
    setCurrencies(state, rates){
      state.currencies = rates
    },
    setBaseCurrencies(state, rates){
      state.baseCurrencies = rates
    },
    setBase(state, base){
      state.base = base;
    }
    
  },
  actions: {
    getCurrencies({commit}){
      return new Promise((resolve, reject) => {
        axios.get('https://api.exchangeratesapi.io/latest').then((response) => {
          //console.log(response.data);
          resolve("Success");
          commit('setCurrencies', response.data['rates']);
        }).catch((e) => {
          reject("Could Not Load Data");
        })
      });
    },
    getBaseCurrencies({commit}, base){
      console.log(base);
        axios.get(`https://api.openrates.io/latest?base=${base}`).then((response) => {
          //console.log(response.data);
          commit('setBaseCurrencies', response.data['rates']);
          commit('setBase', response.data['base']);
        }).catch((e) =>{
          console.log(e);
        })
    }
  },
  getters: {
    getCurrencies(state){
      
      return Object.entries(state.currencies);
    },
    getBaseCurrencies(state){
      return state.baseCurrencies == null ? null : state.baseCurrencies; 
    },
    getBase(state){
      return state.base;
    }
  }
})
