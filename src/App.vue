<template>
  <v-app>
    <v-app-bar class="app-pokemon-bar" app color="primary" dark>
      <v-btn class="d-flex align-center" :to="{ name: 'pokemons' }" text>
        Home
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="d-flex align-center" :to="{ name: 'my-pokemon' }" text>
        My Pokemon
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn href="https://pokeapi.co/docs/v2" target="_blank" text>
        <span class="mr-2">
          PokeAPI
        </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view :key="$route.fullPath || '/'"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
