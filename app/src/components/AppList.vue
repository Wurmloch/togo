<template>
  <div class="app-list">
    <v-btn
      v-on:click="retrieveApps"
    >
      Reload
    </v-btn>

    <v-data-table
      :headers="listHeaders"
      :items="appList"
      :items-per-page="20"
      :loading="loadingAppList"
      :loading-text="loadingAppListTitle"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import { WindowsApp, WindowsAppSessionName } from '@togo/shared'
import bitsToMB from '@/filters/bitsToMB'

@Component
export default class AppList extends Vue {
  private appList: WindowsApp[] = []
  private listHeaders = [
    { text: 'Name', align: 'left', sortable: true, value: 'imageName' },
    { text: 'Display Name', align: 'left', sortable: true, value: 'windowTitle' },
    { text: 'PID', align: 'left', sortable: true, value: 'pid' },
    { text: 'Memory', align: 'left', sortable: true, value: 'memUsage' },
    { text: 'CPU Time', align: 'left', sortable: true, value: 'cpuTime' },
    { text: 'Status', align: 'left', sortable: true, value: 'status' },
    { text: 'User', align: 'left', sortable: true, value: 'username' }
  ]

  private loadingAppList = false
  private loadingAppListTitle = 'Loading OS Apps...'

  created () {
    this.retrieveApps()
  }

  public get windowsAppSessionName (): typeof WindowsAppSessionName {
    return WindowsAppSessionName
  }

  async retrieveApps () {
    this.loadingAppList = true
    this.loadingAppListTitle = 'Loading OS Apps...'
    try {
      this.appList = (await axios.get(`${process.env.VUE_APP_API_URL}/apps`)).data
      this.loadingAppListTitle = 'OS Apps retrieved. Loading more details...'
      this.appList = (await axios.get(`${process.env.VUE_APP_API_URL}/apps`, {
        params: { verbose: true }
      })).data
      for (const app of this.appList) app.memUsage = bitsToMB(app.memUsage)
    } catch (err) {
      console.log(err)
    }
    this.loadingAppList = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
