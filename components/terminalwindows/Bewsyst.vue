<template>
  <div class="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
      Bewertungssystem für eine Kunstgalerie
    </h1>

    <p class="text-gray-700 mb-4">
      <strong>Interaktive Besucherrückmeldung mit Arduino Nano 33 BLE</strong>
    </p>
    <p class="text-gray-700 mb-6">
      Für eine Freundin, die eine kleine Galerie leitete, entstand dieses Projekt als verspielte und gleichzeitig ernstzunehmende Form der Besucher*innenrückmeldung. Obwohl ursprünglich zur Auswertung gedacht, wurde das System von vielen als Kunstwerk wahrgenommen – zur Freude der Galeristin, die mich kurzerhand selbst als „ausstellenden Künstler“ bezeichnete.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Funktionsweise</h2>
    <p class="text-gray-700 mb-4">
      Das System basierte auf einem Arduino Nano 33 BLE, der fünf kapazitive TTP223-Touchsensoren steuerte. Diese waren mit runden Stickern versehen, die Smileys in Grün (5 Sterne), Gelb (3 Sterne) oder Rot (1 Stern) zeigten. Besucher*innen konnten durch Berührung eine Bewertung abgeben – mit finaler Gültigkeit (keine Korrektur).
    </p>
    <p class="text-gray-700 mb-6">
      Ein Ultraschallsensor erkannte, wenn sich eine Person näherte: eine kurze Melodie aus einem passiven Buzzer ertönte, um Aufmerksamkeit zu wecken. Nach der Bewertung drehte ein kleiner Servomotor eine verdeckte Karte um und präsentierten eine kurze, dankende Nachricht.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Zusätzliche Interaktionen</h2>
    <ul class="list-disc list-inside text-gray-700 mb-6">
      <li>Anzeige der eigenen gewählten Bewertung</li>
      <li>Gesamtanzahl aller Bewertungen</li>
      <li>Visuelle Darstellung des Durchschnitts über einen Servo-Zeiger</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Aufbau & Technik</h2>
    <ul class="list-disc list-inside text-gray-700 mb-6">
      <li>Touchsensoren: 5 × TTP223</li>
      <li>Anzeige & Feedback: 1 × passiver Buzzer, 2 × 9g-Servos</li>
      <li>Näherungserkennung: 1 × Ultraschallsensor</li>
      <li>Stromversorgung: Netzteil</li>
      <li>Montage: Wandinstallation mit klarer Benutzerführung</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Entwicklung & Besonderheiten</h2>
    <p class="text-gray-700 mb-6">
      Während der Entwicklung in der Galerie stieß ich auf ein technisches Problem: Der Nano 33 BLE hatte Schwierigkeiten mit Interrupt-Pins – eine Eigenheit des Boards, die mir zunächst Rätsel aufgab. Durch einen zufälligen Austausch mit einem Maschinenbau-Dozenten, der sich für mein Projekt interessierte, konnten wir den Fehler identifizieren und das System stabil betreiben.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Wirkung</h2>
    <p class="text-gray-700">
      Das Projekt war mehrere Monate im Einsatz und wurde von den Besucher*innen durchweg positiv aufgenommen. Die Mischung aus Interaktivität, visueller Rückmeldung und Sound sorgte für viele Schmunzler und blieb in Erinnerung.
    </p>

    <h2 class="text-2xl font-semibold mt-6">Galerie & Details</h2>
    <p>
      Hier ein paar Bilder, während den Anfängen der Installation:
    </p>
    <br/>
  </div>

  <div>
    <img src="/assets/terminalinhalt/BewSysDipl.webp" alt="Bewertungssystem Display" style="height: 75vh"/>
    <br/>
    <p>Hier sieht man die kapazitiven Touchsensoren</p>
    <img src="/assets/terminalinhalt/BewSysSensor.webp" alt="Bewertungssystem Display" style="height: 75vh"/>
    <br/>
    <br/>
    <p>Hier kann man das ganze Projekt erkennen</p>
    <img src="/assets/terminalinhalt/BewSysProcess.webp" alt="Bewertungssystem Prozess" style="height: 75vh"/>
    <img src="/assets/terminalinhalt/BewSysFull.webp" alt="Bewertungssystem Voll" style="height: 75vh"/>
    <br/>
    <br/>
    <br/>


  </div>

</template>

<script setup>
// keine Logik notwendig für diese rein statische Präsentation
</script>

<style scoped>
/* Stil-Anpassungen optional */

</style>
