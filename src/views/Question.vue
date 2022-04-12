<template>
  <div v-if="question" class="tw-p-4 tw-min-h-screen">
    <div class="tw-flex tw-mb-3 tw-place-content-between">
      <div>
        <h1 class="text-h4">
          {{ question.title }}
        </h1>
        <span> Asked </span>
        <time :datetime="question.createdAt">
          {{ askedAt }}
        </time>
      </div>
      <div>
        <q-btn to="/askQuestion" color="primary" no-caps> Ask Question </q-btn>
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

          <div class="tw-mr-2">
            <q-btn color="primary" icon="facebook" target="_blank" :href="question.facebookLink" label="facebook" />
          </div>

          <UserSummary v-if="user" class="tw-bg-teal-100" :user="user" />
        </div>

        <CommentsView :comments="question.QuestionComment" />
        <div>
          <q-btn flat dense no-caps label="Add a comment" @click="showEdit = !showEdit" />
        </div>
        <CommentEditor v-if="showEdit" :sending="sendingComment" @comment="pushComment" />
      </div>
    </div>
    <q-separator />

    <h5 v-if="question.Answer.length != 0">{{ question.Answer.length }} Answers</h5>

    <QuestionAnswer v-for="answer in question.Answer" :answer="answer" />

    <TextEditor title="Your answer" btnLabel="POST YOU ANSWER" @send="pushAnswer" :sending="sendingAnswer" />
  </div>
</template>

<script setup lang="ts">
import { formatDistance } from 'date-fns'
import { computed, onMounted, ref } from 'vue'
import { QBtn, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { User } from '@/model/prisma'
import { getUserByUid } from '@/api/User'
import { getQuestionById } from '@/api/Question'
import { QuestionDetail } from '@/models/QuestionDetail'
import { auth } from '@/firebase/firebaseConfig'
import { postQuestionComment } from '@/api/Question'

import QuestionAnswer from '@/components/QuestionAnswer.vue'
import UserSummary from '@/components/UserSummary.vue'
import CommentEditor from '@/components/CommentEditor.vue'
import CommentsView from '@/components/CommentsView.vue'
import TextEditor from '@/components/TextEditor.vue'
import { postAnswer } from '@/api/Answer'

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

const showEdit = ref(false)
const sendingComment = ref(false)

const pushComment = async (value: string) => {
  if (!auth.currentUser) {
    q.notify({ color: 'negative', position: 'top', message: 'You need login first', icon: 'report_problem' })
    return
  }
  try {
    sendingComment.value = true
    const comment = await postQuestionComment(question.value?.id as number, value)
    question.value?.QuestionComment.push(comment)
    setTimeout(() => {
      showEdit.value = !showEdit.value
    })
  } catch (error) {
    q.notify('Failed to sent comment')
  } finally {
    sendingComment.value = false
  }
}

const sendingAnswer = ref(false)
const pushAnswer = async (value: string) => {
  if (!auth.currentUser) {
    q.notify({ color: 'negative', position: 'top', message: 'You need login first', icon: 'report_problem' })
    return
  }
  try {
    sendingAnswer.value = true
    await postAnswer(question.value?.id as number, value)
    question.value = await getQuestionById(props.id)
  } catch (error) {
    q.notify('Failed to sent answer')
  } finally {
    sendingAnswer.value = false
  }
}

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
