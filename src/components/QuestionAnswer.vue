<template>
  <div class="row tw-mt-2">
    <div class="text-center q-mr-sm">
      <q-btn flat round icon="keyboard_arrow_up" /> <br />
      <q-btn flat disable> {{ answer.score }} </q-btn><br />
      <q-btn flat round icon="keyboard_arrow_down" /> <br />
      <q-btn v-if="answer.verify" flat round color="secondary" icon="verified" />
    </div>

    <div class="col q-pa-sm">
      <p class="tw-min-h-[80px]">
        {{ answer.content }}
      </p>

      <UserSummary v-if="user" class="tw-bg-teal-100" :user="user" />

      <CommentsView :comments="answer.AnswerComment" />

      <div>
        <q-btn flat dense no-caps label="Add a comment" @click="showEdit = !showEdit" />
      </div>
      <CommentEditor v-if="showEdit" @comment="pushComment" />
    </div>
  </div>
  <q-separator />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { User } from '@/model/prisma'
import { getUserByUid } from '@/api/User'
import UserSummary from '@/components/UserSummary.vue'
import CommentEditor from './CommentEditor.vue'
import CommentsView from './CommentsView.vue'

import { Answer } from '@/models/QuestionDetail'

const props = defineProps<{ answer: Answer }>()
const user = ref<User>()

const showEdit = ref(false)

// TODO
const pushComment = async (value: string) => {}

onMounted(async () => {
  user.value = await getUserByUid(props.answer.userId)
})
</script>
