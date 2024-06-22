<!-- eslint-disable prettier/prettier -->
<template>
  <!-- drawer component -->
  <div
    class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white text-black w-80 max-w-full dark:bg-gray-800 font-din"
  >
    <div class="flex items-center justify-center">
      <h5 class="text-xs font-semibold text-black uppercase">
        Stevens Custom Crushing and Gravel
      </h5>
      <button
        type="button"
        class="hover:bg-gray-200 hover:text-gray-900 bg-transparent rounded-lg border border-black text-sm p-1.5 inline-flex items-center ml-1"
        @click="$emit('toggleDrawer')"
      >
        X
        <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2">
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
            <img :src="homeIcon" class="w-8 h-8" alt="" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/products"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
            <img :src="projectsIcon" class="w-8 h-8" alt="" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap"
              >Products</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/services"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
            <img :src="servicesIcon" class="w-8 h-8" alt="" />
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap"
              sidebar-toggle-item
              >Services</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/location"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
            <img
              :src="projectsIcon"
              class="w-8 h-8 filter grayscale brightness-100"
              alt=""
            />
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap"
              sidebar-toggle-item
              >Location</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
            <img
              :src="projectsIcon"
              class="w-8 h-8 filter grayscale brightness-100"
              alt=""
            />
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap"
              sidebar-toggle-item
              >Contact</span
            >
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import homeIcon from "/src/assets/images/home-icon.svg";
import servicesIcon from "/src/assets/images/services-icon.svg";
import projectsIcon from "/src/assets/images/projects-icon.svg";

defineEmits(["toggleDrawer"]);
</script>
