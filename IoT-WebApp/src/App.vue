<template>
  <v-app id="inspire" dark color="red">
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="red darken-3" dark app fixed>
    </v-toolbar>
    <main>
      <v-content>
        <v-layout row wrap>
          <v-flex xl12 lg12 md12 sm12 xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String
  },
  data: () => ({
    langs: ["el", "en"],
    dialog: false,
    hidden: false,
    drawer: null,
    dark: true,
  })
};
</script>

<style>
#inspire {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a:hover {
  color: #1976d2 !important;
}
</style>
