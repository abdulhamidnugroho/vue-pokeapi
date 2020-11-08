<template>
  <v-row justify="center">
    <v-container>
      <BackButton></BackButton>
      <v-sheet v-if="busy" :color="`grey lighten-4`" class="px-3 pt-3 pb-3">
        <v-skeleton-loader class="mx-auto" type="table"></v-skeleton-loader>
      </v-sheet>
      <div v-else>
        <v-container fluid>
          <v-row dense>
            <v-col :cols="12" :lg="3" :md="6" :xl="3">
              <PokemonData :data="pokemon"></PokemonData>
            </v-col>
            <v-col :cols="12" :sm="6" :md="3" :lg="6" :xl="6">
              <v-tabs
                v-model="tab"
                background-color="green darken-1"
                centered
                dark
                icons-and-text
              >
                <!-- <v-tabs-slider></v-tabs-slider> -->

                <v-tab href="#tab-sprites">
                  Sprites
                  <v-icon>mdi-google-circles-extended</v-icon>
                </v-tab>

                <v-tab href="#tab-moves">
                  Moves
                  <v-icon>mdi-google-circles-group</v-icon>
                </v-tab>

                <v-tab href="#tab-stats">
                  Stats
                  <v-icon>mdi-view-list</v-icon>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab" fixed-tabs>
                <PokemonSprites
                  :name="pokemon.name"
                  :sprites="pokemon.sprites"
                ></PokemonSprites>

                <PokemonMoves
                  :name="pokemon.name"
                  :moves="moves"
                  :on-search="onSearchMoves"
                ></PokemonMoves>

                <PokemonStats
                  :name="pokemon.name"
                  :games="pokemon.stats"
                ></PokemonStats>
              </v-tabs-items>
            </v-col>
            <v-col :cols="12" :sm="6" :md="3" :lg="3" :xl="3">
              <v-card class="text-center">
                <v-btn 
                  v-if="!currentPokemon.favorited"
                  color="error"
                  @click="removeFavorite"
                >
                  <v-icon>mdi-chart-arc</v-icon>
                  Release
                </v-btn>
                <v-btn 
                  v-if="!currentPokemon.favorited"
                  color="primary"
                  @click="favorite"
                >
                  <v-icon>mdi-spotlight</v-icon>
                  Catch
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </v-row>
</template>

<script>
import BackButton from "@/components/BackButton";
import PokemonData from "@/components/PokemonData";
import PokemonSprites from "@/components/PokemonSprites";
import PokemonMoves from "@/components/PokemonMoves";
import PokemonStats from "@/components/PokemonStats";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PokemonDetail",
  components: {
    BackButton,
    PokemonData,
    PokemonSprites,
    PokemonMoves,
    PokemonStats,
  },
  created() {
    this.busy = true;
    this.id = this.$route.params.id;
    this.getData();
  },
  data() {
    return {
      busy: false,
      id: 0,
      pokemon: {},
      tab: null,
      searchMove: "",
      favorited: false
    };
  },
  computed: {
    ...mapGetters("pokemon", ["currentPokemon", "favorites"]),
    moves() {
      return this.pokemon.moves.filter((move) => {
        return (
          move.move.name.toLowerCase().indexOf(this.searchMove.toLowerCase()) >=
          0
        );
      });
    },
  },
  methods: {
    ...mapActions("pokemon", [
      "addFavorite",
      "deleteFavorite",
      "updateCard",
      "updateCurrentPokemonFavorite",
      "updateCurrentPokemon",
    ]),
    getData() {
      this.$api
        .pokemon(this.id)
        .then((response) => {
          this.pokemon = response.data;
          // console.log(this.pokemon.name);
          setTimeout(() => {
            this.busy = false;
          }, 1000);
        })
        .catch();
    },
    favorite() {
      // this.$store.dispatch('pokemon/addToFavorite', this.pokemon.name);
      // this.$store.dispatch('pokemon/updateCurrentPokemonInFavorite', true);
      // console.log(this.pokemon.name);
      this.addFavorite(this.pokemon.name);
      this.updateCurrentPokemonFavorite(true);
      // console.log(this.currentPokemon);
    },
    removeFavorite() {
      // this.$store.dispatch('pokemon/deleteInFavorite', this.pokemon.name);
      // this.$store.dispatch('pokemon/updateCurrentPokemonInFavorite', false);
      this.deleteFavorite(this.pokemon.name);
      this.updateCurrentPokemonFavorite(false);
    },
    back() {
      history.go(-1);
    },
    onSearchMoves(e) {
      this.searchMove = e;
    },
  },
};
</script>

<style scoped>
.v-card__title {
  text-transform: capitalize;
}
.v-card {
  margin: 10px;
}
.v-btn {
  margin: 10px;
}
.v-icon {
  margin: 0px 5px 0px 5px;
}
</style>
