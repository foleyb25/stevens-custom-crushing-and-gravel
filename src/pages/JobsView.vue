<template>
    <div class="my-24 p-8">
    <div id="jobs-list" class="my-8 flex flex-col md:flex-row">
      <div class="w-[7%] flex justify-center items-center">
        <h3 id="desktop-header" class="hidden md:block text-3xl font-bold -rotate-90 ">Jobs</h3>
      </div>
      <div>
      </div>
      <h3 id="mobile-header" class="block md:hidden text-3xl mb-4 font-bold">Services</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div v-for="job in jobData">
          <router-link :to="'jobs/'+job.id">
            <JobCardComponent :name=job.title :date="job.postedDate" :imageSource="JobImage" :isLink="true"/>
          </router-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import jobData from '/src/assets/data/jobs.json';
import JobCardComponent from "/src/components/JobCardComponent.vue"
import JobImage from "/src/assets/images/compressed_pit_manager.png"
import {onMounted} from "vue"

onMounted(() => {
  window.scrollTo(0,0);
})
</script>

<style lang="scss" scoped>

</style>