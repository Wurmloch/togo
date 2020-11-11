<template>
  <v-app id="app">
    <v-navigation-drawer app v-model="drawer">
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>TOGO</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: false
  }),
  components: { }
}
</script>

<style>
</style>
