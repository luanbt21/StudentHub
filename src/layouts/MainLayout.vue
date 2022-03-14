<template>
  <q-layout view="hhh Lpr fff">
    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <q-btn v-show="leftDrawerOpen == false" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <Navbar />

        <q-btn v-show="rightDrawerOpen == false" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-black">
      <AppFooter />
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import Navbar from '@/components/Navbar.vue'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
