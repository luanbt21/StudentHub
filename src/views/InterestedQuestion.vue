<template>
  <div class="tw-min-h-screen">
    <div class="row tw-p-3 tw-mt-3">
      <div class="col-9">
        <p class="tw-antialiased tw-text-3xl">Interested Question</p>
      </div>
      <div class="col-3 tw-p-1">
        <q-btn :to="`/tags`" class="" color="primary" icon="help_outline" label="Ask Question" />
      </div>
    </div>
    <hr />
    <!--  frag -->
    <div class="hover:tw-cursor-pointer" v-for="question in questions" :key="question.id">
      <div :to="`/welcome`" class="row tw-border-2 tw-p-2 hover:tw-duration-500 hover:tw-bg-slate-200">
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
              <div class="tw-inline tw-ml-2" v-for="tag in question.TagsOnQuestions">
                <q-btn :to="`/tags`" rounded color="light-blue-1" size="sm">
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
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { QuestionBase } from '@/api/Question'
import { getQuestion } from '@/api/Question'
import { formatDistance } from 'date-fns'
const questions = ref<QuestionBase[]>([])

onMounted(async () => {
  questions.value = await getQuestion()
})
</script>

<style>
.q-card {
  border: 3px solid #67c23a;
  border-radius: 20px;
}
</style>
