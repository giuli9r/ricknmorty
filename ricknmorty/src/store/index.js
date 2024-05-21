import { createStore } from 'vuex'

// new store instance.
export default createStore({
    state: {
        characters: [],
        charactersFilter: [],
        pagination: []
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
        },
        setPaging(state, payload){
            state.pagination = payload
        }
    },
    actions: {
        async getCharacters({commit}){ 
            try {
                const response = await fetch ('https://rickandmortyapi.com/api/character')
                const data = await response.json()
                commit('setCharacter', data.results)
                commit('setCharacterFilter', data.results)
                commit('setPaging', data.info)
                console.log(data)
            } catch (error) {
                console.log(error)
                alert('Error!')
            }
        },
        filterByStatus({commit, state}, status) {
            const filter = state.characters.filter((character) => {
                return character.status.includes(status)
            })
            commit('setCharacterFilter', filter)
        },
        filterByGender({commit, state}, gender){
            const filterGender = state.characters.filter((character) => {
                return character.gender.includes(gender)
            })
            commit('setCharacterFilter', filterGender)
        },
        filterByName({commit, state}, name) {
            const formatName = name.toLowerCase();
            const results = state.characters.filter((character) => {
                let characterName = character.name.toLowerCase();
                if (characterName.includes(formatName)){
                    return character
                }
            })
            commit('setCharacterFilter', results)
        }
    },
    modules: {
    }
})
