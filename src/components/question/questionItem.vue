<template>
  <div class="hover:tw-cursor-pointer" v-for="question in questions" :key="question.id">
    <div
      :id="`${question.id}`"
      :to="`/welcome`"
      class="row tw-border-2 tw-p-2 hover:tw-duration-500 hover:tw-bg-slate-200"
    >
      <div align="center" class="col col-md-2">
        <router-link :to="`/questions/${question.id}`">
          <q-card
            clickable
            align="center"
            dark
            bordered
            class="bg-white hover:tw-scale-105 my-card text-light-green-6 tw-w-24"
          >
            <q-card-section>
              <div class="text-h6">{{ question._count.Answer }}</div>
            </q-card-section>

            <q-separator size="3px" color="green-3" dark inset />

            <div class="text-subtitle2">Answers</div>
          </q-card>
        </router-link>
      </div>
      <div class="col-6 col-md-10 tw-relative">
        <p class="tw-text-[#0074CC] tw-text-lg tw-mb-8">
          {{ question.content }}
        </p>
        <div class="row tw-absolute tw-inset-x-0 tw-bottom-0">
          <div class="col-8">
            <div class="tw-inline tw-ml-2" :key="3" v-for="tag in question.TagsOnQuestions.slice(0, 4)">
              <q-btn :to="`/tags`" rounded color="light-blue-1" size="sm">
                <span class="tw-text-sky-800">{{ tag.Tag.name }}</span>
              </q-btn>
            </div>
          </div>
          <div class="col-4">
            <span class="tw-mr-2"
              >asked at
              {{
                formatDistance(new Date(question.createdAt), new Date(), { addSuffix: true, includeSeconds: true })
              }}</span
            >
            <q-btn @click="delQuestion(question.id)" rounded text-color="yellow-1" color="red-14" size="sm">
              <span class="tw-text-white">Del</span>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDistance } from 'date-fns'
import { Question as QuestionBase } from '@/models/Question'
import { deleteQuestion } from '@/api/Question'
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const props = defineProps<{
  questions: QuestionBase[]
}>()
const q = useQuasar()
const delQuestion = async (value: number) => {
  try {
    await deleteQuestion(value)
    window.location.reload()
  } catch (error) {
    q.notify('Failed to delete answer')
  }
}
</script>

<style>
.q-card {
  border: 3px solid #67c23a;
  border-radius: 20px;
}
</style>
