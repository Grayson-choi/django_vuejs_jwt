<template>
<div>
  <h1>This is Parent</h1>
  <input type="text" v-model="parentData"
  @input="inputParentData">
  <p> appData: {{ appData }} </p>
  <p>ChildData: {{ childData }}</p>
  <Child :appData="appData" :parentData="parentData"
  @child-input="inputChild"
  />
</div>
</template>

<script>
import Child from './Child.vue'

export default {
    name: 'Parent',
    data: function () {
        return {
            parentData: '',
            childData: '',
        }
    },
    props: {
        appData: String,
    },
    components: {
        Child,
    },
    methods: {
        inputChild: function(data) {
            this.childData = data
            this.$emit('child-input', this.childData)
            console.log('!!! text from child')
        },
        inputParentData: function () {
            this.$emit('parent-input', this.parentData)
        }

    }
}
</script>

<style>

</style>