<template>
  <section class="max-w-3xl mx-auto px-4 py-8 text-gray-800">
    <h1 class="text-4xl font-bold mb-6">BadDisco – Smartes Licht fürs stille Örtchen</h1>

    <p class="mb-6">
      <strong>BadDisco</strong> ist ein Smarthome-Projekt mit einem Augenzwinkern: Es verbindet simple Technik mit durchdachter
      Automatisierung und sorgt dafür, dass selbst das Badezimmer Teil der Atmosphäre wird.
      Was als Party-Gag begann, hat sich zu einem festen Bestandteil meines Alltags entwickelt –
      zuverlässig, dezent steuerbar und immer mit einer Prise Humor.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Die Idee</h2>
    <p class="mb-6">
      Die ursprüngliche Motivation:<br />
      <em>„Wenn sich jemand ins Bad setzt – soll’s nicht langweilig werden.“</em><br />
      Technisch umgesetzt mit einem <strong>Wemos D1 Mini (ESP8266)</strong>, der über
      <a href="https://esphome.io" target="_blank" class="text-blue-600 underline">ESPHome</a>
      als smarter Magnetschalter bei <strong>Alexa</strong> eingebunden ist. Statt einem echten Sensor kommt ein
      <strong>mechanischer Taster</strong> im Türrahmen zum Einsatz.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Funktionsweise</h2>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Tür wird abgeschlossen → Taster schließt → Signal an den ESP</li>
      <li>Eine LED-Leiste am Türrahmen zeigt an, dass das Bad besetzt ist</li>
      <li>Der ESP meldet den Zustand an Alexa</li>
      <li>Nach 5 Sekunden startet eine Alexa-Routine:
        <ul class="list-disc pl-6 mt-1">
          <li>RGB-Beleuchtung (Ledvance Bluetooth) schaltet in den Disco-Modus</li>
          <li>Musik beginnt – z.B. „Careless Whisper“</li>
        </ul>
      </li>
      <li>Wird die Tür wieder aufgeschlossen, schaltet alles sofort zurück</li>
    </ul>

    <p class="mb-6">
      Ursprünglich war ein Infrarotsensor geplant, der die Nutzung direkt erkennen sollte – technisch jedoch
      zu unzuverlässig. Die gewählte Lösung mit einem simplen Taster funktioniert im Alltag deutlich robuster.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Im Einsatz – nicht nur für Partys</h2>
    <p class="mb-6">
      Was für eine Hausparty entwickelt wurde, läuft heute dauerhaft im Alltag – zuverlässig und diskret.
      Die <strong>Aktivzeiten sind zwischen 17 und 0 Uhr</strong>, außerhalb bleibt alles im Normalzustand.
    </p>

    <p class="mb-6">
      Gäste sind oft überrascht, manchmal irritiert – aber fast immer begeistert. Die Kombination aus Licht, Musik
      und dem ungewöhnlichen Kontext sorgt für Gesprächsstoff. Über einen
      <strong>physischen Schalter</strong> am ESP lässt sich die Funktion bei Bedarf deaktivieren.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Demo</h2>
    <p class="mb-6">
      Hier ein Demovideo:
    </p>
    <br/>
    <video
        controls
        class="w-full rounded-xl shadow-md"
        poster="/Videos/BaddiscoDemoThumbnail.jpg"
        style="height: 75vh"
    >
      <source src="/Videos/BaddiscoDemo.mp4" type="video/mp4" />
      Dein Browser unterstützt kein eingebettetes Video.
    </video>
    <br/>
    <br/>
  </section>
</template>
