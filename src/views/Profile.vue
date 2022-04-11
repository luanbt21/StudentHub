<template>
  <div class="row tw-p-4">
    <div class="col-6 col-md-3">
      <q-avatar size="200px" rounded>
        <img :src="store.state.auth.image" />
      </q-avatar>
      <div class="tw-text-center tw-w-[150px] tw-ml-5 tw-mt-3">
        <q-file
          accept=".jpg, .pdf, image/*"
          @update:model-value="postAvata()"
          filled
          bottom-slots
          v-model="model"
          label="Upload Avata"
          counter
        >
          <template v-slot:prepend>
            <q-icon name="cloud_upload" @click.stop />
          </template>
        </q-file>
      </div>
    </div>

    <div class="col-6 col-md-6 tw-mt-6">
      <span class="tw-uppercase tw-text-2xl tw-font-semibold">nguyen thuy giang</span>
      <div class="tw-mt-6">
        <div class="tw-flex">
          <p class="tw-text-[#9199A1] tw-w-[100px]">Join</p>
          <p class="">30/3/2022</p>
        </div>
        <div class="tw-flex">
          <p class="tw-text-[#9199A1] tw-w-[100px]">Accout name</p>
          <p class="">nguyenthuygiang@gmail.com</p>
        </div>
        <div class="tw-flex">
          <p class="tw-text-[#9199A1] tw-w-[100px]">Email/Phone</p>
          <p class="">nguyenthuygiang@gmail.com</p>
        </div>
      </div>
    </div>
    <div align="right" class="col-6 col-md-3">
      <q-btn class="" color="primary" icon="help_outline" label="Ask Question" />
    </div>
  </div>
  <!--  -->
  <q-btn class="tw-m-5" rounded color="primary" size="md" label="Activate" />
  <!--  -->
  <p class="tw-uppercase tw-ml-2 tw-text-xl tw-font-semibold">Question({{ questions.length }})</p>
  <div class="q-ma-md">
    <q-scroll-area style="height: 600px">
      <QuestionItem class="" :questions="questions" />
    </q-scroll-area>
  </div>
  <!-- answer -->
  <!--  -->
  <p class="tw-uppercase tw-ml-2 tw-text-xl tw-font-semibold">Answer({{ question?.Answer.length }})</p>
  <div class="q-ma-md">
    <q-scroll-area style="height: 600px">
      <div v-for="answer in question?.Answer" class="q-py-xs">
        <q-item dense>
          <!--  -->
          <div class="row tw-border-2 tw-p-2">
            <div align="center" class="col col-md-2">
              <q-card align="center" dark bordered class="bg-white my-card text-light-green-6 tw-w-24">
                <q-card-section>
                  <div class="text-h6">{{ answer.AnswerVoter.length }}</div>
                </q-card-section>

                <q-separator size="3px" color="green-3" dark inset />

                <div class="text-subtitle2">vote</div>
              </q-card>
            </div>
            <div class="col-6 col-md-10">
              <p class="tw-text-[#0074CC] tw-text-lg">
                {{ answer.content }}
              </p>
              <div class="row">
                <div class="col-8"></div>
                <div class="col-4">
                  <span>answered at 1/8/2022, 10:18:01 PM</span>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </q-item>
      </div>
    </q-scroll-area>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useStore } from '@/store/index'
import { searchQuestionByTags, getQuestionById } from '@/api/Question'
import { Question as QuestionBase } from '@/models/Question'
import QuestionItem from '@/components/question/questionItem.vue'
import { QuestionDetail } from '@/models/QuestionDetail'
const store = useStore()
const model = ref(null)

const postAvata = () => {
  console.log(model.value)
}
const questions = ref<QuestionBase[]>([])
const question = ref<QuestionDetail>()
onMounted(async () => {
  question.value = await getQuestionById('253')
  for (let index = 1; index < 9; index++) {
    questions.value = questions.value
      .concat(await searchQuestionByTags(undefined, undefined, index))
      .filter(question => {
        console.log(question.User.uid)
        return question.userId == store.state.auth.userid
      })
  }
  // console.log(questions.value)

  // questions.value = questions.value.filter(question => {
  //   console.log(question.User.uid)
  //   return question.userId == store.state.auth.userid
  // })
  // console.log(questions.value)
})
</script>

<style></style>
