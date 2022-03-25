<template>
  <q-layout view="hhh Lpr fff">
    <q-header reveal :reveal-offset="10000" elevated class="bg-white text-white">
      <q-toolbar>
        <q-btn v-show="leftDrawerOpen == false" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <Navbar />

        <q-btn v-show="rightDrawerOpen == false" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      style="width: 240px !important; margin-left: 60px; border: 1px solid #ece6e6"
      class="tw-bg-[#ece6e6]"
      q-ml-md
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-item clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">All questions</span></q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Documents</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Find a tutor</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Find a job</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Request</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Users</span></q-item-label>
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-drawer class="q-pa-sm" show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <q-card class="my-card">
        <q-card-section class="bg-grey-4 text-white row">
          <div class="text-h6 text-grey-10">Interested Tags</div>
          <q-btn class="q-ml-lg" rounded color="primary" size="sm">edit</q-btn>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
          <q-btn flat>Action 2</q-btn>
          <q-btn flat>Action 2</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
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

<style>
* {
  box-sizing: border-box;
}
</style>
