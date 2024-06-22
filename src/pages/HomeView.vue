<template>
    <HeroContentComponent />
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div class="">
    <div id="about-section" class="w-full px-8">
      <h1 class="text-6xl font-bold">About</h1>
      <div class="h-[200px]">Add about content here</div>
    </div>
    </div>
</template>

<script setup>
import HeroContentComponent from "/src/components/HeroContentComponent.vue";
import {onMounted} from "vue"

onMounted(() => {
  window.scrollTo(0,0);
})
</script>
