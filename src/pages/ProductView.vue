<template>
  <div class="p-8">
    <div class="flex flex-col-reverse lg:flex lg:flex-row">
      <div class="w-full lg:w-1/2 p-2">
        <h1 class="text-4xl font-bold mb-8">Gravel, Rock, and Sand</h1>
        <p class="text-base lg:text-lg xl:text-xl">The Stevens gravel pit, located outside of Cascade, offers
          high-quality materials ranging from road base to
          landscape rock. Whether you prefer to pick up your materials or have them delivered directly to your site, we
          offer flexible logistics to suit your needs. Additionally, we accommodate special requests for tailored
          products
          upon inquiry. 
          <br>
          <br>
          Please contact us if you have any questions and/or would be interested in additional product details. 
        </p>
      </div>

      <div class="w-full lg:w-1/2 p-2">
        <img :src="ProductsPageImage" alt="Products Page Image">
      </div>
    </div>
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div id="products-list" class="w-full my-8">
      <h2 class="text-3xl font-bold mb-8">Products</h2>
      <div class="flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          <div v-for="product in products">
            <CardComponent :name="product.productName" :details="product.productDetails"
              :image-source="product.imageSource" />
          </div>
        </div>
      </div>
    </div>
    <hr class="w-[90%] border border-gray-200 m-auto my-12" />
    <div id="product-summary">
      <table class="border border-black w-full md:w-1/2 lg:w-1/3">
        <tr class="border border-black">
          <th class="bg-[#203D61] text-white">Product Summary</th>
        </tr>
        <div v-for="product in ProductSummary" class="border border-black">
          <tr>
            <td>{{ product }}</td>
          </tr>
        </div>
      </table>
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
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import ProductsPageImage from "/src/assets/images/compressed_products_main.jpg"
import ServicesPageSmallImage from "/src/assets/images/compressed_services_small.jpg"
import CardComponent from "/src/components/CardComponent.vue"
import SandImage from "/src/assets/images/compressed_Sand.jpg"
import AsphaltImage from "/src/assets/images/compressed_Asphalt.jpg"
import DrainRockImage from "/src/assets/images/compressed_Drain_Rock.jpg"
import FracturedRockImage from "/src/assets/images/compressed_Fractured_Rock.jpg"
import JawRunImage from "/src/assets/images/compressed_Jaw_Run.jpg"
import LandscapeRockImage from "/src/assets/images/compressed_Landscape_Rock.jpg"
import OversizedRockImage from "/src/assets/images/compressed_Oversized_Rock.jpg"
import RoadBaseImage from "/src/assets/images/compressed_Road_Base.jpg"
import TopsoilImage from "/src/assets/images/compressed_Topsoil.jpg"

const products = reactive([
  { productName: "Sand", productDetails: ["3/4\" minus Reject Sand"], imageSource: SandImage },
  { productName: "Asphalt", productDetails: ["Millings"], imageSource: AsphaltImage },
  { productName: "Drain Rock", productDetails: ["1-1/2\"", "3/4\" Washed"], imageSource: DrainRockImage },
  { productName: "Fractured Rock", productDetails: ["1-1/2\"", "3/4\""], imageSource: FracturedRockImage },
  { productName: "Pit Run", productDetails: ["3\" minus Jaw Run"], imageSource: JawRunImage },
  { productName: "Landscape Rock", productDetails: ["1-1/2\" Quarry", "3\" Quarry"], imageSource: LandscapeRockImage },
  { productName: "Oversized Rock", productDetails: ["4-12\" minus"], imageSource: OversizedRockImage },
  { productName: "Road Base", productDetails: ["1-1/2\" minus", "3/4\" minus"], imageSource: RoadBaseImage },
  { productName: "Top Soil", productDetails: ["Screened", "Fill Dirt"], imageSource: TopsoilImage }
])

const ProductSummary = reactive([
  `Pit Run`,
  `3" Minus Jaw Run`,
  `1-1/2" Road Base`,
  `3/4" Road Base`,
  `1-1/2" Fractured Rock`,
  `3/4" Fractured Rock`,
  `1-1/2" Drain Rock`,
  `3/4" Washed Rock`,
  `4-12" Oversized Rock`,
  `3" Quarry Landscape Rock`,
  `1-1/2" Quarry Landscape Rock`,
  `Top Soil - Screened`,
  `Top Soil`,
  `Fill Dirt`,
  `Sand`,
  `3/4" Minus Reject Sand`,
  `Asphalt Millings`
])

const services = reactive([
  { serviceName: "Mobile Custom Crushing, Hauling & Excavation", productDetails: [], imageSource: ServicesPageSmallImage, serviceLink: "/services", isLink: true },
])

onMounted(() => {
  window.scrollTo(0, 0);
})
</script>

<style lang="scss" scoped></style>
