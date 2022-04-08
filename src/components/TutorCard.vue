<template>
  <q-card class="q-ma-md bg-grey-4">
    <q-card-section>
      <q-card-section horizontal class="q-px-sm">
        <q-img width="100px" class="!tw-rounded-sm" :src="user.photoURL || logo" />
        <h6 class="tw-my-auto tw-ml-3">{{ user.displayName }}</h6>
      </q-card-section>
      <q-card-section vertical class="justify-around q-px-md">
        <p>
          Fields:
          <q-btn flat dense no-caps v-for="tag in user.InterestedTag" :key="tag.name" :to="`/tags/${tag.name}`">
            {{ tag.name }}
          </q-btn>
        </p>
        <p>Reputation: {{ user.reputation }}</p>
        <p>Description: {{ user.description }}</p>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { User } from '@/models/User'
import logo from '@/assets/5920.jpg'
defineProps<{ user: User }>()
</script>
