<template>
  <div class="tw-min-h-screen tw-p-3">
    <div class="tw-antialiased tw-text-3xl">{{ $route.params.name }}</div>
    <div class="tw-mt-9">
      <QuestionItem :questions="questions" />
    </div>
    <div align="center" id="fail" class="tw-mt-9 tw-text-lg tw-italic tw-hidden">
      <span>not found</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { searchQuestionByTags } from '@/api/Question'
import { Question as QuestionBase } from '@/models/Question'
import QuestionItem from '@/components/question/questionItem.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(async () => {
  let tagArr = '' + route.params.name

  for (let index = 1; index < 9; index++) {
    questions.value = await searchQuestionByTags(undefined, `${tagArr}`)
  }
  console.log(questions.value)
})

const questions = ref<QuestionBase[]>([])
</script>
