<!-- eslint-disable prettier/prettier -->
<template>
  <!-- drawer component -->
  <button
        type="button"
        class="fixed top-8 right-8 z-50 text-white hover:text-gray-300 text-4xl"
        @click="$emit('toggleDrawer')"
      >
      <font-awesome-icon :icon="['fas', 'circle-xmark']" />
      </button>
  <div
    class="fixed top-0 left-0 h-screen p-4 md:hidden z-50 overflow-y-auto bg-white text-black w-80 max-w-ful"
  >
    <div class="flex items-center justify-center">
      <h5 class="text-xs font-semibold text-black uppercase">
        Stevens Custom Crushing and Gravel
      </h5>
      
    </div>
    <div class="mt-8 overflow-y-auto">
      <ul class="space-y-4">
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
          <font-awesome-icon :icon="['fas', 'house']" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/products"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
          <font-awesome-icon :icon="['fas', 'hill-rockslide']" />
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
          <font-awesome-icon :icon="['fas', 'truck-ramp-box']" />
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
          <font-awesome-icon :icon="['fas', 'location-dot']" />
            <span
              class="flex-1 ml-5 text-left whitespace-nowrap"
              sidebar-toggle-item
              >Location</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/jobs"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
          <font-awesome-icon :icon="['fas', 'file-lines']" />
            <span
              class="flex-1 ml-5 text-left whitespace-nowrap"
              sidebar-toggle-item
              >Job Openings</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="flex items-center p-2 w-full text-base hover:bg-gray-200 hover:text-gray-900 rounded-lg transition duration-75 group"
            @click="$emit('toggleDrawer')"
          >
          <!-- <font-awesome-icon :icon="['fas', 'envelope']" /> -->
            <span
              class="flex-1 ml-4 text-center py-2 whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 rounded  border-black border"
              sidebar-toggle-item
              >Request a Quote</span
            >
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineEmits(["toggleDrawer"]);
</script>
