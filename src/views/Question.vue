<template>
  <div v-if="question" class="tw-p-4 tw-min-h-screen">
    <div class="tw-flex tw-mb-3 tw-place-content-between">
      <div>
        <h1 class="text-h4">
          {{ question.title }}
        </h1>
        <span> Asked </span>
        <time :datetime="question.createdAt.toString()">
          {{ askedAt }}
        </time>
      </div>
      <div>
        <q-btn color="primary" no-caps> Ask Question </q-btn>
      </div>
    </div>
    <q-separator />

    <div class="row tw-mb-7">
      <div class="text-center q-mr-sm">
        <q-btn flat round icon="keyboard_arrow_up" /> <br />
        <q-btn flat disable> {{ question.score }} </q-btn><br />
        <q-btn flat round icon="keyboard_arrow_down" /> <br />
        <!-- <q-btn v-if="question.verify" flat round color="secondary" icon="verified" /> -->
      </div>

      <div class="col q-pa-sm">
        <p class="tw-min-h-[80px]">
          {{ question.content }}
        </p>

        <div class="row">
          <div class="col">
            <q-btn
              outline
              dense
              no-caps
              color="primary"
              size="sm"
              class="tw-mr-2"
              v-for="tag in question.TagsOnQuestions"
              :key="tag.Tag.name"
              :label="tag.Tag.name"
              :to="`/tags/${tag.Tag.name}`"
            />
          </div>

          <!-- TODO -->
          <div v-if="user" class="row q-pr-xl">
            <q-avatar rounded>
              <q-img :src="(user.photoURL as string)" />
            </q-avatar>
            <div>
              <q-btn flat dense no-caps :to="`/users/${question.userId}`"> {{ user.displayName }} </q-btn> <br />
              <span> {{ user.reputation }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h5>{{ question.Answer.length }} Answers</h5>

    <QuestionAnswer v-for="answer in question.Answer" v-bind="answer" />
  </div>
</template>

<script setup lang="ts">
import { formatDistance } from 'date-fns'
import { computed, onMounted, ref } from 'vue'

import { QuestionDetail, getQuestionById } from '@/api/Question'
import QuestionAnswer from '@/components/QuestionAnswer.vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { User } from '@/model/prisma'
import { getUserByUid } from '@/api/User'

const props = defineProps<{
  id: string
}>()

const router = useRouter()
const q = useQuasar()

const question = ref<QuestionDetail>()

const askedAt = computed(() => {
  if (question.value) {
    return formatDistance(new Date(question.value.createdAt), new Date(), { addSuffix: true })
  }
})

const user = ref<User>()

onMounted(async () => {
  try {
    question.value = await getQuestionById(props.id)
    user.value = await getUserByUid(question.value.userId)
  } catch (error) {
    // @ts-ignore
    q.notify({ color: 'negative', position: 'top', message: error.message, icon: 'report_problem' })
    router.replace('/')
  }
})
</script>
