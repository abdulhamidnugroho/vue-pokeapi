<template>
  <v-col :cols="6" :lg="4" :md="3" :sm="6">
    <v-card>
      <v-img
        :src="src || imageDefault"
        class="white--text align-end"
        height="100px"
        :contain="true"
      ></v-img>
      <v-card-title
        class="image-title capitalize"
        v-text="spriteName(name)"
      ></v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "PokemonSprites",
  props: {
    src: String,
    name: String,
  },
  data() {
    return {
      imageDefault:
        "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png",
    };
  },
  methods: {
    spriteName($sprite) {
      return $sprite.replace(/_/g, " ");
    },
  },
};
</script>

<style scoped></style>
