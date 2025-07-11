<template>
  <div class="Full-container">
    <!-- Mute Button -->
    <img
        src="/assets/radio/mutebutton.webp"
        alt="Mute"
        class="mute-button"
        :style="{ opacity: isMuted ? 0.4 : 1, cursor: 'pointer' }"
        @click="toggleMute"
    />
    <div class="radio-container">
      <!-- Drehknopf -->
      <div class="knob-container">
        <img
            src="/assets/radio/knobback.webp"
            alt="Drehknopf Back"
            class="knob-back"
        />
        <img
            src="/assets/radio/knobcover.webp"
            alt="Drehknopf Cover"
            class="knob-cover"
            @wheel.prevent="handleScroll"
            @pointerdown="startDrag"
            @pointermove="onDrag"
            @pointerup="endDrag"
            @pointercancel="endDrag"
            @touchstart="startTouch"
            @touchmove="onTouchMove"
            @mouseenter="knobHovered = true"
            :style="{ transform: `rotate(${knobRotation}deg)` }"
        />
      </div>

      <!-- Frequenzskala mit Zeiger -->
      <div class="frequency-line">
        <div class="line"></div>
        <div
            class="indicator"
            :style="{ left: indicatorPosition + '%' }"
        ></div>
      </div>

      <!-- Frequenzanzeige digital -->
      <div class="digital-display">{{ frequency.toFixed(1) }} MHz</div>

      <!-- Beschreibungen -->
      <div class="info-box component-image" @contextmenu.prevent>
        <component
            v-if="activeStation"
            :is="activeStation.component"
            :style="{ opacity: getOpacity(activeStation.freq) }"
        />
        <div v-else class="no-station">
          <p>Kein Sender gefunden</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Hinweis-GIF neben dem Drehknopf -->
  <div
      v-show="!knobHovered"
      class="knob-hint-gif"
  >
    <img src="/assets/radio/scoll.gif" alt="Hinweis" />
    <p class="mute-hint" style="overflow-wrap: break-word"></p>
  </div>
</template>

<script>
import GimpArt from "~/components/radio/GimpArt.vue";
import Insta from "@/components/radio/Insta.vue";
import Malerei1 from "~/components/radio/Malerei1.vue";

const config = useRuntimeConfig();
const base = config.app.baseURL; // für baseURL Adresse der Planetbilder

export default {
  name: "RetroRadio",
  data() {
    return {
      knobHovered: false,
      frequency: 87.0,
      step: 0.1,
      minFreq: 87.0,
      maxFreq: 108.0,
      scrollAccumulator: 0, // NEU: Scroll-Delta summieren
      scrollThreshold: 7, // NEU: Schwellenwert (je höher, desto weniger empfindlich)
      rotation: 0, // Drehwinkel in Grad
      isMuted: false,
      audio: new Audio(),
      noiseAudio: new Audio(base + "radio/mute.mp3"),
      currentStationFreq: null,
      stations: [
        {
          freq: 89.0,
          audio: base + "radio/emotAmbHipHop.mp3",
          component: GimpArt,
        },
        {
          freq: 100.0,
          audio: base + "radio/expHipHop.mp3",
          component: Insta,
        },
        {
          freq: 104.0,
          audio: base + "radio/gorila.mp3",
          component: Malerei1,
        },
      ],
    };
  },
  computed: {
    activeStation() {
      return this.stations.find(
          (s) => Math.abs(s.freq - this.frequency) < 1
      ) || null;
    },
    indicatorPosition() {
      // Prozentsatz der Position auf der Skala (0% = minFreq, 100% = maxFreq)
      return ((this.frequency - this.minFreq) / (this.maxFreq - this.minFreq)) * 100;
    },
    knobRotation() {
      // Rechnet Drehwinkel: z.B. 270° Gesamt-Drehbereich für 87 - 108 MHz (21 MHz)
      // 270 Grad Drehung von Minimum bis Maximum, also linear:
      const totalRange = this.maxFreq - this.minFreq;
      const relativeFreq = this.frequency - this.minFreq;
      const maxRotation = 270; // Grad
      return - (relativeFreq / totalRange) * maxRotation - maxRotation / 2;
      // -135° bis +135° Drehbereich, damit Drehknopf zentriert startet
    },
  },
  mounted() {
    this.audio = new Audio();
    this.audio.loop = true;
    this.noiseAudio = new Audio(base + "radio/noise.mp3");
    this.noiseAudio.loop = true;
    this.noiseAudio.volume = 0.3;
    this.noiseAudio.play();
  },
  methods: {
    toggleMute() {
      this.isMuted = !this.isMuted;
      this.audio.muted = this.isMuted;
      this.noiseAudio.muted = this.isMuted;
    },
    handleScroll(event) {
      // Scroll nach oben = niedrigere Frequenz, unten = höhere Frequenz
      this.scrollAccumulator += event.deltaY;

      // Schwelle prüfen (positive oder negative Richtung)
      if (this.scrollAccumulator >= this.scrollThreshold) {
        this.changeFrequency(1);
        this.scrollAccumulator = 0;
      } else if (this.scrollAccumulator <= -this.scrollThreshold) {
        this.changeFrequency(-1);
        this.scrollAccumulator = 0;
      }
    },
    startTouch(event) {
      // Verhindern, dass die Seite scrollt
      event.preventDefault();
      // Hier können Sie Logik zum Starten der Touch-Interaktion hinzufügen
      this.initialTouchY = event.touches[0].clientY; // Speichern Sie die Y-Position
    },
    onTouchMove(event) {
      // Verhindern, dass die Seite scrollt
      event.preventDefault();
      const currentY = event.touches[0].clientY; // Aktuelle Y-Position
      const deltaY = currentY - this.initialTouchY; // Berechne die Differenz

      // Hier können Sie die Logik implementieren, um die Frequenz zu ändern
      if (deltaY > 10) {
        this.changeFrequency(1); // Scroll nach unten (höhere Frequenz)
        this.initialTouchY = currentY; // Aktualisieren Sie die Y-Position
      } else if (deltaY < -10) {
        this.changeFrequency(-1); // Scroll nach oben (niedrigere Frequenz)
        this.initialTouchY = currentY; // Aktualisieren Sie die Y-Position
      }
    },
    changeFrequency(direction) {
      // direction: 1 = scroll runter (höhere freq), -1 = scroll hoch (niedrigere freq)
      let newFreq = this.frequency + direction * this.step;
      newFreq = Math.min(this.maxFreq, Math.max(this.minFreq, parseFloat(newFreq.toFixed(1))));
      this.frequency = newFreq;
      this.updateAudio();
    },

    updateAudio() {
      const station = this.stations.find(
          (s) => Math.abs(s.freq - this.frequency) < 0.6
      );

      if (station) {
        // Nur wenn die Station sich ändert, neu laden
        if (this.currentStationFreq !== station.freq) {
          this.audio.src = station.audio;
          this.audio.play();
          this.currentStationFreq = station.freq;
        }
        this.noiseAudio.pause();
      } else {
        this.audio.pause();
        this.noiseAudio.play();
        this.currentStationFreq = null;
      }
    },

    shouldShowStation(stationFreq) {
      // Station anzeigen, wenn innerhalb von ±1 MHz
      const diff = Math.abs(this.frequency - stationFreq);
      return diff <= 1;
    },

    getOpacity(stationFreq) {
      const diff = Math.abs(this.frequency - stationFreq) - 0.5;
      // Opazität von 1 (bei 0 Abstand) bis 0 (bei 1 MHz Abstand)
      let opacity = 1 - diff;
      if (opacity < 0) opacity = 0;
      return opacity;
    },

    // Prüfen, ob eine Station innerhalb 1 MHz ist (für "Kein Sender gefunden"-Anzeige)
    anyStationClose() {
      return this.stations.some(s => Math.abs(s.freq - this.frequency) <= 1);
    },
  },
  beforeUnmount() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = "";
    }
    if (this.noiseAudio) {
      this.noiseAudio.pause();
      this.noiseAudio.src = "";
    }
  },
};
</script>



<style>
.component-image img{
  border-radius: 20px; /* Optional: abgerundete Ecken */
  padding: 5px; /* Optional: Innenabstand */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Optional: Schatten */
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
}
.component-image {
  border-radius: 5px; /* Optional: abgerundete Ecken */
  padding: 25px; /* Optional: Innenabstand */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Optional: Schatten */
  background-color: var(--color-active);
  margin-bottom: 15px;
}
</style>
<style scoped>
.Full-container {
  position: relative;
  width: 70vw;
  padding-top: 2vh;
  padding-bottom: 50px;
  height: auto;
  margin: 20px 10vw;
  background-color: var(--color-background);
  border-radius: 1vw;
  justify-content: center;
  font-family: "Lucida Console", Monaco, monospace;
  color: white;
}

.radio-container {
  position: relative;
  width: 50vw;
  padding-top: 5vh;
  margin: 20px auto;
  user-select: none;
}

.knob-container {
  position: relative; /* Positionierung für die Knöpfe */
  width: 300px; /* Setze die Breite entsprechend */
  height: 300px; /* Setze die Höhe entsprechend */
  margin: 0 auto; /* Zentriere den Container */
}

.knob-back {
  position: absolute;
  width: 100%; /* Füllt den Container */
  height: 100%; /* Füllt den Container */
  z-index: 1; /* Hinteres Bild */
}

.knob-cover {
  position: absolute;
  width: 100%; /* Füllt den Container */
  height: 100%; /* Füllt den Container */
  z-index: 2; /* Vorderes Bild */
}

.mute-button {
  position: absolute;
  right: 20px;
  width: 5rem;
  height: auto;
  transition: opacity 0.2s ease-in-out;
  z-index: 100;
}

.mute-hint {
  position: absolute;
  right: 22px;
  top: 6rem; /* etwas unterhalb des Buttons – anpassen je nach Größe */
  font-size: 0.9rem;
  color: #fff;
  text-align: right;
  width: 150px; /* oder auto */
  z-index: 99;
}

.frequency-line {
  position: relative;
  height: 20px;
  margin: 20px 0;
  background: #ccc;
  border-radius: 5px;
}

.frequency-line .line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: #555;
  transform: translateY(-50%);
}

.frequency-line .indicator {
  position: absolute;
  top: 0;
  width: 4px;
  height: 20px;
  background: #e63946;
  border-radius: 2px;
  transform: translateX(-50%);
}

.digital-display {
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.info-box {
  margin-top: 10px;
  text-align: left;
  position: relative;
}

.station-info {
  transition: opacity 0.3s ease;
}

.station-info h2 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.station-info img {
  max-width: 100px;
  border-radius: 5px;
}

.no-station {
  color: #151515;
  font-style: italic;
  opacity: 0.6;
}

.knob-hint-gif {
  position: absolute;
  display: inline-block;
  left: calc(40vw - 400px); /* rechts neben dem Knopf, je nach Layout anpassen */
  top: 10vh;
  background: var(--color-accent-light);
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  max-width: 350px;
  z-index: 5;
}

.knob-hint-gif:after {
  content: "";
  position: absolute;
  bottom: 20px; /* Abstand nach unten */
  right: -9px; /* Abstand nach rechts */
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-top: 20px solid var(--color-accent-light); /* weiße Farbe, leicht transparent */
  transform: rotate(45deg);
}

.knob-hint-gif img {
  width: 100%;
  border-radius: 10px;
}
</style>