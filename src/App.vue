<template>
  <div class="min-h-screen font-sans">
    <HeaderComponent @toggle-drawer="toggleSideNavDrawer" />
    <Transition name="fade">
      <div
        v-if="toggleDrawer"
        class="z-[49] fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
        @click="toggleSideNavDrawer"
      />
    </Transition>
    <Transition name="slide">
      <SideNavDrawerComponent
        v-if="toggleDrawer"
        class="md:hidden z-50"
        @toggle-drawer="toggleSideNavDrawer"
      />
    </Transition>
    
    <router-view class="mt-48 p-8"/>
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderComponent from "./components/layout/HeaderComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
import SideNavDrawerComponent from "./components/layout/SideNavDrawerComponent.vue";

var toggleDrawer = ref(false);

const toggleSideNavDrawer = () => {
  toggleDrawer.value = !toggleDrawer.value;
};
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}
.slide-enter-active {
  transition: transform 0.3s ease;
}
.slide-leave-active {
  transition: transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
  transform: translateY(0);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  backdrop-filter: blur(5px);
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    backdrop-filter 0.3s ease;
}
</style>
