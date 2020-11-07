<template>
  <v-card>
    <!-- <v-img
      :src="data.sprites.front_default"
      class="white--text align-end"
      height="200px"
      :contain="true"
    >
    </v-img> -->
    <v-img
      :src="`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`"
      :lazy-src="`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`"
      :alt="data.name"
      contain
      height="125">
    </v-img>
    <v-card-title v-text="data.name"></v-card-title>
    <v-card-subtitle class="pb-0">
      <div><b>Weight: </b>{{ data.weight }}</div>
      <div><b>Height: </b>{{ data.height }}</div>
      <div><b>Order: </b>{{ data.order }}</div>
      <div><b>Type: </b>
        <v-chip
          class="ma-2"
          v-text="type.type.name"
          v-for="(type, index) in data.types"
          :key="index"
        ></v-chip>
      </div>
      <div><b>Ability: </b><v-chip
          class="ma-2"
          v-text="ability.ability.name"
          v-for="(ability, index) in data.abilities"
          :key="index"
        ></v-chip>
      </div>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "PokemonData",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.v-chip {
  text-transform: capitalize;
}
.v-card__title {
  text-transform: capitalize;
}
.v-image__image--cover {
  background-size: contain;
}
</style>
