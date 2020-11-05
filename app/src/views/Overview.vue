<template>
  <AppList/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppList from '@/components/AppList.vue' // @ is an alias to /src

@Component({
  components: {
    AppList
  }
})
export default class Overview extends Vue {}
</script>
