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
      loading-text="Loading OS Apps... Please wait"
      class="elevation-1"
    ></v-data-table>
    <v-list>
      <v-list-item v-for="app in appList" v-bind:key="app.pid">
        <v-list-item-icon>
          <v-icon v-if="app.sessionName === windowsAppSessionName.CONSOLE">widgets</v-icon>
          <v-icon v-if="app.sessionName === windowsAppSessionName.SERVICES">miscellaneous_services</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import WindowsApp from '@/typings/interface/windows-app'
import WindowsAppSessionName from '@/typings/enum/windows-app-session-name.enum'
import bitsToMB from '@/filters/bitsToMB'

@Component
export default class AppList extends Vue {
  private appList: WindowsApp[] = []
  private listHeaders = [
    { text: 'Name', align: 'left', sortable: true, value: 'imageName' },
    { text: 'PID', align: 'left', sortable: true, value: 'pid' },
    { text: 'Memory', align: 'right', sortable: true, value: 'memUsage' }
  ]

  private loadingAppList = false

  public get windowsAppSessionName (): typeof WindowsAppSessionName {
    return WindowsAppSessionName
  }

  async retrieveApps () {
    this.loadingAppList = true
    try {
      this.appList = (await axios.get(`${process.env.VUE_APP_API_URL}/apps`)).data
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
