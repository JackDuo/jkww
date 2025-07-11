<template>
  <div class="prose max-w-3xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-2">Mobiles E-Ink-Display – Text & Bild auf Knopfdruck</h1>
    <p>
      Dieses Projekt verbindet Low-Power-Technik mit kreativer Kommunikation: Ein kleines, mobiles
      <strong>E-Ink-Display</strong>, das mit nur drei Tastern und einem ESP8266 spontane Unterhaltung liefert – ganz ohne WLAN, App oder Cloud.
    </p>
    <p>
      Was ursprünglich als Party-Gadget begann, hat sich zu einem charmanten, tragbaren Gesprächsstarter entwickelt.
    </p>

    <h2 class="text-2xl font-semibold mt-6">Idee & Hintergrund</h2>
    <p>
      Ursprünglich sollte das Display Gästen einer Hausparty zufällig ausgewählte <strong>Sprüche oder Bilder</strong> zeigen – kleine Gesprächsanreize oder humorvolle Unterbrechungen.
      Technisch war das eine Herausforderung: Das über <em>Aliexpress</em> bezogene 2.13" <strong>E-Ink-Display mit Schwarz-Weiß-Rot-Darstellung</strong> war preiswert, aber nur schlecht dokumentiert.
      Mit etwas Hartnäckigkeit, einem <strong>Wemos D1 Mini</strong> und SPI-Verbindung konnte es dennoch erfolgreich angesteuert werden – auch ohne vorherige Erfahrung mit Displays.
    </p>
    <p>
      Ein besonders kurioser Teil des Prozesses: Nach einer längeren Konversation mit dem Händler (vermutlich maschinell übersetzt), erhielt ich eine mysteriöse ZIP-Datei. Diese enthielt nicht nur Beispielprogramme, sondern auch ein rudimentäres Tool, um <strong>Bilddateien in C-Arrays</strong> zu konvertieren – was die Grundlage für die Bildanzeige auf dem ESP wurde.
    </p>

    <h2 class="text-2xl font-semibold mt-6">⚙Aufbau & Stromversorgung</h2>
    <p>
      Das Display wurde fest in eine passende <strong>Plastikverpackung upgecycelt</strong> – zufällig die Originalverpackung des E-Ink-Moduls – und dort verlötet und verklebt.
      Ein alter <strong>Smartphone-Akku (Galaxy S2)</strong> versorgt das System über einen <strong>Step-Down-Spannungswandler</strong> mit Energie.
      Der Akku hält mehrere Stunden moderater Nutzung stand und kann bei Bedarf manuell nachgeladen werden.
    </p>

    <h2 class="text-2xl font-semibold mt-6">Funktionen im Überblick</h2>
    <ul class="list-disc ml-6">
      <li>
        <strong>Textanzeige:</strong> Rund 50 verschiedene „Conversation Starter“ sind lokal auf dem ESP hinterlegt. Sie wechseln automatisch alle 5 Minuten oder manuell über einen Taster. Die LED des Wemos leuchtet kurz zur Aufmerksamkeit.
      </li>
      <li>
        <strong>Bildanzeige:</strong> Über einen zweiten Taster werden rund 10 <em>vorkonvertierte Meme-Bilder</em> durchgeschaltet. Ebenfalls automatische Aktualisierung alle 5 Minuten möglich.
      </li>
      <li>
        <strong>Pausenmodus:</strong> Ein dritter Taster deaktiviert die automatische Aktualisierung – für besonders gute Inhalte.
      </li>
    </ul>

    <h2 class="text-2xl font-semibold mt-6">Designprinzipien</h2>
    <ul class="list-disc ml-6">
      <li><strong>Lokal, stromsparend:</strong> Kein WLAN, kein Webinterface – aus Rücksicht auf Energieverbrauch.</li>
      <li><strong>Modular und tragbar:</strong> Kompakt, wiederaufladbar und leicht zu transportieren.</li>
      <li><strong>Open-Source-freundlich:</strong> Steuerung über selbst recherchierten Code und Tools.</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-6">Ausblick</h2>
    <p>
      Eine mögliche Weiterentwicklung wäre ein global steuerbarer Text-/Bild-Upload – etwa über MQTT oder Webhook – mit entsprechender Konvertierung und Anzeige auf dem Display.
      Aufgrund der <strong>begrenzten Akkuleistung</strong> und des manuellen Konvertierungsprozesses wäre das ein spannendes, aber anspruchsvolles Projekt.
    </p>

    <h2 class="text-2xl font-semibold mt-6">Galerie & Details</h2>
    <!--<p>
      Bilder vom Aufbau, den angezeigten Memes und der Funktionsweise folgen weiter unten.
      Ein kurzes Video zeigt die Bedienung und Tasteninteraktion im Livebetrieb.
    </p>-->
    <br/>
    <p>Hier bspw. besagtes Programm zur Konvertierung von Bildern zu Arrays:</p>
    <img src="/assets/terminalinhalt/Img2LCDScreenshot.webp" alt="img2lcd screenshot"/>
    <br/>
    <br/>
  </div>
</template>

<script setup>
// Keine zusätzliche Logik notwendig für statischen Inhalt
</script>

<style scoped>
.prose p {
  line-height: 1.6;
}
</style>
