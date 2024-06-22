<template>
  <div class="flex items-center justify-center my-8 text-black">
    <div class="relative bg-white w-[90%] h-[90%] p-4 flex flex-row">
      <div id="project-content" class="w-full">
        <h2 class="text-2xl">{{ projectName }}</h2>
        <p>{{ shortDescription }}</p>
        <button
          class="border pt-2 px-2 border-black rounded bg-gray-500 text-white"
          @click.prevent="toggleDescription"
        >
          <span v-if="!isExpanded">►</span>
          <span v-else>▼</span>
        </button>

        <div id="long-description" class="mt-2 flex flex-row">
          <Transition name="slide-fade">
            <p v-if="isExpanded" class="text-center w-1/2">
              {{ longDescription }}
            </p>
          </Transition>
          <Transition name="slide-fade">
            <div v-if="isExpanded" class="text-center w-1/2">
              <img :src="projectImage" alt="Project Image" />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  projectName: {
    type: String,
    default: "",
  },
  shortDescription: {
    type: String,
    default: "",
  },
  longDescription: {
    type: String,
    default: "",
  },
  projectImage: {
    type: String,
    default: "",
  },
});

var isExpanded = ref(false);

const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style lang="scss" scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
