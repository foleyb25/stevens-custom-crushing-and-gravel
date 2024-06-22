<template>
  <div>
    <div id="hero-content" class="w-full">
      <div id="image-box" class="w-full max-h-[85vh] overflow-hidden relative">
        <div class="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
        <img :src="LocationsBackgroundImage" alt="Location page background image" class="w-full h-full object-cover" />
      
        <h1 class="absolute bottom-8 left-8 text-3xl sm:text-6xl md:text-8xl font-bold text-white">Location</h1>
      </div>

      
    </div>
    <div id="locations-content" class="p-8 flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d25923.68394899869!2d-111.70863013237076!3d47.29343405657612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDE3JzQ3LjciTiAxMTHCsDQxJzE3LjEiVw!5e0!3m2!1sen!2sus!4v1719073647171!5m2!1sen!2sus"
        class="w-full md:full lg:w-1/2 aspect-[4/3]" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import LocationsBackgroundImage from "/src/assets/images/compressed_location.jpg"

onMounted(() => {
  window.scrollTo(0, 0);
})
</script>

<style lang="scss" scoped></style>
