import { createStore } from 'vuex'

// new store instance.
export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  getters: {
  },
  // modifica los diferentes valores de state{} mediante actions
  mutations: {
    setCharacter(state, payload) {
      state.characters = payload
    },
    setCharacterFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}){ 
      try {
        const response = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacter', data.results)
        commit('setCharacterFilter', data.results)
        // console.log(data)
      } catch (error) {
        console.log(error)
        alert('Error!')
      }
    }
  },
  modules: {
  }
})
