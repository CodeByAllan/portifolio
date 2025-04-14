<template>
  <q-page class="flex justify-center">
    <SectionContainer title="About Me"
      ><TextParagraph v-for="(text, index) in paragraphs" :key="index" :content="text"
    /></SectionContainer>
  </q-page>
</template>

<script lang="ts" setup>
import SectionContainer from 'src/components/SectionContainer.vue';
import TextParagraph from 'src/components/TextParagraph.vue';
import { ref, onMounted } from 'vue';

const paragraphs = ref<string[]>([]);

onMounted(async () => {
  const url = process.env.ABOUT_URL;
  if (!url) {
    throw new Error('ABOUT_URL is not defined in the environment.');
  }
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      paragraphs.value = data;
    } else {
      console.error('Failed to load JSON file');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>
