<template>
  <div class="flex items-center justify-center text-black my-8">
    <router-link
      :to="link"
      class="relative bg-white w-[90%] h-[90%] p-4 flex flex-row"
    >
      <div class="w-full">
        <h2 class="text-4xl">Get In Touch</h2>
        <p class="text-2xl">
          Connect with Us Today! Whether you have questions, want to discuss a
          project, or simply say hello, we're here to listen, Reach out and
          let's start a conversation about how we can collaborate to meet your
          needs
        </p>
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
  link: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
