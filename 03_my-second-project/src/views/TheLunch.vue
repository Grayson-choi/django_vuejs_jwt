<template>
  <div>
      <h1>점심 메뉴 추천</h1>
      <h1>{{ lunch }}</h1>
      <h1>오늘의 메뉴는: {{ selectedLunchMenu }}</h1>
      <button @click="selectLunch">메뉴 뽑기</button>
  </div>
</template>

<script>
import _ from 'lodash'


export default {
    name: 'TheLunch',
    data: function () {
        return {
            lunch: ['국밥', '짜장면', '햄버거'],
            selectedLunchMenu: '',
        }

    },
    methods: {
        selectLunch: function () {
            const randomIndex = _.random(this.lunch.length - 1)
            this.selectedLunchMenu = this.lunch[randomIndex]
        }
    }
}
</script>

<style>

</style>