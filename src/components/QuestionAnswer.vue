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
      <CommentEditor v-if="showEdit" :sending="sendingComment" @comment="pushComment" />
    </div>
  </div>
  <q-separator />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { auth } from '@/firebase/firebaseConfig'

import { User } from '@/model/prisma'
import { getUserByUid } from '@/api/User'
import { postAnswerComment } from '@/api/Answer'
import UserSummary from '@/components/UserSummary.vue'
import CommentEditor from './CommentEditor.vue'
import CommentsView from './CommentsView.vue'

import { Answer } from '@/models/QuestionDetail'
import { QBtn, useQuasar } from 'quasar'

const q = useQuasar()
const props = defineProps<{ answer: Answer }>()
const user = ref<User>()

const showEdit = ref(false)
const sendingComment = ref(false)

const pushComment = async (value: string) => {
  if (!auth.currentUser) {
    q.notify({ color: 'negative', position: 'top', message: 'You need login first', icon: 'report_problem' })
    return
  }
  try {
    sendingComment.value = true
    const comment = await postAnswerComment(props.answer.id as number, value)
    props.answer.AnswerComment.push(comment)
    setTimeout(() => {
      showEdit.value = !showEdit.value
    })
  } catch (error) {
    q.notify('Failed to sent comment')
  } finally {
    sendingComment.value = false
  }
}

onMounted(async () => {
  user.value = await getUserByUid(props.answer.userId)
})
</script>
