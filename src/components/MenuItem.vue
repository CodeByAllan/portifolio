<template>
  <q-item class="item" @click="event" clickable :to="link">
    <q-item-section> {{ title }} </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  link?: string;
  event?: () => void;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
});
</script>
<style>
.item {
  font-size: 24px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--q-primary);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

@media (max-width: 600px) {
  .item {
    font-size: 14px;
  }
}
</style>
