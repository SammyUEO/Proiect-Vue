<template>
    <div
      class="relative w-full h-72 bg-cover bg-center"
      :style="{ backgroundImage: `url('/images/1.png')` }"
    >
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 px-4"
      >
        <h1 class="text-4xl font-bold mb-4">Sign Up</h1>
        <p class="text-lg max-w-2xl">
          Join our community and get access to the best musical instruments and more!
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
  };
  </script>
  
  <style scoped>
  .bg-cover {
    background-size: cover;
  }
  </style>
  