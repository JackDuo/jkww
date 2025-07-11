<template>
  <div class="weather-wrapper">
    <div class="image-container">
      <img src="/wetter/wetterBackground.webp" alt="Wetter Hintergrund" class="background-image" />

      <div class="card-overlay">
        <div class="card">
          <h2><strong>Wetter in {{this.city}}</strong></h2>
          <br/>
          <p><strong>Temperatur:</strong> {{ temperature }}</p>
          <p><strong>Windstärke:</strong> {{ wind }}</p>
          <p><strong>Luftdruck:</strong> {{ pressure }}</p>
          <p><strong>Wetter:</strong> {{ mood }}</p>
          <p><strong>Stimmung:</strong> {{ rain }}</p>
        </div>
      </div>
    </div>

    <div class="card" >
      <button @click="generateWeather">🔁 Neues Wetter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunnyWeather",
  data() {
    return {
      city: null,
      error: null,
      temperature: "",
      wind: "",
      pressure: "",
      rain: "",
      mood: ""
    };
  },
  async mounted() {
    try {
      const apiKey = '74df0e2e22dac51dc50c229f165a18f3'; // Ersetze dies mit deinem API-Schlüssel

      //ip-apis, zwei stück zum umschalten
      const res = await fetch('https://ipapi.co/json/');   //wurd egesperrt weil zu viele requests
      //const res = await fetch('https://iplocate.io/api/lookup/?apikey=c287223328b4e4aafcbc600e967ff44e');    //neue api mit key - 1000 requests p day


      const data = await res.json();
      this.city = data.city || 'Unbekannt';
      this.latitude = data.latitude || 'Unbekannt';
      this.longitude = data.longitude || 'Unbekannt';
      console.log(`Stadt: ${this.city}, Breite: ${this.latitude}, Länge: ${this.longitude}`);


      //Das war nur als ich nicht wusste dass ip-api selbst schon breitengrade liefert
      //const geocodeRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${apiKey}`);
      //const geocodeData = await geocodeRes.json();

      if (data) {
        const lat = data.latitude;   //geocodeData[0].lat; // weil ich nicht wusste dass ip-api selbst breitengrade liefert
        const lon = data.longitude;   //geocodeData[0].lon;
        console.log("koordinaten", lat, lon);
        // Jetzt die Wetterdaten mit den Koordinaten abrufen
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=de`);
        const weatherData = await weatherRes.json();
        console.log("Temp. ", weatherData.main.temp);
        console.log("Windgeschw. ", weatherData.wind.speed);
        console.log("pressure. ", weatherData.main.pressure);
        console.log("art. ", weatherData.weather[0].main);


        if (weatherData) {
          this.temperature = Math.round(weatherData.main.temp) + "°C - " + this.getWeatherMood(weatherData.main.temp, "temp");
          this.wind = weatherData.wind.speed + " m/s - " + this.getWeatherMood(weatherData.wind.speed, "speed");
          this.pressure = weatherData.main.pressure + " hPa - " + this.getWeatherMood(weatherData.main.pressure, "pressure");
          this.rain = weatherData.weather[0].main + " - " + this.getWeatherMood(weatherData.weather[0].main, "weather");
          this.mood = weatherData.weather[0].description;
          console.log("Wetterdaten abrufen hat geklappt. bspw. ", this.temperature, "°C");
        } else {
          this.error = 'Wetterdaten konnten nicht abgerufen werden.';
          console.log("Wetterdaten konnten nicht abgerufen werden1");
        }
      } else {
        this.error = 'Standortdaten konnten nicht ermittelt werden.';
        console.log("Wetterdaten konnten nicht abgerufen werden2");
      }
    } catch (err) {
      this.error = 'Ein Fehler ist aufgetreten.';
      console.log("Wetterdaten konnten nicht abgerufen werden3");

    }
  },
  methods: {
    getWeatherMood(value, type) {
      const moodSets = {
        temp: {
          hot: [
            "Bro schmilzt einfach",
            "Heute ist Luft frittierbar",
            "Schatten ist meine neue Religion",
            "Ich hab mich eben am WLAN geschwitzt",
            "Wasser kocht aus Prinzip",
            "Du brauchst keine Dusche, du bist schon dampfgegart",
            "Wenn’s noch heißer wird, geh ich freiwillig ins Finanzamt",
          ],
          warm: [
            "T-Shirt-Wetter und trotzdem zu warm",
            "Endlich wieder schwitzen beim Nichtstun",
            "Besser wird's nicht, also lieber drinnen bleiben",
            "Sonne ballert, aber ich baller zurück",
            "Wärmer als mein soziales Umfeld",
            "Ich geh raus und tu so als wär ich produktiv",
          ],
          mild: [
            "Nicht warm, nicht kalt, einfach deutsch",
            "Jacke an – Jacke aus – repeat",
            "Temperatur wie mein Datingleben: okay, aber langweilig",
            "Rausgehen ist nicht unangenehm… noch",
            "Kein Wetter für Ausreden",
          ],
          cool: [
            "Frisch genug für Ausreden",
            "Jacke ist Pflicht, Style ist Bonus",
            "Ich zitter aus Prinzip",
            "Kalt genug für Tee, aber zu warm für Mütze",
            "Diese Temperatur hat was gegen mich",
          ],
          cold: [
            "Ich hab vergessen, wie sich Zehen anfühlen",
            "Wind ist jetzt passiv-aggressiv",
            "Lippenfarbe: bläulich-depressiv",
            "Ich bin heute 80% Jacke",
            "Wenn ich stillstehe, vereist mein Hirn",
          ],
          freezing: [
            "Mein Atem hat gerade eine eigene Wohnung bezogen",
            "Ich wär jetzt gern ein Toaster",
            "Gefrierschrank ist wärmer",
            "Ich kann meine Emotionen nicht mehr spüren – oder meine Nase",
            "So kalt, sogar mein Handy hat gekündigt",
          ],
        },
        pressure: {
          high: [
            "Hochdruck, ich fühl mich wie auf Wolke 7",
            "Drück mal den Pausenknopf, schönes Wetter",
            "Der Himmel chillt heute richtig",
            "Alles festgezurrt, nichts bewegt sich",
            "Der Wettergott hat heute gute Laune",
          ],
          normal: [
            "Luftdruck im grünen Bereich, langweilig gut",
            "Das Wetter macht, was es soll",
            "Weder Hoch noch Tief, so mittelmäßig halt",
            "Wetter im Standby-Modus",
            "Kein Drama in der Luft",
          ],
          low: [
            "Tiefdruckalarm – bring Regenschirm und Drama",
            "Der Himmel ist traurig heute",
            "Regen, Wind, Kummer – alles dabei",
            "Das Wetter macht ’nen auf Dramaqueen",
            "Stürmische Zeiten, halt dich fest!",
          ],
        },
        speed: {
          strong: [
            "Wind macht heute richtig Ärger",
            "Deine Frisur hat heute keine Chance",
            "Achtung, hier fliegt alles weg",
            "Wind: 100% Unruhe garantiert",
            "Wenn der Wind ein Rapper wäre, wär er King",
          ],
          moderate: [
            "Angenehme Brise, nicht zu wild",
            "Der Wind flüstert dir was ins Ohr",
            "Genau richtig für einen Spaziergang",
            "Wind in Maßen – wie das Leben",
            "Nicht zu stark, nicht zu schwach, perfekt",
          ],
          light: [
            "Fast windstill, die Luft steht",
            "Perfekt zum Chillen draußen",
            "Kein Wind, keine Ausreden",
            "Sogar die Blätter sind faul heute",
            "Wind? Fehlanzeige",
          ],
        },
        weather: {
          thunderstorm: [
            "Donnerwetter! Wer hat denn da wieder zu laut Bass gehört?",
            "Strom spart sich heute niemand – Blitzparty am Himmel!",
            "Schnall dich an, Thor hat wieder Laune!",
            "Das ist kein Wetter, das ist ein Live-Konzert mit Pyro!"
          ],
          drizzle: [
            "So nass und doch so nutzlos – danke, Nieselregen.",
            "Der Regen hat keinen Bock – also schleicht er sich ran.",
            "Feucht, aber nicht sexy.",
            "Du bist wie dieser Regen: halbherzig und überall."
          ],
          rain: [
            "Schirme raus, Frisuren rein!",
            "Heute gibt’s gratis Dusche – leider ohne Shampoo.",
            "Der Himmel weint... wahrscheinlich wegen deiner Playlist.",
            "Petrus hat wieder keine Emotionskontrolle."
          ],
          snow: [
            "Schnee? Mehr wie: Natur versucht’s mit Deko.",
            "Kalt, weiß, Chaos – willkommen im Wintertrauma.",
            "Wenn Schneeflocken so süß wären wie du – wär ich gern ein Schneepflug.",
            "Bock auf Schneeballschlacht? Zu spät, das Wetter hat schon gewonnen."
          ],
          atmosphere: [
            "Nebel im Kopf, draußen passt sich an.",
            "Mystisch... oder einfach nur mies belüftet.",
            "Sichtweite: Wie mein Plan fürs Leben.",
            "Staub, Rauch, Dunst – klingt wie meine WG-Küche."
          ],
          clear: [
            "Sonne scheint, Hirn brennt.",
            "Keine Wolke, keine Ausrede.",
            "So klar, das glaubt mir keiner.",
            "Vitamin D: Jetzt auch in Deluxe!"
          ],
          clouds: [
            "Wolkig mit Aussicht auf nix.",
            "Sonne versteckt sich wie dein Crush.",
            "Die Wolken machen auf melancholisch – ich fühl das.",
            "Das Wetter ist heute auf Grau gestellt."
          ],
          unknown: [
            "Wetter.exe ist abgestürzt.",
            "Keine Ahnung, aber irgendwas passiert da draußen.",
            "Heute ist das Wetter wie du: nicht zu fassen.",
            "Unbekannt? Dann einfach Hoodie an und hoffen."
          ]
        },
      };

      function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      if (type === "temp") {
        if (value >= 30) return getRandom(moodSets.temp.hot);
        if (value >= 20) return getRandom(moodSets.temp.warm);
        if (value >= 10) return getRandom(moodSets.temp.mild);
        if (value >= 0) return getRandom(moodSets.temp.cool);
        if (value >= -5) return getRandom(moodSets.temp.cold);
        return getRandom(moodSets.temp.freezing);
      }

      if (type === "pressure") {
        if (value >= 1020) return getRandom(moodSets.pressure.high);
        if (value >= 1000) return getRandom(moodSets.pressure.normal);
        return getRandom(moodSets.pressure.low);
      }

      if (type === "speed") {
        if (value >= 8) return getRandom(moodSets.speed.strong);
        if (value >= 3) return getRandom(moodSets.speed.moderate);
        return getRandom(moodSets.speed.light);
      }
      if (type === "weather") {
        const main = value.toLowerCase(); // z. B. "Rain", "Clear", etc.
        if (main === "thunderstorm") return getRandom(moodSets.weather.thunderstorm);
        if (main === "drizzle") return getRandom(moodSets.weather.drizzle);
        if (main === "rain") return getRandom(moodSets.weather.rain);
        if (main === "snow") return getRandom(moodSets.weather.snow);
        if (["mist", "smoke", "haze", "dust", "fog", "sand", "ash", "squall", "tornado"]
            .includes(main)) {
          return getRandom(moodSets.weather.atmosphere);
        }
        if (main === "clear") return getRandom(moodSets.weather.clear);
        if (main === "clouds") return getRandom(moodSets.weather.clouds);
        return getRandom(moodSets.weather.unknown); // Fallback, wenn ein neuer Typ auftaucht
      }

      return "Keine Ahnung, was das Wetter will.";
    },


    generateWeather() {
      const temps = [
        "über der Jogginggrenze",
        "zu warm für Pinguine",
        "unter Kuscheldeckenpflicht",
        "in Hundejahren",
        "mit Heizdeckenbonus",
        "aber fühlt sich an wie Montag",
        "heiß genug für Eiscreme-Krise",
        "perfekt zum Drinnen-Verschwinden",
        "zu kalt für gute Laune",
        "grad so, dass selbst die Sonne schwitzt",
        "da, wo selbst Katzen jammern",
        "ideal zum Sofawintern",
        "für Schneehasen fast schon Sommer",
        "optimal für kalte Füße",
        "schwitziger als deine letzten Ausreden",
        "zu kalt für deine Ausreden",
        "wärmer als dein Kaffee um 9 Uhr",
        "frischer als dein Humor",
        "eine Heizung würde sich freuen",
        "schon fast tropisch, aber mit Regen",
        "so heiß, dass die Sonne neidisch wird",
        "frischer als dein letzter Witz",
        "perfekt für einen Serien-Marathon unter der Decke",
        "kälter als dein letzter Blick",
        "ideal, um die Eiskristalle tanzen zu lassen",
        "wärmer als dein Kühlschrank nach dem Aufräumen",
        "so kalt, dass sogar der Yeti friert",
        "genau richtig für eine Ausrede, nicht rauszugehen",
        "heißer als dein Bildschirm nach 3 Stunden Zocken",
        "der Moment, wenn der Kaffee schneller abkühlt als du",
        "kühler als deine Ausreden beim Aufräumen",
        "perfekt, um sich in eine Wolldecke zu wickeln und zu meckern",
        "grad so warm, dass du denkst, der Sommer wäre zurück",
        "so kalt, dass sogar der Schnee eine Pause macht",
        "wärmer als das Gefühl, wenn der Wecker klingelt",
        "kalt genug, um die Motivation zu erfrieren",
        "so heiß, dass deine Sonnenbrille zum Accessoire wird",
        "ideal, um die Heizung heimlich anzumachen",
        "schon fast Sauna, aber ohne Handtuch",
        "genau richtig, um die Couch nicht zu verlassen"
      ];

      const winds = [
        "flugzeugartige Windböen",
        "leichtes Sabberwackeln",
        "3 Hütten weggeweht",
        "Brisenlevel: Omaschürze flattert",
        "Wind wie nach Bohnensuppe",
        "Fenster klappern im Takt der Natur",
        "Haare im Dauerchaos-Modus",
        "Stark genug, um dich vom Sofa zu pusten",
        "Der Himmel übt für den Sturm der Entrüstung",
        "Gegenwind deluxe – nimm’s sportlich!",
        "Blätterchaos auf Speed",
        "Windig genug, um den Hut zu verlieren",
        "Die Frisur sagt: ‚Heute wird’s wild!‘",
        "Wenn die Jacke plötzlich zum Segel wird",
        "Fast wie ein Mini-Tornado im Vorgarten",
        "Der Wind flüstert ‚Abenteuer!‘ und pustet dich um",
        "Sanft wie ein nervöser Wellensittich",
        "Kraftvoller als deine Ausrede zum Drinnenbleiben",
        "Wind, der mehr Power hat als deine Kaffeemaschine",
        "Eine Brise mit Attitüde",
      ];

      const pressures = [
        "1,013 MemeBar",
        "Kopfschmerzwahrscheinlichkeit: 50%",
        "Stabil wie ein Ikea-Regal",
        "Ziemlich gedrückt, wie dein Kontostand",
        "Explosionsgefahr nur bei Politikgesprächen",
        "Luftdruck: So hoch, dass die Wolken keuchen",
        "Atmosphäre mit Extra-Drama",
        "Drück dich nicht zu sehr – sagt der Luftdruck",
        "So locker wie dein letzter Wochenendplan",
        "Die Luft macht heute ordentlich Druck",
        "Fast so schwer wie deine To-do-Liste",
        "Druck steigt – wie deine Motivation (hoffentlich)",
        "Luft so dicht wie der letzte Club am Freitagabend",
        "Entspannt wie ein Faultier auf der Couch",
        "Der Himmel hält die Luft an",
        "Luftdruck: Mehr Stress als Montagmorgen",
        "Atmosphäre mit Überholspur",
        "Drückender als dein Chef bei der Deadline",
        "So entspannt wie ein Sonntag ohne Wecker",
        "Druck steigt, aber nicht dein Blutdruck",
        "Luft so dünn wie deine Geduld",
        "Atmosphäre auf Anschlag, aber du bleibst cool",
        "Wenn der Himmel das Gewicht der Welt trägt",
        "Luftdruck: Mehr Power als dein Energy-Drink",
        "Die Atmosphäre sagt ‚Ich hab alles im Griff‘",
      ];

      const rains = [
        "Regen aus Fröschen möglich",
        "Niesel bis Platzregen, je nach Laune",
        "Schauerwahrscheinlichkeit: 42%",
        "Regenbogen mit Einhornsichtung",
        "Schlammfestival-Level: 3",
        "Tropfen tanzen Breakdance",
        "Wasser von oben, Überraschung inklusive",
        "Matschgefahr: Hoch",
        "Wolken weinen stille Freudentränen",
        "Regengüsse mit Drama und Special Effects",
        "Schirme empfohlen, falls du keinen Style hast",
        "Der Himmel schüttelt die Wasserflasche",
        "Feuchtfröhlich mit Aussicht auf Pfützen",
        "Flüssiges Glück aus der Natur",
        "Schnell rein oder später wie ein nasser Pudel",
        "Regensaison: Aktiv, mit Pausen und Pläuschen",
        "Gummistiefel-Modus: Ein",
        "Wolken legen eine Duschpause ein",
        "Tropfenroulette – wer wird nass?",
        "Regenpause – die Natur macht Urlaub",
        "Wolkenfrei, aber nicht ganz wolkenlos im Kopf",
        "Sonnenbrandgefahr: Hoch, Schattenmangel inklusive",
        "Trocken wie dein Humor heute",
        "Kein Tropfen in Sicht – Pfützen im Winterschlaf",
        "Wetter sagt: ‚Heute bleib ich trocken‘",
        "Nicht mal ein Regentropfen traut sich raus",
        "Klare Sicht, aber noch nicht klar im Kopf",
        "Trockenzeit – Zeit, die Gummistiefel wegzupacken",
        "Sonne lacht, Wolken haben frei",
        "Trocken wie der Humor vom Chef",
        "Wolken? Fehlanzeige. Gute Laune? Optional.",
        "Kein Regen, aber vielleicht ein bisschen Drama",
        "Trockener als deine Ausreden am Montag",
        "Kein Regen – höchste Pfützen-Alarmstufe vorbei",
        "Heute wird nicht geduscht"
      ];

      const moods = [
        "🌞 euphorisch sonnig",
        "🌫️ neblig introvertiert",
        "🌪️ innerer Tornado",
        "☔ melancholisch feucht",
        "🔥 Grillparty im Kopf",
        "💨 vom Winde verweht",
        "🌈 bunt wie ein Einhorn auf Zucker",
        "🌧️ Regenschirm im Kopf verloren",
        "⚡ elektrisierend und leicht durchgeknallt",
        "❄️ eisgekühlt und cool wie ein Pinguin",
        "🌻 Sonnenblume im Frühlingswind",
        "🌙 mondbeschienen und nachdenklich",
        "🔥 brodelnder Vulkan der Kreativität",
        "🍂 herbstlich zerstreut und gemütlich",
        "🌬️ leicht chaotisch, wie Herbstblätter im Wind",
        "🎉 Party im Kopf mit Konfetti",
        "🌀 Wirbelsturm der Gedanken",
        "🌸 blühend und voller Hoffnung",
        "🌞 strahlend, wie ein frisch aufgebrühter Kaffee",
        "💧 ruhig wie ein stiller See",
        "⚡ Blitzstart ins Abenteuer",
        "🌺 exotisch und unberechenbar",
        "🌪️ Sturmfrei im Kopf",
        "🌙 geheimnisvoll und mondscheinfarben",
        "🌟 funkeln wie ein Stern im Großstadtdschungel",
        "🍃 frisch wie eine Brise am Morgen",
      ];

      this.temperature = this.biasedRandom(-30, 50) + "° " + this.getRandom(temps);
      this.wind = this.getRandom(winds);
      this.pressure = this.getRandom(pressures);
      this.rain = this.getRandom(rains);
      this.mood = this.getRandom(moods);
      console.log("Wetterdaten randomiziert");
    },
    getRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    biasedRandom(min, max) {
      // Box-Muller-Transform für Normalverteilung
      let u = 0, v = 0;
      while (u === 0) u = Math.random(); // [0,1) ausschließen
      while (v === 0) v = Math.random();
      let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

      // Standardabweichung und Mittelwert anpassen
      const mean = (min + max) / 2; // Mittelpunkt der Range (-20 bis 40 → Mitte ist 10)
      const stddev = (min + max) / 6; // je kleiner, desto mehr Ballung um mean

      num = Math.round(num * stddev + mean);

      // Begrenzen auf gewünschten Bereich
      return Math.max(min, Math.min(max, num));
    }
  }
}


</script>

<style scoped>
.weather-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  margin: -5vh;
  position: relative;
  height: 100vh;
  width: auto;
  /* Optional: Höhe nach Seitenverhältnis anpassen */
  aspect-ratio: 1000 / 800; /* Beispiel: 1000px Breite, 800px Höhe */
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Bild komplett sichtbar, ohne Verzerrung */
  display: block;
}

.card-overlay {
  position: absolute;
  left: 30%;  /* 400px / 1000px */
  top: 7%;   /* 200px / 800px */
  width: 40%; /* (920px - 400px) / 1000px */
  height: 56%;/* (650px - 200px) / 800px */

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* Klicks durchlassen, damit nur card klickbar */
}

.card {
  pointer-events: auto; /* macht den Container klickbar */
  /*background: var(--color-accent-light);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);*/
  padding: 2rem;
  font-size: 1.2rem;
  text-align: left;
  max-width: 100%;
  box-sizing: border-box;
}
</style>

