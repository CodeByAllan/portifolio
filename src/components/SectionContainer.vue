<template>
  <div class="section-container">
    <div class="section-title">
      <h2 class="text-h4 text-weight-bold">{{ title }}</h2>
      <div class="line"></div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.section-container {
  width: 90%;
  text-align: center;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.section-title h2 {
  margin-right: 16px;
  color: var(--q-primary);
}

.line {
  flex-grow: 1;
  height: 2px;
  width: 150px;
  background-color: var(--q-primary);
  transition: width 0.3s ease;
}
.section-container:hover .line {
  width: 180px;
}
@media (max-width: 600px) {
  .section-title h2 {
    font-size: 20px;
  }
}
</style>
