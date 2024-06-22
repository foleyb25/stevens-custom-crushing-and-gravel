<template>
  <div class="flex items-center justify-center">
    <button @click="previousImage">Previous</button>
    <img
      class="width-[500px] h-auto block"
      :src="images[currentIndex]"
      :alt="`Image ${currentIndex + 1}`"
    />
    <button @click="nextImage">Next</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Img5 from "/src/assets/images/img_5.webp";
import Img6 from "/src/assets/images/img_6.webp";
import Img7 from "/src/assets/images/img_7.webp";
import Img8 from "/src/assets/images/img_8.webp";

const images = ref([Img5, Img6, Img7, Img8]);
const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const previousImage = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = images.value.length - 1;
  } else {
    currentIndex.value--;
  }
};
</script>
