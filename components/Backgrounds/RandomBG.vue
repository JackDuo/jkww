<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import IndexBG1 from '/Backgrounds/IndexBG1.webp'
import SpaceBG1 from '/Backgrounds/SpaceBG1.webp'
import SpaceBG2 from '/Backgrounds/SpaceBG2.webp'
import SpaceBG3 from '/Backgrounds/SpaceBG3.webp'
import SpaceBG4 from '/Backgrounds/SpaceBG4.webp'


const route = useRoute()
const backgroundImage = ref('')

const backgrounds = [SpaceBG1, SpaceBG2, SpaceBG3, SpaceBG4];

onMounted(() => {
  if (route.path === '/') {
    backgroundImage.value = IndexBG1
  } else {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    backgroundImage.value = backgrounds[randomIndex];
  }
})
</script>

<template>
  <div
      class="background"
      :style="{
      backgroundImage: backgroundImage
        ? `linear-gradient(rgba(60, 0, 90, 0.5), rgba(20, 0, 40, 0.7)), url(${backgroundImage})`
        : 'none'
    }"
  >
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  transition: background-image 1s ease-in-out;
}
</style>