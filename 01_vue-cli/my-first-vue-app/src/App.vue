<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Hello Saffy"/>
    <h3>app.vue</h3>
    <NewComponent message="Newcomponent app에서 보내는 메세지"/>
    <NewComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'

export default {
  name: 'App.vue',
  components: {
    HelloWorld,
    NewComponent
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
h1 {
  color: #42b983;
}
</style>
