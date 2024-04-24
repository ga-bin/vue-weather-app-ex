<template>
    <div class="weather-info">
        <img :src="`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`" :alt="weatherData.icon" />
        <div class="temp">{{ (weatherData.temp - 273.15).toFixed(1)}}&deg;</div>
        <div class="text">{{ weatherData.text }}</div>
        <div class="location">{{ weatherData.city }}</div>
    </div>
</template>
<script setup>
import { useStore } from '../store/store';
import { storeToRefs } from 'pinia';

// store 가져오기
const store = useStore();
// store 데이터 가져오기
const { weatherData } = storeToRefs(store);

</script>
<style lang="scss" scoped>
    .weather-info {
    padding: 20px;
    & > div {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
    }
    .icon img {
      width: 140px;
    }
    .temp {
      font-size: 4em;
    }
    .text {
      font-size: 2em;
    }
  }
</style>