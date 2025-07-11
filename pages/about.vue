<template>
  <div style="height: 1300px; width: 1000px; position: relative;  left: 0; top: 0;">
    <!-- Karten-Stapel -->
    <Card
        v-for="(card, index) in visibleCards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :mainImage="card.image"
        templateImage="/images/template.png"
        :class="{ 'is-animated': index === 0 && isAnimating }"
        style="width: 60%; height: 60%; position: absolute; bottom: 32vh; left: 14vw; "
        :data-card="index"
        @animationend="index === 0 && isAnimating ? onAnimationEnd() : null"
        :style="{ zIndex: visibleCards.length - index }"
    />

    <!-- Zurückkehrende Karte -->
    <Card
        v-if="isPushingBack && pushedBackCard"
        :key="'pushed-back-' + pushedBackCard.id"
        :title="pushedBackCard.title"
        :description="pushedBackCard.description"
        :mainImage="pushedBackCard.image"
        templateImage="/images/template.png"
        class="push-back"
        style="width: 60%; height: 60%; position: absolute; bottom: 32vh; left: 14vw; z-index: 0;"
        @animationend="onPushBackEnd"
    />
      </div>

  <!-- Button -->
  <img
      src="/aboutCard/FightButton.webp"
      @click="!isAnimating && !isPushingBack && swipeNext()"
      style="    z-index: 1"
      :style="{
    position: 'absolute',
    bottom: '0',
    left: '45vw',
    width: '250px',
    height: 'auto',
    cursor: isAnimating || isPushingBack ? 'not-allowed' : 'pointer',
    opacity: isAnimating || isPushingBack ? 0.5 : 1,
    transition: 'opacity 0.2s ease'
  }"
  />
  <img src="/aboutCard/DeckBackground2.webp" style="
    position: absolute;
    bottom: 48%;
    transform: translateY(50%) translateX(-50%);
    left: 27vw;
    width: auto;
    height: 95vh;
    z-index: -1;"/>


  <!-- Gegner & Lebensanzeige -->
  <!-- Gegner-Container -->
  <div style="position: fixed; right: 5%; bottom: 0; text-align: center; z-index: -1">


    <!-- Statusmeldungen -->
    <div v-if="enemyHealth <= 0 && !enemyDefeated" style="margin-top: 10px; margin-bottom: 20px; font-weight: bold; font-size: 1.5em; color: red;">
      Enemy besiegt!
    </div>
    <div v-if="enemyDefeated" style="margin-top: 10px; margin-bottom: 20px; font-weight: bold; font-size: 1.5em; color: var(--color-accent-light);">
      Gegner wurde besiegt! Drücke den Button, um fortzufahren.
    </div>

    <!-- Lebensleiste über dem Bild -->
    <div style="margin-bottom: 10px; width: 100%; height: 20px; background: #ccc; border-radius: 5px;">
      <div
          :style="{
        width: enemyHealth + '%',
        height: '100%',
        background: enemyHealth > 30 ? 'green' : 'red',
        transition: 'width 0.3s',
        borderRadius: '5px'
      }"
      ></div>
    </div>

    <!-- Gegnerbild (immer bündig unten) -->
    <img
        :src="currentEnemy.image"
        alt="Enemy"
        :class="{ shake: enemyJustHit, 'hit-flash': enemyHitFlash, defeated: enemyHealth <= 0 }"
        style="height: 70vh; width: auto; transition: filter 0.3s;"
    />


  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Card from '~/components/about/card.vue'

import FaceBall from '@/assets/radio/BilderDigitalArt/FaceSticker2.webp'
import PlanetIndex from '/planets/PlanetIndex.webp'
import PlanetRadio from '/planets/PlanetRadio.webp'
import PlanetTerminal from '/planets/PlanetTerminal.webp'


// === Karten Setup ===
const allCards = [
  {
    id: 1,
    title: 'Student',
    image: FaceBall,
    description: 'Ja studium Soziale Arbeit im 10 semester haha'
  },
  {
    id: 2,
    title: 'Feinwerkmechaniker',
    image: PlanetIndex,
    description: 'Ausbildung zum feinwerkmechaniker gemacht. Was soll ich sagen war witzig'
  },
  {
    id: 3,
    title: 'Sanfter Blonder',
    image: PlanetRadio,
    description: 'Einfach chill guy, oder so. hab memes noch nie gesehen'
  },
  {
    id: 4,
    title: 'Unverholfen',
    image: PlanetTerminal,
    description: 'Keine ahnung was ich schreiben soll'
  },
]

const visibleCards = ref([...allCards])
const isAnimating = ref(false)
const isPushingBack = ref(false)
let pushedBackCard = null


import Enemy1 from "/aboutCard/Enemy.webp";
import Enemy2 from "/aboutCard/Enemy2.webp";

// === Gegner Setup ===
const enemies = [
  { name: "Enemy1", image: Enemy1 },
  { name: "Enemy2", image: Enemy2 }
]

const currentEnemyIndex = ref(0)
const currentEnemy = ref(enemies[currentEnemyIndex.value])

const enemyHealth = ref(100)
const enemyJustHit = ref(false)
const enemyHitFlash = ref(false)
const enemyDefeated = ref(false)

function swipeNext() {
  if (isAnimating.value || isPushingBack.value) return

  // Wenn Gegner besiegt war, nächster Gegner wird erst jetzt geladen
  if (enemyDefeated.value) {
    enemyDefeated.value = false
    nextEnemy()
    return
  }

  // Wenn Gegner gerade tot ist (aber nicht im Übergang), blockieren
  if (enemyHealth.value <= 0) return

  isAnimating.value = true

  // Trefferfeedback
  enemyJustHit.value = true
  enemyHitFlash.value = true
  const nextHealth = Math.max(0, enemyHealth.value - 20)
  enemyHealth.value = nextHealth

  setTimeout(() => {
    enemyJustHit.value = false
  }, 300)

  setTimeout(() => {
    enemyHitFlash.value = false
  }, 100)

  if (nextHealth === 0) {
    setTimeout(() => {
      enemyDefeated.value = true // Warten auf Button
    }, 600)
  }
}

function nextEnemy() {
  currentEnemyIndex.value = (currentEnemyIndex.value + 1) % enemies.length
  currentEnemy.value = enemies[currentEnemyIndex.value]
  enemyHealth.value = 100
}

async function onAnimationEnd() {
  isAnimating.value = false
  pushedBackCard = visibleCards.value.shift()
  await nextTick()
  isPushingBack.value = true
}

function onPushBackEnd() {
  visibleCards.value.push(pushedBackCard)
  pushedBackCard = null
  isPushingBack.value = false
}
</script>

<style>
@keyframes shuffle {
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    filter: grayscale(0%) brightness(100%);
  }
  100% {
    transform: translateX(110%) translateY(-25%) rotate(10deg) scale(0.85);
    filter: grayscale(10%) brightness(60%);
  }
}

@keyframes shake {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  20% {
    transform: translate(-5px, 0) rotate(-2deg);
  }
  40% {
    transform: translate(5px, 0) rotate(2deg);
  }
  60% {
    transform: translate(-5px, 0) rotate(-2deg);
  }
  80% {
    transform: translate(5px, 0) rotate(2deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
}

.is-animated {
  animation: shuffle 0.4s linear forwards;
}

.push-back {
  animation: shuffle 0.4s linear reverse;
  position: absolute;

}

.shake {
  animation: shake 0.3s ease;
}

.hit-flash {
  filter: brightness(300%) contrast(200%);
}

.defeated {
  filter: grayscale(100%) brightness(60%);
}
</style>
