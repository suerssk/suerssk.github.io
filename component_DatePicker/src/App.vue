<template>
  <div id="app">
      <!-- <date-picker :date="date" @choose-date="chooseDate"></date-picker> -->
      <date-picker v-model="date"></date-picker>
  </div>
</template>

<script>
import DatePicker from "./components/DatePicker";

export default {
    components: {
        DatePicker
    },
    data() {
        return {
            date: new Date()
        }
    },
    // 使用 v-model 简化(就不需要此处监听事件了)
    // methods: {
    //     chooseDate(date){
    //         this.date = date;
    //     }
    // }
}
</script>

<style>

</style>