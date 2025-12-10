<template>
    <div class="border border-black shadow-xl aspect-[13/16] relative">
      <img :src="imageSource" :alt="name + ' image'" class="w-full">
      <div class="p-4 ">
        <div>
          <h3 class="text-xl md:text-lg lg:text-base font-bold">{{ name }}</h3>
          <div class="text-lg md:text-lg lg:text-base font-bold text-gray-600"><i>{{ date }}</i></div>
        </div>
        <div class="absolute bottom-2 right-2">
          <div v-if=" isLink " class="flex flex-row justify-between items-center border-black p-2">
            <div class="mr-4">
              Learn More
            </div>
            <div>
              <font-awesome-icon :icon=" ['fas', 'circle-chevron-right']" class="text-2xl text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    imageSource: {
      type: String,
      default: "",
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    isBulletStyle: {
      type: Boolean,
      default: true,
    }
  });
  </script>
  
  <style lang="scss" scoped></style>