<template>
  <div class="tw-mt-3 tw-border-b-2">
    <div class="tw-border-t-2 tw-mb-1" v-for="comment in comments" :key="comment.id">
      <CommentView :comment="comment" @deleted="remove" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionComment, AnswerComment } from '@/models/QuestionDetail'
import CommentView from '@/components/CommentView.vue'

type Comment = QuestionComment | AnswerComment
const props = defineProps<{ comments: Comment[] }>()

const remove = (id: number) => {
  const index = props.comments.findIndex(c => c.id === id)
  props.comments.splice(index, 1)
}
</script>
