<template>
  <q-page class="flex flex-center">
    <div class="about-container">
      <div class="about-title">
        <h2 class="text-h4 text-weight-bold">About Me</h2>
        <div class="line"></div>
      </div>

      <TextParagraph v-for="(text, index) in paragraphs" :key="index" :content="text" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
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

<style scoped>
.about-container {
  width: 90%;
  padding: 24px;
  text-align: center;
}

.about-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-title h2 {
  margin-right: 16px;
  color: var(--q-primary);
}

.line {
  flex-grow: 1;
  height: 2px;
  width: 150px;
  background-color: var(--q-primary);
}

@media (max-width: 600px) {

  .about-title h2 {
    font-size: 20px;
  }
}
</style>
