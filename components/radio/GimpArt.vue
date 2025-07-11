<template>
  <div class="textgenerell">
    <h2>Digitale Kunst</h2>
    <p>
      Hier findest du meine digitalen Arbeiten, die größtenteils mit GIMP entstanden sind.
      Manche gefallen mir selbst weniger – aber auch das ist Teil des Prozesses.
      Entsprechend markiere ich sie ehrlich. Kunst darf auch mal unbequem sein.
    </p>
    <br />
    <br />

    <div class="pictures">
      <p>
        Diese Bilder gehören zu meinen ersten Versuchen. Inspiriert von Naturaufnahmen,
        wollte ich die Farbwelten bewahren – aber sie gleichzeitig in eine
        abstrakte, fast futuristische Umgebung überführen. Und ja:
        Das erste Bild ist ein Knaller. Der Rest? Vielleicht nicht ganz so ikonisch – aber trotzdem chillig!
      </p>
      <img src="/assets/radio/BilderDigitalArt/bee-5396362_1920.webp" loading="lazy" alt="Bee" style="width: 100%" />
      <img src="/assets/radio/BilderDigitalArt/bird.webp" loading="lazy" alt="Bird" style="width: 100%" />
      <img src="/assets/radio/BilderDigitalArt/summer-5323538_1920.webp" loading="lazy" alt="Schmetterling" style="width: 100%" />
      <br />
      <br />
      <br />
      <p>
        Dieses Bild entstand in einer Phase melancholischer Verlorenheit.
        Es war nie als perfektes Kunstwerk gedacht – eher als Skizze.
        Handwerklich vielleicht roh, für mich aber von persönlicher Bedeutung.
      </p>
      <img src="/assets/radio/BilderDigitalArt/12345.webp" loading="lazy" alt="Fall" style="width: 100%" />
      <br />
      <br />
      <br />
      <p>
        Das nächste Bild ist ein Ausreißer: Kein GIMP, sondern Blender.
        Ein damaliger Freund wollte mir 3D-Modellierung beibringen – ich war ungeduldig,
        hab einfach irgendwas zusammengeklickt… und plötzlich war da dieses Bild.
        Zufall? Kunst? Wer weiß.
      </p>
      <img src="/assets/radio/BilderDigitalArt/untitled.webp" loading="lazy" alt="Space" style="width: 100%" />
      <br />
      <br />
      <br />
      <p>
        Zum Schluss: mein absoluter Favorit. Erklärung überflüssig.
        Es ist genau so perfekt, wie es aussieht. Punkt.
      </p>
      <img src="/assets/radio/BilderDigitalArt/FaceSticker2.webp" loading="lazy" alt="Faceballon" style="width: 100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GimpArt",
};
</script>

<style scoped>
.textgenerell {
  overflow-wrap: break-word;
}

.pictures {
  width: 100%;
  height: auto;
  filter: contrast(120%) brightness(90%);
}
</style>
