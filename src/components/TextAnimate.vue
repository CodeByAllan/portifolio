<template>
  <h1 class="text-xl" ref="animatedText">
    <span class="animated-letter" v-for="(letter, index) in letters" :key="index">{{
      letter
      }}</span>
  </h1>
</template>

<script setup lang="ts">
import { onMounted, defineProps, computed, ref } from 'vue';
import { animate } from 'animejs';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const animatedText = ref<HTMLElement | null>(null);

const letters = computed(() => {
  return props.text.split('');
});

const startAnimation = () => {
  if (animatedText.value) {
    animate('.animated-letter', {
      y: [
        { to: '-2.75rem', ease: 'easeOutElastic(1, .5)', duration: 400 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 0 },
      ],
      delay: (_, i) => i * 50,
      ease: 'easeInOutSine',
      loop: true,
    });
  }
};

onMounted(() => {
  startAnimation();
});
</script>

<style scoped>
.text-xl {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin: 25px 10px 0px;
  font-size: 100px;
  font-weight: 900;
  line-height: 100px;
  color: var(--q-primary);
  letter-spacing: 0.05em;
}

@media (max-width: 600px) {
  .text-xl {
    font-size: 48px;
    line-height: 50px;
  }
}
</style>
