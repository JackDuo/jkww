<script setup>
import { ref, onMounted, nextTick } from 'vue'
import LoadDonut from "~/components/visuals/LoadDonut.vue";
const config = useRuntimeConfig()
const base = config.app.baseURL //für baseURL adresse der planetenbilder


const isSpeaking = ref(false)
const currentSpeech = ref('')
const loadingProgress = ref(0)
const loadingDone = ref(false)

function speak(text) {
  currentSpeech.value = text
  isSpeaking.value = true
}
function stopSpeaking() {
  isSpeaking.value = false
}

const objects = ref([
  { img: '/planets/PlanetTerminal.webp', title: 'Erhalte die ultimative Terminal-Erfahrung um meine Arduino projekte zu sehen.', left: 16, top: 65, scale: 1.35 , page: '/terminal', delay: 0 },
  { img: '/planets/PlanetShop.webp', title: 'Hier kannst du dir (nicht) meine Batikprojekte kaufen!', left: 55, top: 68, scale: 1.17 , page: '/shop2', delay: 2 },
  { img: '/planets/PlanetRadio.webp', title: 'Gute Musik und gute Podcasts!', left: 78, top: 45, scale: 1, page: '/radio', delay: 3 },
  { img: '/planets/PlanetWeather.webp', title: 'Hier kannst du dir absolut akkurate Wetterdaten ansehen!', left: 20, top: 20, scale: 0.8 , page: '/wetter', delay: 4 },
  { img: '/planets/PlanetBanana.webp', title: 'Was will man mehr als mit einer Banane zu schreiben?', left: 65, top: 24, scale: 0.6 , page: '/banane', delay: 5 },
  { img: '/planets/PlanetAbout.webp', title: 'Wenn du etwas über mich wissen willst, bist du hier richtig!', left: 48, top: 37, scale: 0.5 , page: '/about', delay: 6 },

])



const imagesLoaded = ref(0)
const totalImages = ref(objects.value.length)

function onImageLoad() {
  imagesLoaded.value++
  loadingProgress.value = Math.round((imagesLoaded.value / totalImages.value) * 100)
  if (imagesLoaded.value >= totalImages.value) {
    // Warte auf vollständiges Rendering
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        loadingDone.value = true
        setTimeout(() => showLoader.value = false, 1000) // nach 1s Fade-Out
      })
    })
  }
}

const showLoader = ref(true)

onMounted(async () => {

})
</script>


<template>
  <div class="Full-container">
  <!-- Ladebildschirm bleibt immer im DOM, blendet sich aus -->
    <div
        v-if="showLoader"
        class="loading-screen"
        :style="{
        opacity: loadingDone ? 0 : 1,
        pointerEvents: loadingDone ? 'none' : 'all',
        transition: 'opacity 1s ease',
      }"
    >
      <div style="position: fixed;">
        <LoadDonut/>
      </div>
      <div class="loading-text">
        Lade: {{ loadingProgress }}%
      </div>
    </div>

    <!-- Hauptinhalt wird immer gerendert -->
    <img src="/Logos/LogoSite.webp" alt="LogoSite"
         style="position: fixed; right: -2px; top: -2px; width: 40vh; height: auto; border-bottom-left-radius: 5px" />

    <div class="p-10 text-center">
      <div class="cartoon">
        <div class="face-container">
          <img src="/Sonstiges/NicCageHeadTalk.webp" alt="Nic Cage" class="face-image" />
          <img
              src="/Sonstiges/NicCageHeadMouth.webp"
              alt="Nicolas Cage Mouth"
              :class="['mouth-img', isSpeaking ? 'talking' : '']"
          />

        </div>

        <div v-if="isSpeaking" class="speech-bubble">
          {{ currentSpeech }}
        </div>
      </div>

      <div id="flying-area" class="mt-10">
        <div
            v-for="(obj, i) in objects"
            :key="i"
            class="hover-object"
            :style="{
            left: obj.left + 'vw',
            top: obj.top + 'vh',
          }"
            @mouseenter="speak(obj.title)"
            @mouseleave="stopSpeaking"
        >
          <NuxtLink :to="obj.page">
            <img
                :src="base + obj.img"
                :alt="obj.title"
                class="w-24 h-auto rounded-lg planet glow"
                :style="{ animationDelay: obj.delay + 's', width: (obj.scale * 17 )+'vw', height: 'auto'  }"
                @load="onImageLoad"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.Full-container {
  font-family: "Lucida Console", Monaco, monospace;
  height: 100vh;
  overflow: hidden;
}
.loading-screen {
  position: fixed;
  inset: 0; /* top:0; bottom:0; left:0; right:0; */
  background-color: var(--color-active); /* dunkles lila */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: var(--color-accent-light); /* helles orange */
  font-size: 3rem;
  font-weight: bold;
  user-select: none;
}

#flying-area {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: -100px;
  touch-action: none; /* verhindert Scroll beim Ziehen */
}
.cartoon {
  display: inline-block;
  position: fixed;
  margin-bottom: 1rem;
  bottom: 0;
  right: 0;
  padding: 20px;
  z-index: 2;
}

.face-container {
  position: relative;
  display: inline-block; /* damit es genau so groß ist wie das Bild */

}

.face-image {
  display: block;
  max-width: 100%;
  height: auto;
  /* evtl. noch width/height anpassen, wenn nötig */
  width: 120px;
  height: auto;
}

.mouth-img {
  position: absolute;
  bottom: 9px;   /* ungefähr so wie vorher */
  left: 50%;
  width: 120px;   /* gleich groß wie Kopf */
  height: 120px;  /* oder auto, falls du Proportionen erhalten willst */
  transform: translateX(-50%);
  transition: transform 0.2s;
  pointer-events: none; /* verhindert Mausinteraktionen */
  user-select: none;
}

.mouth-img.talking {
  animation: mouthTalk 0.3s infinite alternate;
}

@keyframes mouthTalk {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(7px); /* nach unten */
  }
}

.speech-bubble {
  color: #FFFFFF;
  position: absolute;
  bottom: 0;
  left: 15%;
  margin-bottom: 190px;
  transform: translateX(-50%);
  background: var(--color-background);
  border: 2px solid var(--color-active);
  padding: 10px;
  border-radius: 15px;
  max-width: 150px;
  font-weight: bold;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  white-space: normal;
  overflow-wrap: break-word;
  hyphens: auto;
}
.speech-bubble:after {
  content: "hallo";
  position: absolute;
  bottom: -9px; /* Abstand zur Spitze */
  left: 75%;
  transform: translateX(-50%);.planet {
  animation: float 20s ease-in-out infinite;
  transform-origin: center;
  z-index: 5;
}
  .planet:hover {
    filter: drop-shadow(0 0 16px var(--color-accent));
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) scale(1);
    }
    50% {
      transform: translateY(-30px) translateX(10px) scale(1.15);
    }
    100% {
      transform: translateY(0) translateX(0) scale(1);
    }
  }
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid var(--color-background); /* Farbe der Sprechblase */

}

.hover-object {
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.2s;
  position: absolute;
  padding: 10px 20px;
}
.hover-object:hover {
  transform: scale(1.2);
}

.glow {
  filter: drop-shadow(0 0 75px rgb(14, 0, 23));
}
.planet {
  animation: float 20s ease-in-out infinite;
  transform-origin: center;
  filter: brightness(70%) saturate(120%);
}
.planet:hover {
  filter: drop-shadow(0 0 16px var(--color-accent));
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  50% {
    transform: translateY(-30px) translateX(10px) scale(1.15);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
}
</style>
