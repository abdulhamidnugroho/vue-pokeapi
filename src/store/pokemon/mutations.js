import { LocalStorage } from 'quasar'

export function updateCurrentOffset(state, payload) {
  if (payload < 0) state.currentOffset = 0
  else state.currentOffset = payload
}
export function updateCard(state) {
  state.card = !state.card
  if (!state.card) state.currentPokemon = {}
}
export function updateCurrentPokemon(state, payload) {
  state.currentPokemon = payload
}
export function updateCurrentPokemonFavorite(state, payload) {
  state.currentPokemon.favorited = payload
}
export function addFavorite(state, name) {
  // add to local storage
  let favoritesTemp = state.favorites
  favoritesTemp.push(name)
  LocalStorage.set('favorites', favoritesTemp)
  console.log(state)
  //add to pokemons state
  let index = state.pokemons.findIndex((obj => obj.name == name))
  state.pokemons[index].favorited = true
  
}
export function deleteFavorite(state, name) {
  // remove from local storage
  let favoritesTemp = state.favorites
  let index = favoritesTemp.findIndex((obj => obj == name))
  favoritesTemp.splice(index, 1)
  LocalStorage.set('favorites', favoritesTemp)

  // remove from pokemons state
  let index2 = state.pokemons.findIndex((obj => obj.name == name))
  state.pokemons[index2].favorited = false
}
export function addPokemon(state, payload) {
  let pokemonsTemp = state.pokemons
  pokemonsTemp.push(payload)
  LocalStorage.set('pokemons', pokemonsTemp)
}
export function emptyPokemon(state) {
  state.pokemons = []
}
export function addDisplayPokemonByOffset(state, payload) {
  state.displayPokemons = [...state.pokemons.slice(payload, payload + 50)]
}
export function addDisplayPokemonByPokemon(state, payload) {
  state.displayPokemons.push(payload)
}
export function emptyDisplayPokemon(state) {
  state.displayPokemons = []
}