<template>
  <div class="tw-min-h-screen tw-p-1">
    <div>
      <p class="tw-antialiased tw-text-3xl">Users</p>
    </div>
    <div class="tw-flex tw-flex-wrap justify-evenly">
      <div v-for="user in users">
        <UserSummary v-if="user" class="tw-bg-teal-100 tw-mt-3" :user="user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User } from '@/model/prisma'
import UserSummary from '@/components/UserSummary.vue'
import { onMounted, ref } from 'vue'
import { getUsers } from '@/api/User'

const users = ref<User[]>([])
onMounted(async () => {
  users.value = await getUsers()
})
</script>
