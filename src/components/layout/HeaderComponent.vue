<template>
  <header
    :class="[
      { 'bg-white text-black': isScrolled },
      { 'bg-transparent text-black': !isScrolled },
      'fixed w-full top-0 left-0 z-[11] transition duration-500',
    ]"
  >
    <div class="bg-yellow-500 z-[48] w-full text-center">
      Under maintenance...
    </div>
    <button
      class="absolute top-16 right-8 z-[1] text-2xl md:hidden"
      @click="$emit('toggleDrawer')"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <div class="flex h-32 w-full items-center bg-transparent py-2 px-8">
      <div class="w-1/4 h-full flex flex-row items-center justify-start">
        <router-link to="/" class="h-full aspect-square ml-4">
          <div class="flex items-center justify-center h-full w-full">
            <img :src="stevensCustomLogo" alt="Stevens Custom Crushing Logo" />
          </div>
        </router-link>
      </div>

      <nav class="w-3/4 hidden md:flex flex-row items-center justify-end">
        <ul
          class="flex text-xs md:text-base lg:text-lg space-x-16 lg:space-x-24 antialiased"
        >
          <li>
            <router-link
              to="/"
              :class="[
                { 'hover:text-gray-500': isScrolled },
                { 'hover:text-gray-300': !isScrolled },
                'hover:transition-colors',
              ]"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/products"
              :class="[
                { 'hover:text-gray-500': isScrolled },
                { 'hover:text-gray-300': !isScrolled },
                'hover:transition-colors',
              ]"
            >
              Products
            </router-link>
          </li>
          <li>
            <router-link
              to="/services"
              :class="[
                { 'hover:text-gray-500': isScrolled },
                { 'hover:text-gray-300': !isScrolled },
                'hover:transition-colors',
              ]"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link
              to="/location"
              :class="[
                { 'hover:text-gray-500': isScrolled },
                { 'hover:text-gray-300': !isScrolled },
                'hover:transition-colors',
              ]"
            >
              Location
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              :class="[
                { 'hover:text-gray-500': isScrolled },
                { 'hover:text-gray-300': !isScrolled },
                'hover:transition-colors',
              ]"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import stevensCustomLogo from "/src/assets/images/stevensCustomLogo.png";

defineEmits(["toggleDrawer"]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
