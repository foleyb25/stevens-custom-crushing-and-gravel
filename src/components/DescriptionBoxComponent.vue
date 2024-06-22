<template>
  <div class="flex items-center justify-center">
    <router-link
      :to="link"
      class="relative bg-white w-[90%] h-[90%] p-4 flex flex-row"
    >
      <div class="w-1/2">
        <h2 class="text-2xl">{{ header }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="w-1/2">
        <img :src="imgSource" :alt="header + ' description image'" />
      </div>
      <button
        class="absolute -bottom-4 right-8 border p-2 px-4 border-black rounded bg-gray-500 text-white"
      >
        Visit
      </button>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  header: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  imgSource: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
