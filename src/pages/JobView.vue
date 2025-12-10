<template>
    <div class="p-6 min-h-screen" v-if="job">
      <h1 class="text-3xl font-bold mb-4">{{ job.title }}</h1>
  
      <div class="mb-4 text-gray-700">
        <strong>Company:</strong> {{ job.company }}
      </div>
  
      <div class="mb-4 text-gray-700">
        <strong>Location:</strong> {{ job.location }}
      </div>
  
      <div class="mb-4 text-gray-700 whitespace-pre-line">
        <strong>Description:</strong>  
        <p>{{ job.description }}</p>
      </div>
  
      <div class="mb-6">
        <strong>Requirements:</strong>
        <ul class="list-disc ml-6">
          <li v-for="(r, index) in job.requirements" :key="index">
            {{ r }}
          </li>
        </ul>
      </div>
  
      <div class="mt-8">
        <strong>Send Attention To:</strong>  
        <p>{{ job.attention }}</p>
      </div>
  
      <div class="mt-4 text-sm text-gray-500">
        Posted: {{ job.postedDate }}
      </div>
    </div>
  
    <!-- If no job matches the ID -->
    <div v-else class="p-6">
      <p class="text-red-600 font-semibold">Job not found.</p>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import JobData from '/src/assets/data/jobs.json';
  
  const route = useRoute();
  
  // Convert route param to number
  const jobId = computed(() => Number(route.params.id));
  
  // Job lookup: job.id === param (you said IDs match JSON index)
  const job = computed(() => JobData.find(j => j.id === jobId.value));

  onMounted(() => {
    window.scrollTo(0,0);
 })
  </script>
  
  <style scoped>
  </style>
  