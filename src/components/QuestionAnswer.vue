<template>
  <div class="row tw-border-b-2">
    <div class="text-center q-mr-sm">
      <q-btn flat round icon="keyboard_arrow_up" /> <br />
      <q-btn flat disable> {{ score }} </q-btn><br />
      <q-btn flat round icon="keyboard_arrow_down" /> <br />
      <q-btn v-if="verify" flat round color="secondary" icon="verified" />
    </div>

    <div class="col q-pa-sm">
      <p class="tw-min-h-[80px]">
        {{ content }}
      </p>

      <div class="row">
        <div class="col">
          <q-btn flat dense no-caps label="Add a comment" />
        </div>
        <div v-if="user" class="row q-pr-xl">
          <q-avatar rounded>
            <q-img :src="(user.photoURL as string)" />
          </q-avatar>
          <div>
            <q-btn flat dense no-caps :to="`/users/${userId}`"> {{ user.displayName }} </q-btn> <br />
            <span> {{ user.reputation }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useAttrs } from 'vue'

import { AnswerComment, AnswerVoter, User } from '@/model/prisma'
import { getUserByUid } from '@/api/User'

interface Props {
  id: number
  questionId: number
  userId: string
  content: string
  score: number
  deleted: boolean
  verify: boolean
  createdAt: Date | string
  updatedAt: Date | string
  facebookId: string | null
  AnswerComment: AnswerComment[]
  AnswerVoter: AnswerVoter[]
}

const props = defineProps<Props>()

const attrs = useAttrs()

console.log(attrs)

const user = ref<User>()

onMounted(async () => {
  try {
    user.value = await getUserByUid(props.userId)
  } catch (error) {}
})
</script>
