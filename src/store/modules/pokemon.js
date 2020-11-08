import { LocalStorage } from 'quasar'

let favorites = []
let pokemons = []

if (LocalStorage.has('favorites')) {
  favorites = LocalStorage.getItem('favorites')
}
if (LocalStorage.has('pokemons')) {
  pokemons = LocalStorage.getItem('pokemons')
}

export default {
    namespaced: true,
    state() {
      return {
        pokemons,
        displayPokemons: [],
        currentOffset: 0,
        favorites: favorites,
        card: false,
        currentPokemon: {},
      };
    },
    mutations: {
      addFavorite(state, name) {
        // add to local storage
        let favoritesTemp = state.favorites
        favoritesTemp.push(name)
        LocalStorage.set('favorites', favoritesTemp)
      
        //add to pokemons state
        let index = state.pokemons.findIndex((obj => obj.name == name))
        state.pokemons[index].favorited = true
      },
      deleteFavorite(state, name) {
        // remove from local storage
        let favoritesTemp = state.favorites
        let index = favoritesTemp.findIndex((obj => obj == name))
        favoritesTemp.splice(index, 1)
        LocalStorage.set('favorites', favoritesTemp)
      
        // remove from pokemons state
        let index2 = state.pokemons.findIndex((obj => obj.name == name))
        state.pokemons[index2].favorited = false
      },
      updateCurrentPokemonFavorite(state, payload) {
        state.currentPokemon.favorited = payload
      }
    },
    actions: {
        addToFavorite({ commit }, payload) {
            commit('addFavorite', payload)
        },
        deleteInFavorite({ commit }, payload) {
            commit('deleteFavorite', payload)
        },
        updateCurrentPokemonInFavorite({ commit }, payload) {
            commit('updateCurrentPokemonFavorite', payload)
        }
    },
    getters: {
        currentPokemon(state) {
            return state.currentPokemon
        },
        favorites(state) {
            return state.favorites
        },
    }
  };
  