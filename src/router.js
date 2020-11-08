import Router from "vue-router";

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      redirect: {
        name: "pokemons",
      },
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("./components/Pokemons"),
      meta: {
        title: "Pokemons",
      },
    },
    {
      path: "/detail/:id",
      name: "pokemon-detail",
      component: () => import("./components/PokemonDetail"),
      meta: {
        title: "Pokemon Detail",
      },
    },
    {
      path: "/mypokemon",
      name: "my-pokemon",
      component: () => import("./views/MyPokemon.vue"),
      meta: {
        title: "My Pokemon",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = `${nearestWithTitle.meta.title}`;
  next();
});

export default router;
