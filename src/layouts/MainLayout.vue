<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title class=" q-toolbar-title ">
          Allan<span>Pereira</span>
        </q-toolbar-title>
        <q-btn flat size="lg" @click="toggleDrawer" icon="menu" v-if="$q.screen.width < 600" color="primary" />
        <q-drawer class="drawer" tra dark elevated v-model="drawerOpen" side="right" overlay>
          <q-list>
            <q-item @click="toggleDrawer" clickable to="/">
              <q-item-section>
                Home
              </q-item-section>
            </q-item>
            <q-item @click="toggleDrawer" clickable to="#">
              <q-item-section>
                About
              </q-item-section>
            </q-item>
            <q-item @click="toggleDrawer" clickable to="#">
              <q-item-section>
                Contact
              </q-item-section>
            </q-item>
          </q-list>
        </q-drawer>
        <div class="q-mr-md" v-if="$q.screen.width >= 600">
          <q-btn class="nav-item " flat label="Home" to="/" color="primary" />
          <q-btn class="nav-item" flat label="About" to="#" color="primary" />
          <q-btn class="nav-item" flat label="Contact" to="#" color="primary" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawerOpen = ref(false);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}
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

.nav-item {
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0%;
}

.nav-item:hover {
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
