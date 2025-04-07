<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title class="q-toolbar-title q-ml-md">
          Allan<span>Pereira</span>
        </q-toolbar-title>
        <q-btn flat size="xl" @click="toggleDrawer" icon="menu" v-if="isMobile" color="primary" />
        <q-drawer dark elevated v-model="drawerOpen" side="right" overlay>
          <q-list>
            <MenuItem v-for="item in MenuItems" :key="item.link" :event="toggleDrawer" :link="item.link"
              :title="item.title" />
          </q-list>
        </q-drawer>
        <div class="row q-mr-md q-pa-md" v-if="!isMobile">
          <MenuItem v-for="item in MenuItems" :key="item.link" :link="item.link" :title="item.title" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import MenuItem from 'src/components/MenuItem.vue';
import { useQuasar } from 'quasar';

const MenuItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
];

const drawerOpen = ref(false);
const isMobile = ref(false);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}
const $q = useQuasar();

onMounted(() => {
  isMobile.value = $q.screen.lt.md;
});
watch(
  () => $q.screen.lt.md,
  (isMobileState) => {
    isMobile.value = isMobileState;
    if (!isMobileState) {
      drawerOpen.value = false;
    }
  },
);
</script>

<style scoped>
.q-header {
  background-color: var(--bg-dark);
}

.q-toolbar {
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
}

.q-toolbar-title {
  font-family: var(--font-secondary);
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
}

.q-toolbar-title span {
  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
}
</style>
