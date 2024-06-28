<template>
  <div class="p-8">
    <div class="flex flex-col-reverse lg:flex lg:flex-row">
      <div class="w-full lg:w-1/2 p-2">
        <h1 class="text-4xl font-bold mb-8">Mobile Custom Crushing, Hauling & Excavation</h1>
        <p class="text-base lg:text-lg xl:text-xl">In addition to product sales, we offer Mobile Crushing Services
          tailored to meet your specific needs. Our comprehensive services span from material excavation to delivering
          the final usable product. Mobile crushing provides landowners with cost-effective solutions through reduced
          product and trucking costs by co-locating the gravel production where it’s needed (on your property). It’s an
          ideal choice for unlocking resources without requiring permits for projects under 10,000 yards per year.
          Excavation and hauling are additional services provided. Excavation services range from foundation work, water
          system installation, road grading, and dozer work. Hauling services include 20-yard end dump, 20-yard bully
          dump, 10-yard end dump, material transportation and low-boy equipment transportation.
        </p>
      </div>

      <div class="w-full lg:w-1/2 p-2 flex items-center justify-center">
        <img :src="ServicesPageImage" alt="Products Page Image">
      </div>
    </div>
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="image in galleryImages">
        <div class="h-full w-full">
          <img :src=image :alt="'Gallery' + image" class="h-full w-full object-cover">
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
import { onMounted, reactive } from "vue"
import ServicesPageImage from "/src/assets/images/compressed_service_img4.jpg"
import ProductsPageImage from "/src/assets/images/compressed_products_main.jpg"
import ServicesImg1 from "/src/assets/images/compressed_service_img1.jpg"
import ServicesImg2 from "/src/assets/images/compressed_service_img2.jpg"
import ServicesImg3 from "/src/assets/images/compressed_service_img3.jpg"
import ServicesImg4 from "/src/assets/images/compressed_services_main.jpg"
import CardComponent from "/src/components/CardComponent.vue"

const galleryImages = reactive([
  ServicesImg1,
  ServicesImg2,
  ServicesImg3,
  ServicesImg4
])

const products = reactive([
  { name: "Gravel, Rock, and Sand", productDetails: [], imageSource: ProductsPageImage, link: "/products", isLink: true },
])

onMounted(() => {
  window.scrollTo(0, 0);
})
</script>

<style lang="scss" scoped></style>
