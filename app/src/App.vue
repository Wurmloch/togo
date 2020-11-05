<template>
  <v-app id="app">
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AppList from '@/components/AppList'
export default {
  name: 'app',
  components: { }
}
</script>

<style>
</style>
