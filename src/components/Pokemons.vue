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
            <Pokemon :item="item" />
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
import Pokemon from "./Pokemon";

export default {
  name: "Pokemons",
  components: {
    Pokemon,
  },
  data() {
    return {
      busy: false,
      items: [],
      total: 0,
      loading: false,
      limit: 20,
      offset: 0,
    };
  },
  created() {
    this.busy = true;
    const { limit, offset } = this.$route.query;
    this.limit = parseInt(limit) || 20;
    this.offset = parseInt(offset) || 0;
    this.getPokemons();
  },
  methods: {
    back() {
      this.offset = this.offset - this.limit;
      this.getPokemons();
    },
    next() {
      this.offset = this.offset + this.limit;
      this.getPokemons();
    },
    getPokemons() {
      if (this.limit < 0) {
        this.limit = 0;
      }
      if (this.offset < 0) {
        this.offset = 0;
      }
      const filters = {
        limit: this.limit.toString(),
        offset: this.offset.toString(),
      };
      this.$router
        .push({ name: "pokemons", query: filters })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {});
      this.loading = true;
      this.$api
        .pokemons(this.limit, this.offset)
        .then((response) => {
          this.total = response.data.count;
          this.items = response.data.results.map((data) => {
            let pokeId = data.url.replace(this.$api.url(), "").split("/");
            data.id = pokeId[0];
            return data;
          });
          this.loading = false;
          this.busy = false;
          // console.log(this.items);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
          this.loading = false;
        });
    },
  },
};
</script>
