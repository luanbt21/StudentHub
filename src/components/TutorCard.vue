<template>
  <q-card class="q-ma-md bg-grey-4">
    <q-card-section>
      <q-card-section horizontal class="q-px-sm">
        <q-img width="100px" class="!tw-rounded-sm" :src="logo" />
        <h6 class="tw-my-auto tw-ml-3">Full Name</h6>
      </q-card-section>
      <q-card-section vertical class="justify-around q-px-md">
        <p>Fields: Information technology</p>
        <p>Reputation: 999</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, animi.</p>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import logo from '@/assets/5920.jpg'
</script>
