<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          v-show="leftDrawerOpen == false"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img :src="logo" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-tabs align="center">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>

        <q-btn
          v-show="rightDrawerOpen == false"
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
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

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img :src="logo" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import logo from '@/assets/5920.jpg'

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
