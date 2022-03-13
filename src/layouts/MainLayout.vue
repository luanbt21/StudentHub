<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated class="bg-blue-grey-1 text-white">
      <q-toolbar>
        <q-btn v-show="leftDrawerOpen == false" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-grey-10">
          <q-avatar>
            <img :src="logo" />
          </q-avatar>
          Student HUB
        </q-toolbar-title>

        <q-input class="q-mr-lg" v-model="search" debounce="500" filled placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-tabs align="center">
          <q-route-tab style="width: 100px" class="text-grey-10" to="/page1" label="Log in" />
          <q-route-tab style="width: 100px" class="text-grey-10" to="/page2" label="Log out" />
        </q-tabs>

        <q-btn v-show="rightDrawerOpen == false" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      style="width: 240px !important; margin-left: 60px; border: 2px solid #ece6e6"
      q-ml-md
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <div style="box-sizing: border-box" class="col col-md-9">
        <div class="column">
          <div class="col">
            <q-btn class="full-width tw-bg-inherit" color="white" text-color="black">All questions</q-btn>
          </div>
          <div class="col">
            <q-btn class="full-width" color="white" text-color="black">Documents</q-btn>
          </div>
          <div class="col">
            <q-btn class="full-width" color="white" text-color="black">Find a tutor</q-btn>
          </div>
          <div class="col">
            <q-btn class="full-width" color="white" text-color="black">Find a job</q-btn>
          </div>
          <div class="col">
            <q-btn class="full-width" color="white" text-color="black">Request</q-btn>
          </div>
          <div class="col">
            <q-btn class="full-width" color="white" text-color="black">Users</q-btn>
          </div>
        </div>
      </div>
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

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img :src="logo" />
          </q-avatar>
          <div>Student HUB</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import logo from '@/assets/5920.jpg'

const search = ref('')

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
