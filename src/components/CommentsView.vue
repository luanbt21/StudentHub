<template>
  <div class="tw-mt-3 tw-border-b-2">
    <div class="tw-border-t-2 tw-mb-1" v-for="comment in comments" :key="comment.id">
      <p class="tw-mb-0">
        <span v-html="comment.content"></span>
        -
        <q-btn color="primary" flat dense no-caps class="tw-mr-2" :href="`/users/${comment.User.uid}`"
          >{{ comment.User.displayName }}
        </q-btn>
        <time :datetime="comment.createdAt">
          {{ formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true }) }}</time
        >
      </p>
      <EditOrDelete :userId="comment.userId" @delete="deleteComment(comment)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionComment, AnswerComment } from '@/models/QuestionDetail'
import { formatDistance } from 'date-fns'
import EditOrDelete from './EditOrDelete.vue'
import { deleteAnswerComment } from '@/api/Answer'
import { deleteQuestionComment } from '@/api/Question'
import { useQuasar } from 'quasar'

const $q = useQuasar()

type Comment = QuestionComment | AnswerComment
const props = defineProps<{ comments: Comment[] }>()

const deleteComment = async (comment: Comment) => {
  try {
    // @ts-ignore
    comment.questionId && (await deleteQuestionComment(comment.id))
    // @ts-ignore
    comment.answerId && (await deleteAnswerComment(comment.id))
    const index = props.comments.findIndex(c => c.id === comment.id)
    props.comments.splice(index, 1)
  } catch (error) {
    $q.notify('Failed to delete comment')
  }
}
</script>
