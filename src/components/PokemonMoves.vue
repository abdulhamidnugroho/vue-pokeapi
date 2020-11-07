<template>
  <v-tab-item :value="'tab-moves'">
    <v-card flat>
      <v-card-title> Moves of {{ name }} </v-card-title>
      <blockquote class="blockquote">
        <v-row>
          <v-col :cols="12">
            <v-text-field
              label="Move"
              placeholder="Search"
              outlined
              v-model="search"
              @keyup="onSearchHandler"
            ></v-text-field>
          </v-col>
          <v-col :cols="12" >
            <v-chip
              class="ma-2"
              v-text="move.move.name"
              v-for="(move, index) in moves"
              :key="index"
            ></v-chip>
          </v-col>
        </v-row>
      </blockquote>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  name: "PokemonMoves",
  props: {
    name: {
      type: String,
    },
    moves: {
      type: Array,
    },
    onSearch: {
      type: Function,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearchHandler() {
      this.onSearch(this.search);
    },
  },
};
</script>

<style scoped></style>
