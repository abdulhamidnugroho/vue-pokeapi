<template>
  <v-btn color="primary" @click="back" class="my-3">
    <v-icon left dark>mdi-arrow-left</v-icon>
    Back
  </v-btn>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    back() {
      history.go(-1);
    },
  },
};
</script>

<style scoped></style>
