import { createStore } from 'vuex'
import { celsiusToFahrenheit, getTemperature, fahrenheitToCelsious } from '../utils'



export default createStore({
  state: {
    homeTitle: 'Which city is hotter?',
    score: 0,
    activeUnit: 'C',
    cities: null,

    answerIsDone: false,

    currentPair: [],

    history: [],

  },
  mutations: {
    updateScore(state) {
      state.score = state.score + 1
    },
    setHomeTitle(state, title) {
      state.homeTitle = title
    },
    updateUnit(state, unit) {
      state.activeUnit = unit
      if (unit === 'F') {
        state.currentPair[0].temp = celsiusToFahrenheit(state.currentPair[0].temp) 
        state.currentPair[1].temp = celsiusToFahrenheit(state.currentPair[1].temp) 
      } else {
        state.currentPair[0].temp = fahrenheitToCelsious(state.currentPair[0].temp) 
        state.currentPair[1].temp = fahrenheitToCelsious(state.currentPair[1].temp) 
      }
      
    },
    updateCities(state, json) {
      state.cities = json
    },
    setCurrentPair(state, pair) {
      state.currentPair = pair
    },
    pushHistory(state, pair) {
      state.history = [...state.history, pair]
    },
    setAnswerIsDone(state, bool) {
      state.answerIsDone = bool
    },
    refreshStep(state) {
      state.homeTitle = 'Which city is hotter?'
      state.answerIsDone = false
      state.currentPair = []
    }
  },
  actions: {
    async getTemperature({commit}, id) {
      
      console.log(celsiusToFahrenheit(tmp))
    },
    async getCitiesPair({state, commit}) {
      if (!state.cities) {
        commit('updateCities', await fetch(`/city.list.min.json`).then(res => res.json()))
      }
      const pair = [
        state.cities[getRandomPosition()], 
        state.cities[getRandomPosition()]
      ]
      pair[0].temp = (await getTemperature(pair[0].id)).toFixed(2)
      pair[1].temp = (await getTemperature(pair[1].id)).toFixed(2)
      
      commit('setCurrentPair', pair)

      function getRandomPosition() {
        return Math.round((Math.random() * (state.cities.length - 1)))
      }
    },
    checkCard({state, commit}, id) {
      if (!state.answerIsDone) {
        let isHigher
        if (id === 0) {
          isHigher = state.currentPair[id].temp >= state.currentPair[1].temp
        } else {
          isHigher = state.currentPair[id].temp >= state.currentPair[0].temp
        }
        if (isHigher) {
          commit('updateScore')
          commit('setHomeTitle', 'You WON!')
        } else {
          commit('setHomeTitle', 'You LOST!')
        }
        commit('setAnswerIsDone', true)
        // commit('pushHistory', state.currentPair)
      }
    },
    nextStep({commit, dispatch}) {
      console.log('next')
      commit('refreshStep')
      dispatch('getCitiesPair')
    }
  },
  modules: {
  }
})
