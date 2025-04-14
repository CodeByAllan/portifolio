<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      navigation
      arrows
      class="text-white rounded-borders q-mt-lg"
      style="background-color: var(--bg-dark)"
    >
      <q-carousel-slide
        v-for="(item, index) in items"
        :key="index"
        :name="item.name || `slide-${index}`"
        class="flex flex-center column"
        style="background-color: var(--q-primary)"
      >
        <div class="text-h5 q-ma-sm">{{ item.name }}</div>

        <p class="text-body1 q-ma-md flex justify-center">{{ item.subtitle }}</p>

        <div class="row q-gutter-sm q-mt-sm justify-center">
          <q-btn
            flat
            icon="code"
            :href="item.github"
            target="_blank"
            rel="noopener"
            label="GitHub"
            aria-label="View code on GitHub"
          />
          <q-btn
            v-if="item.demo"
            flat
            icon="public"
            :href="item.demo"
            target="_blank"
            rel="noopener"
            label="Demo"
            aria-label="View online demo"
          />
        </div>

        <q-btn
          outline
          color="white"
          label="more"
          icon="expand_more"
          class="q-mt-md"
          style="max-width: 350px"
          @click="openModal(item)"
          aria-label="See more information"
        />
      </q-carousel-slide>
    </q-carousel>

    <q-dialog v-model="dialog">
      <q-card style="min-width: 350px; max-width: 90%">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ selectedItem?.name }}</div>
        </q-card-section>

        <q-card-section style="background-color: var(--bg-dark)">
          <p v-if="selectedItem?.description">
            <strong>Description:</strong> {{ selectedItem.description }}
          </p>

          <div v-if="selectedItem?.stack">
            <span><strong>Stack:</strong></span>
            <q-chip
              v-for="(tech, idx) in selectedItem.stack"
              :key="idx"
              outline
              color="primary"
              class="q-mx-xs q-mt-xs"
              text-color="white"
              :label="tech"
            />
          </div>

          <p v-if="selectedItem?.license"><strong>License:</strong> {{ selectedItem.license }}</p>
          <p v-if="selectedItem?.author"><strong>Author:</strong> {{ selectedItem.author }}</p>
        </q-card-section>

        <q-card-actions
          align="right"
          style="background-color: var(--bg-dark); color: var(--q-primary)"
        >
          <q-btn flat label="close" v-close-popup aria-label="close modal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type CarouselItem from 'src/types/CarouselItem';

const props = defineProps<{
  title: string;
  items: CarouselItem[];
}>();

const slide = ref(props.items.length > 0 ? (props.items[0]?.name ?? 'slide-0') : '');
const dialog = ref(false);
const selectedItem = ref<CarouselItem | null>(null);

function openModal(item: CarouselItem) {
  selectedItem.value = item;
  dialog.value = true;
}
</script>
