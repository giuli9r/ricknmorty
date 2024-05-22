import { createStore } from 'vuex'

// new store instance.
export default createStore({
    state: {
        characters: [],
        charactersFilter: [],
        paginationInfo: {
            count: 0,
            pages: 0,
            next: null,
            prev: null,
          },
        currentPage: 1,
    },
    getters: {
        // characters: (state) => state.characters,
        // paginationInfo: (state) => state.paginationInfo,
        currentPage: (state) => state.currentPage,
    },
    // modifica los diferentes valores de state{} mediante actions
    mutations: {
        setCharacter(state, payload) {
            state.characters = payload
        },
        setCharacterFilter(state, payload){
            state.charactersFilter = payload
        },
        setPaginationInfo(state, info){
            state.paginationInfo = info
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        }
    },
    actions: {
        async getCharacters({commit}, page = 1){ 
            try {
                const response = await fetch (`https://rickandmortyapi.com/api/character?page= ${page}`);
                const data = await response.json()
                commit('setCharacter', data.results)
                commit('setCharacterFilter', data.results)
                commit('setPaginationInfo', data.info)
                commit('setCurrentPage', page)
                console.log(data)
                console.log(data.info)
            } catch (error) {
                console.log(error)
                alert('Error fetching characters!')
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
