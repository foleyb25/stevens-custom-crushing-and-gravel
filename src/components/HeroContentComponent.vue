<template>
  <div class="bg-white w-full">
    <div
      id="image-splash-mobile"
      class="md:hidden h-[90vh] overflow-hidden relative"
    >
      <div
        class="absolute top-0 left-0 bg-black opacity-50 h-full w-full"
      ></div>
      <img
        :src="mobileBackgroundImage"
        alt="Mobile background image"
        class="h-full min-w-full object-cover object-top"
      />
    </div>
    <div
      id="video-splash-desktop"
      class="hidden md:block w-screen overflow-hidden relative"
    >
      <div style="padding: 56.25% 0 0 0; position: relative">
        <transition name="fade">
          <!-- Only show image if video isn't ready -->
          <img
            v-if="!videoReady.value"
            :src="placeHolderImage"
            alt="Loading Video"
            class="h-full min-w-full object-cover object-top absolute top-0 left-0"
            @load="imageLoaded"
          />
        </transition>
        <iframe
          title="Drone Footage of Stevens Custom Crushing and Gravel Pit"
          src="https://player.vimeo.com/video/965028422?background=1"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          class="absolute top-0 left-0 w-full h-full pointer-events-none"
          @load="videoLoaded"
        ></iframe>
      </div>
    </div>
    <div class="w-full md:w-[40%] lg:w-1/3">
      <router-link to="/contact">
        <div
          class="w-full bg-gray-700 p-8 text-white flex flex-row items-center justify-center text-base"
        >
          <div>
            <h3 class="text-4xl">Get a Quote</h3>
            <p>
              We have a large array of products, let us know what your needs
              are.
            </p>
          </div>
          <div class="ml-8">
            <font-awesome-icon
              :icon="['fas', 'circle-chevron-right']"
              class="text-2xl"
            />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import mobileBackgroundImage from "/src/assets/images/home_main_mobile.jpg";
import placeHolderImage from "/src/assets/images/placeHolderImage.jpg";

const videoReady = ref(false);

function imageLoaded() {
  console.log("Placeholder image loaded.");
}

function videoLoaded() {
  videoReady.value = true; // Hide image when video is ready
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
