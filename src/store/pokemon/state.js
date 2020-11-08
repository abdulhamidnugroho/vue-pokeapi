// import { LocalStorage } from 'quasar'

let favorites = []
let pokemons = []

// if (LocalStorage.has('favorites')) {
//   favorites = LocalStorage.getItem('favorites')
// }
// if (LocalStorage.has('pokemons')) {
//   pokemons = LocalStorage.getItem('pokemons')
// }

export default function () {

  return {
    pokemons,
    displayPokemons: [],
    currentOffset: 0,
    favorites,
    card: false,
    search: false,
    currentPokemon: {},
    mobile: "14px"
  }
}
