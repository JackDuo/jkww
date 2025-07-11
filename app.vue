<script setup>
import Testzentr from '~/components/testzentr.vue'
import Sidebar from '~/components/Sidebar/Sidebar.vue'

import { useRoute } from 'vue-router'
const route = useRoute()

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Noisebg from "~/components/Backgrounds/noisebg.vue";
import NasaBG from "~/components/Backgrounds/NasaBG.vue";
import RandomBG from "~/components/Backgrounds/RandomBG.vue";

import NavBar from '~/components/Sidebar/RocketNav.vue'



library.add(faUser, faHouse, faHandPointLeft)
</script>

<template>


    <span v-if="['/'].includes(route.path)">
      <RandomBG/>
      <router-view />
    </span>
    <span v-else>
      <NavBar/>
      <RandomBG />
      <div class="main-content">
        <router-view />

      </div>
    </span>
</template>

<style scoped>
:root {
  --color-purple: #6c18b0;
  --color-purple-light: #b197fc;
  --color-orange: #d67228;
  --color-orange-dark: #a14800;
  --color-white: #ffffff;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Lucida Console", Monaco, monospace;
  background-color: var(--color-white);
  color: #333;
}

.main-content {
 /* margin-left: calc(10px + 1rem);*/ /* Platz für Sidebar */
  margin-top: 4rem;
}

.icon-demo {
  margin-top: 1rem;
  font-size: 2rem;
  display: flex;
  gap: 1rem;
}

.flipped {
  transform: scaleX(-1);
}
</style>
