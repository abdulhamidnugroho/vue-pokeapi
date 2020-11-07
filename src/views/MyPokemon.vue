<template>
  <v-col :lg="3" :md="3" :sm="6">
    <v-card
      elevation="2"
      outlined
    >
      <v-card-title>
        {{ data }}
      </v-card-title>
    </v-card>
    <v-card
      elevation="2"
      outlined
    >
      <v-card-title>
        {{ data }}
      </v-card-title>
    </v-card>
  </v-col>
</template>

<script>
// import Pokemon from "../components/Pokemon";

export default {
  data() {
    return {
      data: 'Test1'
    };
  }
};
</script>

<style scoped></style>
