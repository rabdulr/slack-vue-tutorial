<template>
  <div id="app">
    <HelloWorld v-if="!!server.status && server.status === 'ok'" msg="Welcome to Your Vue.js App"/>
    <template v-else>
      <Loading v-if="!error" message="Connecting..." />
      <Error v-else :error="error" />
    </template>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Error from '@/components/Error.vue'
import Loading from '@/components/Loading.vue'
import ServerService from '@/services/Server'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Error,
    Loading
  },
  data() {
    return {
      server: {},
      error: null
      }
  },
  mounted() {
    this.getServerStatus()
  },
  methods: {
    getServerStatus() {
      ServerService.fetchStatus()
        .then((response) => {
           this.server = response.data
        })
        .catch((err) => {
          this.error = { title: 'Couldn\t connect to Server', message: 'There may be a problem with your connection. Please check and try again.', reason: err.reason}
        })
    }
  }
}  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
