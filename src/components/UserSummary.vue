<template>
  <div class="tw-ml-auto tw-p-2 tw-w-[210px] tw-rounded-md">
    <slot />
    <div class="row">
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
  </div>
</template>

<script setup lang="ts">
import { User } from '@/model/prisma'

defineProps<{ user: User }>()
</script>
