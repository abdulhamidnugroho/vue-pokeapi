<template>
  <v-tab-item :value="'tab-stats'">
    <v-card flat>
      <v-card-title> Stats of {{ name }} </v-card-title>
      <blockquote class="blockquote">
        <div>
          <v-data-table
            dense
            :headers="headers"
            :items="games"
            :items-per-page="8"
            class="elevation-1"
          >
            <template v-slot:body="{ items }">
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td>
                    <b class="capitalize">{{ item.stat.name }}</b>
                  </td>
                  <td>{{ item.base_stat }}</td>
                  <td>{{ item.effort }}</td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </div>
      </blockquote>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  name: "PokemonGameIndex",
  props: {
    name: {
      type: String,
    },
    games: {
      type: Array,
    },
  },
  data: function () {
    return {
      search: null,
      headers: [
        {
          text: "Name",
          align: "start",
          value: "stat.name",
        },
        {
          text: "Base",
          align: "start",
          value: "base_stat",
        },
        {
          text: "Effort",
          align: "start",
          value: "effort",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
