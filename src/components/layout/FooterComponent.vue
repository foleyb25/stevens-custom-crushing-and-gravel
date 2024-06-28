<template>
  <hr class="border border-gray-500" />
  <div class="w-full bg-white min-h-[275px] p-4 flex flex-row">
    <div class="w-1/2">
    <div id="img-container" class="h-48 aspect-square">
      <router-link to="/"
        ><img
          :src="stevensCustomLogo"
          class="rounded-full h-[80%]"
          alt="Stevens Custom Crushing Logo"
      /></router-link>
    </div>
    <div id="contact-info">
      <h3 class="text-lg md:text-4xl font-bold">Stevens Custom Crushing & Gravel</h3>
      <address>Cascade MT</address>
      <a class="text-blue-500 underline" href="tel:406-920-0740">406-920-0740</a><br>
      <a class="text-blue-500 underline" href="mailto:Zack@StevenCrushing.com">Zack@stevensgravel.com</a>
    </div>
  </div>
  <div class="w-1/2 flex flex-col justify-center items-center mr-6 text-gray-600">
    <div class="space-y-2">
      <h4 class="text-xl font-bold">Navigation</h4>
      <ul class="space-y-1">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/location">Location</router-link></li>
        <li><router-link to="/contact">Request a Quote</router-link></li>
      </ul>
    </div>
    
  </div>
  </div>
</template>

<script setup>
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.png";
</script>

<style lang="scss" scoped></style>
