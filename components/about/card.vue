<template>
  <div class="card">
    <!-- Template-Hintergrundbild -->
    <img :src="templateImage" alt="Template" class="card-template" />

    <!-- Hauptbild hinter dem Template -->
    <img :src="mainImage" alt="Main" class="card-main-image" />

    <!-- Inhalt -->
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>


<script setup>
defineProps({
  mainImage: String,
  title: String,
  description: String
})
import templateImage from "/aboutCard/CardTemplate.webp";

</script>

<style scoped>
.card {
  position: relative;
  width: 300px; /* Standardbreite, kann von außen mit style überschrieben werden */
  height: 400px; /* Standardhöhe */
  border-radius: 16px;
  overflow: hidden;
  filter: drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-template {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 16px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.card-title {
  position: relative;
  text-align: start;
  left: 11%;
  max-width: 80%;
  top: 7%;  /* verschiebt das Element 15% vom normalen Platz nach unten */
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 3px 3px 6px black;
}

.card-main-image {
  position: absolute;
  top: 45%; /* Beispielposition */
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  max-height: 60%;
  max-width: 80%;
  background: #CE6A85;
  object-fit: contain;
  z-index: 0;
  overflow: hidden;
}


.card-description {
  position: absolute;
  top: 65%;
  bottom: 10%;
  left: 15%;
  right: 15%;
  margin: 0;
  color: var(--color-active);
  text-shadow: 1px 1px 1px black;
  overflow: hidden;        /* verhindert Überlauf */
  text-align: start;
  z-index: 2;
  font-size: 1.25rem;
}

</style>
