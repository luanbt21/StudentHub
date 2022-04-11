<template>
  <div class="row tw-mt-2 tw-min-h-screen">
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
      <div class="row tw-items-start">
        <div class="col tw-mr-2">
          <EditOrDelete :userId="answer.userId" @delete="delAnswer" :put="updateAnswer" @edited="edited" />
        </div>
        <UserSummary v-if="user" class="tw-bg-teal-100" :user="user">
          answered {{ formatDistance(new Date(answer.createdAt), new Date(), { addSuffix: true }) }}
        </UserSummary>
      </div>

      <CommentsView :comments="answer.AnswerComment" />

      <div>
        <q-btn flat dense no-caps label="Add a comment" @click="showCommentEdit = !showCommentEdit" />
      </div>
      <CommentEditor v-if="showCommentEdit" :sending="sendingComment" @comment="pushComment" />
    </div>
  </div>
  <q-separator />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { auth } from '@/firebase/firebaseConfig'
import { formatDistance } from 'date-fns'

import { User } from '@/model/prisma'
import { getUserByUid } from '@/api/User'
import { deleteAnswer, putAnswer, postAnswerComment } from '@/api/Answer'
import UserSummary from '@/components/UserSummary.vue'
import CommentEditor from './CommentEditor.vue'
import CommentsView from './CommentsView.vue'
import EditOrDelete from '@/components/EditOrDelete.vue'

import { Answer } from '@/models/QuestionDetail'
import { QBtn, useQuasar } from 'quasar'

const q = useQuasar()
const props = defineProps<{ answer: Answer }>()
const user = ref<User>()

const delAnswer = async () => {
  try {
    await deleteAnswer(props.answer.id)
  } catch (error) {
    q.notify('Failed to delete answer')
  }
}

const updateAnswer = async (value: string): Promise<Answer> => {
  return await putAnswer(props.answer.id, value)
}

const edited = (data: Answer) => {
  props.answer.content = data.content
  props.answer.updatedAt = data.updatedAt
}

const showCommentEdit = ref(false)
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
      showCommentEdit.value = !showCommentEdit.value
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
