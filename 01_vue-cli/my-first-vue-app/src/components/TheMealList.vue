<template>
  <div>
    <ul>
        <li v-for="meal in meals" :key="">
            {{ meal }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MealList',
    props: {
        meals: Array,
    }
}
</script>

<style>

</style>