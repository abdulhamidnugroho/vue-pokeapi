<template>
  <v-tab-item :value="'tab-sprites'">
    <v-card flat>
      <v-card-title> Sprites of {{ name }} </v-card-title>
      <blockquote class="blockquote">
        <v-row>
          <PokemonSprite
            v-for="(spriteData, key, index) in sprites"
            :src="spriteData"
            :key="index"
            :name="key"
            v-show="spriteData != null"
          ></PokemonSprite>
        </v-row>
      </blockquote>
    </v-card>
  </v-tab-item>
</template>

<script>
import PokemonSprite from "@/components/PokemonSprite";
export default {
  name: "PokemonSprites",
  components: {
    PokemonSprite,
  },
  props: {
    name: String,
    sprites: Object,
  },
  methods: {
    capitalizeFirstLetter: (name) => {
      return name.charAt(0).toUpperCase();
    },
  },
};
</script>

<style scoped>
.v-card__title {
  text-transform: capitalize;
}
</style>
