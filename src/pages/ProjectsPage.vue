<template>
  <q-page class="flex justify-center">
    <div v-if="isLoading" class="q-pa-md q-mt-xl">
      <q-spinner color="primary" size="40px" class="q-mb-md" />
      <div>Loading Projects...</div>
    </div>

    <SectionContainer v-if="!isLoading" title="Projects">
      <CarouselComponent title="projects" :items="carouselItems" />
    </SectionContainer>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import CarouselComponent from 'src/components/CarouselComponent.vue';
import SectionContainer from 'src/components/SectionContainer.vue';
import type CarouselItem from 'src/types/CarouselItem';

// Variáveis de estado
const carouselItems = ref<CarouselItem[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  const url = process.env.PROJECTS_URL;
  if (!url) {
    throw new Error('PROJECTS_URL is not defined in the environment.');
  }

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      carouselItems.value = Array.isArray(data) ? data : [];
    } else {
      console.error('Failed to load JSON file');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>
