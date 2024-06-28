<template>
    <HeroContentComponent />
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div class="p-8">
    <div id="about-section" class="w-full px-8 mb-12">
      <h1 class="text-6xl font-bold mb-8">About</h1>
      <p>Our goal is to provide comprehensive solutions that are customized to fit our customers’ needs. Focused on delivering <i class="font-bold">exceptional results</i> while making coordination effortless to meet your project demands.  </p>
    </div>
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div id="services-list" class="my-8 flex flex-col md:flex-row">
      <div class="w-[7%] flex justify-center items-center">
        <h3 id="desktop-header" class="hidden md:block text-3xl font-bold -rotate-90 ">Services</h3>
      </div>
      <div>
      </div>
      <h3 id="mobile-header" class="block md:hidden text-3xl mb-4 font-bold">Services</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div v-for="service in services">
          <router-link :to="service.serviceLink">
            <CardComponent :name=service.serviceName :details="[]" :imageSource="service.imageSource"
              :is-link="service.isLink" />
          </router-link>
        </div>
      </div>
    </div>
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div id="products-list" class="my-8 flex flex-col md:flex-row">
      <div class="w-[7%] flex justify-center items-center">
        <h3 id="desktop-header" class="hidden md:block text-3xl font-bold -rotate-90 ">Products</h3>
      </div>
      <div>
      </div>
      <h3 id="mobile-header" class="block md:hidden text-3xl mb-4 font-bold">Products</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div v-for="product in products">
          <router-link :to="product.link">
            <CardComponent :name=product.name :details="[]" :imageSource="product.imageSource"
              :is-link="product.isLink" />
          </router-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import {onMounted, reactive} from "vue"
import HeroContentComponent from "/src/components/HeroContentComponent.vue";
import CardComponent from "/src/components/CardComponent.vue";
import ServicesPageSmallImage from "/src/assets/images/compressed_services_small.jpg"
import ProductsPageImage from "/src/assets/images/compressed_products_main.jpg"

const services = reactive([
  { serviceName: "Mobile Custom Crushing, Hauling & Excavation", productDetails: [], imageSource: ServicesPageSmallImage, serviceLink: "/services", isLink: true },
])

const products = reactive([
  { name: "Gravel, Rock, and Sand", productDetails: [], imageSource: ProductsPageImage, link: "/products", isLink: true },
])

onMounted(() => {
  window.scrollTo(0,0);
})
</script>
