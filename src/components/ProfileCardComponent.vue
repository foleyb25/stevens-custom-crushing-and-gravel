<template>
  <div class="relative w-[80%] aspect-[13/16] flex items-center justify-center">
    <img
      class="absolute top-0 w-[35%] aspect-square rounded-full"
      :src="imageSrc"
      alt="Profile Picture"
    />

    <div
      class="w-full h-[75%] flex items-center justify-center bg-gray-400 rounded-lg p-6 shadow-md"
    >
      <div class="text-center aspect-square space-y-8">
        <h2 class="text-2xl text-white font-semibold">
          {{ firstName }} {{ lastName }}
        </h2>
        <h3 class="text-gray-600 text-xl">{{ positionTitle }}</h3>
        <p class="text-gray-700 mt-2">{{ shortBio }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  positionTitle: {
    type: String,
    required: true,
  },
  shortBio: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>
