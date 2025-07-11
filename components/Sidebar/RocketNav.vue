<template>
  <div id="app" class="FullContrainer">
    <div class="header"
         :class="{'headfadeout': isRocket, 'headfadein': isRocketAnimationReverse}"
    >
      <div @click="toggleRocket" class="hamburger" style="align-content: center; color: white">
        &#9776; Reise Starten
      </div>
    </div>
    <img
        v-if="isRocket"
        src="/planets/rakete.webp"
        :class="{ 'rocket': true, 'reverse': isRocketAnimationReverse }"
        style="position: fixed; top: 60vh; height: 40vh; width: auto;"
    />
    <div class="planet-container" v-if="isRocket" @click="handleBackgroundClick">
      <img
          v-for="(planet, index) in planets"
          :key="index"
          :src="`${planet.image}`"
          class="planet"
          :style="{
            transform: `translate(${planetPositions[index].x}vw, ${planetPositions[index].y}vh) scale(${planet.scale})`
          }"
          @click.stop="redirectToRoute(planet.route)"
      />
    </div>
  </div>
</template>

<script>
import PlanetIndex from "/planets/PlanetIndex.webp";
import PlanetTerminal from "/planets/PlanetTerminal.webp";
import PlanetRadio from "/planets/PlanetRadio.webp";
import PlanetShop from "/planets/PlanetShop.webp";
import PlanetWeather from "/planets/PlanetWeather.webp";
import PlanetAbout from "/planets/PlanetAbout.webp";


export default {
  data() {
    return {
      isRocket: false,
      isRocketAnimationReverse: false,
      planets: [
        {image: PlanetIndex, route: '/', scale: 10},
        {image: PlanetTerminal, route: '/terminal', scale: 7},
        {image: PlanetRadio, route: '/radio', scale: 6},
        {image: PlanetShop, route: '/shop2', scale: 8},
        {image: PlanetWeather, route: '/wetter', scale: 4},
        {image: PlanetAbout, route: '/About', scale: 5},

      ],
      startPositions: [
        {x: -60, y: 80},
        {x: 10, y: 150},
        {x: 50, y: 150},
        {x: 80, y: 150},
        {x: -150, y: 70},
        {x: 80, y: 150},
      ],
      targetPositions: [],
      planetPositions: [
        {x: -50, y: -50},
        {x: -50, y: -50},
        {x: -50, y: -50},
        {x: -50, y: -50},
        {x: -50, y: -50},
        {x: -50, y: -50},
      ],
    };
  },
  mounted() {
    this.planetPositions = this.startPositions.map((pos) => ({
      x: pos.x,
      y: pos.y
    }));
  },
  methods: {
    toggleRocket() {
      this.isRocket = true;
      this.isRocketAnimationReverse = false;
      this.animatePlanets();
    },
    generateRandomTargetPositions() {
      const positions = [];
      const minDistance = 20; // Mindestabstand zwischen den Planeten
      const minEdgeDistance = 30; // Mindestabstand zu den Bildschirmrändern
      const offsetX = 30; // zusätzlicher Abstand von der linken oberen Ecke
      const maxwidth = 100 - minEdgeDistance - offsetX; // Maximale Breite für die Zielpositionen in vw
      const maxheight = 100 - minEdgeDistance; // Maximale Höhe für die Zielpositionen in vh
      const maxAttempts = 1000; // Maximale Anzahl der Versuche

      while (positions.length < this.planets.length) {
        const newPos = {
          x: (Math.random() * maxwidth) + offsetX , // Berücksichtige den Mindestabstand und den Offset
          y: Math.random() * maxheight + minDistance / 2 // Berücksichtige den Mindestabstand
        };

        let valid = true;
        let attempts = 0;

        const minDistanceSquared = minDistance * minDistance; // Quadrat des Mindestabstands

        for (const pos of positions) {
          attempts++;
          const distanceX = newPos.x - pos.x;
          const distanceY = newPos.y - pos.y;
          const distanceSquared = distanceX * distanceX + distanceY * distanceY;

          if (distanceSquared < minDistanceSquared || attempts > 1000) {
            valid = false;
            break;
          }
        }

        if (valid) {
          positions.push(newPos);
        }
      }

      return positions;
    },
    animatePlanets() {
      this.targetPositions = this.generateRandomTargetPositions(); // Generiere neue Zielpositionen
      setTimeout(() => {
        this.planetPositions = this.targetPositions.map((pos) => ({
          x: pos.x,
          y: pos.y
        }));
      }, 300);
    },
    handleBackgroundClick(event) {
      if (!event.target.closest('.planet')) {
        this.reset();
      }
    },
    redirectToRoute(route) {
      this.$router.push(route);
      console.log(`Redirecting to route for ${route}`);
    },
    reset() {
      this.isRocketAnimationReverse = true;
      this.planetPositions = this.startPositions.map((pos) => ({
        x: pos.x,
        y: pos.y
      }));
      setTimeout(() => {
        this.isRocket = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.FullContrainer {
  position: relative;
  z-index: 1000;
  font-family: "Lucida Console", Monaco, monospace;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  display: flex;
  z-index: 1000;
  background-color: #985277;
  padding: 5px 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.5rem;
  opacity: 1;
  transition: opacity 1s, transform 1s;
}

.header.headfadeout {
  opacity: 0;
  transform: translateX(-100%);
}

.header.headfadein {
  opacity: 1;
  transform: translateX(0);
}

.hamburger {
  cursor: pointer;
}

.rocket {
  animation: scale 1s forwards;
  height: 20vh;
  width: auto;
  margin: 10px;
  transition: transform 0.5s;
  cursor: pointer;
}

.rocket.reverse {
  animation: reverseScale 2s forwards;
}

@keyframes scale {
  0% {
    transform: scale(0.2) translateX(-100vw) translateY(40vh) rotate(90deg);
  }
  100% {
    transform: scale(1) translateX(0%) translateY(0%) rotate(0deg);
  }
}

@keyframes reverseScale {
  0% {
    transform: scale(1) translateX(0%) translateY(0%) rotate(0deg);
  }
  100% {
    transform: scale(2) translateX(20vw) translateY(-100vh) rotate(-40deg);
  }
}

.planet-container {
  position: fixed;
  width: 100%;
  height: calc(100vh - 40px);
  top: 40px;
}

.planet {
  position: absolute;
  width: 50px;
  height: 50px;
  transition: transform 0.5s; /* Hier die Zeit anpassen */
  filter: drop-shadow(0 0 250px var(--color-active)) drop-shadow(0 0 125px black);
}

.planet:hover {
  filter: drop-shadow(0 0 50px var(--color-accent));
  cursor: pointer;
  z-index: 10;
}
</style>