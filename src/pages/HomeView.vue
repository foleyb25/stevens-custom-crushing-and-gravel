<template>
    <HeroContentComponent />
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div class="">
    <div id="about-section" class="w-full px-8 mb-12">
      <h1 class="text-6xl font-bold mb-8">About</h1>
      <p>Our goal is to provide comprehensive solutions that are customized to fit our customers’ needs. Focused on delivering <i class="font-bold">exceptional results</i> while making coordination effortless to meet your project demands.  </p>
    </div>
    </div>
</template>

<script setup>
import {onMounted} from "vue"
import HeroContentComponent from "/src/components/HeroContentComponent.vue";


onMounted(() => {
  window.scrollTo(0,0);
})
</script>
