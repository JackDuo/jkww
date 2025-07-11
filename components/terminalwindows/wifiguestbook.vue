<template>
  <section class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
    <h2 class="text-3xl font-bold text-purple-800">WiFi-Guestbook</h2>

    <p class="text-gray-700">
      <strong>WiFi-Guestbook</strong> ist ein minimalistisches WLAN-Gästebuch, das für eine Hausparty entwickelt wurde.
      Ziel war es, Gäste, die sich gerade vom Geschehen entfernt hatten und am Handy nach „Free Wi-Fi“ suchten,
      spielerisch wieder einzubinden. Wer sich mit dem WLAN verband, wurde auf eine einfache HTML-Seite weitergeleitet
      und konnte dort einen Gästebucheintrag hinterlassen.
    </p>

    <h3 class="text-xl font-semibold text-purple-700">Technische Umsetzung</h3>
    <ul class="list-disc list-inside text-gray-700 space-y-1">
      <li>Basis: <code>ESP8266</code> (Wemos D1 Mini) mit angepasstem <a href="https://github.com/adamff-dev/ESP8266-Captive-Portal" class="text-blue-600 underline">Captive-Portal-Code</a></li>
      <li>Kein DNS-Spoofing – einfache lokale Weiterleitung auf das Gästebuch</li>
      <li>Speicherung der Einträge im Flash des ESP und Weiterleitung via Serial an einen <strong>Raspberry Pi</strong></li>
      <li>Live-Visualisierung der Einträge auf einem Fernseher via HDMI-Ausgabe des Raspberry</li>
      <li>Offenes WLAN ohne Authentifizierung</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-700">Gestaltung</h3>
    <p class="text-gray-700">
      Die Gästebuchseite war im Stil des Originalprojekts gehalten – einfach, aber mit ASCII-Dekor und vollem Emoji-Support.
      Sie wurde alle paar Sekunden aktualisiert, sodass neue Einträge sofort auf dem Bildschirm erschienen.
    </p>

    <h3 class="text-xl font-semibold text-purple-700">Reaktionen</h3>
    <p class="text-gray-700">
      Die Gäste nahmen das System mit viel Humor an – es entstanden kreative, lustige und spontane Einträge.
      Zwar sind keine Screenshots erhalten geblieben, aber der Moment zählt: Der Bildschirm wurde zu einem
      stillen Nebendarsteller der Party.
    </p>

    <h3 class="text-xl font-semibold text-purple-700">Potenzial für Erweiterung</h3>
    <ul class="list-disc list-inside text-gray-700 space-y-1">
      <li>Online-Upload der Einträge zur Archivierung oder Fernanzeige</li>
      <li>Unterstützung für Bilder oder QR-Code-basierte Teilnahme</li>
      <li>Gästebucheinträge als animierte Lauftexte, Reaktionen oder „Like“-Funktion</li>
    </ul>
    <br/>
    <br/>

  </section>
</template>

<script setup>
// Kein JS notwendig in diesem Fall – rein statischer Content
</script>

<style scoped>
/* Optional: Zusätzlicher Style, falls du es weiter individualisieren willst */
</style>
