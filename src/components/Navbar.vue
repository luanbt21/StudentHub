<template>
  <router-link to="/welcome">
    <q-toolbar-title :shrink="true" class="text-grey-8">
      <q-avatar>
        <img :src="logo" />
      </q-avatar>
      <span class="text-weight-bold tw-hidden md:tw-inline"> Student Hub </span>
    </q-toolbar-title>
  </router-link>

  <q-space />

  <div style="flex-grow: 1">
    <q-input
      class="!tw-hidden md:!tw-block"
      dense
      outlined
      v-model="text"
      placeholder="Search..."
      bg-color="white"
      clearable
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>

  <q-space />

  <div class="q-gutter-sm">
    <q-btn color="secondary" label="Log in" />
    <q-btn color="primary" label="Sign up" />
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/5920.jpg'
import { ref } from 'vue'

const text = ref('')
</script>
