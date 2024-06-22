<template>
  <div
    class="relative overflow-hidden h-screen w-full flex-grow flex items-center justify-center"
  >
    <div
      ref="parallaxElement"
      class="parallax absolute top-0 left-0 h-full w-full"
      :style="
        imageSrc
          ? `background-image: url(${imageSrc});`
          : 'background-color: black;'
      "
    ></div>
    <!-- opacity layer -->

    <div
      class="absolute top-0 bottom-0 h-full w-full bg-black opacity-50"
    ></div>

    <!-- content layer -->
    <slot class="relative"></slot>
  </div>
</template>

<script setup>
import { toRefs, ref, onMounted, onUnmounted, watchEffect } from "vue";
// Props
const props = defineProps({
  imageSrc: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

// convert props to reactive references
const { imageSrc } = toRefs(props);

const parallaxElement = ref(null);

const handleScroll = () => {
  if (!parallaxElement.value) return;
  const offset = window.pageYOffset;
  // Calculate the offset for this specific element based on its position on the page
  const elementOffset =
    parallaxElement.value.getBoundingClientRect().top + offset;
  const parallaxOffset = (offset - elementOffset) * 0.5; // Adjust parallax speed here
  parallaxElement.value.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watchEffect(() => {
  handleScroll(); // Ensure the parallax effect is applied upon initial render
});
</script>

<style scoped>
.parallax {
  transform: translate3d(0, 0, 0); /* Enable hardware acceleration */
}
</style>
