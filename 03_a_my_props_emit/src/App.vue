<template>
  <div id="app">
    <h1>App</h1>
    <input v-model="appData" type="text">
    <p>{{ appData }}</p>
    <p>ParentData: {{ parentData }}</p>
    <p>ChildData: {{ childData }}</p>
    <Parent :appData="appData" 
    @parent-input="inputParent" 
    @child-input="inputChild" />
  </div>
</template>

<script>
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  data: function () {
    return {
      appData: '',
      parentData: '',
      childData: '',
    }
  },
  components: {
    Parent,
  },
  methods: {
    inputParent: function(data) {
      this.parentData = data
    },
    inputChild: function(data) {
      this.childData = data
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
