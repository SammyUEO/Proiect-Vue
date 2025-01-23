<template>
  <div>
    <Navbar />

    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">Acoustic Guitars</h1>

      <!-- Acoustic Guitar Products -->
      <div class="grid grid-cols-3 gap-4">
        <InstrumentCard
          v-for="(acoustic, index) in acousticGuitars"
          :key="index"
          :name="acoustic.name"
          :description="acoustic.description"
          :price="acoustic.price"
          :image="acoustic.image"
          @add-to-cart="addToCart(acoustic)"
        />
      </div>

      <!-- Cart Component -->
      <Cart v-if="cartVisible" :cart="cart" @remove-from-cart="removeFromCart" @close-cart="toggleCart" />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import InstrumentCard from '../components/InstrumentCard.vue';
import Footer from '../components/Footer.vue';
import Cart from '../components/Cart.vue';

export default {
  components: {
    Navbar,
    InstrumentCard,
    Footer,
    Cart
  },
  data() {
    return {
      acousticGuitars: [
        { name: 'Martin D-28', description: 'Classic acoustic with rich sound.', price: 1800, image: '/images/acoustic/acoustic1.png' },
        { name: 'Taylor 314ce', description: 'Smooth sound and modern style.', price: 1500, image: '/images/acoustic/acoustic2.png' },
        { name: 'Gibson J-45', description: 'Legendary guitar with amazing tone.', price: 2200, image: '/images/acoustic/acoustic3.png' },
        { name: 'Yamaha FG800', description: 'Affordable, reliable, and rich sound.', price: 300, image: '/images/acoustic/acoustic4.png' },
        { name: 'Fender CD-60S', description: 'Excellent choice for beginners.', price: 250, image: '/images/acoustic/acoustic5.png' },
        { name: 'Takamine GD30CE', description: 'Beautiful sound with a built-in tuner.', price: 800, image: '/images/acoustic/acoustic6.png' },
        { name: 'Epiphone DR-100', description: 'Great quality for a budget price.', price: 150, image: '/images/acoustic/acoustic7.png' },
        { name: 'Ibanez AW54CE', description: 'Warm, full-bodied sound with stunning finish.', price: 650, image: '/images/acoustic/acoustic8.png' },
        { name: 'Breedlove Discovery Concert', description: 'Bright tone and great resonance.', price: 500, image: '/images/acoustic/acoustic9.png' },
      ],
      cart: [],
      cartVisible: false,
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    }
  }
};
</script>

<style scoped>
/* Adaugă stiluri personalizate aici dacă e necesar */
</style>
