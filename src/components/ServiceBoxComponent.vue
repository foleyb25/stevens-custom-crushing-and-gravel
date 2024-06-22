<template>
  <div class="card-container aspect-square w-[80%] mt-8">
    <div
      class="card bg-white text-black"
      :class="{ flipped: isFlipped }"
      @click="flipCard"
    >
      <div class="face front">
        <h3>{{ serviceName }}</h3>
        <p>{{ shortDescription }}</p>
      </div>
      <div class="face back">
        <p>{{ longDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  serviceName: {
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
});

const isFlipped = ref(false);

const flipCard = () => {
  isFlipped.value = !isFlipped.value; // Toggle the state to flip the card
};
</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
  height: 22rem;
}

.card .face {
  position: absolute;
  width: 100%;
  min-height: 100%;
  backface-visibility: hidden;
  padding: 1.25rem;
}

.card .front {
  z-index: 2;
  transform: rotateY(0deg);
}
.card .back {
  transform: rotateY(180deg);
}
.card.flipped {
  transform: rotateY(180deg);
}
</style>
