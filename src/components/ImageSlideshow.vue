<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <!-- Display current image -->
    <transition name="fade">
      <img
        :key="currentIndex"
        :src="images[currentIndex]"
        alt="Slideshow Image"
        class="w-full h-full object-cover absolute top-0 left-0"
      />
    </transition>
    <div class="absolute bg-black opacity-50 top-0 left-0 w-full h-full" />
    <div
      class="font-din hero-content absolute top-8 left-0 z-[9] w-full h-full flex flex-col justify-center items-center text-center text-white"
    >
      <div id="logo" class="w-1/2 flex justify-center mb-8">
        <img
          :src="stevensCustomLogo"
          class="rounded-full h-48 w-48"
          alt="Stevens Custom Crushing Company Logo"
        />
      </div>
      <div id="tagline" class="w-1/2 flex flex-col justify-center items-center">
        <h1 class="text-center text-2xl md:text-4xl font-bold overflow-clip">
          Stevens Custom Crushing and Gravel
        </h1>
        <p class="text-center mt-4 text-lg md:text-xl">
          {{ subHeading }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onDeactivated, ref, reactive } from "vue";
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.png";
import Img5 from "/src/assets/images/img_5.webp";
import Img6 from "/src/assets/images/img_6.webp";
import Img7 from "/src/assets/images/img_7.webp";
import Img8 from "/src/assets/images/img_8.webp";

defineProps({
  subHeading: {
    type: String,
    default: "",
  },
});

const interval = ref(5000);
const currentIndex = ref(0);
const images = reactive([Img5, Img6, Img7, Img8]);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

onMounted(() => {
  interval.value = setInterval(() => {
    nextImage();
  }, 5000);
  // perform any necessary setup logic here
});
// Automatically transition to the next slide every 5 seconds

onDeactivated(() => {
  // Clear the interval when the component is destroyed to avoid memory leaks
  clearInterval(interval);
});
</script>

<style scoped></style>
