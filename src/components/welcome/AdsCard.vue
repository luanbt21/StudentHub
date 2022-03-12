<template>
  <div
    class="tw-bg-[#d9d9d9] tw-p-5 tw-my-2 tw-text-center tw-max-w-sm tw-max-h-md tw-mx-auto tw-rounded-[30%] shadow-2"
  >
    <q-img width="20%" :src="icon" />
    <h4>
      {{ title }}
    </h4>
    <p>
      {{ content }}
    </p>
    <q-btn class="tw-mt-5" rounded outline color="secondary" label="Get Start" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  content: string
  link: string
}>()
</script>
