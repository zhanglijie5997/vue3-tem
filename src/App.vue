<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view></router-view>
</template>

<script lang="ts">
import { onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    const routerRef = useRouter();
    onMounted(() => {
    })
    watchEffect(() => {
      if(routerRef.currentRoute.value.meta.title) {
        document.title = routerRef.currentRoute.value.meta.title;
      }
    })
    
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 40px;
}
</style>
