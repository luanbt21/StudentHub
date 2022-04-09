<template>
  <div class="tw-mt-3 tw-border-b-2">
    <p class="tw-border-t-2" v-for="comment in comments" :key="comment.id">
      <span v-html="comment.content"></span>
      -
      <q-btn color="primary" flat dense no-caps class="tw-mr-2" :href="`/users/${comment.User.uid}`"
        >{{ comment.User.displayName }}
      </q-btn>
      <time :datetime="comment.createdAt"> {{ new Date(comment.createdAt).toLocaleString() }}</time>
    </p>
  </div>
</template>

<script setup lang="ts">
import { QuestionComment, AnswerComment } from '@/models/QuestionDetail'

type Comment = QuestionComment | AnswerComment

defineProps<{ comments: Comment[] }>()
</script>
