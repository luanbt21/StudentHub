<template>
  <div class="tw-py-10 tw-my-4 tw-w-[90%] tw-rounded-md tw-text-center tw-mx-auto shadow-4" :class="className">
    <q-img width="50px" class="tw-mr-3" :src="logo" />
    <span class="text-h5 text-weight-bold"> Student Hub </span>
    <q-img width="100%" :src="img" />
    <p class="text-h5 tw-w-[90%] tw-mx-auto">
      {{ content }}
    </p>
    <q-btn class="tw-mt-5" rounded outline color="secondary" label="Get Start" />
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/5920.jpg'

defineProps<{
  title: string
  img: string
  className: string
  content: string
  link: string
}>()
</script>
