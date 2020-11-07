<template>
  <v-card class="pa-2" outlined tile>
    <v-img
      :src="`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`"
      :lazy-src="`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`"
      :alt="item.name"
      contain
      height="125"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <div class="text-center md:text-left">
      <h2 class="text-lg capitalize">{{ item.name }}</h2>
      <v-btn
        color="primary"
        :to="{ name: 'pokemon-detail', params: { id: item.id } }"
      >
        <v-icon left dark>mdi-eye</v-icon>
        Show
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Pokemon",
  props: {
    item: Object,
  },
};
</script>
