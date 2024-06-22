<template>
  <hr class="border border-gray-500" />
  <div class="w-full bg-white min-h-[275px] p-4">
    <div id="img-container" class="h-48 aspect-square">
      <router-link to="/"
        ><img
          :src="stevensCustomLogo"
          class="rounded-full h-[80%]"
          alt="Stevens Custom Crushing Logo"
      /></router-link>
    </div>
    <div id="contact-info">
      <h3 class="text-4xl font-bold">Stevens Custom Crushing & Gravel</h3>
      <address>Cascade MT</address>
      <a class="text-blue-500 underline" href="tel:406-920-0740">406-920-0740</a><br>
      <a class="text-blue-500 underline" href="mailto:Zack@StevenCrushing.com">Zack@StevenCrushing.com</a>
    </div>
  </div>
</template>

<script setup>
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.png";
</script>

<style lang="scss" scoped></style>
