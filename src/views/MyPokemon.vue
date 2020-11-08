<template>
  <section>
    <v-row v-if="busy">
      <v-col cols="3" v-for="tmp in [1, 2, 3, 4]" :key="tmp">
        <v-sheet :color="`grey lighten-4`" class="px-3 pt-3 pb-3">
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
    <v-container v-else>
      <v-row>
        <template v-for="(item, index) in items">
          <v-col :lg="3" :md="3" :sm="6" :xs="6" :key="index">
            <CatchedPokemon :item="item" :index="index" />
          </v-col>
        </template>
      </v-row>
    </v-container>
    <div v-if="!busy" class="text-center">
      <v-btn
        :loading="loading"
        :disabled="offset < 1"
        color="blue-grey"
        class="ma-2 white--text"
        @click="back()"
      >
        <v-icon left dark>mdi-arrow-left</v-icon>
        Back
      </v-btn>

      <v-btn
        :loading="loading"
        :disabled="offset + limit >= total"
        color="blue-grey"
        class="ma-2 white--text"
        @click="next()"
      >
        Next
        <v-icon right dark>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </section>
</template>

<script>
import CatchedPokemon from '../components/CatchedPokemon';
import Poke from '../services/poke';
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CatchedPokemon,
  },
  data() {
    return {
      busy: false,
      items: [],
      total: 0,
      loading: false,
      limit: 20,
      offset: 0,
      loaded: false,
      noFavorite: true
    };
  },
  computed: {
    ...mapGetters("pokemon", [
      "pokemons",
      "displayPokemons",
      "currentOffset",
      "favorites",
      "currentPokemon",
      "search",
      "mobile"
    ]),
  },
  created() {
    if (this.favorites.length == 0) this.loaded = true;
    else this.getPokemon(this.currentOffset);
  },
  methods: {
    ...mapActions("pokemon", [
      "updateCurrentOffset",
      "addDisplayPokemonByPokemon",
      "emptyDisplayPokemon",
    ]),
    getPokemon() {
      this.emptyDisplayPokemon();
      let id = 0;
      console.log(this.favorites);
      this.favorites.forEach(element => {
        this.items.push(this.favorites.name);
        const types = [];
        const abilities = [];
        let favorited = false;
        Poke.pokemonDetailByName(element.toLowerCase()).then(response => {
            response.data.types.forEach(element => {
            types.push(element.type.name);
          });
          response.data.abilities.forEach(element => {
            abilities.push(element.ability.name);
          });

          this.favorites.forEach(element => {
            if (element.toLowerCase() == response.data.name) {
              favorited = true;
            }
          });

          this.addDisplayPokemonByPokemon({
            id: response.data.id,
            name:
              response.data.name.charAt(0).toUpperCase() +
              response.data.name.slice(1),
            type: types,
            favorited: favorited,
            picture: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`,
            ability: abilities,
            height: response.data.height,
            weight: response.data.weight,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`
          });
          id += 1;
          if (this.favorites.length == id) {
            this.loaded = true;
            this.noFavorite = false;
          }
        });
      });
    },
  }
};
</script>

<style scoped></style>
