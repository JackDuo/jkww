<template>

  <div :style="themeVars.app" id="app">

    <!-- Wenn Terminal geschlossen ist, nur Button anzeigen -->
    <button
        v-if="closed"
        @click="closed = false"
        style="all: unset; height: 2vh; width: auto; cursor: pointer;">
      <img src="/icons/IconTerminal.png" alt="Terminal" style="height: 10vh; width: auto" />
    </button>



    <!-- Terminal nur anzeigen, wenn nicht geschlossen -->
    <div
        v-else
        id="terminal"
        :style="maximized
        ? { height: '100vh', width: '100vw', maxWidth: '100vw' }
        : themeVars.terminal"
    >
      <div id="window" :style="themeVars.window">
        <span id="title" :style="{ color: themeVars.window.color }">{{ title }}</span>
        <button id="useless-btn" class="btn green">
          <img class="btn-icon" src="/icons/windowmin.png" alt="MinWindow Icon" />
        </button>

        <button class="btn yellow" @click="toggleMaximized">
          <img class="btn-icon" src="/icons/windowmax.png" alt="MinWindow Icon" />
        </button>

        <button class="btn red" @click="handleClose">
        <img class="btn-icon" src="/icons/xmark.png" alt="Xmark" />
        </button>

      </div>
      <div
          id="field"
          :class="theme"
          :style="themeVars.field"
          tabindex="0"
          @keydown.prevent="handleTyping"
          @click="field.value.focus()"
          ref="field"
      >
        <div v-for="(entry, i) in fieldHistory" :key="i" :class="{ error: entry.isError }">
          <pre>{{ entry.text }}</pre>
        </div>
        <div id="input-container">
          <span id="query">{{ userInput }}</span>
          <span id="cursor" :style="themeVars.cursor"></span>
        </div>
      </div>
    </div>

  </div>



    <!-- Hier wird das jeweilige Fenster geladen -->


  <span v-if="activeWindow">
    <div
        v-if="show"
        class="drag"
        :class="{ maximized: isMaximized, mined: isMined }"
        :style="{
      ...themeVars.window,
      top: posY + 'px',
      left: posX + 'px',
      position: 'absolute',
      cursor: dragging ? 'grabbing' : 'grab'
    }"
        @mousedown="startDrag"
    >
    <!-- Neue Wrapper-DIV für Header -->
    <div class="drag-header">
      <button class="btn green" @click.stop="toggleMax">
        <img class="btn-icon" src="/icons/windowmax.png" alt="MinWindow Icon" />
      </button>

      <button class="btn red" @click.stop="closeWindow">
        <img class="btn-icon" src="/icons/xmark.png" alt="Xmark" />

      </button>
      <!-- <button class="btn yellow" @click.stop="toggleMin"></button> -->

    </div>
      <div class="drag-inhalt" style="height: 100%; width: auto">
        <div :class="{ maximized: isMaximized, minedtext: isMined }" @contextmenu.prevent>
          <component
              v-if="activeWindow"
              :is="{
              baddisco: baddisco,
              e_ink: e_ink,
              wifi_guestbook: wifi_guestbook,
              bew_system: bew_system,
            }[activeWindow]"
          />
        </div>
    </div>
  </div>
  </span>


</template>


<script setup>
import { ref, reactive, computed, onMounted, watch, defineAsyncComponent } from 'vue'
// Styles aus deinem Beispiel sind global oder in <style> unten

// Reactive State
const theme = ref('dark')
const maximized = ref(false)
const title = ref('Arduino Projekte')

const userInput = ref('')
const commandHistory = ref([])
const commandHistoryIndex = ref(0)
const fieldHistory = reactive([
  { text: 'Json.B Terminal' },
  { text: 'Type HELP to see the full list of commands.', hasBuffer: true }
])

// Theme Variablen, ähnlich wie in React-Example
const themeVars = computed(() => {
  if (theme.value === 'dark') {
    return {
      //app: { backgroundColor: '#333444' }, //Background full darktheme
      terminal: { boxShadow: '0 2px 5px #111' },
      window: { backgroundColor: '#222345', color: '#F4F4F4', userSelect: 'none' },
      field: { backgroundColor: '#222333', color: '#F4F4F4', fontWeight: 'normal' },
      cursor: { animation: '1.02s blink-dark step-end infinite' }
    }
  }
  return {
    //app: { backgroundColor: '#ACA9BB' }, //background full light theme
    terminal: { boxShadow: '0 2px 5px #33333375' },
    window: { backgroundColor: '#FF8C61', color: '#E3E3E3', userSelect: 'none' },
    field: { backgroundColor: '#FAA275', color: '#222333FF', fontWeight: 'bold' },
    cursor: { animation: '1.02s blink-light step-end infinite' }
  }
})

const field = ref(null)

const closed = ref(false)  // neu: Terminal offen/geschlossen
function handleClose() {
  closed.value = true
}

function toggleMaximized() {
  maximized.value = !maximized.value
  // Fokus auf Field setzen
  nextTick(() => {
    field.value?.focus()
  })
}

// Kommando-Verarbeitung (stark vereinfacht)
function handleTyping(e) {
  const key = e.key
  const ctrlKey = e.ctrlKey
  const altKey = e.altKey

  const forbidden = [
    ...Array.from({ length: 12 }, (_, i) => `F${i + 1}`),
    'ContextMenu', 'Meta', 'NumLock', 'Shift', 'Control', 'Alt',
    'CapsLock', 'Tab', 'ScrollLock', 'Pause', 'Insert', 'Home',
    'PageUp', 'Delete', 'End', 'PageDown'
  ]

  if (!forbidden.includes(key) && !ctrlKey && !altKey) {
    if (key === 'Backspace') {
      userInput.value = userInput.value.slice(0, -1)
    } else if (key === 'Escape') {
      userInput.value = ''
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      if (commandHistoryIndex.value < commandHistory.value.length) {
        commandHistoryIndex.value++
        userInput.value = commandHistory.value[commandHistoryIndex.value - 1] || ''
      }
    } else if (key === 'ArrowDown' || key === 'ArrowRight') {
      if (commandHistoryIndex.value > 0) {
        commandHistoryIndex.value--
        userInput.value = commandHistory.value[commandHistoryIndex.value - 1] || ''
      }
    } else if (key === 'Enter') {
      if (userInput.value.trim().length) {
        commandHistory.value.unshift(userInput.value)
        commandHistoryIndex.value = 0
        fieldHistory.push({ text: userInput.value, isCommand: true })
        processCommand(userInput.value.trim())
        userInput.value = ''
      } else {
        fieldHistory.push({ isCommand: true })
      }
    } else {
      userInput.value += key
    }
  }
}

import baddisco from '/components/terminalwindows/baddisco.vue'
import e_ink from '/components/terminalwindows/eInkdisplay.vue'
import wifi_guestbook from '/components/terminalwindows/wifiguestbook.vue'
import bew_system from '/components/terminalwindows/Bewsyst.vue'


const activeWindow = ref(null)  // aktuell angezeigtes Fenster



// Beispiel-Befehle, stark vereinfacht
function processCommand(input) {
  const cmd = input.toLowerCase().trim()

  if (cmd === 'help') {
    fieldHistory.push({
      text: [
        'Available commands:',
        'help - shows this help',
        'clear - clears the terminal',
        'theme - toggle theme',
        'exit - close the terminal',
        'run baddisco',
        ' "  e_ink',
        ' "  wifi_guestbook',
        ' "  bew_system - opens a terminal window'
      ].join('\n'),
      hasBuffer: true
    })
  } else if (cmd === 'clear') {
    fieldHistory.splice(0, fieldHistory.length)
  } else if (cmd === 'theme') {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  } else if (cmd === 'exit') {
    handleClose()
  } else if (cmd.startsWith('run ')) {
    const winName = cmd.split(' ')[1]
    if (['baddisco', 'e_ink', 'wifi_guestbook', 'bew_system'].includes(winName)) {
      show.value = true
      activeWindow.value = winName
      fieldHistory.push({ text: `Opening ${winName}...`, hasBuffer: true })
    } else {
      fieldHistory.push({ text: `Unknown window: ${winName}`, isError: true, hasBuffer: true })
    }
  } else {
    fieldHistory.push({ text: `Unknown command: ${input}`, isError: true, hasBuffer: true })
  }
}


// Scroll immer nach unten wenn fieldHistory sich ändert
watch(fieldHistory, () => {
  nextTick(() => {
    if (field.value) field.value.scrollTop = field.value.scrollHeight
  })
})

// Initial fokus auf field
onMounted(() => {
  if (field.value) {
    field.value.focus()
  }
})








// Draggable Windows:
import { onBeforeUnmount} from 'vue'

const isMaximized = ref(true)
const isMined = ref(false)

const posX = ref(100) // Startposition X
const posY = ref(100) // Startposition Y

const dragging = ref(false)
const show = ref(true)

let startX, startY, initialX, initialY

function toggleMax() {
  isMaximized.value = !isMaximized.value
}

function toggleMin() {
  isMined.value = !isMined.value
}

function closeWindow() {
  show.value = false
}

function startDrag(event) {
  dragging.value = true
  startX = event.clientX
  startY = event.clientY
  initialX = posX.value
  initialY = posY.value

  window.addEventListener('mousemove', drag)
  window.addEventListener('mouseup', stopDrag)
}

function drag(event) {
  if (!dragging.value) return
  const dx = event.clientX - startX
  const dy = event.clientY - startY
  posX.value = initialX + dx
  posY.value = initialY + dy
}

function stopDrag() {
  dragging.value = false
  window.removeEventListener('mousemove', drag)
  window.removeEventListener('mouseup', stopDrag)
}

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', drag)
  window.removeEventListener('mouseup', stopDrag)
})
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
}
:focus,
:hover,
:active {
  outline: none;
}
body {
  margin: 0;
  overflow: hidden;
}
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 1vh;
}
#terminal {
  width: 90vw;
  max-width: 900px;
  height: 550px;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  background: inherit;
  box-shadow: inherit;
}
#window {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Statt default left -> jetzt rechts */
  padding: 0 15px;
  gap: 10px; /* optional: Abstand zwischen Buttons */
  cursor: default;
  background: inherit;
  color: inherit;
}
.btn {
 /* margin-right: 10px; */
  position: relative;
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  box-shadow: 0 2px 2px #33333375;
  cursor: pointer;
}
.btn:hover {
  background-color: rgba(255, 255, 255, 0.18);
}
.red {
  background-color: #ff6a00;
}
.yellow {
  background-color: rgba(255, 255, 255, 0);
}
.green {
  background-color: rgba(136, 136, 136, 0);
}
.btn-icon {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
}
#title {
  font-size: 0.85rem;
  margin-right: auto;
}
#field {
  height: calc(100% - 40px);
  padding: 5px;
  overflow: auto;
  overflow-wrap: break-word;
  font-size: 0.9rem;
  white-space: pre-wrap;
  background: inherit;
  color: inherit;
  font-weight: normal;
}
#field.dark::-webkit-scrollbar-thumb {
  background-color: #333444;
}
#field.light::-webkit-scrollbar-thumb {
  background-color: #aca9bb;
}
#field > div {
  min-height: 20px;
  width: 100%;
  cursor: default;
}
#error {
  color: #ff4136;
}
#error::before {
  content: 'Error: ';
  font-weight: bold;
}
#input-container {
  display: flex;
  align-items: center;
}
#query {
  margin-right: 10px;
  white-space: pre-line;
}
#cursor {
  position: relative;
  bottom: -2px;
  left: 2px;
  width: 0.5rem;
  height: 3px;
  background-color: currentColor;
  animation-fill-mode: forwards;
}

@keyframes blink-dark {
  0%, 100% {
    background-color: #f4f4f4;
  }
  50% {
    background-color: transparent;
  }
}
@keyframes blink-light {
  0%, 100% {
    background-color: #474554;
  }
  50% {
    background-color: transparent;
  }
}

#error {
  color: #ff4136;
}
.error {
  color: #ff4136;
}






/*Draggable WIndows:*/
.drag {
  width: 200px;
  height: 150px;
  background-color: lightblue;
  border: 1px solid #000;
  padding: 10px;
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
  z-index: 10;
}
.drag-header {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Buttons nach rechts */
  padding: 0 5px;
  height: 30px;
  gap: 10px;
  background: inherit;
  color: inherit;
}
.drag-btn {
  text-align: center;
  margin: 0;
  left: 50%;
}
.drag-inhalt {
  overflow-y: auto;        /* vertikales Scrollen aktivieren */
  user-select: none;
  max-height: 150vh;
}
#drag-inhalt.dark::-webkit-scrollbar-thumb {
  background-color: #333444;
}
#drag-inhalt.light::-webkit-scrollbar-thumb {
  background-color: #aca9bb;
}


.maximized {
  width: 75%;
  height: 75%;
}

.mined {
  position: relative;
  width: 150px;
  height: 50px;
  bottom: 0;
  left: 0;
}

.minedtext {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 10px;
  max-height: 25px;
  overflow: hidden;
  user-select: none;
}

button {
  margin-right: 5px;
}



img {
  -webkit-user-drag: none;     /* für Safari/Chrome */
  user-select: none;
  pointer-events: none;        /* wenn Interaktion komplett blockiert werden soll */
}
</style>
