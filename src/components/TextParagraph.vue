<template>
  <p class="text-body1" v-html="content"></p>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.text-body1 {
  font-size: 28px;
  line-height: 35px;
}

@media (max-width: 600px) {
  .text-body1 {
    font-size: 16px;
    line-height: 30px;
  }
}
</style>
