<!-- <template>
  <div class="flex items-center justify-center w-screen font-inter">

    <div class="flex items-center justify-center WaterCatalogueContainer">

      <div class="grid grid-cols-4 px-3 py-3 text-black gap-x-5 gap-y-4">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="relative flex flex-col items-center p-2 text-center bg-[#F6F6F6] rounded-lg"
        >
          <div
            v-if="product.badge"
            class="absolute px-2 text-xs font-semibold text-white bg-red-600 rounded-full select-none top-2 left-2"
          >
            {{ product.badge }}
          </div>

          <img :src="product.image" :alt="product.title" class="h-[220px]  mb-2 object-contain" />

          <div class="w-full text-xs text-start ">
            <p class="m-0 text-[#888888]">Pack de {{ product.quantity }}</p>
            <p class="font-semibold mb-1 min-h-[38px] break-words">
              {{ product.title }}
            </p>
            <p class="m-0">
              <span class="text-[#888888]"> {{ product.quantity }} </span>
              | {{ product.price }}
            </p>
            <div class="mt-4">
              <div class="flex items-center justify-between gap-2 w-[278px] bg-gray-100 rounded-4xl">
                <button
                  @click="decrement(index)"
                  class="flex items-center justify-center w-8 h-8 font-bold text-gray-400 bg-gray-200 rounded-full select-none hover:bg-gray-500 hover:cursor-pointer"
                  :disabled="product.count === 0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1665 9.99121H15.8332"
                      stroke="#888888"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <span class="min-w-[20px] font-bold">
                  {{ product.count }}
                </span>
                <button
                  @click="increment(index)"
                  class="flex items-center justify-center w-8 h-8 text-white bg-red-600 rounded-full select-none Wfont-bold hover:bg-red-700 hover:cursor-pointer"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.6665 9.99154H16.3332M10.4998 4.1582V15.8249"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// creation des id uniques et un objet objet pour l'envoyer a l'api


export default {
  name: 'ProductGrid',
  data() {
    return {
      products: [
        {
          title: 'Céleste Naturelle 1.5L',
          quantity: '1',
          price: '1 800 FCFA',
          image: new URL('../../assets/EauMinerales/cel 1.5L.png', import.meta.url).href,
          count: 1,
          badge: 'Nouveau',
        },
        {
          title: 'Céleste Naturelle 1.6L',
          quantity: '1',
          price: '2 475 FCFA',
          image: new URL('../../assets/EauMinerales/cel 1L.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Céleste Naturelle 1L',
          quantity: '1',
          price: '1 500 FCFA',
          image: new URL('../../assets/EauMinerales/cel 0.5L.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Céleste Naturelle 0.5L',
          quantity: '1',
          price: '990 FCFA',
          image: new URL('../../assets/EauMinerales/cel 17L.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Céleste Naturelle 0.33L',
          quantity: '16',
          price: '1 850 FCFA',
          image: new URL('../../assets/EauMinerales/awa 0.5L.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Céleste 17L',
          quantity: '1',
          price: '2 040 FCFA',
          image: new URL('../../assets/EauMinerales/awa 1.5L.png', import.meta.url).href,
          count: 0,
          badge: 'Nouveau',
        },
        {
          title: 'Cristaline 1.5L',
          quantity: '1',
          price: '1 600 FCFA',
          image: new URL('../../assets/BoissonGazeuses/coca.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Cristaline 0.5L',
          quantity: '12',
          price: '1 050 FCFA',
          image: new URL('../../assets/BoissonGazeuses/coca.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Cristaline 0.33L',
          quantity: '10',
          price: '1 200 FCFA',
          image: new URL('../../assets/BoissonGazeuses/coca.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Awa 1.5L',
          quantity: '6',
          price: '1 600 FCFA',
          image: new URL('../../assets/BoissonGazeuses/coca.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
        {
          title: 'Awa 0.5L',
          quantity: '4',
          price: '000 FCFA',
          image: new URL('../../assets/BoissonGazeuses/coca.png', import.meta.url).href,
          count: 0,
          badge: null,
        },
      ],
    }
  },

  methods: {
    increment(index: number) {
      this.products[index].count++
    },
    decrement(index: number) {
      if (this.products[index].count > 0) {
        this.products[index].count--
      }
    },
  },
}
</script> -->
<template>
  <section class="p-6">
    <h2 class="mb-4 text-xl font-bold text-gray-800">Mon Casier Complet</h2>

    <div v-if="selectedProducts.length > 0" class="grid grid-cols-3 gap-6">
      <div
        v-for="product in selectedProducts"
        :key="product.id"
        class="flex flex-col items-center p-4 bg-white border shadow rounded-xl"
      >
        <img :src="product.img" :alt="product.label" class="object-contain w-20 h-40" />
        <h3 class="mt-3 text-lg font-semibold text-gray-900">{{ product.label }}</h3>
        <p class="text-sm text-gray-500">{{ product.volume }}</p>
        <p class="mt-1 font-bold text-red-600">{{ product.price.toLocaleString() }} FCFA</p>
        <p class="mt-1 text-sm text-gray-700">Quantité: {{ product.qty }}</p>
      </div>
    </div>

    <div
      v-else
      class="flex flex-col items-center justify-center w-screen p-6 text-center text-gray-500"
    >
      <div>
        <!-- <img src="../../assets/BoissonGazeuses/boisson-non-alcoolisee.svg" alt="" class="w-48" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="212.000000pt"
          height="112.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#F11123"
            stroke="none"
          >
            <path
              d="M815 4946 c-37 -16 -70 -52 -84 -89 -6 -16 -11 -89 -11 -163 l0 -134 -40 0 -40 0 0 -80 0 -80 40 0 40 0 0 -70 c0 -106 -26 -214 -76 -317 -39 -81 -60 -109 -167 -220 -67 -71 -138 -151 -158 -178 -72 -99 -129 -238 -149 -365 -13 -85 -13 -1300 0 -1395 6 -38 27 -128 48 -200 36 -128 37 -133 36 -300 0 -165 -1 -173 -37 -294 -48 -163 -59 -255 -55 -458 3 -157 5 -172 30 -225 37 -79 98 -142 177 -181 60 -29 73 -32 156 -31 102 1 147 16 228 78 l48 37 61 -41 c107 -71 233 -94 359 -66 86 19 153 55 227 121 l52 47 31 -26 c44 -38 80 -54 141 -67 29 -6 86 -27 127 -47 70 -35 80 -37 165 -36 103 1 148 16 229 78 l48 37 61 -41 c33 -22 86 -48 117 -58 68 -20 218 -22 274 -3 40 14 43 24 22 73 -5 12 2 21 27 34 18 9 54 34 80 56 l46 38 7 -87 c6 -72 12 -91 31 -110 l23 -23 511 0 511 0 24 24 c28 28 26 14 65 524 37 489 50 552 149 766 53 115 95 248 115 365 13 75 16 171 16 463 l0 369 -25 24 -24 25 -416 0 -415 0 0 80 0 80 40 0 40 0 0 165 c0 185 -14 276 -60 392 -44 110 -92 177 -243 339 -120 129 -144 160 -182 238 -49 102 -75 211 -75 316 l0 70 40 0 40 0 0 80 0 80 -39 0 -40 0 -3 148 c-3 146 -3 149 -32 186 -49 65 -62 67 -381 64 -268 -3 -285 -4 -311 -24 -64 -47 -69 -62 -72 -225 l-3 -149 -40 0 -39 0 0 -80 0 -80 40 0 40 0 0 -70 c0 -100 -26 -212 -70 -305 -47 -100 -62 -119 -202 -263 -62 -64 -129 -139 -147 -165 -49 -72 -99 -185 -121 -279 -19 -78 -20 -118 -20 -700 l0 -618 -80 0 -80 0 0 40 0 40 -560 0 -560 0 0 480 0 480 560 0 560 0 0 80 0 80 -555 0 c-305 0 -555 4 -555 8 0 5 9 43 20 86 33 129 78 202 222 354 71 75 148 167 171 204 l42 67 335 0 335 0 33 -55 c32 -53 107 -146 122 -152 4 -1 31 24 59 57 l52 60 -47 58 c-93 114 -154 289 -154 443 l0 70 40 0 40 0 0 80 0 80 -39 0 -40 0 -3 148 c-3 146 -3 149 -32 186 -48 63 -62 66 -368 66 -205 -1 -280 -4 -303 -14z m545 -266 l0 -120 -240 0 -240 0 0 120 0 120 240 0 240 0 0 -120z m0 -352 c0 -67 8 -130 26 -215 l7 -33 -273 0 -272 0 6 33 c18 85 26 148 26 215 l0 72 240 0 240 0 0 -72z m1440 0 c0 -67 8 -130 26 -215 l7 -33 -273 0 -272 0 6 33 c18 85 26 148 26 215 l0 72 240 0 240 0 0 -72z m1360 -1888 l0 -120 -720 0 -720 0 0 120 0 120 720 0 720 0 0 -120z m0 -334 c0 -191 -42 -384 -120 -556 -66 -144 -106 -264 -124 -375 -9 -50 -27 -243 -41 -430 -14 -187 -28 -359 -31 -382 l-5 -43 -399 0 -399 0 -5 43 c-3 23 -17 195 -31 382 -14 187 -31 372 -37 410 -16 109 -53 224 -119 373 -90 203 -128 372 -129 570 l0 62 720 0 720 0 0 -54z m-3255 -211 c-113 -95 -465 -345 -484 -345 -7 0 -79 269 -87 328 l-7 42 304 0 304 0 -30 -25z"
            />
            <path d="M3280 1680 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
            <path d="M3440 1120 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
            <path d="M3200 800 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
            <path
              d="M3695 4946 c-37 -16 -70 -52 -84 -89 -6 -16 -11 -89 -11 -163 l0 -134 -40 0 -40 0 0 -80 0 -80 40 0 40 0 0 -70 c0 -155 -61 -329 -154 -444 l-48 -59 56 -55 55 -56 27 24 c14 14 52 65 85 114 89 135 139 304 139 474 l0 72 240 0 240 0 0 -71 c0 -159 48 -330 127 -458 27 -43 100 -131 169 -203 160 -166 227 -280 250 -427 l7 -41 -557 0 -556 0 0 -80 0 -80 560 0 560 0 0 -480 0 -480 -160 0 -160 0 0 -80 0 -80 156 0 157 0 -7 -48 c-3 -27 -13 -73 -21 -103 -8 -30 -24 -88 -35 -129 -33 -121 -45 -263 -32 -382 6 -57 21 -137 32 -178 11 -41 27 -99 35 -129 36 -132 47 -397 21 -486 -20 -65 -68 -112 -134 -131 -86 -25 -142 -5 -239 87 -79 76 -104 78 -173 13 -28 -26 -50 -50 -50 -54 0 -4 21 -33 46 -64 39 -47 49 -54 65 -46 15 8 28 3 66 -26 81 -62 126 -77 228 -78 83 -1 96 2 156 31 79 39 140 102 177 181 25 53 27 68 30 226 4 200 -6 286 -56 461 -36 128 -37 133 -36 300 0 165 1 173 37 294 20 68 41 160 47 205 7 53 10 309 8 741 l-3 660 -28 88 c-53 171 -106 253 -279 434 -112 118 -133 145 -172 226 -50 103 -76 211 -76 317 l0 70 40 0 40 0 0 80 0 80 -39 0 -40 0 -3 148 c-3 146 -3 149 -32 186 -48 63 -62 66 -368 66 -205 -1 -280 -4 -303 -14z m545 -266 l0 -120 -240 0 -240 0 0 120 0 120 240 0 240 0 0 -120z"
            />
            <path d="M480 2800 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
            <path d="M480 2400 l0 -160 80 0 80 0 0 160 0 160 -80 0 -80 0 0 -160z" />
          </g>
        </svg>
      </div>
      <p class="text-xl">
        Ne laissez pas passer l’opportunité ! Ajoutez des casiers dès maintenant et profitez
        pleinement de chaque instant.
      </p>
    </div>
  </section>
  <section class="p-6">
    <h2 class="mb-4 text-xl font-bold text-gray-800">Mes bouteilles d'eau</h2>

    <div v-if="waterStore.selectedWaters.length > 0" class="grid grid-cols-3 gap-6">
      <div
        v-for="water in waterStore.selectedWaters"
        :key="water.id"
        class="flex flex-col items-center p-4 bg-white border shadow rounded-xl"
      >
        <img :src="water.img" :alt="water.label" class="object-contain w-20 h-40" />
        <h3 class="mt-3 text-lg font-semibold text-gray-900">{{ water.label }}</h3>
        <p class="text-sm text-gray-500">{{ water.volume }}</p>
        <p class="mt-1 font-bold text-red-600">{{ water.price.toLocaleString() }} FCFA</p>
        <p class="mt-1 text-sm text-gray-700">Quantité: {{ water.qty }}</p>
      </div>
    </div>

    <div v-else class="flex flex-col items-center justify-center w-screen text-gray-500">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="212.000000pt"
          height="112.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#68B1FC"
            stroke="none"
          >
            <path d="M640 4800 l0 -80 400 0 400 0 0 80 0 80 -400 0 -400 0 0 -80z" />
            <path d="M2240 4720 l0 -160 320 0 320 0 0 160 0 160 -320 0 -320 0 0 -160z" />
            <path d="M3520 4720 l0 -160 400 0 400 0 0 160 0 160 -400 0 -400 0 0 -160z" />
            <path d="M640 4480 l0 -80 400 0 400 0 0 80 0 80 -400 0 -400 0 0 -80z" />
            <path
              d="M2312 4311 c-28 -209 -99 -356 -261 -535 -105 -116 -175 -250 -196 -374 l-7 -42 712 0 712 0 -7 42 c-21 124 -91 258 -196 374 -162 179 -233 326 -261 535 l-12 89 -236 0 -236 0 -12 -89z"
            />
            <path
              d="M3577 4332 c-24 -94 -79 -185 -156 -257 -211 -198 -216 -204 -206 -218 6 -8 27 -36 48 -63 54 -71 124 -216 148 -309 14 -54 23 -126 26 -222 l6 -143 720 0 720 0 -6 118 c-8 153 -42 288 -106 417 -60 122 -124 207 -227 303 -44 41 -104 98 -135 127 -67 62 -122 156 -146 248 l-18 67 -325 0 -326 0 -17 -68z"
            />
            <path
              d="M716 4209 c-3 -17 -6 -47 -6 -66 0 -63 -30 -245 -61 -367 -53 -213 -131 -397 -251 -597 -130 -215 -146 -259 -155 -426 l-6 -113 724 0 724 0 -3 271 -3 271 -49 87 c-130 231 -221 518 -250 786 -6 55 -13 119 -16 143 l-5 42 -318 0 -318 0 -7 -31z"
            />
            <path
              d="M1840 2960 l0 -240 720 0 720 0 0 240 0 240 -720 0 -720 0 0 -240z m1280 0 l0 -80 -560 0 -560 0 0 80 0 80 560 0 560 0 0 -80z"
            />
            <path
              d="M3437 2783 c-5 -197 -23 -280 -92 -433 -42 -92 -65 -186 -65 -262 l0 -57 39 14 c74 26 185 37 264 26 114 -16 200 -53 317 -137 161 -115 195 -118 327 -32 104 68 150 88 226 95 89 8 158 -15 300 -99 64 -39 120 -68 123 -66 10 11 -24 76 -69 131 -81 99 -82 106 -82 482 0 322 1 331 23 379 12 27 38 69 58 93 l35 43 -699 0 -699 0 -6 -177z m680 4 c27 -15 216 -265 249 -330 76 -149 16 -332 -136 -416 -61 -33 -71 -36 -150 -35 -69 0 -94 5 -135 24 -104 50 -173 152 -183 266 -8 101 14 150 144 325 133 179 156 197 211 166z"
            />
            <path
              d="M4002 2483 c-39 -54 -74 -113 -78 -130 -11 -55 5 -104 45 -144 112 -112 296 -12 267 144 -6 30 -135 218 -155 225 -4 1 -39 -42 -79 -95z"
            />
            <path
              d="M1870 2549 c0 -6 22 -63 49 -127 108 -255 108 -428 1 -682 -80 -191 -80 -187 -80 -860 l0 -591 25 -24 c46 -47 87 -31 146 58 60 89 78 107 134 133 64 31 126 31 190 0 56 -26 74 -44 134 -134 72 -107 110 -107 182 0 60 90 78 108 134 134 64 31 126 31 190 0 56 -26 74 -44 134 -133 59 -89 100 -105 146 -58 l25 24 0 591 c0 673 0 669 -80 860 -107 254 -107 427 1 682 27 64 49 121 49 127 0 8 -196 11 -690 11 -494 0 -690 -3 -690 -11z"
            />
            <path
              d="M240 1600 l0 -880 719 0 720 0 3 417 4 418 28 90 c15 50 43 124 61 166 50 110 68 197 62 299 -4 85 -18 133 -83 297 l-29 73 -742 0 -743 0 0 -880z m1194 548 c55 -16 138 -99 154 -154 17 -58 17 -730 0 -788 -16 -55 -99 -138 -154 -154 -58 -17 -730 -17 -788 0 -55 16 -138 99 -154 154 -17 58 -17 730 0 788 15 51 99 137 148 153 51 16 740 17 794 1z"
            />
            <path
              d="M665 1975 l-25 -24 0 -351 0 -351 25 -24 24 -25 351 0 351 0 24 25 25 24 0 351 0 351 -25 24 -24 25 -351 0 -351 0 -24 -25z"
            />
            <path
              d="M3450 1913 c-41 -7 -119 -34 -125 -43 -3 -5 5 -31 18 -57 28 -55 71 -188 82 -250 l7 -43 724 0 724 0 0 58 0 57 -167 100 c-162 97 -168 100 -228 100 -53 0 -69 -5 -116 -34 -135 -86 -165 -101 -217 -112 -111 -23 -194 4 -331 105 -105 78 -132 92 -213 111 -61 14 -107 17 -158 8z"
            />
            <path
              d="M3440 823 c0 -296 -3 -548 -6 -560 l-6 -23 622 0 c460 0 633 3 664 12 55 16 138 99 154 154 9 30 12 169 12 498 l0 456 -720 0 -720 0 0 -537z"
            />
            <path
              d="M240 504 c0 -31 5 -75 12 -98 16 -55 99 -138 154 -154 49 -14 1218 -18 1256 -3 23 9 23 10 20 160 l-3 151 -720 0 -719 0 0 -56z"
            />
          </g>
        </svg>
      </span>
      <span class="text-xl">

        Rafraîchissez chaque moment ! Ajoutez vos bouteilles d’eau maintenant et restez hydraté où que vous soyez.
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCasierStore } from '@/stores/casierStore'
import { useWaterStore } from '@/stores/waterStore'

const { selectedProducts } = useCasierStore()
const waterStore = useWaterStore()
</script>
