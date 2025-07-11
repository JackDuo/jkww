<template>
  <div >
    <div v-if="selectedProduct" class="lightbox-blanket" @click.self="selectedProduct = null">
      <div class="pop-up-container" >
        <div class="pop-up-container-vertical">
          <div class="pop-up-wrapper">
            <div class="go-back" @click="selectedProduct = null">
              <img src="/icons/GoPfeil.png" alt="Pfeilicon" style="height:1.5em; width:1.5em;"/>
            </div>
              <div class="product-left">
                <div class="slider">
                  <!--<img :src="selectedProduct.image" />-->
                </div>
              </div>
              <div class="product-right">
                <div class="product-manufacturer">Made by Jason</div>

                <span class="product-right-background product-title">{{ selectedProduct.title }}</span>
                <div class="product-right-background">
                  <div style="padding-top: 25px;" class="product-price">
                    ${{ selectedProduct.priceDollars }}
                    <span class="product-price-cents">{{ selectedProduct.priceCents }}</span>
                  </div>
                  <br/>
                  <div class="product-description">{{ selectedProduct.description }}</div>
                  <!--<div class="product-available">
                    In stock. <span class="product-extended"><a href="#">Buy Extended Warranty</a></span>
                  </div>-->
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
                  <div class="product-quantity">
                    <label for="product-quantity-input" class="product-quantity-label">Quantity</label>
                    <div class="product-quantity-subtract" @click="decrement">
                      <i>-</i>
                    </div>
                    <div>
                      <input
                          type="text"
                          id="product-quantity-input"
                          v-model.number="quantity"
                          placeholder="0"
                      />
                    </div>
                    <div class="product-quantity-add" @click="increment">
                      <i>+</i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-bottom">
                <div class="product-checkout">
                  Total Price
                  <div class="product-checkout-total">
                    <i class="fa fa-usd"></i>
                    <div class="product-checkout-total-amount">
                      {{ (quantity * selectedProduct.price).toFixed(2) }}
                    </div>
                  </div>
                </div>
                <div class="product-checkout-actions">
                  <a class="add-to-cart" href="#" @click.prevent="addToCart">Add to Cart</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="random-background">
      <div class="itemlist">
        <div
            class="itemlist-item-wrapper"
            v-for="product in products"
            :key="product.id"
            @click="openProduct(product)"
        >
          <div class="product-details">
            <div>
              <div class="product-info">
                <div class="product-title">{{ product.title }}</div>
                <div style="font-size-adjust: 0.5" class="product-price">
                  ${{ product.priceDollars }}
                </div>
              </div>
              <div class="product-image">
                <img :src="product.images[0]" />

                <!--<ImageSlider images="product.images"></ImageSlider>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Images from "~/pages/images.vue";
import ImageSlider from "~/components/shop/imageslider.vue";

import SternIcon from "~/public/icons/SternIcon.png"
import SternEmptyIcon from "~/public/icons/SternEmptyIcon.png"


import Caro from "public/shop/BatikCaro.jpg"
import CaroWear from "public/shop/BatikCaroWear.jpg"

import Cin from "public/shop/BatikCin.jpeg"

import Moon from "public/shop/BatikMoon.jpg"
import MoonWear from "public/shop/BatikMoonWear.jpg"

import Kiss from "public/shop/BatikKiss.jpeg"

import Draw1 from "public/shop/BatikMalversuchVorne.jpeg"
import Draw2 from "public/shop/BatikMalversuchRücken.jpeg"


const quantity = ref(0);
const selectedProduct = ref(null);

const products = [
  {
    id: 1,
    title: 'CARO',
    price: 34.99,
    priceDollars: 34,
    priceCents: '99',
    image: Caro,
    images: [Caro, CaroWear],
    description: 'Ein oversized Shirt, ursprünglich mal weiß, jetzt irgendwo zwischen blassem Blau und Grau. Durch die Falttechnik ist ein unregelmäßiges Karomuster entstanden – nicht ganz geplant, aber ziemlich stimmig. Auf der Brust: ein Patch wie ein Namensschild – „HELLO I’m cuter than you“. Direkt, ohne Kommentar. Unten am Saum fast versteckt: „That what – she“. Der Stoff ist fest, das Shirt trägt sich gut. Eins meiner liebsten Stücke, weil’s in sich rund geworden ist.',
    rating: 5,
    reviews: 1203,
  },
  {
    id: 2,
    title: 'NO GENDER ROLES',
    price: 74.99,
    priceDollars: 74,
    priceCents: '99',
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
    reviews: 1203,
  },

  {
    id: 3,
    title: 'LOVELY MOON',
    price: 49.99,
    priceDollars: 49,
    priceCents: '99',
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
    reviews: 1203,
  },
  {
    id: 4,
    title: 'KISS',
    price: 13.12,
    priceDollars: 13,
    priceCents: '03',
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
    reviews: 1203,
  },
  {
    id: 5,
    title: 'DRAW',
    price: 69.49,
    priceDollars: 69,
    priceCents: '49',
    image: Draw1,
    images: [Draw1, Draw2],
    description: 'Ein oversized Shirt, bemalt statt gebatikt. Kein Muster, nur Farbe – zusammengewürfelt aus dem, was übrig war. Der Versuch: eine neue Technik. Das Ergebnis: chaotisch, nicht ganz wie geplant, aber sehenswert.\n' +
        '\n' +
        'Vorne ein Regenschirm, seitlich gemalt. Eigentlich sollten darunter Farbspritzer verlaufen – sind aber beim Waschen unter einem gelblichen Schleier verschwunden. Die Idee ging verloren, dafür ist was anderes draus geworden: reduzierter, zurückhaltender, weniger laut.\n' +
        '\n' +
        'Hinten noch ein paar Zeichnungen und Schriftzüge. Nicht weiter wichtig – das Shirt steht mehr für den Prozess als für eine Aussage.',
    rating: 2.1,
    reviews: 100,
  },
  {
    id: 6,
    title: 'ICELAND',
    price: 59.49,
    priceDollars: 59,
    priceCents: '49',
    image: null,
    images: [],
    description: 'Schwarzes Shirt, dicker Stoff, fester Griff. Gebleicht statt gefärbt – mit Streifen, die von unten nach oben verlaufen. Nicht streng, sondern wolkig und weich in der Form, aber mit klarem Verlauf. In diesem Fall: ein warmer Gelbton, der sich gleichmäßig durchs Schwarz zieht. Der Patch sitzt wie gewohnt rechts auf der Brust. Iceland steht dort, darunter ein stilisierter Wikingerhelm in Bronze – rundet das Design ab, ohne sich vorzudrängen. Das Shirt wirkt ruhig, fast kühl – trägt sich aber lässig. Ein Stück, das zeigt, wie sich ein Stil langsam festsetzt.',
    rating: 4.0,
    reviews: 100,
  },
  {
    id: 7,
    title: 'CHILLED FIRE',
    price: 89.49,
    priceDollars: 89,
    priceCents: '49',
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
    reviews: 100,
  },
  {
    id: 8,
    title: 'Snailk',
    price: 99.49,
    priceDollars: 99,
    priceCents: '49',
    image: null,
    images: [],
    description: 'Oversized Hoodie aus tiefschwarzem Stoff. Der Schnitt locker, aber nicht formlos. Die Streifen ziehen sich wie gewohnt über Saum, Kapuze und Ärmel – diesmal in ausgebleichtem Lila, warm und einladend, mit leichtem Graustich. Der Patch sitzt auf der rechten Brust. Zwei Hände beim Handschlag – eine orangene Schlange windet sich aus dem Ärmel und beißt zu. Comicartig, klar gezeichnet, farblich deutlich abgegrenzt. Wird oft angesprochen. Und das zurecht. Ein visuelles Statement, das mehr sagt, als es erklärt. Für mich eins der stärksten Stücke.',
    rating: 5.0,
    reviews: 100,
  },

];

function openProduct(product) {
  selectedProduct.value = product;
  quantity.value = 1;
}

function increment() {
  quantity.value++;
}

function decrement() {
  if (quantity.value > 0) quantity.value--;
}

function addToCart() {
  alert(`${quantity.value}x wurde ${selectedProduct.value.title} zum Einkaufswagen hinzugefügt.`);
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poppins);
@import url(https://fonts.googleapis.com/css?family=Montserrat);

* {
  box-sizing: border-box;
  font-family: Montserrat;
  font-size: 14px;
}

::selection {
  background-color: white;
}

i {
  font-size: 20px;
}


/* 4. Elements - HTML Elements of the page h1-h6, etc. */

body {
  margin: 0;
  padding: 0;
  background-color: #222;
  color: #666;
}

a {
  color: #235ba8;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

input {
}

input:focus {
}

input[type="submit"],
input[type="button"] {
}


/* 5. Objects - wrappers, cards, etc. */

.random-background {
  /* background-color: #4A0E7A;

   background-image: -webkit-linear-gradient(top, #36a88e, #f35b47);
   background-image: -moz-linear-gradient(top, #36a88e, #f35b47);
   background-image: -o-linear-gradient(top, #36a88e, #f35b47);
   background-image: linear-gradient(to bottom, #36a88e, #f35b47);

   max-height: 200vh;
   max-width: 100vw;*/
}

.itemlist {
  max-width: 1024px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.itemlist-item-wrapper {
  width: calc(90% / 3);
  display: inline-block;
  font-size: 20px !important;
  margin: 1% 0.5% 0.5% 0.5%;
  background-color: var(--color-accent);
  padding: 10px;
  border-radius: 10px;
  box-sizing: content-box;
}

@media (max-width: 800px) {
  .itemlist {
    width: auto;
    margin: auto;
    padding: 0;
  }

  .itemlist-item-wrapper {
    width: 48%;
    margin: auto;
    margin-bottom: 0.5%;
    padding: 30px;
  }
}

@media (max-width: 600px) {
  .itemlist {
    width: auto;
    margin: auto;
    padding: 0;
  }

  .itemlist-item-wrapper {
    margin: auto;
    margin-bottom: 2%;
  }
}


.lightbox-blanket {
  background-color: rgba(30, 30, 30, 0.9);
  display: block;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 20;
}

.pop-up-container {
  overflow-y: scroll;
  width: 85%;
  display: table;
  margin: auto;
  position: static;
  height: 100%;
  padding-top: 120px;
}

@media (max-width: 400px) {
  .pop-up-container {
    width: 96%;
    margin: 2%;
  }
}

.pop-up-container-vertical {
  vertical-align: top;
  display: table-cell;
  position: relative;
}

.pop-up-wrapper {
  -webkit-box-shadow: -45px 49px 83px 1px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -45px 49px 83px 1px rgba(0, 0, 0, 0.45);
  box-shadow: -45px 49px 83px 1px rgba(0, 0, 0, 0.45);
  display: block;
  margin: 20px auto;
  width: auto;
  position: relative;
}

.pop-up-wrapper {
  background-color: var(--color-accent);
  display: block;
  padding: 50px;
  margin-top: -100px;
  margin-bottom: -100px;
}

.go-back {
  position: absolute;
  left: 10px;
  top: 10px;
  color: var(--color-accent);
  width: 0;
  height: 0;
  border-top: 75px solid var(--color-background);
  border-right: 75px solid transparent;
}

.go-back:hover {
  border-top: 75px solid var(--color-hover);

}

.go-back img {
  font-size: 20px;
  position: relative;
  top: -3.3em;
  left: 5px;
}

.slider {
  padding-top: 100px;
  display: flex;
  align-items: center;
}

.product-details {
}

.product-left {
  display: inline-block;
  padding-right: 4%;
  vertical-align: top;
  width: 65%;
}

.product-right {
  position: relative;
  display: inline-block;
  width: 34%;
}

.product-right-background {
  background-color: var(--color-accent-light);
  padding: 10px;
  border-radius: 10px;
}

.product-bottom {
  border-top: 1px solid var(--color-active);
  position: relative;
  padding-top: 20px;
}

@media (max-width: 650px) {
  .product-left, .product-right, .product-bottom {
    width: 100%;
  }

  .product-left {
    position: relative;
    padding-right: 0;
    margin-top: 0;
  }

  .product-info {
    display: inline-block;
    width: 60%;
    vertical-align: top;
  }

  .product-image {
    display: inline-block;
    width: 39%;
    vertical-align: top;
  }
}

@media (max-width: 512px) {
  .product-info, .product-image {
    width: 100%;
  }
}

.product-manufacturer {
  color: var(--color-active);
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  margin: -2px;
  text-align: right;
  padding-bottom: 7vh;

}

.product-title {
  font-size: 28px;
  color: var(--color-active);
  padding-bottom: 10px;
  min-height: 3em;
  align-content: center;
}

.product-price {
  color: var(--color-active);
  font-size: 24px;
  letter-spacing: 1px;
  padding-bottom: 10px;
}

.product-price-cents {
  text-decoration: underline;
  vertical-align: top;
  padding-left: 3px;
}

.product-image {
  padding: 5px 5px 0 5px;
}

.product-image img {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  overflow: auto;

}


.product-description {
  line-height: 1.5;
}

.product-available {
  margin-top: 25px;
}

.product-rating {
  margin-top: 25px;
  padding-top: 100px;
}


i.fa-star {
  color: #aaa;
  display: inline-block;
}

i.fa-star.rating {
  color: var(--color-background);
}

.product-rating-details {
  display: inline-block;
  padding-left: 10px;
}

@media (max-width: 515px) {
  .product-rating-details {
    padding-left: 0;
  }
}

.product-extended {
  color: #235ba8;
  padding-left: 5px;
}

.product-quantity {
  margin-top: 25px;
  margin-bottom: 25px;
}

.product-checkout {
  position: absolute;
  left: 0;
  font-size: 12px;
  text-transform: uppercase;
}

.product-checkout-actions {
  position: absolute;
  right: 0;
}

.product-checkout-total, .product-checkout-total-amount {
  font-size: 20px;
  color: var(--color-active)
}

.product-checkout-total * {
  display: inline-block;
}

.product-checkout-actions {
}

/* 6. Components - buttons, menus, images, etc. */
.product-quantity-label {
  text-transform: uppercase;
}

.product-quantity * {
  display: inline-block;
}

#product-quantity-input {
  background-color: #eee;
  border: none;
  width: 2.5em;
  text-align: center;
}

.product-quantity-subtract, .product-quantity-add {
  margin-left: 20px;
  padding-left: 5px;
  padding-right: 5px;
}

.product-quantity-subtract {
  margin-right: 20px;
}


.toast {
  position: fixed;
  top: -50px;
  left: calc(50vw - 50px);
  z-index: 25;
  padding: 5px 10px;
  border-radius: 15px;
}

.toast-success {
  background-color: green;
  color: white;
  font-size: 9pt;
}

.toast-transition {
  top: calc(50px);
  transition: top 1s;
}


/* 7. Trumps - text helpers, often !important */

.hidden {
  display: none;
}</style>
