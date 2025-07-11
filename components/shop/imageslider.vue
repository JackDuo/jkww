<template>
  <div class="slider-container">
    <!-- Bild-Wrapper mit Zoom und Swipe -->
    <div
        class="image-wrapper"
        @click="toggleZoom"
        @mousedown.prevent
        @touchstart="startTouch"
        @touchmove="moveTouch"
        @touchend="endTouch"
    >
      <img
          :src="images[currentIndex]"
          :alt="'Bild ' + (currentIndex + 1)"
          :class="{ zoomed: zoomed }"
          @load="zoomed = false"
          draggable="false"
      />
    </div>

    <!-- Navigation -->
    <button @click.stop="prev" class="nav-button left">‹</button>
    <button @click.stop="next" class="nav-button right">›</button>

    <!-- Bildnummer -->
    <div class="image-counter">
      Bild {{ currentIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const zoomed = ref(false)

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  zoomed.value = false
}

function prev() {
  currentIndex.value =
      (currentIndex.value - 1 + props.images.length) % props.images.length
  zoomed.value = false
}

function toggleZoom() {
  zoomed.value = !zoomed.value
}

let touchStartX = 0
let touchEndX = 0

function startTouch(e) {
  touchStartX = e.touches[0].clientX
}

function moveTouch(e) {
  touchEndX = e.touches[0].clientX
}

function endTouch() {
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 50) {
    diff > 0 ? next() : prev()
  }
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.image-wrapper {
  width: auto;
  min-height: 500px;
  max-height: 80vh;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
  cursor: zoom-in;
}

img.zoomed {
  transform: scale(1.75);
  cursor: zoom-out;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-background);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  z-index: 10;
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}

.image-counter {
  text-align: center;
  margin-top: 0.5rem;
  color: var(--color-active);
}
</style>
