<template>
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
  <EditOrDelete :userId="comment.userId" :put="put" @delete="deleteComment(comment)" @edited="edited" />
</template>

<script setup lang="ts">
import { formatDistance } from 'date-fns'
import EditOrDelete from './EditOrDelete.vue'
import { QuestionComment, AnswerComment } from '@/models/QuestionDetail'
import { deleteAnswerComment, putAnswerComment } from '@/api/Answer'
import { deleteQuestionComment, putQuestionComment } from '@/api/Question'
import { useQuasar } from 'quasar'

const $q = useQuasar()

type Comment = QuestionComment | AnswerComment
const props = defineProps<{ comment: Comment }>()
const emit = defineEmits<{
  (e: 'deleted', id: number): void
}>()

const edited = (comment: Comment) => {
  props.comment.content = comment.content
  props.comment.updatedAt = comment.updatedAt
}

const put = async (value: string): Promise<Comment> => {
  // @ts-expect-error
  if (props.comment.questionId) {
    return putQuestionComment(props.comment.id, value)
  } else {
    return putAnswerComment(props.comment.id, value)
  }
}

const deleteComment = async () => {
  try {
    // @ts-expect-error
    if (props.comment.questionId) {
      await deleteQuestionComment(props.comment.id)
    }
    // @ts-expect-error
    if (props.comment.answerId) {
      await deleteAnswerComment(props.comment.id)
    }
    emit('deleted', props.comment.id)
  } catch (error) {
    $q.notify('Failed to delete comment')
  }
}
</script>
