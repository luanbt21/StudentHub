<template>
  <div class="tw-min-h-screen">
    <div class="row tw-p-3 tw-mt-3">
      <div class="col-9">
        <p class="tw-antialiased tw-text-3xl">Interested Question</p>
      </div>
      <div class="col-3 tw-p-1">
        <q-btn to="/askQuestion" color="primary" icon="help_outline" label="Ask Question" />
      </div>
    </div>
    <hr />
    <!--  frag -->
    <div v-for="question in questions" :key="question.id">
      <div :to="`/welcome`" class="row tw-border-2 tw-p-2 hover:tw-duration-500 hover:tw-bg-slate-200">
        <div align="center" class="col col-md-2">
          <q-card clickable align="center" dark bordered class="bg-white my-card text-light-green-6 tw-w-24">
            <q-card-section>
              <div class="text-h6">{{ question._count.Answer }}</div>
            </q-card-section>

            <q-separator size="3px" color="green-3" dark inset />

            <div class="text-subtitle2">Answers</div>
          </q-card>
        </div>
        <div class="col-6 col-md-10 tw-relative">
          <router-link :to="`/questions/${question.id}`">
            <p class="tw-text-[#0074CC] tw-text-lg tw-mb-8">
              {{ question.title }}
            </p>
          </router-link>
          <div class="row tw-absolute tw-inset-x-0 tw-bottom-0">
            <div class="col-8">
              <div class="tw-inline tw-ml-2" v-for="tag in question.TagsOnQuestions">
                <q-btn :to="`/tags/${tag.Tag.name}`" rounded color="light-blue-1" size="sm">
                  <span class="tw-text-sky-800">{{ tag.Tag.name }}</span>
                </q-btn>
              </div>
            </div>
            <div class="col-4">
              <span
                >asked at
                {{
                  formatDistance(new Date(question.createdAt), new Date(), { addSuffix: true, includeSeconds: true })
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="q-pa-lg flex flex-center">
    <q-pagination @update:model-value="handlepagechange(current)" v-model="current" :max="8" direction-links />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { Question } from '@/models/Question'
import { searchQuestionByTags } from '@/api/Question'
import { formatDistance } from 'date-fns'
const questions = ref<Question[]>([])
const current = ref(1)
const handlepagechange = async (current: number) => {
  questions.value = await searchQuestionByTags(undefined, undefined, current)
  computed(() => {
    questions.value
  })
}

onMounted(async () => {
  questions.value = await searchQuestionByTags(undefined, undefined, current.value)
})
</script>

<style>
.q-card {
  border: 3px solid #67c23a;
  border-radius: 20px;
}
</style>
