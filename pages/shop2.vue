<template>
  <div class="shop-container">

    <!-- Hauptinhalt -->
    <main class="content-area">
      <header class="content-header">
        <h1>{{ selectedCategory || "Alle Produkte" }}</h1>
      </header>

      <!-- Aktionsleiste (Filter, Sortierung etc.) -->
      <div class="action-bar">
        <!-- Platzhalter – später Buttons, Filter etc. -->
        <span class="action-bar-item">
            <label for="sort-select">Sortieren nach:</label>

            <span :class="['sort-link', { active: sortOption === 'az' }]"
                  @click="sortOption = 'az'"> A–Z </span>
            |
            <span :class="['sort-link', { active: sortOption === 'rating' }]"
                  @click="sortOption = 'rating'"> Beliebtheit </span>
        </span>
        <img src="/planets/planet21.webp" alt="Planet" style="z-index: -1; position: absolute; width: auto ; height: 25vh; float: right; right: -15px; top: -100px">

      </div>

      <!-- Produktübersicht -->
      <div class="product-grid">
        <div
            v-for="product in sortedProducts"
            :key="product.id"
            class="product-card"
            @click="openProduct(product)"
        >
          <img :src="product.image" alt="Produktbild" />
          <div class="product-title">{{ product.title }}</div>
          <div class="product-price">${{ product.price.toFixed(2) }}</div>
        </div>
      </div>
    </main>

    <!-- Sidebar: Kategorien -->
    <aside class="sidebar-shop">
      <h2>Kategorien</h2>
      <ul>
        <li v-for="category in categories" :key="category" @click="filterCategory(category)">
          {{ category }}
        </li>
      </ul>
      <img src="/planets/planet41.webp" alt="Planet" style="overflow: hidden; position: fixed; width: auto; min-height: 250px; max-height: 30vh; right: -100px; bottom: -10em">
    </aside>
  </div>







  <!-- Popup-Overlay -->
  <div
      v-if="selectedProduct"
      class="popup-overlay"
      @click.self="selectedProduct = null"
  >
    <div class="popup-content">
      <div class="popup-close" @click="selectedProduct = null">
        <img src="/public/icons/GoMark/GoMarkbackground.png" alt="Close" style="height:100%; width:100%;"/>
      </div>
      <div class="popup-image-container">
        <ImageSlider :images="selectedProduct.images" class="popup-body-slider"></ImageSlider>
      </div>
      <div class="popup-body">

        <h2>{{ selectedProduct.title }}</h2>

        <div class="product-rating">
          <img
              v-for="n in 5"
              :key="n"
              :src="n <= selectedProduct.rating ? SternIcon : SternEmptyIcon"
              :alt="`Stern ${n}`"
              class="inline-block w-5 h-5 align-middle"
              style="height: 1em; width: 1em; fill: var(--color-background)"
              :star-data="selectedProduct.rating"
          />                    <div class="product-rating-details">
          ({{ selectedProduct.rating.toFixed(1) }} - Sterne)
          <!--<span class="rating-count">{{ selectedProduct.reviews }}</span> reviews)-->
        </div>
        </div>

        <p>{{ selectedProduct.description || 'Beschreibung folgt...' }}</p>
        <p><strong>Preis:</strong> ${{ selectedProduct.price.toFixed(2) }}</p>
      </div>

    </div>

  </div>


</template>

<script setup>
import { ref, computed } from "vue";
import ImageSlider from "~/components/shop/imageslider.vue";


import Caro from "public/shop/BatikCaro.jpg";
import CaroWear from "public/shop/BatikCaroWear.jpg";
import Cin from "public/shop/BatikCin.jpeg";
import Moon from "public/shop/BatikMoon.jpg";
import MoonWear from "public/shop/BatikMoonWear.jpg";
import Kiss from "public/shop/BatikKiss.jpeg";
import Draw1 from "public/shop/BatikMalversuchVorne.jpeg";
import Draw2 from "public/shop/BatikMalversuchRücken.jpeg";
import SternIcon from "public/icons/SternIcon.png";
import SternEmptyIcon from "public/icons/SternEmptyIcon.png";


const selectedProduct = ref(null);

const products = ref ([
  {
    id: 1,
    title: 'CARO',
    price: 34.99,
    image: Caro,
    images: [Caro, CaroWear],
    description: 'Ein oversized Shirt, ursprünglich mal weiß, jetzt irgendwo zwischen blassem Blau und Grau. Durch die Falttechnik ist ein unregelmäßiges Karomuster entstanden – nicht ganz geplant, aber ziemlich stimmig. Auf der Brust: ein Patch wie ein Namensschild – „HELLO I’m cuter than you“. Direkt, ohne Kommentar. Unten am Saum fast versteckt: „That what – she“. Der Stoff ist fest, das Shirt trägt sich gut. Eins meiner liebsten Stücke, weil’s in sich rund geworden ist.',
    rating: 5,
    category: 'T-Shirt',
  },
  {
    id: 2,
    title: 'NO GENDER ROLES',
    price: 74.99,
    image: Cin,
    images: [Cin],
    description:
        'Oversized, wie fast alles bei mir. Das Shirt war mal weiß – jetzt ist es verwaschenes Pink mit fließendem Orange, weich verlaufend, ohne scharfe Kanten. Die Farben sind zurückgegangen, aber das steht ihm gut.\n' +
        '\n' +
        'Rechts auf der Brust sitzt ein Patch: Cinnamon-Rolls – No Gender Rolls.\n' +
        'Die Schrift im gleichen Farbspektrum, aber eingerahmt von einem dunkleren Batik-Hintergrund, der den Satz fast wie eine Ansage wirken lässt.\n' +
        '\n' +
        'Für mich ein stilles Statement – gegen Rollenbilder, für Selbstverständlichkeit.\n' +
        'Der Stoff trägt sich fest, der Gedanke bleibt weich.',
    rating: 4.3,
    category: 'T-Shirt',
  },

  {
    id: 3,
    title: 'LOVELY MOON',
    price: 49.99,
    image: Moon,
    images: [Moon, MoonWear],
    description: 'Ein oversized Shirt mit sanft verwaschenem Verlauf – früher leuchtender, jetzt eher blass. Das Blau ist müde geworden, das Gelb wirkt fast wie Nebel. Die Farben orientieren sich am Patch, der auf der rechten Brust sitzt.\n' +
        '\n' +
        'Darauf: eine Frau, die einen Sichelmond küsst. Still, fast träumerisch.\n' +
        'Ein Bild, das nicht viel sagt, aber viel auslöst – ruhig, mystisch, irgendwie weit weg.\n' +
        '\n' +
        'Die Farben sind nicht geblieben, aber die Stimmung schon.\n' +
        'Einfach ein schönes Piece, ohne große Geschichte – und trotzdem eins, das man nicht übersieht.',
    rating: 4.6,
    category: 'T-Shirt',
  },
  {
    id: 4,
    title: 'KISS',
    price: 13.12,
    image: Kiss,
    images: [Kiss],

    description: 'Oversized Shirt, robust wie immer. Die Farben waren mal lauter – kräftiges Blau, Magenta und Gelb, direkt vom Patch übernommen. Mittlerweile leicht ausgebleicht, besonders das Blau, aber der Eindruck bleibt: sommerlich, frisch, auffällig.\n' +
        '\n' +
        'Rechts auf der Brust: Zwei Gesichter, die sich küssen. Klare Linien auf neongelbem Grund.\n' +
        'Das Batikmuster drumherum greift die Farben auf – weich verlaufend, aber mit sichtbaren Übergängen.\n' +
        '\n' +
        'Kein großes Konzept, einfach gutes Gefühl für Farbe und Form.\n' +
        'Ein Stück, das ins Auge fällt, ohne etwas sagen zu müssen.',
    rating: 4.5,
    category: 'T-Shirt',
  },
  {
    id: 5,
    title: 'DRAW',
    price: 69.49,
    image: Draw1,
    images: [Draw1, Draw2],
    description: 'Ein oversized Shirt, bemalt statt gebatikt. Kein Muster, nur Farbe – zusammengewürfelt aus dem, was übrig war. Der Versuch: eine neue Technik. Das Ergebnis: chaotisch, nicht ganz wie geplant, aber sehenswert.\n' +
        '\n' +
        'Vorne ein Regenschirm, seitlich gemalt. Eigentlich sollten darunter Farbspritzer verlaufen – sind aber beim Waschen unter einem gelblichen Schleier verschwunden. Die Idee ging verloren, dafür ist was anderes draus geworden: reduzierter, zurückhaltender, weniger laut.\n' +
        '\n' +
        'Hinten noch ein paar Zeichnungen und Schriftzüge. Nicht weiter wichtig – das Shirt steht mehr für den Prozess als für eine Aussage.',
    rating: 2.1,
    category: 'T-Shirt',
  },
  {
    id: 6,
    title: 'ICELAND',
    price: 59.49,
    image: null,
    images: [],
    description: 'Schwarzes Shirt, dicker Stoff, fester Griff. Gebleicht statt gefärbt – mit Streifen, die von unten nach oben verlaufen. Nicht streng, sondern wolkig und weich in der Form, aber mit klarem Verlauf. In diesem Fall: ein warmer Gelbton, der sich gleichmäßig durchs Schwarz zieht. Der Patch sitzt wie gewohnt rechts auf der Brust. Iceland steht dort, darunter ein stilisierter Wikingerhelm in Bronze – rundet das Design ab, ohne sich vorzudrängen. Das Shirt wirkt ruhig, fast kühl – trägt sich aber lässig. Ein Stück, das zeigt, wie sich ein Stil langsam festsetzt.',
    rating: 4.0,
    category: 'T-Shirt',
  },
  {
    id: 7,
    title: 'CHILLED FIRE',
    price: 89.49,
    image: null,
    images: [],
    description: 'Oversized Hoodie auf tiefschwarzem Stoff. Locker geschnitten, ohne zu hängen. Die Streifen: gewohnt wolkig, von Hand gebleicht – ziehen sich über Saum, Ärmel und Kapuze. In einem verwaschenen, bräunlich-gelben Ton, der sich ruhig ins Schwarz legt.\n' +
        '\n' +
        'Auf der Brust: das bekannte Meme – This is fine. Der Patch greift farblich das Streifenmuster auf und zieht genau die richtige Menge Aufmerksamkeit.\n' +
        'Modern, bequem, mit einem Hauch Ironie – aber ohne Zynismus.\n' +
        '\n' +
        'Ein Stück zum Reinkuscheln, wenn’s mal wieder rund geht.\n' +
        'Oder einfach nur, weil’s gut sitzt.',
    rating: 5.0,
    category: 'Pullover',
  },
  {
    id: 8,
    title: 'Snailk',
    price: 99.49,
    image: null,
    images: [],
    description: 'Oversized Hoodie aus tiefschwarzem Stoff. Der Schnitt locker, aber nicht formlos. Die Streifen ziehen sich wie gewohnt über Saum, Kapuze und Ärmel – diesmal in ausgebleichtem Lila, warm und einladend, mit leichtem Graustich. Der Patch sitzt auf der rechten Brust. Zwei Hände beim Handschlag – eine orangene Schlange windet sich aus dem Ärmel und beißt zu. Comicartig, klar gezeichnet, farblich deutlich abgegrenzt. Wird oft angesprochen. Und das zurecht. Ein visuelles Statement, das mehr sagt, als es erklärt. Für mich eins der stärksten Stücke.',
    rating: 5.0,
    category: 'Pullover',
  },

]);

const categories = ref(["Alle", "Pullover", "T-Shirt"]);
const selectedCategory = ref(null);

function filterCategory(category) {
  if (category == "Alle") {
    selectedCategory.value = null;
} else {
    selectedCategory.value = category;
  }
}

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value;
  return products.value.filter(p => p.category === selectedCategory.value);
});

const sortOption = ref("az");

const sortedProducts = computed(() => {
  let list = [...filteredProducts.value];

  switch (sortOption.value) {
    case "rating":
      return list.sort((a, b) => b.rating - a.rating);
    case "az":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return list;
  }
});




function openProduct(product) {
  selectedProduct.value = product;
  quantity.value = 1;
}



</script>


<style>
:root {
  --colortext: white;
  --coloractive: var(--color-active);
  --colorbackground: var(--color-background);
  --colorhover: var(--color-hover);
  --coloraccent: var(--color-accent);
  --coloraclight: var(--color-accent-light);
}
</style>



<style scoped>

.shop-container {
  display: flex;
  height: calc(100vh - 4rem);
}

/* Sidebar */
.sidebar-shop {
  font-size: clamp(10px, 2vw, 20px);
  width: auto;
  min-width: 75px;
  max-width: 20%;
  padding: 20px;
  background-color: var(--colorbackground);
  border-left: 1px solid var(--coloractive);
  justify-self: right;
  color: white;
  text-shadow:
      0 0 5px var(--colorhover),
      0 0 10px var(--colorhover);
  text-align: right;
  margin-top: -4rem; /*Abstand für Navbar aus app.vue*/
  margin-right: -10px;
  height: 100vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
}

.sidebar-shop h2 {
  margin-bottom: 10px;
}

.sidebar-shop ul {
  list-style: none;
  padding: 0;
  line-height: 2rem;

}

.sidebar li {
  padding: 8px 0;
  cursor: pointer;
}

.sidebar-shop li:hover {
  text-shadow:
      0 0 5px var(--coloraccent),
      0 0 20px var(--coloraclight);
}

/* Main content */
.content-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.content-header {
  position: relative;
  margin-bottom: 10px;
  color: var(--colortext);
  z-index: 11;
}

.action-bar {
  margin-bottom: 20px;
  background: var(--coloraccent);
  color: var(--colortext);
  padding: 10px;
  border-radius: 5px;
  z-index: 10;
  position: relative;
}
.action-bar-item {
  background: var(--coloraccent);
  padding: 10px;
  border-radius: 5px;
}
.sort-link {
  margin: 0 8px;
  cursor: pointer;
  font-weight: bold;
  color: var(--colortext);
  text-shadow: 0 0 5px var(--coloraclight);
  transition: 0.2s ease;
}

.sort-link:hover {
  color: var(--colorbackground);
  text-shadow: 0 0 10px var(--coloraclight);
}

.sort-link.active {
  color: var(--coloractive);
}



.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  position: relative;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  background: var(--coloraccent);
  color: var(--colortext);
  z-index: 20;
}

.product-card:hover {
  transform: scale(1.03);
}

.product-card img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
  height: 180px;
  box-shadow: var(--coloractive);
}

.product-title {
  font-weight: bold;
  margin-top: 10px;
}

.product-price {
  color: var(--colorbackground);
  margin-top: 4px;
  text-shadow:
      0 0 20px var(--coloraclight),;
}


















/* hintergrund grau */
.popup-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 10px;
  overflow-y: auto;
}

.popup-content {
  background-color: var(--coloraccent);
  height: 80vh;
  width: 85%;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  max-height: calc(100vh - 20px);
  overflow-y: auto;
  color: var(--colortext);
}

.popup-close {
  position: absolute;
  background: transparent;
  top: 15px;
  right: 15px;
  border: none;
  cursor: pointer;
  height: 2em;
  width: auto;
  z-index: 101;
  box-shadow: inset 0 0 45px 0 var(--color-accent-light);
  border-radius: 50%;
}
.popup-close img {
  width: 100%;
  height: auto;
  display: block;
}
.popup-body {
  font-size: 20px;
  background-color: var(--coloraclight);
  padding: 10px;
  margin: 20px 10vw;
  border-radius: 20px;
  position: relative;
}

.popup-body img {
  width: auto;
  max-height: 75vh;
}

.popup-body-slider {
  width: auto;
  max-height: 80%;
}

.popup-image-container {
  margin: 0 -20px; /* negiert das Padding des popup-content */
  margin-top: -30px;
  overflow: hidden;
  position: static;
}

.popup-image-container img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.product-rating {
  margin-top: 25px;
  margin-bottom: 25px;
  right: 0;
}
</style>
