<template>
  <div>
    <!-- Banner Section -->
    <Banner />

    <!-- Sign Up Form -->
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue';
import Banner from '../components/Banner.vue';

export default {
  components: {
    SignUpForm,
    Banner,  // Adăugăm componenta Banner aici
  },
};
</script>

<style scoped>
/* Optional custom styles for the Sign Up page */
</style>
