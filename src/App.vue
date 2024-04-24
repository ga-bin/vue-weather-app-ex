<script setup>
import Navbar from './components/Navbar.vue';
import MainComp from "./components/MainComp.vue";
import About from './components/About.vue'
import { ref, onMounted } from 'vue';
// import { useStore } from 'vuex';
import { useStore } from './store/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { toggle } = storeToRefs(store);



// 앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  console.log('mounted');
  // store.dispatch('getWeather');
  store.getWeather();
})


const onSearchCity = (city) => {
  weatherData.value.city = city;
  // store.dispatch('getWeather');
  store.getWeather();
}
</script>

<template>
  <!-- <p>count: {{ $store.state.count }} </p>
  <button style="color: pink; font-size: 30px; font-weight: bold;" @click="$store.commit('addCount', '집사는 냥귀엽다')">집사를 냥귀여워하기</button> -->
  <button @click="$store.dispatch('getWeather')">getWeather</button>
  <Navbar />
  <div v-if="!toggle">
        <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style scoped lang="scss">

</style>
