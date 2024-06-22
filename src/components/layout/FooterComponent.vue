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
      <h3></h3>
      <address>1234 Highway Drive</address>
      <div>(###)-###-####</div>
    </div>
  </div>
</template>

<script setup>
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.png";
</script>

<style lang="scss" scoped></style>
