<template>
  <div class="tw-ml-auto row tw-p-3 tw-w-[230px] tw-rounded-md">
    <div>
      <q-avatar rounded class="tw-mr-1">
        <q-img :src="(user.photoURL as string)" />
      </q-avatar>
    </div>

    <div class="col tw-items-stretch">
      <q-btn flat dense no-caps :to="`/users/${user.uid}`"> {{ user.displayName }} </q-btn> <br />
      <span> {{ user.reputation }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/model/prisma'

defineProps<{ user: User }>()
</script>
